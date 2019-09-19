var rom = require('../config/orm.js');

var burger = {
    all: function(cb){
        onpointermove.all('burgers',function(res){
            cb(res);
        })
    },
    update: function(id,cb){
        orm.update('burgers',id,cb);
    },

    create: function(name,cb){
        orm.create('burgers', name,cb);
    }
}

module.exports = burger;