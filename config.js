
module.exports = {
    mysql:{
        
        host     : process.env.RDS_HOSTNAME,
        user     : process.env.RDS_USERNAME,
        password : process.env.RDS_PASSWORD,
        port     : process.env.RDS_PORT,
        database: 'Mysql_finpal'
        /*
        host: 'localhost',
        user: 'root',
        password: '90719439swJ!',
        port: 3306,
        database: 'client'
        */
    }
}

