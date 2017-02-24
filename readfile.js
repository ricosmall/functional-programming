var fs = require('fs');

//readFile :: String -> Task(Error, JSON)
var readFile = function(filename) {
    return new Task(function(reject, result) {
        fs.readFile(filename, 'utf-8', function(err, data) {
            err ? reject(err) : result(data);
        });
    });
};

readFile('metamorphosis').map(split('\n')).map(head);
