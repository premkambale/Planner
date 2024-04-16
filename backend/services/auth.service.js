const { auth_collection } = require("../models");
const bcrypt = require("bcrypt");


const is_user_registered = async (req) => {
    const user = await auth_collection.findOne({ email: req.body.email });
    return user ? true : false;
}

const find_user = async(req) => {
    return await auth_collection.findOne({ email: req.body.email });
}

const hash_password = (password) => {
    return bcrypt.hash(password, 10);
}

const validate_passsword = (password, saved_password) => {
    return bcrypt.compare(password, saved_password);
}

module.exports = {
    is_user_registered,
    find_user,
    hash_password,
    validate_passsword
}