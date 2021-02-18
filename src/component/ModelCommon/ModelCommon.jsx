import React, { Component } from 'react'
import { Layout, Select, Input, Button, Modal, Form  } from 'antd';
import { FormInstance } from 'antd/lib/form';


const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 20 },
};
class MainShow extends Component {
  state = {
    name: '输入机房名称',
    perdata:  {name: '111', area: "111"},
  }
  formRef = React.createRef();
  deleteFn() {

  }

  editFn() {

  }
  // state = {
  //   visibles : this.props.visible
  // }




  onFinish = (values) => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };


  // 挂载
  // constructor() {
  //   console.log(1)
  // }

  static getDerivedStateFromProps() {
    console.log(2)
  }

  // render() {
  // }

  componentDidMount() {
    console.log(4)
  }

  // 更新
  static getDerivedStateFromProps(props){
    console.log(11)
    // this.props.form.setFieldsValue({
    //   SaleContractNo: next.ProductRecipientApply.SaleContractNo,
    //   IsLetterAuthorization: next.ProductRecipientApply.IsLetterAuthorization,
    //   AppEndTime: next.ProductRecipientApply.AppEndTime,
    //   InnerOrderNo: next.ProductRecipientApply.InnerOrderNo,
    // })
    return {
      perdata: props.allData
    };
  }

  shouldComponentUpdate() {
    console.log(12)
    return true
  }

  // render() {

  // }

  getSnapshotBeforeUpdate() {
    console.log(14)
  }

  componentDidUpdate() {
    setTimeout(()=>{
			this.formRef.current.setFieldsValue({
        showName: this.props.allData.name
      })
		},0)
    console.log(15)
  }

  componentWillUnmount() {
    
    console.log(1323235)
  }

  // componentDidMount () {
  //   debugger;
  //   const { allData } = this.props
  //   this.setState({
  //     perdata: allData
  //   })
  // }
  
  // componentWillReceiveProps(nextProps) {
  //   const { allData } = nextProps
  //   this.setState({
  //     perdata: allData
  //   })
  // }

  render() {
    console.log(3)
    const { visible, allData } = this.props
    return(
    <div>
        <Modal
        forceRender={true}
        title="新增机房"
        centered
        visible={visible}
        onOk={() => this.okFn(false)}
        onCancel={() => this.setVisible(false)}
        okText = '确定'
        cancelText = '取消'
        width={520}
        height={500}
      >
            {/* <input placeholder={this.state.name} value={this.state.perdata.name} onChange={(e) => this.changeFn(e)} onBlur={this.blurFN}/> */}

        <Form {...layout} ref={this.formRef} name="control-ref" onFinish={() => this.onFinish}>
          <Form.Item name="name" label="机房名称" rules={[{ required: true }]}>
            <Input  placeholder={this.state.name} initialValues ="showName" onChange={(e) => this.changeFn(e)} onBlur={this.blurFN}/>
          </Form.Item>
          <Form.Item name="area" value={this.state.perdata.area}  label="机房所在区域" rules={[{ required: true }]}>
            <Select
              placeholder="输入机房所在区域"
              onChange={this.onGenderChange}
              allowClear
            >
              <Option value="成都">成都</Option>
              <Option value="北京">北京</Option>
              <Option value="西安">西安</Option>
            </Select>
          </Form.Item>
          {/* <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
          >
            {({ getFieldValue }) => {
              return getFieldValue('gender') === 'other' ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              ) : null;
            }}
          </Form.Item> */}
          <Form.Item name="floor" label="所属楼层" rules={[{ required: true }]}>
            <Input placeholder={this.state.name} onBlur={(e) => this.blurFN(e)}/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
    )
  }
  changeFn = (e)=> {
    const newPerdata = this.state.perdata
    newPerdata.name = e.target.value
    this.props.changeData(newPerdata)
  }
  blurFN = (e)=> {
    const newPerdata = this.state.perdata
    newPerdata.name = e.target.value
    this.setState({
      perdata: newPerdata
    })
  }
  onGenderChange = (e) => {
    const newPerdata1 = this.state.perdata
    newPerdata1.area = e
    this.setState({
      perdata: newPerdata1
    })
  };
  editRoom() {
    console.log(this)
  }
  okFn(ste) {
    const { perdata } = this.state
    this.props.hasData(perdata)
    this.props.onClicked(ste);
  }
  setVisible(ste) {
    this.props.onClicked(ste)
    // console.log(this.state.visibles)
    // this.setState({
    //   visibles: ste
    // }, () => {
    //   console.log(this.state.visibles)
    // })
    // console.log(this.state.visibles)
  }
}

{/* <style lang='less'>
  .roomList {
     width: '300px';
     height: '280px';
     padding: '10px';
     marginRight: '20px';
     marginBottom: '20px';
     background: '#fff';
  }
</style> */}


export default MainShow