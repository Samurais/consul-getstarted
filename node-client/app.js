var consul = require('consul')({host: '127.0.0.1', port: 8500});


consul.agent.service.list(function(err, result) {
  if (err) throw err;
  console.log(JSON.stringify(result));
});
