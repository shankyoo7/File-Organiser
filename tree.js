let fs=require("fs");
let path=require("path");

function treeFn(dirPath){
    //console.log("tree command emplemented for ",dirPath);
    if(dirPath==undefined)
    {
        //console.log("kindly enter the path");
        treeHelper(process.cwd(),"");
        return;
    }
    else{
        let does=fs.existsSync(dirPath);
        if(does){
            treeHelper(dirPath,"");
        }
        else{
            console.log("kindly enter the path");
            return; 
        }
    }
}


function treeHelper(dirPath,indent)
{
    //is file or folder
    let isFile= fs.lstatSync(dirPath).isFile();
    if(isFile){
        let filename=path.basename(dirPath);
        console.log(indent+"|----"+filename);
    }
    else{
        let dirname=path.basename(dirPath);
        console.log(indent+"^-----"+dirname);
        let children=fs.readdirSync(dirPath);
        for(let i=0;i<children.length;i++)
        {
            let childPath= path.join(dirPath,children[i])
            treeHelper(childPath,indent+"\t");
        }
    }
}


module.exports={
    treeKey: treeFn
}