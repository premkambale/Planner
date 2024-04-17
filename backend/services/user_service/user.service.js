const { auth_collection } = require("../../models");


const find_all_users = async () => {
return await auth_collection.find().select(['-projects','-password','-createdAt','-updatedAt','-__v']);
}


const find_user_by_id = async(req)=>{
    return await auth_collection.findOne({_id:req.params.userId})
}

module.exports = {
    find_all_users,
    find_user_by_id,

}