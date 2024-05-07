const rewireAliases = require("react-app-rewire-aliases");
const { paths } = require("react-app-rewired");
const path = require("path");

module.exports = function(config, env) {
  const updatedConfig = rewireAliases.aliasesOptions({
    "@": path.resolve(__dirname, `./src`)
  })(config, env);

  return updatedConfig;
};
