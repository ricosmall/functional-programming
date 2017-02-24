var _ = require('ramda');
var print = console.log;

var Left = function(x) {
    this.__value = x;
};

Left.of = function(x) {
    return new Left(x);
};

Left.prototype.map = function(f) {
    return this;
};

var Right = function(x) {
    this.__value = x;
};

Right.of = function(x) {
    return new Right(x);
};

Right.prototype.map = function(f) {
    return Right.of(f(this.__value));
};


print(Right.of('rain').map(function(str) {
    return 'b' + str;
}));

print(Left.of('rain').map(function(str) {
    return 'b' + str;
}));

print(Right.of({host: 'localhost', port: 80}).map(_.prop('host')));
print(Left.of('roll eyes...').map(_.prop('host')));


var moment = require('moment');

//getAge :: Date -> User -> Either(String, Number)
var getAge = _.curry(function(now, user) {
    var birthdate = moment(user.birthdate, 'YYYY-MM-DD');
    if(!birthdate.isValid()) return Left.of('Birth date could not be parsed');
    return Right.of(now.diff(birthdate, 'years'));
});

print(getAge(moment(), {birthdate: '2005-12-12'}));
print(getAge(moment(), {birthdate: 'nothing'}));

//fortune :: Number -> String
var fortune = _.compose(_.concat('If you survive, you will be '), _.add(1));

//zoltar :: User -> Either(String, _)
var zoltar = _.compose(_.map(console.log), _.map(fortune), getAge(moment()));

print(zoltar({birthdate: '2005-12-12'}));
print(zoltar({birthdate: 'balloons'}));
