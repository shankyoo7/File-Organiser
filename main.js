#!/usr/bin/env node


//shebang syntax




let inputArr=process.argv.slice(2);

console.log(inputArr);

let fs=require("fs");
let path=require("path");

let helpObj=require("./help");
let treeObj=require("./tree");
let organiseObj=require("./organise");

// node main.js tree "directory path"
//node main.js organise "directory path"
//node main.js help

let command=inputArr[0];



let types={
    media:["mp4","mkv"],
    archives: ["zip","rar"],
    documents:["docx","txt"],
    app:["exe","pkg"]
}



switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organise":
        organiseObj.organiseKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("INvalid command ");
        break;
}






