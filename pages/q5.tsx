import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import NextLink from 'next/link';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import firebase from '../config/firebase';
import theme from '../config/theme';
import withStyles from '@material-ui/core/styles/withStyles';

const useStyles = makeStyles({
  layout: {
    maxWidth: 600,
    margin: '32px auto',
  },
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.black,
  },
}))(TableCell);

// (await firebase.firestore().collection('users').get()).docs.map(u => u.data());
// await firebase.auth().signInWithEmailAndPassword(process.env.Q5_EMAIL, process.env.Q5_PASSWORD)
// await firebase.auth().currentUser.getIdToken(true)
const Q5 = () => {
  const classes = useStyles(theme);
  const [users, setUser] = useState([]);

  // https://jwt.io/
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.firebase = firebase;
    firebase
      .firestore()
      .collection('users')
      .get()
      .then((s) => setUser(s.docs.map((u) => u.data())));
  }, [setUser]);

  return (
    <div className={classes.layout}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            問題５
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Typography variant="body2" component="div">
            ユーザー一覧を表示してるが、パスワードも一緒にFirestoreに保存されてしまっているらしい。
            <br />
            このパスワードを使ってログインすることができてしまうらしいが...
            <Box m={3} />
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>名前</StyledTableCell>
                    <StyledTableCell>メール</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((u) => (
                    <TableRow key={u.email}>
                      <TableCell>{u.name}</TableCell>
                      <TableCell>{u.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box m={3} />
            <Typography variant="body2" component="p">
              ヒント：得られた情報でログインすることができるよ。
              <br />
              https://firebase.google.com/docs/auth/web/start?hl=ja#sign_in_existing_users
              <br />
              https://jwt.io/
            </Typography>
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

export default Q5;
