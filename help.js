function helpFn(){
    console.log(`
    List of All the commands:
            node main.js tree "directory path"
            node main.js organise "directory path"
            node main.js help
    `);
}

module.exports={
    helpKey:helpFn
}