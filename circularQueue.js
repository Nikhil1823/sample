var CircularQueue = /** @class */ (function () {
    function CircularQueue(array) {
        this.rear = 0;
        this.front = -1;
        this.size = 5;
        this.queue = array;
    }
    CircularQueue.prototype.enque = function (element) {
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = element;
    };
    CircularQueue.prototype.deque = function () {
        this.front = (this.front + 1) % this.size;
        this.queue[this.front] = null;
    };
    CircularQueue.prototype.display = function () {
        for (var i = this.front; i < this.rear; i++) {
            console.log(this.queue[i]);
        }
    };
    return CircularQueue;
}());
var cQue = new CircularQueue([]);
cQue.enque(12);
cQue.enque(13);
cQue.enque(14);
cQue.enque(16);
cQue.deque();
cQue.display();
