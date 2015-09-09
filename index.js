var im = require('./libs/imagemagick')
    , request = require('./libs/request')
    , feed_root = 'http://xkcd.com/info.0.json'
    , cache_hash = new Array();

exports.get_random = function(callback) {
  request({uri: feed_root}, function(err, response, body){
    var parsed_response;
    try{
      parsed_response = JSON.parse(response.body);
    } catch (err) {
      console.error("error parsing json from xkcd");
    }
    var max_num = parsed_response.num;
    var num=Math.floor(Math.random()*max_num);
    var feed_link = feed_root.replace(/com\/info/,'com/'+num+'/info');
    request({uri: feed_link}, function(error, res, bd){
      try {
        var parsed_res = JSON.parse(res.body);
        callback(parsed_res);
      } catch(err) {
        console.error(err);
      }
    });
  });  
};

