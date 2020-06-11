import React,{useState,useEffect,useContext} from 'react';
import { Layout } from 'antd';
import Headers from '../header'
// import { Route,Switch } from 'dva/router';
import one from '../one/index'
import two from '../two/index'
import Test from './allcontxt'
import {renderRoutes, matchRoutes} from 'react-router-config';
import routes from '../../routes/index'
import { Router, Route, Switch } from 'dva/router';

// const ThemeContext= React.createContext()



const { Content } = Layout;
const Contents = (props) => {
  // const routes = props.props.route.routes
  // console.log(props)
  // const [collapsed,useCollapsed] = useState(false)
  const {collapsed} = useContext(Test);

  // console.log(collapsed)
  return (
    <Layout className="site-layout">
      <Headers />

      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        {/* {renderRoutes(routes)} */}

        <Switch>
          <Route path='/one' component={one}/> 
          <Route path='/two' component={two}/> 
        </Switch>
        Content
      </Content>

    </Layout>
  );
};

Contents.propTypes = {
};

export default Contents;
