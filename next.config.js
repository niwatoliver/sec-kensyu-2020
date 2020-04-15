// https://github.com/zeit/next.js/tree/canary/examples/with-dotenv
require('dotenv').config();

module.exports = {
  env: {
    FIREBASE_CONFIG: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
    SITE_TITLE: process.env.SITE_TITLE,
    PRIMARY_COLOR: process.env.PRIMARY_COLOR,
    SECONDARY_COLOR: process.env.SECONDARY_COLOR,
    QUESTIONS: {
      Q1: process.env.Q1,
      Q2: process.env.Q2,
      Q3: process.env.Q3,
      Q4: process.env.Q4,
      Q5: process.env.Q5,
      Q6: process.env.Q6,
      Q7: process.env.Q7,
      Q7_ALERT: process.env.Q7_ALERT,
      Q8: process.env.Q8,
    },
  },
};
