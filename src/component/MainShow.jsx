import React, { Component } from 'react'
import imgURL from '../../public/img/jifang.png';
import { Radio, Button, Menu, Dropdown} from 'antd';
import history from '../utils/history';
class MainShow extends Component {
  deleteFn() {

  }

  editFn() {

  }
  render() {
    const styles = {
      roomList: {
        width: '300px',
        height: '280px',
        padding: '10px',
        marginRight: '20px',
        marginBottom: '20px',
        background: '#fff',
        float: 'left',
        margin: '10px 14px',
      },
      img: {
        width: "100%"
      },
      preBnt: {
        width: '100px',
        heoght: '30px',
        textAlign: 'center',
        margin: '0',
        lineHeight: 'normal',
        padding: '7px 16px',
        clear: 'both',
        color: '#515a6e',
        fontSize: '14px!important',
        whiteSpace: 'nowrap',
        listStyle: 'none',
        cursor: 'pointer',
        transition: 'background .2s ease-in-out',
      }
    }  
    const {name, area} = this.props
    const menu = (
      <Menu>
        <Menu.Item key="1"  onClick={() => this.deleteFn} style={styles.preBnt}>
          删除
        </Menu.Item>
        <Menu.Item key="2" onClick={() => this.editFn} style={styles.preBnt}>
          修改
        </Menu.Item>
      </Menu>
    )

    return (
      <div style={styles.roomList}>
        <img src={imgURL} style={styles.img}/>
        <div style={{width:"100%", height: '30px', lineHeight: '30px'}}>
          <span style={{float:"left", marginLeft: '10px'}}>{name}</span>
          <span style={{float:"right", marginRight: '10px'}}>{area}</span>
        </div>
        <div style={{width:"100%"}}>
          <Button value="large"  style={{float:"left", width: '105px', height: '28px'}} onClick={ ()=> this.editRoom()}>编辑机房</Button>
          <Button  style={{float:"left", marginLeft: '10px',width: '85px', textAlign:'center', height: '28px'}}>查看监控</Button>
          {/* <Button  style={{float:"left", marginLeft: '10px',width: '55px', height: '28px'}}>···</Button> */}
          <Dropdown trigger={['click']}  style={{float:"left", marginLeft: '10px',width: '55px', height: '28px', 'left': 'left: 450px;'}} overlay={menu}>
          <Button>
            ···
          </Button>
        </Dropdown>
        </div>
      </div>
    )
  }
  editRoom() {
    console.log(this)
    history.push("/edit")
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