import { getbaseUrl } from "../environment/Environments";

const baseUrl = getbaseUrl("Dev")

export const urls = {

    login: baseUrl + 'user/login'
}