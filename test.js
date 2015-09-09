var xkcd = require('./index')
  , util = require('util');

xkcd.get_random(function(res) {
  util.puts(res.img);
});
