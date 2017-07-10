import React from 'react';
import {Router, Route, IndexRedirect, Link, hashHistory} from 'dva/router';
import IndexPage from './routes/IndexPage';
import {TabBar, Icon} from 'antd-mobile';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/">
        <IndexRedirect to="/index"/>
        <Route path="index" component={() =>< IndexPage type = 'index' />} />
        <Route path="my" component={() =>< IndexPage type = 'my' />}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
