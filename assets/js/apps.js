window.MKVSNXApps = {
  list: [],
  bySlug: new Map(),
  async load(basePath) {
    if (this.list.length) {
      return this.list;
    }

    const response = await fetch(`${basePath}assets/data/apps.json`);
    const apps = await response.json();
    this.list = apps;
    this.bySlug = new Map(apps.map((app) => [app.slug, app]));
    return apps;
  },
  get(slug) {
    return this.bySlug.get(slug);
  }
};
