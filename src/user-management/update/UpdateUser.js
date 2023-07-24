import React from 'react';

import UpdateForm from './UpdateForm';
import Layout from '../../common/Layout';

const UpdateUser = () => {
  return (
    <>
      <Layout child={<UpdateForm />} navLinkItem={"account"} pageTitle={"Account Information"} />
    </>
  )
};
export default UpdateUser;