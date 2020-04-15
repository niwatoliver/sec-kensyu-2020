import { AppBar } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../config/theme';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright © 2020 oliver.
    </Typography>
  );
}

// https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="robots" content="noindex , nofollow" />
        <title>{process.env.SITE_TITLE}</title>
      </Head>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <NextLink href="/" as="/">
            <Typography
              variant="h6"
              style={{ cursor: 'pointer', margin: '0 auto' }}
            >
              {process.env.SITE_TITLE}
            </Typography>
          </NextLink>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 16 }}>
        <Component {...{ ...pageProps }} />
      </div>
      <Box mt={8} pb={4}>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
