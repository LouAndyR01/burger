    // dependencies needed //
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };

      res.render("index", hbsObject);
    });
  });

    // add new burger to the database //
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
       
        res.json({ id: result.insertId });
    });
});

    // change status of burger //
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

    // delete burger from database //
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
           
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;

