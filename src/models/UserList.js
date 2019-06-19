import {getAllUser,addTable,delTable,editTable,selTable,findTable,reflashTable} from '../services/userList'
export default {

    namespace: 'UserList',
  
    state: {
      users:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {
      },
    },
  
    effects: {
      // *fetch({ payload }, { call, put }) {
      //   yield put({ type: 'save' });
      // },
      *getAllUser({payload}, {call, put, select}) {
        const res = yield call(getAllUser)
        // console.log(data,'settings')
        if (!res) return
        yield put({
          type: 'change',
          payload: {
            name: 'users',
            value: res.data
          }
        })
        return res
      },
      *addTable({payload}, {call, put, select}) {
        // const res = yield call(addTable)
        console.log(payload)
        // if (!res) return
        // yield put({
        //   type: 'change',
        //   payload: {
        //     name: 'users',
        //     value: res.data
        //   }
        // })
        // return res
      },
    },
  
    reducers: {
      change(state, action) {
        const {payload} = action
  
        if (!payload || !payload.name) return
  
        return {
          ...state,
          [payload.name]: payload.value
        }
      }
    },
  
  };
  