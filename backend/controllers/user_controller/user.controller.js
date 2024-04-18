const { auth_collection } = require("../../models");
const { user_services } = require("../../services");


const get_all_users = async (req, res) => {
    try {
        const users = await user_services.find_all_users();
        if (users) {
            res.send({
                success: true,
                data: users
            })
        }
        else {
            res.send({
                data: [],
                success: false,
                message: "Failed to fetch users."
            })
        }
    }
    catch (error) {
        res.send({
            data: [],
            success: false,
            message: "Failed to fetch users.",
        })
    }
}


const get_user_by_id = async (req, res) => {
    try {
        const user = await user_services.find_user_by_param_id(req);
        if (user) {
            res.send({
                success: true,
                data: user
            })
        }
        else {
            res.send({
                data: {},
                success: false,
                message: "Failed to fetch user.",
            })
        }
    }
    catch (error) {
        res.send({
            data: {},
            success: false,
            message: "Failed to fetch user.",
        })
    }

}


module.exports = {
    get_all_users,
    get_user_by_id
}