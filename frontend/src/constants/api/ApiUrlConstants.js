import { getbaseUrl } from "../environment/Environments";

const baseUrl = getbaseUrl("Dev")

export const URL = {

    login: baseUrl + 'user/login',

    // members module api's 

    getAllMembersRecords : baseUrl + 'users/all',
}