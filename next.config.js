module.exports = {
	images: {
		deviceSizes: [500, 1000, 2500, 3000],
		domains: [],
	},
	env: {},
	target: `serverless`,
	webpack: (config, options) => {
		config.module.externals.push(`@netlify/zip-it-and-ship-it`);

		return config;
	  },
};
