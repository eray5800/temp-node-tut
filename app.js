const {readFile,writeFile} = require('fs').promises


con
const start = async() =>{
    try {
       const firstFile = await readFile("./content/first.txt","utf-8");
       const secondFile = await readFile("./content/second.txt","utf-8");
       await writeFile("./content/zimbo.txt",`bu iki mesaj : ${firstFile},${secondFile}`)
    }
    catch(error){
        console.log(error);
    }
}

start();
