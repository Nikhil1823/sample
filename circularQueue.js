var CircularQueue = /** @class */ (function () {
    function CircularQueue(capacity) {
        this.capacity = capacity;
        this.queue = new Array(capacity).fill(null);
        this.rear = -1;
        this.front = -1;
        this.size = 0;
    }
    CircularQueue.prototype.enque = function (element) {
        if (this.isFull()) {
            console.log("Queue Overflow");
            return;
        }
        if (this.front === -1) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = element;
        this.size++;
    };
    CircularQueue.prototype.deque = function () {
        if (this.isEmpty()) {
            console.log("Queue Underflow");
            return null;
        }
        var removed = this.queue[this.front];
        this.queue[this.front] = null;
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        else {
            this.front = (this.front + 1) % this.capacity;
        }
        this.size--;
        return removed;
    };
    CircularQueue.prototype.isFull = function () {
        return this.size === this.capacity;
    };
    CircularQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    CircularQueue.prototype.display = function () {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }
        var i = this.front;
        var result = "";
        while (true) {
            result += this.queue[i] + " ";
            if (i === this.rear)
                break;
            i = (i + 1) % this.capacity;
        }
        console.log(result.trim());
    };
    return CircularQueue;
}());
var cQue = new CircularQueue(5);
cQue.enque(12);
cQue.enque(13);
cQue.enque(14);
cQue.enque(16);
cQue.deque();
cQue.enque(99);
cQue.display();
