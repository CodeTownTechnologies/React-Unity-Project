import '../styles/globals.css';
import PropTypes from 'prop-types';
import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from 'components/layout/theme';
function MyApp({ Component, pageProps }) {
  const Layout = Component?.Layout ? Component?.Layout : React.Fragment;
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;


MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
};
