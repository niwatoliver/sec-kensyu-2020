import * as admin from 'firebase-admin';
require('firebase/firestore');
require('firebase/auth');
require('firebase/storage');
require('dotenv').config();

async function main() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const serviceAccount = require('./serviceAccountKey.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: `gs://${process.env.FIREBASE_STORAGE_BUCKET}`,
  });

  const firestore = admin.firestore();

  // Q4
  const itemDocuments = await firestore.collection('items').listDocuments();
  await Promise.all(itemDocuments.map((i) => i.delete()));
  await Promise.all([
    await firestore.collection('items').doc('0').set({
      content:
        'ここの文章はFirestoreから取得しています。<br /> Ruleを設定し忘れているらしいので、他の情報が取得できてしまう...?',
    }),
    await firestore.collection('items').doc('1').set({
      content: process.env.Q4,
    }),
  ]);

  // Q5
  const userDocuments = await firestore.collection('users').listDocuments();
  await Promise.all(userDocuments.map((u) => u.delete()));
  try {
    const user = await admin.auth().getUserByEmail(process.env.Q5_EMAIL || '');
    await admin.auth().deleteUser(user.uid);
    // eslint-disable-next-line no-empty
  } catch (e) {}
  const user = await admin.auth().createUser({
    email: process.env.Q5_EMAIL,
    password: process.env.Q5_PASSWORD,
  });
  await admin.auth().setCustomUserClaims(user.uid, {
    content: process.env.Q5,
    q: 5,
  });
  await Promise.all([
    await firestore.collection('users').doc().set({
      name: 'oliver',
      email: process.env.Q5_EMAIL,
      password: process.env.Q5_PASSWORD,
      __session: 'd811774b-bbc3-4cd7-a0d8-a7043e63dfe2',
    }),
    await firestore.collection('users').doc().set({
      name: 'hogeユーザー',
      email: 'hoge@example.com',
    }),
    await firestore.collection('users').doc().set({
      name: 'fooユーザー',
      email: 'foo@example.com',
    }),
    await firestore.collection('users').doc().set({
      name: 'barユーザー',
      email: 'bar@example.com',
    }),
  ]);

  // Q6
  const storage = admin.storage();
  const metadata = {
    metadata: {
      content: process.env.Q6,
      q: 6,
    },
  };
  await storage.bucket().upload('./icon.png', { metadata });
}

main()
  .then(() => process.exit(0))
  .catch(console.log)
  .then(() => process.exit(0));
