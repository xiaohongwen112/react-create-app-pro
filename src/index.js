import ReactDOM from "./react/react-dom";

const jsx = (
  <div>
    <h1 style={{margim: '10px'}}>1234</h1>
    <h1 className='wemwem'></h1>
    <a href="www.baidu.com">
      跳转百度
    </a>
  </div>
);

ReactDOM.render(jsx, document.getElementById('root'));