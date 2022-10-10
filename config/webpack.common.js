const path = require("path");
const ROOT_DIR = path.resolve(__dirname, "..");
const resolve = (dir) => path.resolve(ROOT_DIR, dir);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".html", ".scss"],
    alias: {
      "@actions": resolve("src/redux/actions"),
      "@api": resolve("src/api"),
      "@app": resolve("src/app"),
      "@config": resolve("src/config"),
      "@components": resolve("src/components"),
      "@constants": resolve("src/constants"),
      "@hooks": resolve("src/hooks"),
      "@pages": resolve("src/pages"),
      "@reducers": resolve("src/redux/reducers"),
      "@redux": resolve("src/redux"),
      "@styles": resolve("src/styles"),
      "@type": resolve("src/type"),
    },
  },
};
