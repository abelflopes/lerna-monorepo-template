process.env.SR_CONFIG_NPM_PUBLISH = "false"; // if set to false will not attempt to publish the main package to the registry

/** @type import("semantic-release").GlobalConfig */
const config = {
  extends: "semantic-release-config-conventional",
};

module.exports = config;
