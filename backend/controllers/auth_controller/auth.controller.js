
const { auth_services} = require("../../services")
const { auth_collection } = require("../../models")
const jwt = require("jsonwebtoken")

// --------------------------------------------------------------Register User-------------------------------------------------------------------
const register = async (req, res) => {
    const is_user_registered = await auth_services.is_user_registered(req);

    if (is_user_registered) {
        return res.status(409).send({ message: "User has already been registered.", success: false })
    }

    const payload = { ...req.body };
    payload.password = await auth_services.hash_password(payload.password);

    const new_user = new auth_collection(payload);

    try {
        await new_user.save();
        res.send({
            message: "User registered successfully.",
            success: true
        })
    }
    catch (error) {
        res.send({ message: "Failed to register user.", success: false })
    }
}



// --------------------------------------------------------------Login User-------------------------------------------------------------------
const login = async (req, res) => {
    const user = await auth_services.is_user_registered(req);

    if (user) {
        const registered_user = await auth_services.find_user(req);
        const mathedPassword = await auth_services.validate_passsword(req.body.password, registered_user.password);
        if (mathedPassword) {
            const token =  jwt.sign({ userId: registered_user._id, access_role: registered_user.role }, process.env.SECRETE)
            res.send({
                message: "Login Successfull.",
                success: true,
                token: token,
                role: registered_user.role
            })
        }
        else {
            res.send({
                message: "Invalid credentials.",
                success: false
            })
        }
    }
    else {
        res.send({
            message: "User has not been registered yet.",
            success: false
        })
    }
}

module.exports = {
    register, login
}