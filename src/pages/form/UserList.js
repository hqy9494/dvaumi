import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Table } from 'antd';
const {Component} = React;

const formInput = {
  labelCol: {span:8},
  wrapperCol: {span:16},
}
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.dispatch({type:'UserList/getAllUser'}).then(e=>{
      console.log(e)
    })
  }
  addTable = () => {
    this.props.dispatch({type:'UserList/addTable'})
  }
  findTable = () => {
    this.props.dispatch({type:'UserList/findTable'})
  }
  reflashTable = () => {
    this.props.dispatch({type:'UserList/reflashTable'})
  }
  delTable = () => {
    this.props.dispatch({type:'UserList/delTable'})
  }
  
  editTable = () => {
    this.props.dispatch({type:'UserList/aditTable'})
  }
  
  handle = () => {

  }
  
  handleModal = (name, value) => {
    this.props.dispatch({
      type: 'UserList/getAllUser',
      payload: {
        name,
        value
      }
    })
  }
  
  handleSubmit = (fun,id) => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if(err){
        return 
      }
      let data = {type:`UserList/${fun}`,playload:{user:values.user,pass:values.pass,tel:values.tel}}
      if(id) data.playload.id = id;  
      this.props.dispatch(data)
    }
  )}

  render() {
    const { getFieldDecorator } = this.props.form;
    const { users } = this.props
    const colunm = [{    
        title: '用户名',
        dataIndex: 'user',
        key: 'user',
      },
      {
        title: '密码',
        dataIndex: 'pass',
        key: 'pass',
      },
      {
        title: '电话',
        dataIndex: 'tel',
        key: 'tel',
      },
      {
        render: (text,record) => {
          return <div>
            <Button type="primary" size="small" onClick={()=>this.editTable(record.id)}>修改</Button>&nbsp;
            <Button size="small"  onClick={()=>this.delTable(record.id)}>删除</Button>
          </div>
        }
      }
    ]
    console.log(this.props)
    return (
    <Form gutter={24} style={{width:600}}>
       <Form.Item gutter={18} label="user" {...formInput}>
          {getFieldDecorator('user', {
            label:'eeeeee',
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item gutter={18} label="pass" {...formInput}>
          {getFieldDecorator('pass', {
            label:'eeeeee',
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item gutter={18} label="tel" {...formInput}>
          {getFieldDecorator('tel', {
            label:'eeeeee',
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
      &nbsp;
      <Form.Item style={{textAlign:'center'}}>
        <Button id="add" type="primary" onClick={()=>this.handle('addTable')}>添加</Button>&nbsp;
        <Button id="find" type="defalut" onClick={()=>this.findTable()}>查询</Button>&nbsp;
        <Button id="reflash" type="danger" onClick={()=>this.props.dispatch({type:'UserList/getAllUser'})}>重置</Button>&nbsp;
      </Form.Item>
   
      {/* <br/><br/><br/>
      <table width="600" border="1">
        <thead>
          <tr>
            <th>user</th>
            <th>pass</th>
            <th>tel</th>
            <th>operate</th>
          </tr>
        </thead>
        <tbody>
            {
              users.length && users.map((e,i)=>{
                return <tr key={i}><td>{e.user}</td><td>{e.pass}</td><td>{e.tel}</td><td><Button onClick={()=>this.editTable(e.id)}>修改</Button><Button onClick={()=>this.delTable(e.id)}>删除</Button></td></tr>
              })
            }
        </tbody>
      </table> */}
        <Table dataSource={users} columns={colunm} rowKey="id"/>
      </Form>
    );
  }
  
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.UserList.users || null
  }
}

const UserList  = Form.create()(User)

export default connect(mapStateToProps)(UserList);