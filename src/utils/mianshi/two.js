import React from 'react';

// 组件属性定义（可以自行扩展）:
interface InputProps {
  // 当前的 value 值
  value: string;
  // 初始化的 value 值
  defaultValue?: string;
  // 发生改变的时候触发的回调
  onChange?: (value: string) => any;
  // 最大长度
  maxLength?: number;
}


export default Input extends React.component {
  state = {
    showText: '',
    allAllow: 10,
    nowTextNum: 0,
  }
  render() {
    return (
      <div style={{borderRadius:'5px', borderColor:'#666',width: '300px', height: '80px', padding: '20px 18px'}}>
        <input style={{fontSize: '28px', color: '#000'}} onkeydown={() => this.keyDownFn()} />
          {showText}
        <span style={{fontSize: '20px', color: '#666'}}>
          {showText}/{allAllow}
        </span>
      </div>
    )
  }
  
  keyDownFn(e) {
   const val = e.target.value;
    const nowLen = val.length;
    this.setState ({
      showText: nowLen
    })
  }
}
// 请实现 (class 方式 和 hook 方式二选一)
// 组件样式可以略过，但是要有合理的 DOM 结构