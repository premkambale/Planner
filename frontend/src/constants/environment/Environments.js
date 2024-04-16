const environments = {
    Dev :'http://localhost:5500/',
    UAT :'UAT',
    Prod:'Prod',
}


export const getbaseUrl = (env) => {
    return environments[env]
}

