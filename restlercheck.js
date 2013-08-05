#!/usr/bin/env node

//restler check program
var rest = require('restler');
var dns = require('dns');

var url='http://www.goggle.com';


rest.get(url).on('complete', function(result, response) {
    //console.log(response);
    if (result instanceof Error) {
      console.log('Error: ' + result.message);
      process.exit(1);
    } else {
      console.log(result)
      process.exit(1);
    }
  });
console.log("This will print while the webpage is being fetched unless the URL fetch is finished already.");
