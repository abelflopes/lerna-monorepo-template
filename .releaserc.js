// https://www.npmjs.com/package/semantic-release-config-conventional
process.env.SR_CONFIG_NPM_PUBLISH = "false"; // prevent the main package to the registry

/** @type import("semantic-release").GlobalConfig */
const config = {
  extends: "semantic-release-config-conventional",
};

module.exports = config;
