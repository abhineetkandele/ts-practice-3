"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedListCollection extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
        this.length = 0;
    }
    add(item) {
        this.length++;
        const newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    }
    print() {
        if (!this.head) {
            return;
        }
        let tail = this.head;
        while (tail) {
            console.log(tail.value);
            tail = tail.next;
        }
    }
    at(index) {
        let counter = 0;
        if (!this.head) {
            throw new Error('No data found');
        }
        let tail = this.head;
        while (tail) {
            if (counter === index) {
                return tail;
            }
            counter++;
            tail = tail.next;
        }
        throw new Error('Index out of bound');
    }
    compare(leftIndex, rightIndex) {
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const leftValue = this.at(leftIndex).value;
        this.at(leftIndex).value = this.at(rightIndex).value;
        this.at(rightIndex).value = leftValue;
    }
}
exports.LinkedListCollection = LinkedListCollection;
