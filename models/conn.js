const host = "lallah.db.elephantsql.com";
const database = "ctrxmeus";
const user = "ctrxmeus";
const password = "Fh5ibR-v7xzDPT6PsLHDqVzMgcMC4sAL";

// can use this for almost all pgp's
const pgp = require('pg-promise') ({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);
module.exports = db;
