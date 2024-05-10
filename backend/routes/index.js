const express = require("express");
const router = express.Router();
const auth_routes = require("./auth_routes/auth.routes");
const user_routes = require("./user_routes/user_routes");
const project_routes = require("./project_routes/project.routes")



const routes = [
    { path: "/user", route: auth_routes },
    { path: "/users", route: user_routes },
    { path: "/projects", route: project_routes }
]

routes.map((r) => [
    router.use(r.path, r.route)
])

module.exports = router;