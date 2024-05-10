const express = require("express");
const route = express.Router();
const os = require("os")
const { auth_controller } = require("../../controllers")

route.post("/register", auth_controller.register)
// route.post("/login",auth_controller.login)
route.post("/login", function (req, res) {
    const networkInterfaces = os.networkInterfaces();
    const serverIPs = [];
    Object.keys(networkInterfaces).forEach((interfaceName) => {
        const networkInterface = networkInterfaces[interfaceName];
        networkInterface.forEach((address) => {
            if (address.family === 'IPv4' && !address.internal) {
                serverIPs.push(address.address);
            }
        });
    });

    res.json({ serverIPs });
})

module.exports = route;