module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["."],
          "alias": {
            "~/*": "./src/*",
          }
        }
      ]
    ]
  }
}

// plugins: [
//   [
//     "module-resolver",
//     {
//       "root": ["./"],
//       // "alias": {
//       //   "~/*": "./src/*",
//       // },
//       // extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
//     }
//   ],
// ]
