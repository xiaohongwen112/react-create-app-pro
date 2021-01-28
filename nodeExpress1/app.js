const Koa = require('koa')

const router = require('koa-router')()

const app = new Koa()

const koaStatic = require('koa-static');
app.use(koaStatic(__dirname, '/static'));

const mongoDB = require('mongodb')
const mongoDBClient = mongoDB.MongoClient;
const WEN = 'mongodb://localhost:3333/wen';

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

mongoDBClient.connect(WEN, {useUnifiedTopology:true}, (err, clinet) => {
  if(err) throw new Error(err)
  addFN(clinet);
})

const addFN = (clinet) => {
  const db = clinet.db('wen');
  const wenData = db.collection('data_wen')
  wenData.insertOne({
      "username": "jmin",
      "age": 22,
      "sex": "男"
  })
}


router.get('/wen', async (ctx) => {
  console.log(ctx)
})

app.use(router.routes());



app.listen(3002, () =>{
  console.log('23231')
})