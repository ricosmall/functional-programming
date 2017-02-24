//命令式
var makes = [];
for (var i = 0; i < cars.length; i++) {
    makes.push(cars[i].make);
}

var authenticate = function(form) {
    var user = toUser(form);
    return logIn(user);
};

//声明式
var makes = cars.map(function(car){
    return car.make;
});

var authenticate = compose(logIn, toUser);
