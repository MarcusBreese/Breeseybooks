# Breeseybooks
Hello World
Welcome to the source code for the Breesey Books repository.  The intended functionality behind this application is to act as a front end for a collection of books from the Elsevier Product Catalogue, taken from a file that is offering a wealth of data, most of which we do not need.  There is more detailed information on the functionality of the files written in comments, and any further questions should be directed to marcusbreese@gmail.com.  

The app is split into x sections:

1. index.js: index.js is an Express Node.js application that acts as an API.  It acts as the interface between the JSON file and the front end, parsing the entire contents of the file and extracting only fields relevant to the product catalogue.  It then bundles them up and keeps them ready to be served to the front end.  It also acts as a launcher for the front end, as well as associated static files.  

2. data.json: The provided data file that contains the product catalogue, amongst other bits of information.  This file has been untouched from the file provided by Elsevier, 

3. customers1.htm: This file acts as the front end for the app.  It contains some HTML for presentation, and two JS/Jquery scripts: one that passes the JSON data into the file and transform it into a neat HTML table, and a further script that powers the dynamic table search engine

4. style.css - contains styling for the page and the table.  Kept separate 
