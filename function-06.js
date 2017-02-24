var _ = require('ramda');

/*练习1*/
//==========
/*通过局部调用（partial apply）移出所有参数*/

var words = function(str) {
    return split(' ', str);
};

//key
var words = split(' ');

//练习1a
//==========
//使用`map`创建一个新`words`函数，使之能够操作字符串数组

var sentences = undefined;

//key
var sentences = map(words);

//练习2
//==========
//通过局部调用（partial apply）移出所有参数

var filterQs = function(xs) {
    return filter(function(x) {
        return match(/q/i, x);
    }, xs);
};

//key
var matchQs = match(/q/i);

var filterQs = filter(matchQs);

//练习3
//==========
//使用帮助函数`_keepHighest`重构`max`使之成为curry函数

//无须改动
var _keepHighest = function(x, y) {
    return x >= y ? x : y;
};

//重构这段代码
var max = function(xs) {
    return reduce(function(acc, x) {
        return _keepHighest(acc, x);
    }, -Infinity, xs);
};

//key
var max = reduce(_keepHighest, -Infinity);

//彩蛋1
//==========
//包裹数组的`slice`函数使之成为curry函数
//[1, 2, 3].slice(0, 2);
var slice = undefined;

//key
var slice = _.curry(function(start, end, xs) {
    return xs.slice(start, end);
});

//彩蛋2
//==========
//借助`slice`定义一个`take`curry函数，该函数调用后可以取出字符串的前n个字符
var take = undefined;

//key
var take = slice(0);
