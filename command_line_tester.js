#!/usr/bin/env node

var HTMLFILE_DEFAULT = "index.html";
var CHECKSFILE_DEFAULT = "checks.json";
var URLFILE_DEFAULT = "http://127.0.0.1:5000";

var program = require('commander');
var fs = require('fs');

var assertFileExists = function(infile) {
    var instr = infile.toString();
    if(!fs.existsSync(instr)) {
        console.log("%s does not exist. Exiting.", instr);
        process.exit(1); // http://nodejs.org/api/process.html#process_process_exit_code
    }
    return instr;
};

// Since there are default values program.file and program.url always turn true
    program
        .option('-c, --checks <check_file>', 'Path to checks.json', assertFileExists, CHECKSFILE_DEFAULT)
        .option('-f, --file <html_file>', 'Path to file to check', assertFileExists, HTMLFILE_DEFAULT)
        .option('-u, --url <url_to_check>', 'URL path to file to check')
        .parse(process.argv);
    
    if (program.url){
      console.log("checking URL");
      console.log(program.url);
    } 

    else if (program.file){
      console.log("checking file");  
      console.log(program.file);
    }
    
    console.log("\n\nGENERAL TEST");
    console.log("File: ",  program.file);
    if (program.url) {console.log("URL: ", program.url);}
    console.log("Checkfile :", program.checks);
