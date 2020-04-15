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

// curl -i -b '__session=d811774b-bbc3-4cd7-a0d8-a7043e63dfe2' https://${process.env.FIREBASE_PROJECT_ID}.web.app/q8cookie
// document.cookie = "__session=d811774b-bbc3-4cd7-a0d8-a7043e63dfe2";
const Q8 = () => {
  const classes = useStyles(theme);
  const [response, setResponse] = useState<{ content?: string; q?: number }>(
    {}
  );

  useEffect(() => {
    fetch(`https://${process.env.FIREBASE_CONFIG.projectId}.web.app/q8cookie`, {
      credentials: 'include',
    }).then(async (r) => setResponse(await r.json()));
  }, [setResponse]);

  return (
    <div className={classes.layout}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            問題８
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Typography variant="body2" component="div">
            このページにアクセスした時、とあるCookieがセットされるよ。
            <br />
            Q5で使用したユーザー情報には、とあるCookie情報も保存されていたよ。
            <br />
            そのCookieを取得して、書き換えてみると...?
            <Box m={3} />
            {response?.content && (
              <p>{`{content:${response.content}, q:${response.q}}`}</p>
            )}
            <Box m={3} />
            ヒント： `document.cookie` でcookieを書き換えられるよ。
            <br />
            https://developer.mozilla.org/ja/docs/Web/API/Document/cookie
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

export default Q8;
