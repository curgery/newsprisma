import { initAuth0 } from '@auth0/nextjs-auth0';


export default initAuth0({
    baseURL: 'http://localhost:3000',
    issuerBaseURL: 'https://mensa.auth0.com',
    clientID: process.env.clientId,
    clientSecret: process.env.clientSecret,
    secret: 'some_very_long_secret_string_thats_unique',
    clockTolerance: 60,
    httpTimeout: 5000,
    authorizationParams: {
        scope: 'openid profile email',
    },
    routes: {
        callback: '/api/callback',
        postLogoutRedirect: '/'
    },
    session: {
        rollingDuration: 60 * 60 * 24,
        absoluteDuration: 60 * 60 * 24 * 7
    },     
});








// import { initAuth0 } from '@auth0/nextjs-auth0'

// import getConfig from 'next/config';
// const {serverRuntimeConfig} = getConfig();
// const {auth, cookieSecret} = serverRuntimeConfig;

// console.log(serverRuntimeConfig);
// export default initAuth0({
//   ...auth,
//   session: {
//     cookieSecret,
//     cookieLifetime: 60* 60* 8,
//     storeIdToken: false,
//     storeAccessToken: false,
//     storeRefreshToken: false
//   },
//   oidcClient: {
//       httpTimeout: 25000,
//       clockTolerance: 10000,
      
//   }
// })