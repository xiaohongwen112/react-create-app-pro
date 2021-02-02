const cluster = require('cluster');

const http = require('http');

const numCups = require('os').cpus().length;
console.log(1)
if(cluster.isMaster) {
  console.log(`主进程${process.pid}is running`);
  // 衍生工作进程
  for(let i = 0; i< numCups; i++) {
    cluster.fork();
  }
  // for (var id in cluster.workers) {
  //   cluster.workers[id].on('message', function(msg){
  //       console.log('[master] ' + 'message ' + msg);
  //   });
  // }

  // setTimeout(function () {
  //     for (var id in cluster.workers) {
  //         cluster.workers[id].send('[master] ' + 'send message to worker' + id);
  //     }
  // }, 3000);

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程${worker.process.pid} has exited`)
    console.log(code, signal)
  })
} else {
// Workers can share any TCP connection
  // In this case it is an HTTP server
  const apps = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('1234');
  })
  apps.listen(3004)
  console.log(`工作进程 ${process.pid} 已启动`);
}


