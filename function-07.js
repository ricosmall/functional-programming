var reduce = require('ramda').reduce;

var compose = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};

var toUpperCase = function(x) {
    return x.toUpperCase();
};

var exclaim = function(x) {
    return x + '!';
};

var shout = compose(exclaim, toUpperCase);

console.log(shout('send in the clowns'));

var head = function(x) {
    return x[0];
};

var reverse = reduce(function(acc, x) {
    return [x].concat(acc);
}, []);

var last = compose(head, reverse);

console.log(last(['jumpkick', 'roundhouse', 'uppercut']));

var lastUpper = compose(toUpperCase, head, reverse);

console.log(lastUpper(['jumpkick', 'roundhouse', 'uppercut']));

//var loudLastUpper = compose(exclaim, toUpperCase, head, reverse);

//console.log(loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']));


