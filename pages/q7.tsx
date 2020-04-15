import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
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

// <svg/onload=alert("aaa") />
const Q7 = () => {
  const router = useRouter();
  const classes = useStyles(theme);

  const [scriptText, setScriptText] = useState('');
  const onChange = (e) => {
    router.replace(`/q7?input=${e.target.value}`).then();
  };
  useEffect(() => {
    const input = router.query.input as string;
    if (router.query.input != null) {
      const result = input.replace(
        new RegExp(atob('YWxlcnQ=') + '\\(.+\\)'),
        `${decodeURIComponent(escape(atob(process.env.QUESTIONS.Q7_ALERT)))}`
      );
      setScriptText(result);
    }
  }, [router.query.input]);

  return (
    <div className={classes.layout}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            問題７
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Typography variant="body2" component="div">
            XSSをやってみよう！
            <Box m={1} />
            <TextField
              id="standard-basic"
              label="ここに入力"
              onChange={onChange}
              fullWidth
            />
            <Box m={2} />
            <Typography>ここに内容が反映されるよ！</Typography>
            <Divider />
            <Box m={2} />
            <div dangerouslySetInnerHTML={{ __html: scriptText }} />
            <Divider />
            <Box m={2} />
            ヒント：SVGのXSSで調べてみるといいかも。
            <br />
            ページを更新すると発動するケースもあるよ。
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

export default Q7;
