import Layout from './index';
const withWebLayout = Component => {
  Component.Layout = Layout;
  return Component;
};

export default withWebLayout;