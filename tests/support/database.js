const { Pool } = require('pg')

const DbConfig = {
    user: 'pgcjoava',
    host: 'isabelle.db.elephantsql.com',
    database: 'pgcjoava',
    password: '2nXxUjpGgk3B-BP0L-_6N6fzP2tqzw-e',
    port: 5432
}

export async function executeSQL(sqlScript) {

    try {
        const pool = new Pool(DbConfig)
        const client = await pool.connect()

        const result = await client.query(sqlScript)
        console.log(result.rows)
    } catch (error) {
        console.log('Erro ao executar SQL ' + error)
    }
}