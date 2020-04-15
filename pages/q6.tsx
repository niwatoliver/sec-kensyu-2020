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

const storageRef = firebase.storage().ref();

const useStyles = makeStyles({
  layout: {
    maxWidth: 600,
    margin: '32px auto',
  },
});

// (await firebase.storage().ref().child('icon.png').getMetadata()).customMetadata;
const Q6 = () => {
  const classes = useStyles(theme);
  const [url, setUrl] = useState(undefined);

  useEffect(() => {
    window.firebase = firebase;
    storageRef
      .child('icon.png')
      .getDownloadURL()
      .then((url) => setUrl(url));
  }, [setUrl]);

  return (
    <div className={classes.layout}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            問題６
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          ここに表示されている画像は`firebase storage`に保存されています。
          画像にはとある情報が付与されています。見つけることはできるかな？
          <Box m={3} />
          <Typography variant="body2" component="p">
            {url && <img src={url} alt="icon" />}
          </Typography>
          <Box m={3} />
          <Typography variant="body2" component="p">
            ヒント：Firebase Storageはcustom metadataを含めることができるよ
            <br />
            https://firebase.google.com/docs/storage/web/file-metadata?hl=ja#get_file_metadata
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

export default Q6;
