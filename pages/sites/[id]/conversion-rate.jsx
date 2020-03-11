import { Typography, Layout } from 'antd';

import { SideBar, SideBarDefault } from '../../../component/sites/side-bar';
import { ChartJS } from '../../../component/sites/chart';
import { useState, useEffect } from 'react';
import { SkeletonPage } from '../../../component/sites/skeleton-page';

const contentStyle = {
  width: 960,
};

const ConversionRate = ({ id }) => {
  const [server, setServer] = useState(true);
  useEffect(() => {
    setServer(false);
  }, []);

  return (
    <SkeletonPage id={id} sideBarActive={SideBarDefault.CONVERSION_RATE}>
      <Layout.Content
        className="bg-white m-auto py-8 px-16"
        style={contentStyle}
      >
        <Typography.Title>Dashboard</Typography.Title>
        {!server && <ChartJS />}
      </Layout.Content>
    </SkeletonPage>
  );
};

ConversionRate.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default ConversionRate;
