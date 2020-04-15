import * as functions from 'firebase-functions';
require('dotenv').config();

export const checkAnswer = functions.https.onCall(async (data) => {
  if (data.answer.replace(/\s+/g, '') === functions.config().question.answer) {
    return { collect: true, checkStr: 'oliver' };
  } else {
    return { collect: false };
  }
});

export const q8cookie = functions.https.onRequest((req, resp) => {
  const sessionId = req.headers?.cookie;
  let response = {};
  if (sessionId === '__session=d811774b-bbc3-4cd7-a0d8-a7043e63dfe2') {
    response = { content: functions.config().question.q8, q: 8 };
  }
  resp.cookie('__session', 'koko-ga-session-id-dayo');
  resp.set(
    'Access-Control-Allow-Origin',
    `https://${functions.config().project.id}.web.app/q8`
  );
  resp.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  resp.set('Access-Control-Allow-Headers', 'Content-Type, authorization');
  resp.set('Access-Control-Allow-Credentials', 'true');
  console.log({ sessionId });
  resp.send(response);
});
