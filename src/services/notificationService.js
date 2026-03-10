const providerRegistry = require("../providers");

class NotificationService {

  async sendNotification(data) {

    const provider = providerRegistry.get(data.type);

    return provider.send(data);

  }

}

module.exports = new NotificationService();