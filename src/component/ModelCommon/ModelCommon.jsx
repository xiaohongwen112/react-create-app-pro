import React, { Component } from 'react'
import { Layout, Menu, Input, Button, Modal  } from 'antd';
class MainShow extends Component {
  deleteFn() {

  }

  editFn() {

  }
  // state = {
  //   visibles : this.props.visible
  // }
  render() {
    const { visible } = this.props
    return(
    <div>
        <Modal
        title="新增机房"
        centered
        visible={visible}
        onOk={() => this.setVisible(false)}
        onCancel={() => this.setVisible(false)}
        width={520}
        height={500}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
    )
  }
  editRoom() {
    console.log(this)
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