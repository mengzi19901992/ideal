const px2rem = require('postcss-pxtorem');

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    px2rem({
                        rootValue: 32,
                        propList: ['*'],
                    }),
                ],
            },
        },
    },
};