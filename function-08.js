var compose = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};

var snakeCase = function(word) {
    return word.toLowerCase().replace(/\s+/ig, '_');
};

var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);

