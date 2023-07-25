const E = require('express');
const stop = E.Router();
const mongo = require('mongoose');
const fs = require('fs');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');

//maybe teh vars below are appart of nessisary PsonModule?
var SHHH = require('../SecretStuff/passwords')
var root = SHHH.root
const psonTempTag = '-temporary-destroy-after-send-with-psonDestroy-function.json'

const ShowLogs = true; //change to false to tun off console logs

stop.use(E.json());
stop.use(E.urlencoded({extended: true}));



stop.get('/', (req, res) => {
    res.send("This is Home!");
});


stop.get('/KotlinTestLake', async (req, res) => {
    /*
    finds the KotlinTesterLake file, 
    Looks for the TemporaryVersion of the file
    if it is not there 
    it: Copies the txt version of the file,
    makes a new copie but now it has a json version, 
    then closes off the json with a ']' to remove the errors.
    and tells the users to request again.

    if it is there,
    it:
    sends the temporary version of the file, 
    then destroys the temprrayr version of the file
    
    cleanPath is needed for res.sendFile beacsue it needs an absolute directpry
    path is the origional path with ./ in front to navagate within the project
    naked path is a version of path but with the .txt removed so teh temp tags can be appeneded
   
   moght be faster in teh future, to send the og txtx file, and on teh client side, endit and turn it into json.
   but then ytehy would have to have teh pson library too...
   maybe there is a beter way to add to a json file insteard of modifying, and tehn confertinga txt file
    */

    const a = true
    var readytosend = false
    const path = "./DataLake/KotlinTestingLake.txt"
    const cleanPath = '/DataLake/KotlinTestingLake'
    const nakedPath = "./DataLake/KotlinTestingLake"
         if(fs.existsSync(nakedPath+psonTempTag)){
            res.sendFile(root+cleanPath+psonTempTag);
            psonDestroy(nakedPath+psonTempTag)
        } else {
            txtToPson(path,nakedPath)
            res.send('Still just a txtx file, try again in a few moments')
        }

    

     
    say(":: STopped at: KotlinTestLake-GET")
});
function KotlinTestLake(){

}
async function _KotlinTestLake(path){

    
}




stop.get('/food', async (req, res) => {
    food();const x = await _async(_food())


    res.send('::_A Burrito has been given to you_');
    say("A car (api user) made a stop at 'food' in your home!");
    say("::-Burrito-"); 

});
function food(init){
    rec = init
}

function _food(){

    
}


stop.post('/food', async (req, res) => {
    const body = JSON.stringify(req.body);
    console.log(body)
    food(body);
    const x = await _async(_food(body))
    
    res.send(`::data received:: \n x \n ${body} `);
    

});
function food(init){
    rec = init
}

function _food(newdata){
    let lastdataHolder = "NULL"
    let y = "NOPE"

    fs.appendFile('./DataLake/TestLake-Pson-DevForApi.txt', ","+"\n"+newdata, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });  
}








async function _async(guest_function, location){
    try{
        return guest_function
     } catch (err) {
         console.log(`Error in app-home at stop: ${location}`, err.message);}
}

function say(s){
    if(ShowLogs){console.log(s);}
}


async function txtToPson(path,nakedPath){
    
    fs.copyFile(path, nakedPath+psonTempTag,function (err) {
        if (err) throw err;
        console.log('Renamed: '+path+'to json file');
        fs.appendFile(nakedPath+psonTempTag, "\n ]", function (err) {
        if (err) throw err;
        console.log('Pson:-txtToPson-: Finished Json file. Saved!');
        return true
      }); 
    });
      
}

async function psonDestroy(path){
    fs.rm(path, function(err,data){
        console.log('Pson:-psonDestroy-: File '+path+' was sucessfully destroyed')
    })
}


async function psonGet(path) {
    fs.readFile(path, { recursive:true }, function(err,data){
        return data.toString()
    })
}

module.exports = stop