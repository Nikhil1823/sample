var Stack = /** @class */ (function () {
    function Stack(data) {
        this.stack = [];
        this.stack = data;
    }
    Stack.prototype.push = function (element) {
        this.stack.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.stack.length <= 0)
            return;
        this.stack.pop();
    };
    Stack.prototype.display = function () {
        for (var _i = 0, _a = this.stack; _i < _a.length; _i++) {
            var element = _a[_i];
            console.log(element);
        }
    };
    return Stack;
}());
var stack1 = new Stack(["apple"]);
stack1.push("orange");
stack1.push("pineapple");
stack1.display();
stack1.pop();
stack1.push("almond");
stack1.display();
