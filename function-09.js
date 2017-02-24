require('../../support');
var _ = require('ramda');
var accounting = require('accounting');

//示例数据
var CARS = [
    {name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false}
];

//练习1
//==========
//使用_.compose()重写下面这个函数。提示： _.prop()是curry函数
var isLastInStock = function(cars) {
    var last_car = _.last(cars);
    return _.prop('in_stock', last_car);
};

//key
var isLastInStock = _.compose(_.prop('in_stock'), _.last);

//练习2
//==========
//使用_.compose(),_.prop(),_.head() 获取第一个car 的name
var nameOfFirstCar = undefined;

//key
var nameOfFirstCar = _.compose(_.prop('name'), _.head);

//练习3
//==========
//使用帮助函数_average 重构 averageDollarValue 使之成为一个组合
var _average = function(xs) {
    return reduce(add, 0, xs) / xs.length;
};

var averageDollarValue = function(cars) {
    var dollar_values = map(function(c) {
        return c.dollar_value;
    }, cars);

    return _average(dollar_values);
};

//key
var averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));

//练习4
//==========
//使用compose写一个santizeNames()函数，返回一个下划线连接的小写字符串：例如： santizeNames(['Hello World']) => ['hello_world']

var _underscore = replace(/\W+/g, '_');

var santizeNames = undefined;

//key
var santizeNames = _.compose(toLowerCase, _underscore);

//彩蛋1
//==========
//使用compose重构availablePrices

var availablePrices = function(cars) {
    var available_cars = _.filter(_.prop('in_stock'), cars);
    return available_cars.map(function(x) {
        return accounting.formatMoney(x.dollar_value);
    }).join(', ');
};

//key
var availablePrices = _.compose(join(', '), _.map(_.compose(accounting.formatMoney, _.prop('dollar_value'))), _.filter(_.prop('in_stock')));

//彩蛋2
//==========
//重构使之成为pointfree函数。提示：可以使用 _.flip()

var fasterCar = function(cars) {
    var sorted = _.sortBy(function(car) {
        return car.horsepower;
    }, cars);

    var fastest = _.last(sorted);

    return fastest.name + ' is the fastest';
};

//key
var append = _.flip(_.concat);
var fasterCar = _.compose(append(' is the fastest'), _.prop('name'), _.last, _.sortBy(_.prop('horsepower')));
