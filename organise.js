
let fs=require("fs");
let path=require("path");


function organiseFn(dirPath){
    //console.log("organise command emplemented for ",dirPath);
    //1. input->directory path given
    let destPath;
    if(dirPath==undefined)
    {
        //console.log("kindly enter the path");
        destPath=process.cwd();
        return;
    }
    else{
        let does=fs.existsSync(dirPath);
        if(does){
            //2. create ->organised files ->directory
            destPath=path.join(dirPath,"organized_files");
            if(fs.existsSync(destPath)==false)
                fs.mkdirSync(destPath);
        }
        else{
            console.log("kindly enter the path");
            return; 
        }
    }


    organiseHelper(dirPath,destPath);

    
    
}


function organiseHelper(src,dest){
    //3. check all files->identify category of all the files present in that directory
    let childname=fs.readdirSync(src);
    //console.log(childname);
    for(let i=0;i<childname.length;i++)
    {
        let childaddress=path.join(src,childname[i]);
        let isfile=fs.lstatSync(childaddress).isFile();
        if(isfile){
            //console.log(childname[i]);
            let category=getCategory(childname[i]);
            console.log(childname[i]," belongs to ",category);
            //4. copy/cut files to that organised directory inside of any category folder
            sendFiles(childaddress,dest,category);
        }
    }

}

function sendFiles(srcfilepath,dest,category){
    let categorypath=path.join(dest,category);
    if(fs.existsSync(categorypath)==false){
        fs.mkdirSync(categorypath);
    }
    let filename=path.basename(srcfilepath);
    let destfilepath=path.join(categorypath,filename);
    fs.copyFileSync(srcfilepath,destfilepath);
    fs.unlinkSync(srcfilepath);
}


function getCategory(name){
    let ext=path.extname("name");
    ext=ext.slice(1);//remove dot
    for(let type in types)
    {
        let currtype=types[type];
        for(let i=0;i<currtype.length;i++){
            if(ext==currtype[i])
            {
                return type;
            }
        }
    }
    return "others";
}

module.exports={
    organiseKey: organiseFn
}