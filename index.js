var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var R = require('ramda');

// Read the JSON file into the server side.  This is done
// first so that it is only performed once per call,
// and so the resulting data can be easily distributed

fs.readFile('data.json', 'utf8', function(err,elsv) {
   if (err) throw err;
   publications = JSON.parse(elsv).worksById; //Parse the publications level of the JSON.
   ids = R.keys(publications); //Return a list of the IDs, for use in generating the list.
   catalogue = R.map(function(id) { //This selects only the name/value pairs that we're interested in from the JSON.
     var pub = publications[id];
     return {
       title: R.path(['Title', 'TitleText'], pub), //This function returns the given name/pair value from the selected object
       language: R.path(['Language', 'LanguageCode'], pub),
       contributor1: R.path(['Contributor','NamesBeforeKey'], pub),
       contributor2: R.path(['Contributor','KeyNames'], pub),
       publisher: R.path(['Publisher',], pub),
       publicationDate: R.path(['PublicationDate',], pub),
   };
 }, ids); //Returns the data for the list of IDs in the JSON file

//This module sends the selected name/values to the browser
  app.get('/', function (req, res) {
      res.json(catalogue);
    }
  );

//This enables the API to serve CSS, JS, etc
app.use(express.static('public'));

//This middleware loads the customers1.htm file,
app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/customers1.htm');
});

//
  app.listen(3000, function () {
     console.log('Example app listening on port 3000!')
  })
})
