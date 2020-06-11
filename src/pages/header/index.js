import React,{ useContext } from 'react';
import { Layout } from 'antd';
import {useState,useEffect} from 'react';
import Test from '../contents/allcontxt';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons'

const { Header } = Layout;

const Headers = () => {
  // const [collapsed,useCollapsed] = useState(false)
  const {collapsed,toggle} = useContext(Test)

  return (
    <Header className="global-header" >
    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: 'trigger',
      onClick:toggle,
    })}
  </Header>
  );
};

Headers.propTypes = {
};

export default Headers;
