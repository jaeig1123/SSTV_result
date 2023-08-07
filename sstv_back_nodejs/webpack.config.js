// const path = require('path');

// module.exports = {
//   mode: 'production',
//   entry: './bin/www', // Express 애플리케이션의 진입점 파일 경로로 변경해야 합니다.
//   output: {
//     path: path.resolve(__dirname, 'dist'), // 빌드 결과물이 생성될 경로로 변경해야 합니다.
//     filename: 'bundle.js' // 빌드 결과물의 파일명으로 변경해야 합니다.
//   },
//   target: 'node',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   }
// };
