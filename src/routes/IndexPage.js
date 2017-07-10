import React from 'react';
import {connect} from 'dva';
import {hashHistory} from 'dva/router';
import styles from './IndexPage.css';
import {TabBar, Icon} from 'antd-mobile';
function IndexPage(props) {
  const TabBarItem = (() => {
    return (
      props.indexPageModel.role == 'manage'
        ? <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
            <TabBar.Item
              icon={< Icon type = "koubei-o" size = "md" />}
              selectedIcon={< Icon type = "koubei" size = "md" />}
              title="管理员首页"
              key="index"
              selected=
              {props.indexPageModel.selectedTab == 'index'}
              onPress={() => {
              hashHistory.push('index');
            }}/>
            <TabBar.Item
              icon={< Icon type = "check-circle-o" size = "md" />}
              selectedIcon={< Icon type = "check-circle" size = "md" />}
              title="我的敬业福"
              key="my"
              selected=
              {props.indexPageModel.selectedTab == 'my'}
              onPress={() => {
              hashHistory.push('my');
            }}></TabBar.Item>
          </TabBar>
        : <TabBar>
            <TabBar.Item
              icon={< Icon type = "check-circle-o" size = "md" />}
              selectedIcon={< Icon type = "check-circle" size = "md" />}
              title="我的敬业福"
              key="my"
              selected=
              {props.indexPageModel.selectedTab == 'my'}
              onPress={() => {
              hashHistory.push('my');
            }}></TabBar.Item>
          </TabBar>
    )
  })()
  return (
    <div>
      <div className='container'></div>
      {TabBarItem}
    </div>
  );
}

IndexPage.propTypes = {};

export default connect(({indexPageModel}) => ({indexPageModel}))(IndexPage);
