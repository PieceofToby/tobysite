const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const urlBase = process.env.BASE_URL || "";

module.exports = function (eleventyConfig) {
  console.log(process.env.NODE_ENV);
  let p = {};
  if (process.env.NODE_ENV === "build") {
    console.log("running in production");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    // this should be set
    p = { pathPrefix: "https://pieceoftoby.github.io/tobysite" };
  }

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("./src/");

  // Return your Object options:
  return {

    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
    },
  };
};
