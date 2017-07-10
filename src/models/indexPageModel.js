import {logoutApi} from './../services/api';
import {hashHistory} from 'dva/router';
export default {
  namespace: 'indexPageModel',
  state: {
    selectedTab:'index',
    role:'manage'
  },
  subscriptions: {
    setup({ dispatch, history }) {  
      history.listen(location =>{
        if (location.pathname === '/index') {
          dispatch({"type":'query'})              
        }else if(location.pathname === '/my'){
          dispatch({type:'setState', payload:{selectedTab:'my'}})
        }
      })
    },
  },
  effects: {
    *query({payload}, {select, call, put}){
        let {data} = yield call(logoutApi);
        let rlt = JSON.parse(data);
        if(rlt.role != 'manage'){
          yield put({type:'setState', payload:{role:rlt.role}})
          hashHistory.push('/my');
        }else{
          yield put({type:'setState', payload:{ selectedTab:'index', role: rlt.role}})
        }
    },
  },

  reducers: {
    setState(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
