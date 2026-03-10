class ProviderRegistry {

  constructor() {
    this.providers = new Map();
  }

  register(type, provider) {
    this.providers.set(type, provider);
  }

  get(type) {
    const provider = this.providers.get(type);

    if (!provider) {
      throw new Error(`Provider not supported: ${type}`);
    }

    return provider;
  }

}

module.exports = new ProviderRegistry();