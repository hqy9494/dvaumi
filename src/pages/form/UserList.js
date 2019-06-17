import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button } from 'antd';
const {Component} = React;

const formInput = {
  labelCol: {span:8},
  wrapperCol: {span:16},
}
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  addTable = () => {

  }
  findTable = () => {
    
  }
  reflashTable = () => {
    
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
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
      <Button id="add" type="primary" onClick={()=>this.addTable()}>添加</Button>
      <Button id="find" type="defalut" onClick={()=>this.findTable()}>查询</Button>
      <Button id="reflash" type="danger" onClick={()=>this.reflashTable()}>重置</Button>
      <br/><br/><br/>
      <table width="600" border="1">
          <thead>
              <tr>
                  <th>user</th>
                  <th>pass</th>
                  <th>tel</th>
                  <th>operate</th>
              </tr>
          </thead>
          <tbody id="tb">

          </tbody>
      </table>
      </Form>
    );
  }
  
}



const UserList  = Form.create()(User)

export default connect()(UserList);