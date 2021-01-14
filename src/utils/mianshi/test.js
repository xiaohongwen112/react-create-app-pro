// interface TreeNode extends Record<string, any> {
//   id: number;
//   parentId: number;
//   name: string;
// }

/**
* @ param {Array} TreeNode 遍历节点  
*/
function printTree(list) {
  // 请实现此方法
  // 深度优先遍历算法
  const arr = [];
  const map = (obj) => {
    const newArr = [...arr];
    if (obj.parentId === 1) { // 第一层起点文件
      return
    } else {
      (arr || []).forEach((el, index) => {
        if (el.id === obj.parentId) {
          obj.class = el.class + 1;
          arr.splice(index + 1, 0 , obj)
          // 找位置插入，不能push
          // arr.push(obj) 
        }
      }) 
    }
    // arr.push(obj.parentId)
  }
  (TreeNode || []).forEach(child => {
    if(child.parentId === 0) {
      child.class = 0
      arr.push(child)
    }
    map(child)
  })
  console.log(arr)


  // 将arr 数据 按照class数字按 1 - N 缩进
  // showTree(arr);
}

function showTree(arr) {
  arr.forEach(item => {
    console.log(item)
    // const que = '&nbsp&nbsp&nbsp&nbsp';
    // console.log(`${que*item.class}${item.name}`)
  })
}

//============= 测试代码 ==============
const TreeNode = [
  { id: 1001, parentId: 0, name: 'AA' },
  { id: 1002, parentId: 1001, name: 'BB' },
  { id: 1003, parentId: 1001, name: 'CC' },
  { id: 1004, parentId: 1003, name: 'DD' },
  { id: 1005, parentId: 1003, name: 'EE' },
  { id: 1006, parentId: 1002, name: 'FF' },
  { id: 1007, parentId: 1002, name: 'GG' },
  { id: 1008, parentId: 1004, name: 'HH' },
  { id: 1009, parentId: 1005, name: 'II' },
];

printTree(TreeNode);