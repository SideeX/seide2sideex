// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const glob = require('glob');

module.exports = {
    entry: glob.sync('./src/**/*.ts'),
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './'),
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-env'] },
                    },
                    { loader: 'ts-loader' },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    target: 'node',
};
