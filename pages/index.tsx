import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import NextLink from 'next/link';
import Paper from '@material-ui/core/Paper';
import React, { useCallback, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import firebase from '../config/firebase';
import theme from '../config/theme';

const useStyles = makeStyles({
  layout: {
    maxWidth: 600,
    margin: '32px auto',
  },
});

const checkAnswer = firebase.functions().httpsCallable('checkAnswer');

const Home = () => {
  const classes = useStyles(theme);
  const [answer, setAnswer] = useState('');
  const [collect, setCollect] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const submit = useCallback(() => {
    setIsLoading(true);
    checkAnswer({ answer }).then((r) => {
      if (r.data?.collect && r.data?.checkStr === 'oliver') {
        setCollect(true);
      } else {
        setCollect(false);
      }
      setIsLoading(false);
    });
  }, [answer]);

  return (
    <div className={classes.layout}>
      {collect !== undefined && collect && (
        <Alert severity="success">正解！おめでとう！</Alert>
      )}
      {collect !== undefined && !collect && (
        <Alert severity="error">ハズレ！もう一度考えてみよう！</Alert>
      )}
      <Box m={4} />
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            ようこそ！
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Typography variant="body2" component="p">
            今回、研修用にWebのセキュリティに関する入門問題を8問用意しました。
            <br />
            Firebaseの問題が多くなっているので、是非色々触ってみてね！
            <br />
            そして、全ての問題を解き終えると、一つのメッセージとなります。
            <br />
            さあ、早速チームみんなで問題を解いてみよう！
          </Typography>
        </CardContent>
      </Card>
      <Box m={4} />
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            回答入力
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <TextField
            label="答え"
            variant="standard"
            fullWidth
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Box m={3} />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={submit}
            disabled={isLoading}
          >
            送信
          </Button>
        </CardContent>
      </Card>
      <Box m={4} />
      <Paper>
        <List component="nav">
          <ListSubheader>問題一覧</ListSubheader>
          <Divider />
          <NextLink href="/q1" as="/q1">
            <ListItem button>
              <ListItemText primary="問題1（Debug消し忘れちゃったかも？）" />
            </ListItem>
          </NextLink>
          <Divider />
          <NextLink href="/q2" as="/q2">
            <ListItem button>
              <ListItemText primary="問題2（HTMLに情報残したままにしちゃったかも？）" />
            </ListItem>
          </NextLink>
          <Divider />
          <NextLink href="/q3" as="/q3">
            <ListItem button>
              <ListItemText primary="問題3（何かをダウンロードしているかも？）" />
            </ListItem>
          </NextLink>
          <Divider />
          <NextLink href="/q4" as="/q4">
            <ListItem button>
              <ListItemText primary="問題4（FirestoreのRuleが設定されてないかも？）" />
            </ListItem>
          </NextLink>
          <Divider />
          <NextLink href="/q5" as="/q5">
            <ListItem button>
              <ListItemText primary="問題5（JWTから情報が漏れてしまうかも？）" />
            </ListItem>
          </NextLink>
          <Divider />
          <NextLink href="/q6" as="/q6">
            <ListItem button>
              <ListItemText primary="問題6（画像に情報が埋め込まれているかも？）" />
            </ListItem>
          </NextLink>
          <Divider />
          <NextLink href="/q7" as="/q7">
            <ListItem button>
              <ListItemText primary="問題7（XSSができてしまうかも？）" />
            </ListItem>
          </NextLink>
          <Divider />
          <NextLink href="/q8" as="/q8">
            <ListItem button>
              <ListItemText primary="問題8（Cookieが漏れちゃっているかも？）" />
            </ListItem>
          </NextLink>
        </List>
      </Paper>
    </div>
  );
};

export default Home;
