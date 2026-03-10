const emailProvider = require("../providers/emailProvider");

class ProviderFactory {

  static getProvider(type) {

    switch (type) {

      case "email":
        return emailProvider;

      default:
        throw new Error(`Provider not supported: ${type}`);

    }

  }

}

module.exports = ProviderFactory;