const express = require("express");
const router = express.Router();
const auth_routes = require("./auth.routes");



const routes = [
    { path: "/user", route: auth_routes }
]

routes.map((r) => [
    router.use(r.path, r.route)
])

module.exports = router;