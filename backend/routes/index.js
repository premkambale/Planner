const express = require("express");
const router = express.Router();
const auth_routes = require("./auth_routes/auth.routes");
const user_routes = require("./user_routes/user_routes")



const routes = [
    { path: "/user", route: auth_routes },
    { path: "/users", route: user_routes }
]

routes.map((r) => [
    router.use(r.path, r.route)
])

module.exports = router;