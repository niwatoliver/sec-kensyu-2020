import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import theme from '../config/theme';

const useStyles = makeStyles({
  layout: {
    maxWidth: 600,
    margin: '32px auto',
  },
});

// networkタブでq3.txtがダウンロードされてることが確認できる
const Q3 = () => {
  const classes = useStyles(theme);

  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setDisplay(false);
  }, []);

  return (
    <div className={classes.layout}>
      {display && <iframe src="/q3.txt" />}
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            問題３
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Typography variant="body2" component="p">
            後ろで何かをダウンロードしてるらしい？
            <br />
            ネットワークを監視してみよう。
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

export default Q3;
