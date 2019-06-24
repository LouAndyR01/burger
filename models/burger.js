var orm = require('../config/orm.js');

        // create the burger var and export and cb orms //
var burger = {

        // display the burgers in the database //
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

        // adding burger//
    insertOne: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals,  function(res) {
            callback(res);
        });
    },

        // devoured burger //
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    },

        // deletion of the burger //
    deleteOne: function(condition, callback) {
        orm.deleteOne("burgers", condition, function(res) {
            callback(res);
        });
    }
};

module.export = burger;