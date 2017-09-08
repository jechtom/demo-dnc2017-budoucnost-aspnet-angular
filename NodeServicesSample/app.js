module.exports = function (callback) {
    var request = require('request');
    request('http://loripsum.net/api', function (error, response, body) {
        callback(null/*error*/, body);
    });
}