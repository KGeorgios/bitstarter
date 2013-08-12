#!/usr/bin/env node

var HTMLFILE_DEFAULT = "index.html";
var CHECKSFILE_DEFAULT = "checks.json";
var URLFILE_DEFAULT = "http://127.0.0.1:5000";

var program = require('commander');
// The default values make program.file and program.url always true
    program
        .option('-c, --checks <check_file>', 'Path to checks.json', CHECKSFILE_DEFAULT)
        .option('-f, --file <html_file>', 'Path to file to check', HTMLFILE_DEFAULT)
        .option('-u, --url <url_to_check>', 'URL path to file to check', URLFILE_DEFAULT)
        .parse(process.argv);
    
    if (program.file){
      console.log("checking file");  
      console.log(program.file);
    }
    if (program.url){
      console.log("checking URL");
      console.log(program.url);
    } 
    console.log("\n\nGENERAL TEST");
    console.log("File: ",  program.file);
    console.log("URL: ", program.url);
    console.log("Checkfile :", program.checks);
