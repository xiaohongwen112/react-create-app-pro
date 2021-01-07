/*
* vnode 虚拟dom节点
* node dom节点
*/
function render(vnode, container) {
  console.log(vnode)
  const node = createNode(vnode)
  container.appendChild(node)
}

function isStringOrNumber(sth) {
  return typeof sth === 'string' || typeof sth === 'number'
}

//根据虚拟dom节点，生成真实的dom节点 
function createNode(vnode) {
  let node;

  const { type } = vnode instanceof Object ? vnode : {};
 
  if(typeof type === 'string') {
    node = updateHostComponent(vnode)
  } else if (isStringOrNumber(vnode)){
    // 文本节点 不存在 type 且 vode传入的为文本
    node = updateTextComponent(vnode);
  }
  return node
}

function updateTextComponent(vnode) {
  return document.createTextNode(vnode)
}

function updateHostComponent (vnode) {
  const { type, props } = vnode
  // 根据type类型创建真实dom
  const node = document.createElement(type);
  updateNode(node, props);
  if(props.children) reconcileChildren(node, props.children)
  return node
}

function updateNode(node, nextVal) {
  (Object.keys(nextVal)
    .filter(
    e => e !== "children") || [])
      .forEach(k => {
      node[k] = nextVal[k];
  });
}

function reconcileChildren(parentNode, childern) {
  const newChildern = Array.isArray(childern) ? childern : [childern];
  for(let i = 0; i < newChildern.length; i++) {
    let child = newChildern[i];
    render(child, parentNode);
  }
}
//  <h1 style={{margim: '10px'}}>1234</h1>
// h1 为 元素节点
// style 为属性节点
// 1234 为 文本节点

export default {render}