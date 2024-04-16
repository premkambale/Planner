const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv/config")
const app = require("./app");

var server;
const port = process.env.PORT || 5000;


// -------------------------------------------------------Connection for server and database----------------------------------------------
mongoose.
    connect(process.env.DBURL)
    .then((connectionResponse) => {
        if (connectionResponse) {
            console.log("DATABASE CONNECTED.".green)
            server = app.listen(port, () => { })
            if (port) {
                console.log(`SERVER STARTED ON ${port}`.green)
            }
            else {
                console.log(`FAILED TO START SERVER`.red)
            }
        }
    })


// -------------------------------------------------------------Uncaught Exceptions--------------------------------------------------------

const exit_handler = () => {
    if (server) {
        server.close();
        process.exit(1);
    }
    else {
        process.exit(1)
    }
}

process.on("uncaughtException",exit_handler);
process.on("unhandledRejection",exit_handler)