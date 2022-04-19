require('dotenv').config();

const { AUTH0_BASE_URL } = process.env;

module.exports = {
  publicRuntimeConfig: {
    BACKEND_URL: `${AUTH0_BASE_URL}/api/graphql`,
    CORS_URL: `${AUTH0_BASE_URL}/api/cors`,
  },
};

// module.exports = {
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000,
//         },
//       },
//     });
//     return config;
//   },
// };

// module.exports = {
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack', 'url-loader'],
//     });

//     return config;
//   },
// };

// module.exports = {
//   // other configs...

//   // future: { webpack5: true }, // -- not needed since Next.js v11.0.0
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: { and: [/\.(js|ts|md)x?$/] },
//       use: [
//         {
//           loader: '@svgr/webpack',
//           options: {
//             prettier: false,
//             svgo: true,
//             svgoConfig: { plugins: [{ removeViewBox: false }] },
//             titleProp: true,
//           },
//         },
//       ],
//     });
//     return config;
//   },
// };

// require('dotenv').config();

// const {
//   DATABASE_URL,
//   AUTH0_CLIENTID,
//   AUTH0_DOMAIN,
//   AUTH0_CLIENT_SECRET,
//   AUTH0_SCOPE,
//   AUTH0_COOKIE,
//   BACKEND_ADDRESS,
// } = process.env;

// module.exports = {
//   publicRuntimeConfig: {
//     BACKEND_URL: `${BACKEND_ADDRESS}/api/graphql`,
//   },
//   serverRuntimeConfig: {
//     auth: {
//       domain: AUTH0_DOMAIN,
//       clientId: AUTH0_CLIENTID,
//       clientSecret: AUTH0_CLIENT_SECRET,
//       scope: AUTH0_SCOPE,
//       redirectUri: `${BACKEND_ADDRESS}/api/callback`,
//       postLogoutRedirectUri: `${BACKEND_ADDRESS}/`,
//     },
//     cookieSecret: AUTH0_COOKIE,
//   },
// };
