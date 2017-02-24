var _ = require('ramda');

//练习1
//==========
//使用_.add(x, y) 和 _.map(f, x) 创建一个能让functor里的值增加的函数

var ex1 = undefined;

//key
var ex1 = _.map(_.add(1));

//练习2
//==========
//使用_.head获取列表的第一个元素

var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

var ex2 = undefined;

//key
var ex2 = _.map(_.head);


//练习3
//==========
//使用 safeProp 和 _.head 找到 user 的名字的首字母

var safeProp = _.curry(function(x, o) {
    return Maybe.of(o[x]);
});

var user = {
    id: 2,
    name: 'Albert'
};

var ex3 = undefined;

//key

var ex3 = _.compose(_.map(_.head), safeProp('name'));


//练习4
//==========
//使用 Maybe 重写 ex4，不要有 if 语句

var ex4 = function(n) {
    if (n) {
        return parseInt(n);
    }
};

var ex4 = undefined;

//key

var ex4 = _.compose(_.map(parseInt), Maybe.of);


//练习5
//==========
//写一个函数，先 getPost 获取一篇文章，然后 toUpperCase 让这篇文章的标题变为大写

//getPost :: Int -> Future({id: Int, title: String})
var getPost = function(i) {
    return new Task(function(rej, res) {
        setTimeout(function() {
            res({id: i, title: 'Love them futures'})
        }, 300);
    });
}

var ex5 = undefined;

//key

var upperTitle = _.compose(toUpperCase, _.prop('title'));
var ex5 = _.compose(_.map(upperTitle), getPost);


//练习6
//==========
//写一个函数，使用 checkActive() 和 showWelcome() 分别允许访问或返回错误

var showWelcome = _.compose(_.add('Welcome'), _.prop('name'));

var checkActive = function(user) {
    return user.active ? Right.of(user) : Left.of('Your account is not active');
};

var ex6 = undefined;

//key

var ex6 = _.compose(_.map(showWelcome), checkActive);


//练习7
//==========
//写一个验证函数，检查参数是否 length > 3。如果是就返回 Right(x)，否则就返回 Left('You need > 3')

var ex7 = function(x) {
    return undefined; // <--- write me. (don't be pointfree)
}

//key

var ex7 = function(x) {
    return x.length > 3 ? Right(x) : Left('You need > 3');
};


//练习8
//==========
//使用练习 7 的 ex7 和 Either 构造一个 functor, 如果一个 user 合法就保存它，否则返回错误消息。别忘了 either 的连个参数必须返回统一类型的数据。

var save = function(x) {
    return new IO(function() {
        console.log('SAVED USER!');
        return x + '-saved';
    });
};

var ex8 = undefined;

//key

var ex8 = _.compose(either(IO.of, save), ex7);
