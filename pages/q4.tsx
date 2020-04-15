import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import firebase from '../config/firebase';
import theme from '../config/theme';

const firestore = firebase.firestore();

const useStyles = makeStyles({
  layout: {
    maxWidth: 600,
    margin: '32px auto',
  },
});

// (await firebase.firestore().collection('items').get()).docs[1].data();
const Q4 = () => {
  const classes = useStyles(theme);
  const [text, setText] = useState('');

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.firebase = firebase;
    firestore
      .collection('items')
      .get()
      .then((s) => setText(s.docs[0].data().content));
  }, []);

  return (
    <div className={classes.layout}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            問題４
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Typography
            variant="body2"
            component="div"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <br />
          <Typography variant="body2" component="p">
            ヒント：検証のNetworkタブから、どのコレクションにアクセスしているか分かるよ。
            <br />
            https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja#get_all_documents_in_a_collection
          </Typography>
        </CardContent>
      </Card>
      <Box m={4} />
      <NextLink href="/" as="/">
        <Button variant="contained" color="secondary" fullWidth>
          戻る
        </Button>
      </NextLink>
    </div>
  );
};

export default Q4;
