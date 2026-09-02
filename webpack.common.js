import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        // needed for .css files
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // needed for images used in .html files (e.g. in <img> tags)
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        // needed for images in .js files (import image from "./image.png")
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
};