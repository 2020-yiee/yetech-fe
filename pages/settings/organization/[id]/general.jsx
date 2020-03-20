import React, { useEffect } from 'react';
import { SkeletonPageWithoutWebSection } from '../../../../component/sites/skeleton-page-without-web-section';
import { SideBarDefault } from '../../../../component/sites/side-bar';
import { Table, Button, Popover, Menu, Typography } from 'antd';
import { PlusOutlined, MoreOutlined } from '@ant-design/icons';
import { useAccountContext } from '../../../../component/profile/profile-context';

const { Title } = Typography;

const dummyDataSource = [
  {
    key: '1',
    domainUrl: 'www.google.com',
    createdDate: '3/15/2020',
    createdBy: 'Huy LM',
  },
  {
    key: '2',
    domainUrl: 'www.loathai.herokuapp.com',
    createdDate: '3/20/2020',
    createdBy: 'Lam TV',
  },
  {
    key: '3',
    domainUrl: 'www.abc.com',
    createdDate: '2/15/2020',
    createdBy: 'Tran Duc Tho',
  },
  {
    key: '4',
    domainUrl: 'www.youtube.com',
    createdDate: '3/8/2020',
    createdBy: 'Huy VQ',
  },
];

const columns = [
  {
    title: 'Domain URL',
    dataIndex: 'domainUrl',
    key: 'domainUrl',
  },
  {
    title: 'Created Date',
    dataIndex: 'createdDate',
    key: 'createdDate',
  },
  {
    title: 'Created By',
    dataIndex: 'createdBy',
    key: 'createdBy',
  },
  {
    render: () => (
      <Popover
        content={
          <Menu mode="inline" className="border-r-0">
            <Menu.Item>Remove</Menu.Item>
          </Menu>
        }
      >
        <Button
          onClick={event => event.stopPropagation()}
          type="normal"
          shape="circle"
          className="border-0"
          icon={<MoreOutlined style={{ display: 'block' }} />}
        />
      </Popover>
    ),
  },
];

const General = ({ id }) => {
  // co id cua organization ---> cap nhat active organization trong bien setting ben duoi
  const { profile, setProfile, setting, setSetting } = useAccountContext();

  useEffect(() => {
    // buoc nay di fetch du lieu giong trong profile-provider.jsx dong` 30
    // fetch xong set profile & set activeOrganization lai
  }, []);

  const dataSource = profile
    ? [] // moc het web cua active organization (co trong bien setting) show ra
    : [];

  return (
    <SkeletonPageWithoutWebSection
      sideBarActive={SideBarDefault.SETTING_GENERAL}
    >
      General
      <Title level={2}>General</Title>
      <div className="relative z-10">
        <Button type="primary" className="absolute" style={{ bottom: -50 }}>
          <div className="flex items-center">
            <PlusOutlined className="pr-2" />
            Add New Website
          </div>
        </Button>
      </div>
      <Table
        pagination={{ position: 'both' }}
        columns={columns}
        dataSource={dummyDataSource}
      ></Table>
    </SkeletonPageWithoutWebSection>
  );
};

General.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default General;
