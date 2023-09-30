"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAll = exports.customDelete = exports.customGet = exports.updateAll = exports.updateById = exports.getOne = exports.getCount = exports.deleteById = exports.insertOne = void 0;
const insertOne = (pool, table, value) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                throw err;
            connection.query(`INSERT INTO ${table} SET ?`, value, (error, result) => {
                if (error) {
                    connection.release();
                    return reject(error);
                }
                connection.release();
                resolve(result);
            });
        });
    });
};
exports.insertOne = insertOne;
const deleteById = (pool, table, columnToCompare, value) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                throw err;
            connection.query(`DELETE FROM ${table} WHERE ${columnToCompare} = ${value}`, (error, result) => {
                if (error) {
                    connection.release();
                    return reject(error);
                }
                connection.release();
                resolve(result);
            });
        });
    });
};
exports.deleteById = deleteById;
const getCount = (pool, table) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                throw err;
            connection.query(`SELECT * FROM ${table}`, (error, rows) => {
                if (error) {
                    connection.release();
                    return reject(error);
                }
                connection.release();
                resolve(rows.length);
            });
        });
    });
};
exports.getCount = getCount;
const getOne = (pool, table, columnToCompare, valueToCompare) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                throw err;
            connection.query(`SELECT * FROM ${table} WHERE ${columnToCompare} = ?`, valueToCompare, (error, rows) => {
                if (error) {
                    connection.release();
                    return reject(error);
                }
                connection.release();
                resolve(rows);
            });
        });
    });
};
exports.getOne = getOne;
const updateById = (pool, table, valueAlteration, valueToCompare, valueToInsert) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                throw err;
            connection.query(`UPDATE ${table} SET ${valueAlteration} = ? WHERE id = ?`, [valueToInsert, valueToCompare], (error, rows) => {
                if (error) {
                    connection.release();
                    return reject(error);
                }
                connection.release();
                resolve(rows);
            });
        });
    });
};
exports.updateById = updateById;
const updateAll = (pool, table, setFields, valueToCompare) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                throw err;
            connection.query(`UPDATE 
          ${table} 
        SET 
          ${setFields}
        WHERE id = ${valueToCompare}`, (error, rows) => {
                if (error) {
                    connection.release();
                    return reject(error);
                }
                connection.release();
                resolve(rows);
            });
        });
    });
};
exports.updateAll = updateAll;
const customGet = (pool, sql) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                throw err;
            connection.query(sql, (error, rows) => {
                if (error) {
                    connection.release();
                    return reject(error);
                }
                connection.release();
                resolve(rows);
            });
        });
    });
};
exports.customGet = customGet;
const customDelete = (pool, sql) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                throw err;
            connection.query(sql, (error, rows) => {
                if (error) {
                    connection.release();
                    return reject(error);
                }
                connection.release();
                resolve(rows);
            });
        });
    });
};
exports.customDelete = customDelete;
const deleteAll = (pool, table) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                throw err;
            connection.query(`DELETE FROM ${table}`, (error, result) => {
                if (error) {
                    connection.release();
                    return reject(error);
                }
                connection.release();
                resolve(result);
            });
        });
    });
};
exports.deleteAll = deleteAll;
