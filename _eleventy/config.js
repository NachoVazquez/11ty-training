module.exports = function (eleventyConfig) {
	return {
		templateFormats: ['njk'],
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes"
		},
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk"
	}
}