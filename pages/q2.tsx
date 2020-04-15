import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import theme from '../config/theme';

const useStyles = makeStyles({
  layout: {
    maxWidth: 600,
    margin: '32px auto',
  },
});

// documentにコメントアウトされている
const Q2 = () => {
  const classes = useStyles(theme);

  return (
    <div className={classes.layout}>
      <Head>
        <meta
          name="q2"
          content={`{content: ${process.env.QUESTIONS.Q2}, q: 2}`}
        />
      </Head>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            問題２
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Typography variant="body2" component="p">
            開発しているときに使用していた情報を、HTMLに残しちゃったままらしい。
            <br />
            その情報を探してみよう。
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

export default Q2;
