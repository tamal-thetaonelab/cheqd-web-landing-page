const path = require("path");
// const { getLoaders, loaderByName } = require("@craco/craco");
const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less"); // included in craco-antd
const { ContextReplacementPlugin } = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent"); // included in Create React App

// const { POSTCSS_MODES } = require("@craco/craco");

const PLUGINS = [
  {
    plugin: CracoAntDesignPlugin,
    options: {
      customizeThemeLessPath: "./src/antd.theme.less",
    },
  },
  {
    plugin: CracoLessPlugin,
    options: {
      cssLoaderOptions: {
        modules: {
          getLocalIdent: (context, localIdentName, localName, options) => {
            if (context.resourcePath.includes("node_modules")) {
              return localName;
            }
            return getCSSModuleLocalIdent(
              context,
              localIdentName,
              localName,
              options
            );
          },
        },
      },
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
      modifyLessRule: function (lessRule, _context) {
        lessRule.test = /\.(module)\.(less)$/;
        lessRule.exclude = path.join(__dirname, "node_modules");
        return lessRule;
      },
    },
  },
];

const WEBPACK_PLUGINS = [
  new ContextReplacementPlugin(
    /date\-fns[\/\\]/,
    new RegExp(`[/\\\\\](${["en"].join("|")})[/\\\\\]index\.js$`)
  ),
];

if (process.env.ANALYZER === "true") {
  WEBPACK_PLUGINS.unshift(new BundleAnalyzerPlugin());
}

module.exports = () => {
  return {
    webpack: {
      alias: {
        "~": path.resolve(__dirname, "src/"),
      },
      plugins: WEBPACK_PLUGINS,
    },
    jest: {
      configure: {
        moduleNameMapper: {
          "^~(.*)$": "<rootDir>/src$1",
        },
      },
    },
    plugins: [...PLUGINS],
  };
};
