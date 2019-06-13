    // requiring dependency //
var mysql = require("mysql");

    // create the connection to the database // 
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

    // this will let me know if this is connected //
connection.connect(function(err) {
    if(err) {
        console.log ("not connected: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
    // exporting the module //
module.exports = connection; 