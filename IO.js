var _ = require('ramda');
var print = console.log;
var IO = function(f) {
    this.__value = f;
};

IO.of = function(x) {
    return new IO(function() {
        return x;
    });
};

IO.prototype.map = function(f) {
    return new IO(_.compose(f, this.__value));
};

//io_window_ :: IO Window
var io_window = new IO(function() {
    return window;
});

print(io_window.map(function(win) {
    return win.innerWidth;
}));

print(io_window.map(_.prop('location')).map(_.prop('href')).map(_.split('/')));
