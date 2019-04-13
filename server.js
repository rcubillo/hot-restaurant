var tablesArray = require("./data/tables.js")

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
    //return res.json(reservations);
})

// posting reservation 

app.post("api/reservations", function(req, res){

    var newRes = req.body; 

    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
    
    console.log(newRes);
    tablesArray.push(newRes);
    res.json(newRes);

});
app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });




