// importar dependência do sqlite
const sqlite3 = require("sqlite3").verbose() // verbose retorna mensagens da conexão

// criar o objeto que irá fazer operações no db
const db = new sqlite3.Database("./src/database/database.db")
