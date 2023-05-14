import { Sorter } from "./Sorter";

class Node {
    public next: Node | null = null;

    constructor(public value: number) {}
}

export class LinkedListCollection extends Sorter {
    head: Node | null = null;

    length: number = 0;

    add(item: number): void {
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

    print(): void {
        if (!this.head) {
            return;
        }
        
        let tail: Node | null = this.head;
        while (tail) {
            console.log(tail.value);
            tail = tail.next;
        }
    }

    at(index: number): Node {
        let counter = 0;

        if (!this.head) {
            throw new Error('No data found');
        }

        let tail: Node | null = this.head;
        while (tail) {
            if (counter === index) {
                return tail;
            }
            counter++;
            tail = tail.next;
        }

        throw new Error('Index out of bound');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftValue = this.at(leftIndex).value;
        this.at(leftIndex).value = this.at(rightIndex).value;
        this.at(rightIndex).value = leftValue;
    }
}