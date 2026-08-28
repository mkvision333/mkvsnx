const fs = require("fs");
const path = require("path");

const APPS = JSON.parse(fs.readFileSync(path.join("assets", "data", "apps.json"), "utf8"));

const CONTENT = {
  "build-book": {
    category: "Construction Management",
    hero: "Construction management built for the pace of real projects.",
    overview: "Build Book is a released Android app for contractors, site supervisors, small builders, and project teams that need a reliable mobile workspace for project tracking, site diaries, tasks, materials, labour, expenses, bills, and visual documentation. Build Book Pro adds subscription-based access to premium functionality, with Weekly, Monthly, and Annual options available through Google Play.",
    benefits: "Build Book helps teams preserve context, reduce repeated clarification, improve accountability for expenses and bills, and maintain a useful project history. PDF, Excel, and CSV report exports make it easier to use project information outside the app, while eligible Pro users may receive an ad-free experience.",
    features: ["Projects and job records", "Daily site diary entries", "Task tracking", "Estimates and planning notes", "Income and expense visibility", "PDF, Excel, and CSV report exports", "Build Book Pro subscriptions", "Restore purchases", "Photos for site documentation", "Materials and labour tracking", "Bills and receipt records"],
    screenshots: ["Project dashboard showing active jobs, recent activity, and high-level summaries.", "Daily diary screen for site notes, weather context, and image-supported updates.", "Materials, labour, and expense views designed for practical mobile entry."],
    version: "1.0",
    versionHistory: ["Initial public release", "Project creation and organization workflows", "Site diary and task tracking", "Expense, labour, and materials records", "PDF, Excel, and CSV report exports", "Build Book Pro subscription and restore-purchase support"],
    upcoming: ["Improved project history filters", "Richer cost visibility", "Workflow refinements for repeat field use"],
    faq: [
      ["Who is Build Book for?", "Build Book is intended for construction-related teams that want a mobile-friendly way to organize site records, bills, materials, labour, and day-to-day work progress."],
      ["Does the app replace construction judgment?", "No. The app is a documentation and workflow tool. Engineering, safety, budgeting, and execution decisions remain the responsibility of the user and their project team."],
      ["What Build Book Pro options are available?", "Build Book Pro offers Weekly, Monthly, and Annual subscriptions through Google Play. Prices may vary by country and are shown in Google Play before purchase."],
      ["How do I restore a purchase?", "Use the restore purchases function in the app while signed in with the Google Play account used for the original purchase."],
      ["Which report formats are available?", "Build Book can export reports in PDF, Excel, and CSV formats."]
    ],
    supportIntro: "Build Book support covers project workflows, PDF, Excel, and CSV report exports, Build Book Pro subscriptions, restore purchases, permissions, and general app behavior on supported Android devices.",
    troubleshooting: ["Confirm that required permissions such as camera or storage access are enabled when using documentation features.", "Make sure the app and Google Play Store are updated if a purchase or entitlement does not appear.", "Use restore purchases while signed in with the Google Play account used for the original purchase.", "Check available device storage when saving project images, receipts, or exported reports.", "Restart the app and retry the same action if a screen becomes unresponsive after a long session."],
    issues: ["A Pro entitlement may take time to refresh after purchase or restoration.", "Report exports may fail when device storage is unavailable or access is restricted.", "Photos or receipts may not save when storage or media permissions are restricted."],
    termsExtra: [
      ["Build Book Pro Subscriptions", "Build Book Pro is offered through Weekly, Monthly, and Annual subscription options. Purchases and recurring billing are handled through Google Play. Subscription availability and prices may vary by country and are displayed through Google Play before purchase."],
      ["Purchase Entitlements and Restoration", "RevenueCat is used for subscription entitlement and purchase infrastructure. Users can use the app’s restore purchases function with the Google Play account used for the original purchase. Subscription management, renewal, and cancellation are subject to Google Play’s applicable terms and account controls."],
      ["Advertising", "Google AdMob may be used to show advertising to free users. Eligible Build Book Pro users may receive an ad-free experience while their Pro entitlement is active."],
      ["Construction Estimates and Report Exports", "Any estimates, summaries, cost views, or PDF, Excel, and CSV reports generated through Build Book are informational and depend on the accuracy and completeness of user-entered data."],
      ["Project Decisions", "MKVSNX is not responsible for construction, engineering, procurement, budgeting, compliance, or site-safety decisions made based on information stored in the app."],
      ["Backup Responsibility", "Users remain responsible for maintaining any backups or exports they consider necessary for business continuity or record retention."]
    ],
    privacySpecific: [
      "Build Book may handle project names, site diary entries, tasks, materials, labour records, bills, receipts, financial observations, and photos that users choose to attach to project records.",
      "Location can help associate work with a site context or support weather-aware planning where relevant, but it is not required for every workflow.",
      "Camera and storage permissions are especially relevant to documenting progress, capturing bills and receipts, and creating PDF, Excel, and CSV report exports."
    ],
    privacyExtra: [
      ["Build Book Pro and Purchases", "Build Book Pro offers Weekly, Monthly, and Annual subscriptions purchased through Google Play. Google Play handles the purchase transaction, and RevenueCat is used for subscription entitlement and purchase infrastructure, including confirming access and supporting restore purchases."],
      ["Report Exports", "Build Book can create PDF, Excel, and CSV reports from information users enter in the app. Users choose when and where to save or share those exported files."],
      ["Advertising for Free Users", "Google AdMob may be used to provide advertising for free users. Eligible users with an active Build Book Pro entitlement may receive an ad-free experience."]
    ]
  },
  "pro-kp-astrology": {
    category: "Astrology",
    hero: "Professional astrology tools with a refined mobile experience.",
    overview: "Pro KP Astrology is a feature-rich mobile application for users who want quick access to astrology workflows in a polished, structured interface. It brings together KP horoscope tools, panchangam references, charts, daily score views, good times, numerology, baby names, horary tools, and consultation-oriented utilities in one product.",
    benefits: "Its main benefit is speed with structure. Instead of switching between multiple references, users can move through chart-related tools and daily-use features inside one environment built for readability and repeated use.",
    features: ["KP horoscope tools", "Panchangam references", "Chart generation and review", "Daily score guidance", "Good times and timing references", "Numerology utilities", "Baby names support", "Horary tools", "Consultation-oriented workflows"],
    screenshots: ["Main dashboard focused on daily tools and chart access.", "Chart screen built for clearer reading and quick interpretation.", "Panchangam and consultation utility screens organized for repeat use."],
    version: "1.0",
    versionHistory: ["Initial public release", "KP horoscope and chart workflows", "Panchangam support", "Daily score and timing utilities", "Consultation-oriented reference tools"],
    upcoming: ["Expanded chart comparison workflows", "Additional personalization options", "Improved sharing and saved-reference handling", "Refinements for consultation productivity"],
    faq: [
      ["Is Pro KP Astrology intended for casual users or professionals?", "It is suitable for both, but the feature set is especially helpful for users who regularly work with charts, consultation preparation, or structured astrology references."],
      ["Does the app guarantee outcomes or predictions?", "No. The app provides interpretive and informational tools. It does not guarantee results or outcomes in personal, legal, financial, or professional matters."],
      ["Why might storage permission be requested?", "Storage-related access may be needed for saved charts, exported content, or user-selected files depending on the feature being used."]
    ],
    supportIntro: "Support for Pro KP Astrology typically covers chart behavior, saved content, notifications, device compatibility, and feature questions. We aim to respond clearly, especially when users need help understanding how a specific tool behaves on their device.",
    troubleshooting: ["Confirm that the app is updated to the latest available version.", "Check notification permissions if reminders or daily prompts are not appearing.", "Review device storage if saved chart-related content does not behave as expected.", "Restart the app after changing permissions or device settings."],
    issues: ["Notifications disabled at the system level.", "Saved chart exports affected by storage restrictions.", "Older devices displaying slower loading on chart-heavy screens."],
    termsExtra: [
      ["Guidance Only", "Astrology content is intended for personal guidance, interpretation, and general informational use. It should not be treated as legal, financial, medical, or other professional advice."],
      ["No Outcome Guarantee", "MKVSNX does not guarantee that interpretations, scores, or timing suggestions in the app will produce any specific personal or practical outcome."]
    ],
    privacySpecific: [
      "The app may handle birth details, chart preferences, consultation notes entered by the user, and notification settings required for product functionality.",
      "Location and camera permissions are not required for standard core use unless future features explicitly introduce them and the policy is updated.",
      "The privacy model is designed around personal-use astrology inputs rather than broad collection of unrelated personal information."
    ]
  },
  "weather-atmos-3d": {
    category: "Weather",
    hero: "A cinematic weather experience powered by atmospheric layers.",
    overview: "Weather Atmos 3D is a weather-focused mobile experience that presents atmospheric and environmental information through a more visual interface. The app is structured around a 3D globe perspective and layered data views such as wind, pressure, humidity, rain, lightning, cyclones, earthquakes, ocean conditions, and terrain context.",
    benefits: "The product is especially useful for users who want weather awareness in a more exploratory format. Instead of reading isolated figures alone, they can interpret broader conditions through maps and layers that make environmental patterns easier to understand at a glance.",
    features: ["3D globe weather viewing", "Wind and pressure layers", "Humidity and rainfall context", "Cyclone and lightning awareness", "Earthquake visibility", "Ocean and terrain layers", "Map-based weather exploration"],
    screenshots: ["3D globe overview with layered atmosphere data.", "Regional weather layers for wind, rain, and pressure context.", "Environmental event screens showing storms, lightning, or earthquake activity."],
    version: "1.0",
    versionHistory: ["Initial public release", "3D globe weather navigation", "Layered wind and pressure views", "Rain and lightning visualization", "Earthquake and terrain context"],
    upcoming: ["Additional map refinements", "Saved favorite views", "Clearer comparison between weather layers", "Improved notification preferences"],
    faq: [
      ["Is the app a substitute for official weather alerts?", "No. The app is for informational use and visual weather awareness. Users should still rely on official emergency or safety sources where necessary."],
      ["Why is location permission useful?", "Location allows the app to center weather context around the user’s area and support nearby forecast awareness."],
      ["Can the app be used without location access?", "Yes. Users can still browse broader weather content and globe-based information without granting location permissions."]
    ],
    supportIntro: "Support for Weather Atmos 3D usually focuses on map loading, layer behavior, permissions, device performance, and notification preferences. Because the experience is visually rich, support may also involve display-related questions on different screen sizes or older devices.",
    troubleshooting: ["Verify that internet connectivity is stable when map or forecast layers appear delayed.", "Enable location if you want nearby weather context rather than manual browsing alone.", "Update the app and restart it if rendered layers seem incomplete after a long session.", "Check battery or background restrictions if notifications are expected but not delivered."],
    issues: ["Layer data appearing delayed due to network conditions or provider timing.", "Location-based context unavailable because device permissions are denied.", "Older devices taking longer to render globe-heavy views smoothly."],
    termsExtra: [
      ["No Safety Guarantee", "Weather Atmos 3D is not a substitute for official emergency alerts, aviation guidance, marine advisories, disaster management notices, or safety-critical instructions from authorities."],
      ["Third-Party Data Sources", "Weather, mapping, and geophysical information may rely on external sources that can change, delay, or become unavailable without notice."]
    ],
    privacySpecific: [
      "Location is more directly relevant in this app than in many other products because nearby weather context depends on user-approved geographic access.",
      "The app may store weather preferences, selected layers, and notification settings to improve repeat usage.",
      "Camera access is not required for standard weather functionality."
    ]
  },
  "appel": {
    category: "School ERP",
    hero: "A connected school ERP for administrators, teachers, parents, and students.",
    overview: "APPEL is a school ERP application designed to bring core academic and administrative workflows into one mobile-friendly system. It is structured around attendance, fees, homework, results, teacher workflows, parent communication, and school information management in a more organized digital environment.",
    benefits: "Its central benefit is coordination. Schools often need information to move clearly between administrators, teachers, students, and parents. A unified system helps reduce communication gaps, improve record consistency, and make important updates easier to access.",
    features: ["Attendance workflows", "Fee information", "Homework communication", "Results visibility", "Teacher tools", "Parent-oriented access", "School information support", "AI-ready foundation for future workflows"],
    screenshots: ["School dashboard with role-based overview and notices.", "Attendance and classroom workflow screens for staff use.", "Parent-facing communication and homework visibility screens."],
    version: "1.0",
    versionHistory: ["Initial public release", "Attendance and homework workflows", "Fees and results visibility", "Teacher and parent communication flows", "Foundational school information modules"],
    upcoming: ["Expanded institutional reporting", "Richer communication features", "More school-specific configuration options", "Future AI-assisted workflows where appropriate"],
    faq: [
      ["Who is APPEL for?", "APPEL is intended for schools and their authorized communities, including administrators, teachers, parents, and students using approved access."],
      ["Can all users see the same information?", "No. Information visibility may depend on user role, school configuration, and authorized permissions."],
      ["Why might the app request notifications or storage access?", "Notifications support school communication, while storage may be used for notices, downloads, or uploaded attachments."]
    ],
    supportIntro: "APPEL support includes school onboarding questions, account or role concerns, attendance workflows, homework and result visibility, and communication issues between school participants.",
    troubleshooting: ["Confirm that the correct account or role is being used for the expected module.", "Check notification permissions if school updates or reminders are missing.", "Review storage or file permissions when notices or attachments fail to open.", "Restart the app after role or account changes are applied by the institution."],
    issues: ["Role-based access differences causing users to expect modules they are not permitted to view.", "Notifications disabled at device level.", "Downloaded notices or school files affected by storage restrictions."],
    termsExtra: [
      ["Authorized Access", "Users may only access data and functions they are authorized to use through their institution or assigned role."],
      ["Institution Responsibility", "Schools remain responsible for the accuracy, legitimacy, and administrative use of attendance, fees, homework, results, and communication records entered through the platform."]
    ],
    privacySpecific: [
      "APPEL may process student details, parent details, teacher information, attendance records, fee information, homework, results, and school announcements as required by the institution’s use of the product.",
      "Because school-related information may involve minors or institutional workflows, data handling needs to be role-aware and purpose-specific.",
      "Some deletion or correction requests may require verification through the relevant school or account authority."
    ]
  },
  "games": {
    category: "Future Apps",
    hero: "A future games portfolio focused on polished, replayable mobile experiences.",
    overview: "The MKVSNX games line is being developed as a future portfolio of mobile entertainment products. The goal is to create experiences that are accessible, polished, and sustainable from both a product and support perspective.",
    benefits: "A strong games platform requires more than gameplay alone. It also requires clear communication around progress, achievements, advertising, support, and privacy.",
    features: ["Game progress systems", "Achievements and milestones", "Potential leaderboards", "Event-ready architecture"],
    screenshots: ["Gameplay concept direction for future title releases.", "Achievement and progression screens planned for milestone-based engagement.", "Future event-oriented screens designed for long-term replay support."],
    version: "Planned Release",
    versionHistory: ["Portfolio in development", "Gameplay architecture planning", "Progress and achievement systems", "Advertising and support design review"],
    upcoming: ["Initial game title announcements", "Progress persistence features", "Achievement expansion", "Potential live-event content"],
    faq: [
      ["Are the games available now?", "The games portfolio is currently in development and has not yet been publicly released."],
      ["Will the games include advertising?", "Some titles may include advertising, depending on product design and release model."],
      ["Will support exist at launch?", "Yes. Each released title will have dedicated support, privacy, and terms pages."]
    ],
    supportIntro: "Support information for the future games line is published early so users, reviewers, and partners understand the standards that will apply when titles launch.",
    troubleshooting: ["Ensure devices meet the minimum Android version stated in the listing once titles are published.", "Update the game to the latest version when progression or event behavior looks inconsistent.", "Check network connectivity for titles with online features or synced progress."],
    issues: ["Ad loading differences across devices or network conditions.", "Progress or achievements not appearing until the app fully syncs.", "Performance variability on lower-powered devices."],
    termsExtra: [["Advertising and Purchases", "Specific advertising, in-app purchase, and event rules will be disclosed in the terms of each released title."]],
    privacySpecific: ["Future game titles may process progress, achievements, ad-related identifiers, and device diagnostics needed for game stability and product operation.", "Specific data handling details will depend on the actual released title rather than a generic entertainment template.", "Children’s privacy disclosures will be reviewed carefully for each title before release."]
  },
  "fitness": {
    category: "Future Apps",
    hero: "Future fitness tools focused on steady progress, not pressure.",
    overview: "The MKVSNX fitness line is planned as a set of general wellness tools that help users track workouts, steps, goals, and healthy routine momentum in a calmer, easier-to-understand format.",
    benefits: "A useful fitness product should feel supportive rather than overwhelming. The intended focus is on sustainable tracking, everyday motivation, and cleaner personal progress visibility.",
    features: ["Workout history", "Step tracking foundations", "Goal progress", "Reminder workflows"],
    screenshots: ["Workout dashboard concept focused on clarity rather than clutter.", "Progress summaries designed to support habit-building and repeat use.", "Reminder and motivation screens built for practical wellness routines."],
    version: "Planned Release",
    versionHistory: ["Product planning stage", "Workout tracking concepts", "Goal and step model design", "Reminder workflow definition"],
    upcoming: ["Expanded progress views", "Goal customization", "Potential external platform integrations where implemented", "Refined coaching and reminder patterns"],
    faq: [
      ["Will the app provide medical advice?", "No. The fitness line is intended for general wellness and informational use, not medical advice."],
      ["Will Google Fit be supported?", "That will only be stated in production if an actual released version implements it."],
      ["What kind of data may be used?", "Depending on the released feature set, that may include workout history, step counts, goals, and reminders."]
    ],
    supportIntro: "Fitness support will focus on step tracking, workout history, reminders, compatibility notes, and future integration questions where applicable.",
    troubleshooting: ["Confirm permissions related to activity or notifications if reminders or tracking do not behave as expected.", "Check battery restrictions if tracking-dependent features do not update consistently.", "Install the latest version when support advises that a known issue has been resolved."],
    issues: ["Activity permissions disabled.", "Notification reminders blocked by device settings.", "Background restrictions affecting timely updates."],
    termsExtra: [["Wellness Use Only", "Future fitness products are intended for general wellness support and are not a substitute for medical advice, diagnosis, treatment, or professional clinical guidance."]],
    privacySpecific: ["Fitness apps may process workouts, steps, goals, reminders, and limited technical diagnostics required for product operation.", "Sensitive health platform integration will only be mentioned if implemented in a released version.", "Permissions should remain proportional to actual feature needs rather than broad default collection."]
  },
  "health": {
    category: "Future Apps",
    hero: "Private, thoughtful health tools planned around trust.",
    overview: "The future health product line from MKVSNX is intended to support private personal organization such as reminders, record awareness, and structured health-related notes where appropriate. The emphasis is on careful communication and respectful handling of potentially sensitive information.",
    benefits: "Users need health-related tools to feel stable, readable, and discreet. A strong health product should reduce confusion, support routine management, and provide clear boundaries around what the app does and does not do.",
    features: ["Structured personal records", "Reminders", "Secure access orientation", "Sensitive-data awareness"],
    screenshots: ["Health overview concepts centered on clarity and minimal distraction.", "Reminder and record screens designed for private, repeat use.", "Structured account and access patterns intended for sensitive information handling."],
    version: "Planned Release",
    versionHistory: ["Product planning stage", "Private records model review", "Reminder and structure planning", "Sensitive-data handling review"],
    upcoming: ["Refined record organization", "Improved personal reminders", "Clearer privacy controls", "Expanded support documentation before launch"],
    faq: [
      ["Is the app medical advice?", "No. The future health line is not intended to replace professional diagnosis, treatment, or medical guidance."],
      ["Will it collect medical information?", "Only if a released feature specifically requires it and the production policy clearly explains that use."],
      ["Why are privacy standards especially important here?", "Because health-related information can be sensitive, product and policy design must remain precise, limited, and purpose-based."]
    ],
    supportIntro: "Support for the future health line will focus on record handling, reminders, account expectations, privacy questions, and compatibility clarity once features are released.",
    troubleshooting: ["Review notification permissions if reminders are not appearing.", "Check storage availability for locally retained records or exports if those features exist in the release.", "Update to the latest version before reporting unexpected behavior."],
    issues: ["Notifications blocked at device level.", "Misunderstanding of what the app does versus medical services.", "Questions about access, correction, or deletion of sensitive personal records."],
    termsExtra: [["Not Medical Advice", "Any future health-related product from MKVSNX is intended for organization and informational support only and does not replace professional healthcare advice or treatment."]],
    privacySpecific: ["If future health tools process personal records or symptom notes, that information will be described carefully and only in relation to actual product functionality.", "Permissions and retention periods must remain appropriate to the sensitivity of the data involved.", "Users should expect stronger clarity around deletion and access expectations in this category."]
  },
  "media": {
    category: "Future Apps",
    hero: "Creative media workflows designed for speed and control.",
    overview: "The MKVSNX media line is planned around photos, videos, albums, and creator-friendly workflows that emphasize organization, speed, and clear handling of user-selected content.",
    benefits: "Media products need more than visual polish. They require dependable handling of files, transparent permission use, and support content that explains storage, export, and compatibility behavior clearly.",
    features: ["Photos and videos", "Albums and organization", "Storage-aware tools", "Editing and export foundations"],
    screenshots: ["Media library concepts for cleaner browsing and selection.", "Album and organization screens intended for practical day-to-day media handling.", "Export-oriented screens designed for simple creation and saving flows."],
    version: "Planned Release",
    versionHistory: ["Product planning stage", "Library and album architecture", "Export workflow definition", "Permission and storage review"],
    upcoming: ["Improved album management", "Faster export flows", "Potential lightweight editing tools", "Clearer organization and search support"],
    faq: [
      ["Will the app access my photos and videos?", "Only with user permission and only for features that actually require access to selected content."],
      ["Will camera access be required?", "Only if a released version includes direct capture features and clearly requests that permission."],
      ["Why is storage handling important here?", "Media workflows depend heavily on reading selected files and saving created or edited content correctly."]
    ],
    supportIntro: "Media support will likely cover imports, exports, albums, storage behavior, permissions, and device compatibility for photo or video handling once the product is released.",
    troubleshooting: ["Confirm media or storage permissions when imports or exports do not complete as expected.", "Check available storage before reporting failed save actions.", "Restart the app after changing storage permissions or external file access settings."],
    issues: ["Storage restrictions interfering with exports.", "Media-library access not granted by the user.", "Large file performance differences across devices."],
    termsExtra: [["User Content Responsibility", "Users remain responsible for the legality, ownership, and appropriate use of photos, videos, and other content they manage through the app."]],
    privacySpecific: ["Media apps may process photos, videos, album organization data, export settings, and technical diagnostics needed to provide content workflows.", "Storage and media access are especially central to this category and must be explained clearly to users.", "Location metadata handling, if relevant in future features, should be disclosed explicitly rather than implied."]
  }
};

function page(title, description, canonical, attrs, inner) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${title}, MKVSNX, Android app">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="../assets/icons/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="../favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body ${attrs}>
  <div data-site-header></div>
  <main>
${inner}
  </main>
  <div data-site-footer></div>
  <script src="../assets/js/apps.js"></script>
  <script src="../assets/js/site.js"></script>
</body>
</html>
`;
}

function list(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

for (const app of APPS) {
  const c = CONTENT[app.slug];
  const base = `https://mkvsnx.com/${app.slug}`;
  const features = c.features.map((f) => `<article class="feature-card" data-reveal><h3>${f}</h3><p>${app.name} includes ${f.toLowerCase()} as part of a product experience designed for clarity, reliability, and long-term practical use.</p></article>`).join("");
  const shots = c.screenshots.map((s) => `<article class="screen-card screenshot-card" data-reveal><div class="screen-bar"></div><div class="screen-block"></div><div class="screen-block short"></div><p>${s}</p></article>`).join("");
  const faqs = c.faq.map(([q, a]) => `<article class="faq-item" data-reveal><h3>${q}</h3><p>${a}</p></article>`).join("");

  const appMain = `
    <section class="page-hero">
      <div class="container">
        <div class="hero-panel hero-grid">
          <div data-reveal>
            <span class="eyebrow">${c.category}</span>
            <h1>${c.hero}</h1>
            <p class="lead">${c.overview}</p>
            <div class="button-row">
              <a class="button button-primary" href="https://play.google.com/store/apps/dev?id=MK+VISION" target="_blank" rel="noreferrer">Get it on Google Play</a>
              <a class="button button-secondary" href="privacy.html">Privacy Policy</a>
              <a class="button button-secondary" href="support.html">Support</a>
            </div>
          </div>
          <div class="screen-card" data-reveal>
            <div class="screen-bar"></div>
            <div class="screen-block"></div>
            <div class="screen-block short"></div>
            <ul class="feature-list">${list(c.features.slice(0, 4))}</ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container split-grid">
        <article class="info-card" data-reveal><span class="eyebrow">Overview</span><h2>Built for practical use.</h2><p>${c.overview}</p></article>
        <article class="info-card" data-reveal><span class="eyebrow">Benefits</span><h2>Why it matters.</h2><p>${c.benefits}</p></article>
      </div>
    </section>
    <section class="section">
      <div class="container"><div class="section-head"><div><span class="eyebrow">Features</span><h2>What ${app.name} includes.</h2></div></div><div class="grid grid-2">${features}</div></div>
    </section>
    <section class="section">
      <div class="container"><div class="section-head"><div><span class="eyebrow">Screenshots</span><h2>Product screens and workflow views.</h2></div></div><div class="grid grid-3">${shots}</div></div>
    </section>
    <section class="section">
      <div class="container split-grid">
        <article class="info-card" data-reveal><span class="eyebrow">Version History</span><h2>Release notes</h2><ul class="feature-list"><li><strong>Version ${c.version}</strong></li>${list(c.versionHistory)}</ul></article>
        <article class="info-card" data-reveal><span class="eyebrow">Upcoming Features</span><h2>What comes next.</h2><ul class="feature-list">${list(c.upcoming)}</ul></article>
      </div>
    </section>
    <section class="section">
      <div class="container"><div class="section-head"><div><span class="eyebrow">FAQ</span><h2>Common questions.</h2></div></div><div class="grid grid-3">${faqs}</div></div>
    </section>
    <section class="section">
      <div class="container split-grid">
        <article class="contact-card" data-reveal><span class="eyebrow">Support</span><h2>Need help?</h2><p>Visit the dedicated support page for troubleshooting, compatibility notes, response expectations, and common issue guidance.</p><div class="button-row"><a class="button button-primary" href="support.html">Open Support</a></div></article>
        <article class="contact-card" data-reveal><span class="eyebrow">Policies</span><h2>Documentation</h2><p>${app.name} includes dedicated documentation for privacy and terms so users, reviewers, and partners can understand the product clearly.</p><div class="button-row"><a class="button button-secondary" href="privacy.html">Privacy</a><a class="button button-secondary" href="terms.html">Terms</a></div></article>
      </div>
    </section>`;

  const supportMain = `
    <section class="page-hero"><div class="container"><div class="hero-panel" data-reveal><span class="eyebrow">${app.name} Support</span><h1>Dedicated support for ${app.name}.</h1><p class="lead">${c.supportIntro}</p></div></div></section>
    <section class="section"><div class="container"><div class="section-head"><div><span class="eyebrow">FAQ</span><h2>Common support questions.</h2></div></div><div class="grid grid-3">${faqs}</div></div></section>
    <section class="section"><div class="container split-grid"><article class="info-card" data-reveal><h3>Troubleshooting</h3><ul class="check-list">${list(c.troubleshooting)}</ul></article><article class="info-card" data-reveal><h3>Common Issues</h3><ul class="check-list">${list(c.issues)}</ul></article></div></section>
    <section class="section"><div class="container contact-card" data-reveal><h3>Contact and Compatibility</h3><ul class="contact-list"><li><strong>Support Email:</strong> mkvision333@gmail.com</li><li><strong>Privacy Email:</strong> mkvision333@gmail.com</li><li><strong>Response Time:</strong> Usually within 3 business days</li><li><strong>Primary Platform:</strong> Android</li><li><strong>Compatibility:</strong> Best experience on modern Android devices with current system updates and available storage</li></ul></div></section>`;

  const termsSections = [
    ["Acceptance of Terms", `By downloading, installing, accessing, or using ${app.name}, you agree to these Terms and Conditions. If you do not agree, you should not use the app.`],
    ["Lawful Use", `${app.name} may only be used for lawful purposes and in accordance with platform rules, institutional requirements, project responsibilities, or general-use expectations relevant to the product category.`],
    ["Accountability for Input and Content", `Users remain responsible for the accuracy, legality, and appropriateness of the information, records, media, or reference inputs they provide through ${app.name}.`],
    ...c.termsExtra,
    ["Availability and Updates", `MKVSNX may improve, revise, limit, suspend, or discontinue features of ${app.name} in order to maintain product quality, security, compatibility, or operational continuity.`],
    ["Third-Party Services", `${app.name} may rely on third-party services such as Google Play Services, advertising platforms, mapping tools, analytics providers, or other SDKs where relevant. Those services remain subject to their own legal terms and privacy policies.`],
    ["Limitation of Responsibility", `To the maximum extent permitted by applicable law, MKVSNX is not liable for indirect, incidental, special, consequential, or business-related losses arising from use of the app, including losses linked to user decisions, device issues, third-party services, or data entry mistakes.`],
    ["Termination of Use", `We may limit or terminate access to the app where necessary to protect service integrity, respond to misuse, comply with legal obligations, or maintain safe operation of the product ecosystem.`],
    ["Changes to These Terms", `We may revise these Terms and Conditions to reflect feature changes, operational adjustments, legal developments, or updated business practices. Continued use after a revised version becomes effective may constitute acceptance of the updated terms.`],
    ["Contact", "Questions about these terms may be sent to mkvision333@gmail.com."]
  ];
  const termsMain = `
    <section class="page-hero"><div class="container"><div class="hero-panel" data-reveal><span class="eyebrow">${app.name} Terms</span><h1>Terms and Conditions for ${app.name}.</h1><p class="lead">These terms explain the conditions that apply to your use of ${app.name}. They should be read together with the app’s Privacy Policy and any store listing disclosures that apply to the released version.</p></div></div></section>
    <section class="section"><div class="container info-card" data-reveal>${termsSections.map(([t, p]) => `<div class="policy-section"><h3>${t}</h3><p>${p}</p></div>`).join("")}</div></section>`;

  const privacySections = [
    ["Effective Date", app.slug === "build-book" ? "August 28, 2026" : "July 20, 2026"],
    ["Developer Information", `${app.name} is developed and published by MKVSNX, India.`],
    ["Contact Email", "mkvision333@gmail.com"],
    ["Introduction", `${app.name} has its own dedicated privacy policy because the categories of information relevant to this product are different from those used by other MKVSNX applications. This policy is intended to help users understand what information may be handled, why certain permissions may be requested, how third-party services may be involved, and how privacy-related requests can be directed to our team.`],
    ["Information We Collect", `${c.privacySpecific[0]} We may also process limited technical information such as device type, app version, diagnostic logs, crash information, and general product-behavior data where reasonably necessary to operate, secure, maintain, or improve the service.`],
    ["Permissions Used", `Depending on the released feature set and the user’s choices, ${app.name} may request permissions such as storage or media access, notification access, location access, or camera access. Permissions are intended to support actual app functionality rather than unrelated collection.`],
    ["Why Permissions Are Needed", "Permissions allow the app to deliver features that depend on direct device interaction. For example, a product may need access to user-selected files, locally saved exports, reminders, or location-aware views. Permission requests are expected to remain tied to understandable product behavior."],
    ["Location Usage", c.privacySpecific[1]],
    ["Camera Usage", "Camera access is only relevant if the released version includes features that need direct capture from the device. If the app does not require camera functionality for normal use, camera access is not required."],
    ["Storage Usage", "Storage or media access may be used to read user-selected files, save created content, export records, or retain locally relevant data for ongoing use of the application. Users remain in control of what they choose to attach, import, or export."],
    ["Notifications", `Notifications may be used for reminders, updates, operational prompts, or other app-related communication that supports the normal use of ${app.name}. Users can generally manage notification preferences through device and app settings where applicable.`],
    ["Analytics", "We may use limited analytics to understand broad usage trends, feature reliability, and general product performance. Analytics are intended to improve usability and stability, not to collect more personal information than necessary for app improvement."],
    ["Crash Reporting", "Crash information and diagnostic signals may be processed to identify failures, improve reliability, and reduce repeat technical issues across supported devices."],
    ["Advertising", `${app.name} may include advertising in some versions, depending on the release model. If advertising is enabled, users should review both this policy and any relevant third-party advertising provider disclosures.`],
    ["Google AdMob", "If advertising is enabled, Google AdMob may process device-related or advertising-related information according to Google’s own privacy documentation and service policies."],
    ["Google Play Services", "Google Play Services may be used for Android-related compatibility, diagnostics, notifications, account-adjacent support, or other platform features depending on the actual implementation in the released version."],
    ...(c.privacyExtra || []),
    ["Firebase", "Firebase is not mentioned as an active service unless a released version specifically integrates it and this policy is updated to reflect that use."],
    ["Expo Services", "Expo Services are not referenced as active services unless a released version specifically adopts them and this policy is updated accordingly."],
    ["Third-party SDKs", `${c.privacySpecific[2]} Third-party SDK use, if present, may also include advertising, analytics, platform support, mapping, or other service providers necessary to operate specific product features.`],
    ["Data Retention", "Information is retained only as long as reasonably necessary to provide app functionality, maintain service quality, troubleshoot issues, resolve disputes, preserve legitimate business records where required, and comply with applicable legal obligations. Retention needs may vary depending on the category of data and the product context."],
    ["Data Deletion", "Users may request assistance regarding access, correction, or deletion by contacting mkvision333@gmail.com. Some information may also be removable directly by the user through device-level deletion, in-app deletion, or content management controls where available. Certain requests may require verification before action is taken."],
    ["Children's Privacy", `${app.name} is not directed to children under 13 unless the product context specifically involves institution-supervised use, as may occur in school-related scenarios. Even in those cases, data handling is intended to support the service rather than direct marketing to children.`],
    ["Security", `We use reasonable administrative, technical, and organizational measures intended to protect information handled through ${app.name}. However, no app, device, transmission method, or storage system can guarantee absolute security under all circumstances.`],
    ["User Rights", "Depending on applicable law, users may have rights relating to access, correction, deletion, or objection to certain forms of data handling. The practical response to a request may depend on the nature of the data, the product involved, and any legal or operational obligations that apply."],
    ["Changes to this Policy", "We may update this policy when features change, service providers change, legal expectations evolve, or documentation needs improvement. The effective date at the top of the policy will be updated when a revised version becomes active."],
    ["Contact", `For privacy questions about ${app.name}, contact mkvision333@gmail.com.`]
  ];
  const privacyMain = `
    <section class="page-hero"><div class="container"><div class="hero-panel" data-reveal><span class="eyebrow">${app.name} Privacy Policy</span><h1>Privacy Policy for ${app.name}.</h1><p class="lead">This policy is written specifically for ${app.name} and is intended to support user transparency, store-review clarity, and a more professional understanding of how product-relevant information may be handled.</p></div></div></section>
    <section class="section"><div class="container info-card" data-reveal>${privacySections.map(([t, p]) => `<div class="policy-section"><h3>${t}</h3><p>${p}</p></div>`).join("")}</div></section>`;

  fs.writeFileSync(path.join(app.slug, "index.html"), page(`${app.name} | MKVSNX`, `${app.name} by MKVSNX.`, `${base}/`, `data-base="../" data-page="apps" data-app="${app.slug}"`, appMain));
  fs.writeFileSync(path.join(app.slug, "support.html"), page(`${app.name} Support | MKVSNX`, `Support for ${app.name} by MKVSNX.`, `${base}/support.html`, `data-base="../" data-page="support" data-app="${app.slug}"`, supportMain));
  fs.writeFileSync(path.join(app.slug, "terms.html"), page(`${app.name} Terms | MKVSNX`, `Terms and Conditions for ${app.name} by MKVSNX.`, `${base}/terms.html`, `data-base="../" data-page="terms" data-app="${app.slug}"`, termsMain));
  fs.writeFileSync(path.join(app.slug, "privacy.html"), page(`${app.name} Privacy Policy | MKVSNX`, `Privacy Policy for ${app.name} by MKVSNX.`, `${base}/privacy.html`, `data-base="../" data-page="privacy" data-app="${app.slug}"`, privacyMain));
}
