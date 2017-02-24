var add = function(x) {
    return function(y) {
        return x + y;
    };
};

var increment = add(1);
var addTen = add(10);

console.log(increment(2));
console.log(addTen(2));

var curry = require('lodash').curry;

var match = curry(function(what, str) {
    return str.match(what);
});

var replace = curry(function(what, replacement, str) {
    return str.replace(what, replacement);
});

var filter = curry(function(f, ary) {
    return ary.filter(f);
});

var map = curry(function(f, ary) {
    return ary.map(f);
});

console.log(match(/\s+/g, 'hello world'));
console.log(match(/\s+/g)('hello world'));

var hasSpaces = match(/\s+/g);

console.log(hasSpaces('hello world'));
console.log(hasSpaces('spaceless'));

console.log(filter(hasSpaces, ['tori_spelling', 'tori_amos']));

var findSpaces = filter(hasSpaces);

console.log(findSpaces(['tori_spelling', 'tori_amos']));

var noVowels = replace(/[aeiou]/ig);

var censored = noVowels('*');

console.log(censored('Chocolate Rain'));
