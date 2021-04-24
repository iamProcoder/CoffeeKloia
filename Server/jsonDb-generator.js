const Coffee = require("./models/Coffee");
const fs = require("fs");
const connectDatabase = require("./helpers/connectDatabase");

const dotenv = require("dotenv");

const path = "./dummy/";

const coffees = JSON.parse(fs.readFileSync(path + "coffees.json" ));

dotenv.config({
    path : "./config/config.env"
});

connectDatabase();

const importAllData = async function(){
    try {
        await Coffee.create(coffees);
        console.log("Import Process Successful :)");

    }   
    catch(err) {
        console.log(err);
        console.err("There is a problem with import process");
    }
    finally {
        process.exit();
    }
};

const deleteAllData = async function(){
    try {
        await Coffee.deleteMany();
        console.log("Delete Process Successful");


    }   
    catch(err) {
        console.log(err);
        console.err("There is a problem with delete process");
    }
    finally {
        process.exit();
    }
};

if (process.argv[2] == "--import"){
    importAllData();
}
else if (process.argv[2] == "--delete"){
    deleteAllData();
}
