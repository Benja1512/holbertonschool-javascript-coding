const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const database = JSON.parse(data);
                const result = {};

                Object.keys(database).forEach(field => {
                    const students = database[field].map(student => student.firstname);
                    result[field] = students;
                });

                resolve(result);
            }
        });
    });
}

module.exports = { readDatabase };

