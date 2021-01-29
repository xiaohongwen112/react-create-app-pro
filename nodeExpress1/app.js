const Koa = require('koa')

const router = require('koa-router')()

const app = new Koa()

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
let wenClinet
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
  ctx.body = { code: 0}
  addFN(param)
})
// router.post('room/getAll', async () )
app.use(router.routes());

app.listen(3002, () =>{
  console.log('23231')
})