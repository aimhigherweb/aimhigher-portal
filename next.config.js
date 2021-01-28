module.exports = {
	images: {
		deviceSizes: [500, 1000, 2500, 3000],
		domains: [],
	},
	env: {},
	target: `serverless`,
	webpack: (config, options) => {
		if (config.externals) {
			config.externals.push(`@netlify/zip-it-and-ship-it`);
		} else {
			config.externals = [`@netlify/zip-it-and-ship-it`];
		}

		return config;
	  },
};
