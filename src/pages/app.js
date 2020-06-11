import React,{useState,useEffect } from 'react';
import { connect } from 'dva';
import Content from './contents'
import './IndexPage.css';
import {  Layout } from 'antd';
// import Saidmenu from '../components/Saidmenu'
import Saidmenu from './saidmenu/Saidmenu'
// import { Router,Route } from 'dva/router';
import Test from './contents/allcontxt'
// import routes from '../routes/index'
// import { Router, Route, Link } from 'react-router'


function AppPage(props) {
  // console.log(props)
  const [collapseds,setCollapseds] = useState(true)
  const nature = {
    collapsed:collapseds,
    toggle: () =>{ setCollapseds(!collapseds) }
    // toggle: () =>{console.log(nature.collapsed)}
  }

  // console.log('App初渲染')
  useEffect( () => {

  },[])
  // console.log(Test)
  return (
    
    <Test.Provider value={nature}>
      <Layout style={{height:"100%"}}>
          <Saidmenu props={props} />
          <Content props={props}/>
      </Layout>
    </Test.Provider>
  );
}


export default AppPage;
