module.exports = function(eleventyConfig) {
		  eleventyConfig.addPassthroughCopy("media");
  		eleventyConfig.addPassthroughCopy("css");
			eleventyConfig.addPassthroughCopy("js");
    	markdownTemplateEngine: "njk";

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "docs"
    }
  };

};
