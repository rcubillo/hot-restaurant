var tablesArray = require("./data/tables.js")
var waitlistArray = require("./data/waitlist.js")

var express= require("express");
var path = require("path");

var app = express();
var port = process.env.port || 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//var reservations = [];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/index", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/api/tables", function(req, res){
    res.json(tablesArray);
})

app.get("/api/waitlist", function(req, res){
    res.json(waitlistArray);
})

// posting reservation 

app.post("/api/reservations", function(req, res){

    var newRes = req.body; 

    if (tablesArray.length < 5) {
        // console.log("Adding", newRes, "to tablesArray.");
        tablesArray.push(newRes);
        // console.log(tablesArray);
        res.json(true);
    } else {
        // console.log("Adding", newRes, "to waitlistArray.");
        waitlistArray.push(newRes);
        // console.log(waitlistArray);
        res.json(false);
    };

});
app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });




