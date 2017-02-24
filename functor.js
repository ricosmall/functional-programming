var ramda = require('ramda');
var match = ramda.match;
var add = ramda.add;
var _ = ramda;

var print = console.log;


var Maybe = function(x) {
    this.__value = x;
};

Maybe.of = function(x) {
    return new Maybe(x);
};

Maybe.prototype.isNothing = function() {
    return (this.__value === null || this.__value === undefined);
};

Maybe.prototype.map = function(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
};

print(Maybe.of('Malkovich Malkovich').map(match(/a/ig)));
print(Maybe.of(null).map(match(/a/ig)));
print(Maybe.of({name: 'Boris'}).map(_.prop('age')).map(add(10)));
print(Maybe.of({name: 'Dinah', age: 14}).map(_.prop('age')).map(add(10)));


//safeHead :: [a] -> Maybe(a)
var safeHead = function(xs) {
    return Maybe.of(xs[0]);
};

var streetName = _.compose(_.map(_.prop('street')), safeHead, _.prop('addresses'));

print(streetName({addresses: []}));
print(streetName({addresses: [{street: 'Shady Ln.', number: 4201}]}));


//withdraw :: Number -> Account -> Maybe(Account)
var withdraw = _.curry(function(amount, account) {
    return account.balance >= amount ? Maybe.of({balance: account.balance - amount}) : Maybe.of(null);
});

//finishTransaction :: Account -> String
var finishTransaction = _.compose(remainingBalance, updateLedger);

//getTwenty :: Account -> Maybe(String)
var getTwenty = _.compose(map(finishTransaction), withdraw(20));

print(getTwenty({balance: 200.00}));
print(getTwenty({balance: 10.00}));
