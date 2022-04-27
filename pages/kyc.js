import withWebLayout from 'components/layout/web/withWebLayout';
import React from 'react';
import KycComponent from "../Page/Kyc/Kyc";

const Kyc = () => {
  return (
   <KycComponent/>
  );
};

export default withWebLayout(Kyc);