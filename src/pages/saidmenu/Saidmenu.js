import React,{useContext} from 'react';
import { Button, Layout, Menu  } from 'antd';
import {history} from '../../router';
import Test from '../contents/allcontxt';

import {

  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
const {  Sider } = Layout;

const Saidmenu = (props) => {
  const {collapsed} = useContext(Test)
  // const {history}= props.props
  // console.log(propsconfig)
  // console.log(propsconfig.history)
  return (
    // <Sider trigger={null} collapsible collapsed={collapsed}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />} onClick={ ()=> {history.push('one')}}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined/>} onClick={ ()=> {history.push('two')}}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

Saidmenu.propTypes = {
};

export default Saidmenu;
