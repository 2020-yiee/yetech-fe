import React from 'react';
import { SkeletonPageWithoutWebSection } from '../../../../component/sites/skeleton-page-without-web-section';
import { SideBarDefault } from '../../../../component/sites/side-bar';
import { Typography, Popover, Menu, Button, Table } from 'antd';
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";

const {Title} = Typography;

const dataSource = [
  {
    key: "1",
    fullName: "Huy LM",
    email: "huylm@gmail.com",
    jointDate: "1/13/2020",
    role: "Account Owner"
  },
  {
    key: "2",
    fullName: "Lam TV",
    email: "lamtv@gmail.com",
    jointDate: "1/14/2020",
    role: "Member"
  },
  {
    key: "3",
    fullName: "Tho TD",
    email: "thotd@gmail.com",
    jointDate: "1/13/2019",
    role: "Member"
  },
  {
    key: "4",
    fullName: "Huy VQ",
    email: "huyvq@gmail.com",
    jointDate: "1/13/2002",
    role: "Member"
  }
];

const columns = [
  {
    title: "Fullname",
    dataIndex: "fullName",
    key: "fullName"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Joint Date",
    dataIndex: "jointDate",
    key: "jointDate"
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role"
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
          icon={<MoreOutlined style={{ display: "block" }} />}
        />
      </Popover>
    )
  }
];

const Member = () => (
  <SkeletonPageWithoutWebSection sideBarActive={SideBarDefault.SETTING_MEMBER}>
    Member
    <Title level={2}>Member</Title>
    <div className="relative z-10">
      <Button type="primary" className="absolute" style={{ bottom: -50 }}>
        <div className="flex items-center">
          <PlusOutlined className="pr-2" />
          Invite Member
        </div>
      </Button>
    </div>
    <Table
      pagination={{ position: "both" }}
      columns={columns}
      dataSource={dataSource}
    ></Table>
  </SkeletonPageWithoutWebSection>
);

export default Member;
