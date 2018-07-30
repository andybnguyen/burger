const connection = require('./connection.js');

const orm = {
}

orm.insertOne = (name, ifDevour) => {
    const query = "insert into burgers (burger_name, devoured) values (?, ?)";
    return connection.query(query, [name, ifDevour], (error, results, fields) => {
        if (error) throw error;
        return;
    })
};

orm.selectAll = () => {
    const query = 'select * from burgers';
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results, fields) => {
            if (error) throw error;
            resolve(results);
        });
    });
};

orm.updateOne = (id, name, ifDevour) => {
    const query = "update burgers set burger_name = ?, devoured = ? where id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [name, ifDevour, id], (error, results, fields) => {
            if (error) throw error;
            resolve(results);
        });
    });
}
module.exports = orm;