// https://www.npmjs.com/package/semantic-release-config-conventional
process.env.SR_CONFIG_NPM_PUBLISH = "false"; // prevent the main package to the registry
process.env.SR_CONFIG_CHANGELOG_FILE = "docs/PROJECT-CHANGELOG.md"; // use different changelog file from lerna

/** @type import("semantic-release").GlobalConfig */
const config = {
  extends: "semantic-release-config-conventional",
};

module.exports = config;
