const { readDatabase } = require('../utils');

class StudentsController {
    static getAllStudents(req, res) {
        readDatabase('path/to/database.json')
            .then(database => {
                let response = 'This is the list of our students\n';

                // Ordena los campos alfabéticamente
                const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

                fields.forEach(field => {
                    const students = database[field].map(student => student.firstname).join(', ');
                    response += `Number of students in ${field}: ${database[field].length}. List: ${students}\n`;
                });

                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(req, res) {
        const { major } = req.query;

        if (!major || (major !== 'CS' && major !== 'SWE')) {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        readDatabase('path/to/database.json')
            .then(database => {
                const students = database[major].map(student => student.firstname).join(', ');
                const response = `List: ${students}`;

                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send('Cannot load the database');
            });
    }
}

module.exports = StudentsController;
export default StudentsController;
