module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          types: './types',
          screens: './screens',
          navigation: './navigation',
          constants: './constants',
          assets: './assets',
          components: './components',
        },
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
