const registry = require("../registry/providerRegistry");
const emailProvider = require("./emailProvider");

registry.register("email", emailProvider);

module.exports = registry;