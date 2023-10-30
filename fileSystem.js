const fs=require('fs');

const filePath="example.txt";

fs.access(filePath,fs.constants.F_OK,(err)=>{
    if(err)  {
        console.error("File does not exists")
    }
    console.log("File exists");

})

fs.open(filePath,'r',(err)=>{
    if(err) throw err;
    console.log("File Opend successfully");
})


fs.appendFile(filePath,"Rajan Is king",(err)=>{
    if(err) throw err;
    console.log("Appended successfully");
})

fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

fs.unlink(filePath,(err)=>{
    if (err) throw err;
    console.log("Deleted successfully");
})

const newFile="exam.txt";

fs.copyFile(filePath,newFile,(err)=>{
    if(err) throw err;
    console.log("Copied Successfully");
})
