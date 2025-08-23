var Queue = /** @class */ (function () {
    function Queue(array) {
        this.queue = array;
    }
    Queue.prototype.enque = function (val) {
        this.queue.push(val);
    };
    Queue.prototype.deques = function () {
        this.queue.pop();
    };
    Queue.prototype.display = function () {
        for (var _i = 0, _a = this.queue; _i < _a.length; _i++) {
            var ele = _a[_i];
            console.log(ele);
        }
    };
    return Queue;
}());
var queue1 = new Queue([]);
queue1.enque("10");
queue1.enque("20");
queue1.enque("30");
queue1.enque("40");
queue1.enque("50");
queue1.deques();
queue1.enque("60");
queue1.display();
