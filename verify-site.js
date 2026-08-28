const fs = require("fs");
const path = require("path");

const files = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".git") continue;
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(filePath);
    else files.push(filePath);
  }
}

walk(".");

const htmlFiles = files.filter((file) => file.endsWith(".html"));
const brokenLinks = [];
const canonicals = [];

for (const file of htmlFiles) {
  const source = fs.readFileSync(file, "utf8");
  const canonical = (source.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)/i) || [])[1];
  const openGraphUrl = (source.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)/i) || [])[1];
  canonicals.push({ file, canonical, openGraphUrl });

  for (const match of source.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const reference = match[1];
    if (/^(?:[a-z]+:|\/\/|#|data:)/i.test(reference) || reference.includes("${")) continue;
    const cleanReference = reference.split(/[?#]/)[0];
    if (!cleanReference) continue;
    let target = path.resolve(path.dirname(file), cleanReference);
    if (cleanReference.endsWith("/")) target = path.join(target, "index.html");
    if (!fs.existsSync(target)) brokenLinks.push(`${file} -> ${reference}`);
  }
}

const sitemapSource = fs.readFileSync("sitemap.xml", "utf8");
const sitemapUrls = [...sitemapSource.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const canonicalUrls = canonicals.map((item) => item.canonical);
const invalidCanonicals = canonicals.filter((item) => !item.canonical || !item.canonical.startsWith("https://mkvsnx.com/"));
const openGraphMismatches = canonicals.filter((item) => item.openGraphUrl && item.openGraphUrl !== item.canonical);
const sitemapUrlsWithoutCanonical = sitemapUrls.filter((url) => !canonicalUrls.includes(url));
const canonicalUrlsMissingFromSitemap = canonicalUrls.filter((url) => !sitemapUrls.includes(url));
const duplicateCanonicals = [...new Set(canonicalUrls.filter((url, index, all) => all.indexOf(url) !== index))];
const expectedAppAds = "google.com, pub-3931419758871221, DIRECT, f08c47fec0942fa0";
const actualAppAds = fs.readFileSync("app-ads.txt", "utf8");
const apps = JSON.parse(fs.readFileSync(path.join("assets", "data", "apps.json"), "utf8"));

const report = {
  htmlFiles: htmlFiles.length,
  brokenRelativeLinksOrAssets: brokenLinks,
  invalidCanonicals,
  openGraphMismatches,
  sitemapUrls: sitemapUrls.length,
  canonicalUrls: canonicalUrls.length,
  sitemapUrlsWithoutCanonical,
  canonicalUrlsMissingFromSitemap,
  duplicateCanonicals,
  allSitemapUrlsOnMkvsnx: sitemapUrls.every((url) => url.startsWith("https://mkvsnx.com/")),
  appAdsExact: actualAppAds === expectedAppAds,
  appAdsBytes: Buffer.byteLength(actualAppAds),
  plannedApps: apps.filter((app) => app.status === "Coming Soon").map((app) => app.name)
};

console.log(JSON.stringify(report, null, 2));

const failed = brokenLinks.length
  || invalidCanonicals.length
  || openGraphMismatches.length
  || sitemapUrlsWithoutCanonical.length
  || canonicalUrlsMissingFromSitemap.length
  || duplicateCanonicals.length
  || !report.allSitemapUrlsOnMkvsnx
  || !report.appAdsExact;

if (failed) process.exit(1);
