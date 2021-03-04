const Koa = require('koa')

const router = require('koa-router')()

const app = new Koa()
const fs = require('fs')

const koaStatic = require('koa-static');
app.use(koaStatic(__dirname, '/static'));
const cors = require('koa-cors') 
const mongoDB = require('mongodb');
const bodyParser = require('koa-bodyparser')
const mongoDBClient = mongoDB.MongoClient;
const WEN = 'mongodb://localhost:3333/wen';
app.use(cors())
app.use(bodyParser())
// // 2.x.x
// mongoDBClient.connect(WEN, { useUnifiedTopology: true }, (err, db) => {
//   if (err) {
//     throw new Error (err);
//   }
//   db.collection('myWen').updataOne({
//     greeting: "太难了，我哭了"}, {
//       $set : {greeting: '哭了'}
//     }),
//     (errs, res) => {
//       if (errs) {
//         throw new Error (errs);
//       }
//       return res
//     }
//     db.close()
// })


// // 3.x.x
// mongoDBClient.connect(WEN, { useUnifiedTopology: true }, (err, clinet) => {
//   if (err) {
//     throw new Error (err);
//   }
//   const db = clinet.db('wen');
//   db.collection('myWen').find({
//     $or: [
//       {key1: '乖'}, {key2: '继续写' }
//     ],
//     }, { name : { $regex: '哈哈' }
//   }),
//   (errs, res) => {
//     if (errs) {
//       throw new Error (errs);
//     }
//     return res
//   }
//   db.close()
// })
let wenClinet // 数据库链接变量
mongoDBClient.connect(WEN, {useUnifiedTopology:true}, (err, clinet) => {
  if(err) throw new Error(err)
  const db = clinet.db('wen');
  wenClinet= db.collection('data_wen')
})

const addFN = (param) => {
  wenClinet.insertOne(param)
}

const getFn = async () => {
  const data = await wenClinet.find({}).toArray();
  return data
}

router.get('/room/getAll', async (ctx, next) => {
  const data = await getFn();
  ctx.body = data;
  next()
})

router.post('/room/addData', async(ctx, next) => {
  debugger;
  console.log(ctx.request.body)
  const param = ctx.request.body
  ctx.body = { code: 0 }
  addFN(param)
})
// router.post('room/getAll', async () )
app.use(router.routes());

/*
* fs 创建文件
* 
*/
// fs.mkdir('./html', (err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('创建成功')
// })

/*
* 
*
*/
// fs.stat('app.js',(err, data)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data.isFile())
//   console.log(data.isDirectory())
// })

/*
* fs 创建写入文件
* 不存在就创建生成
* 存在就覆盖
*/
// fs.writeFile('./css/css.css', 'hah' , (err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
// })

/*
* fs 追加文件
*/
// fs.appendFile('./css/css.css', 'h1{color:red}\n' , (err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
// })

/*
* fs 读取文件
*/
// fs.readFile('./css/css.css', (err,data)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data.toString())
// })

/*
* fs 读取目录
// */
// fs.readdir('./css/', (err,data)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

// /*
// * fs 重命名
// * 功能1：重命名 功能2：移动
// */
// fs.rename('./css/css1.css', './html/css1.css', (err,data)=>{
//   if(err){
//     console.log(err)
//     return
//   }
// })



/*
* 删除目录
*/
// fs.unlink('./html/css1.css', (err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
// })
/*
* 删除目录
*/
// fs.rmdir('./html', (err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
// })
app.listen(3002, () =>{
  console.log('23231111')
})