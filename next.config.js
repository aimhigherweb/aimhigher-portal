module.exports = {
	images: {
		deviceSizes: [500, 1000, 2500, 3000],
		domains: [],
	},
	env: {},
	target: `serverless`,
	sassOptions: {
		prependData: `
			@use "lib/styles/variables.scss" as var;
			@use "lib/styles/mixins.scss";
		`,
	},
	webpack: (config, options) => {
		if (config.externals) {
			config.externals.push(`@netlify/zip-it-and-ship-it`);
		} else {
			config.externals = [`@netlify/zip-it-and-ship-it`];
		}

		// config.module.rules.push()

		return config;
	  },
};
