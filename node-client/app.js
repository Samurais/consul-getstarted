var consul = require('consul')({host: 'yap.cn.ibm.com', port: 8500});


consul.agent.service.list(function(err, result) {
  if (err) throw err;
  console.log(JSON.stringify(result));
});
