const E = require('express');
const stop = E.Router();
const mongo = require('mongoose');
const fs = require('fs');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');

const ShowLogs = true; //change to false to tun off console logs

stop.use(E.json());
stop.use(E.urlencoded({extended: true}));



stop.get('/', (req, res) => {
    res.send("This is Home!");
});




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

    //place for async code needed for food-stop
    
}


stop.post('/food', async (req, res) => {
    const body = JSON.stringify(req.body);
    console.log(body)
    //havng trougble turnig the post body into a string that can be uplodaed to teh Data lake. 
    //ONce YOu do that, see if you can retrieve the entire file 
    // with a seperate get request. /showdata
    // Onec yuo can do post and get requests, 
    // maybe try to fork this on git ub and get it to also run on an EC2
    food(body);
    const x = await _async(_food(body))
    
    res.send(`::data received:: \n x \n ${body} `);
    

});
function food(init){
    rec = init
    //console.log(rec + "NOT ASYNC")
}

function _food(newdata){
    //console.log(data + " Async")
    let lastdataHolder = "NULL"
    let y = "NOPE"

    fs.appendFile('./DataLake/TestLake-Pson-DevForApi.txt', ","+"\n"+newdata, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

    /*

    fs.readFile('./DataLake/data-app-home.txt', (err, olddata) =>{
        if(err) throw err;
            y = olddata + data
            fs.writeFile('./DataLake/data-app-home.txt', y+"\n", err =>{
                if(err){
                    say("error at app-home/_food-POST")
                } else {
        
                }
            }) 


            say(x)
            say(y)
    }) 

    */

    
    //place for async code needed for food-stop
    
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
module.exports = stop