const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "tfu-payment-module",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                ["@babel/preset-react", { "runtime": "automatic" }]
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "react-hook-form": "react-hook-form",
    "tailwind-merge": "tailwind-merge",
    "lucide-react": "lucide-react",
    "clsx": "clsx",
    "class-variance-authority": "class-variance-authority",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
