import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import NextLink from 'next/link';
import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import theme from '../config/theme';

const useStyles = makeStyles({
  layout: {
    maxWidth: 600,
    margin: '32px auto',
  },
});

// consoleにログが流れてくる
const Q1 = () => {
  const classes = useStyles(theme);
  useEffect(() => {
    console.log('debug:', { content: process.env.QUESTIONS.Q1, q: 1 });
  }, []);

  return (
    <div className={classes.layout}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            問題１
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Typography variant="body2" component="p">
            開発しているときに使用していたDebugを消し忘れてしまったらしい。
            <br />
            そのDebug内容を探してみよう。
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

export default Q1;
