


function txtToPson(path){
    fs.appendFile(path, "\n ]", function (err) {
        if (err) throw err;
        console.log('Saved!');
      });  

}
module.exports=txtToPson