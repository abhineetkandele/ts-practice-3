"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const splittedData = this.data.split('');
        [splittedData[leftIndex], splittedData[rightIndex]] = [splittedData[rightIndex], splittedData[leftIndex]];
        this.data = splittedData.join('');
    }
}
exports.StringCollection = StringCollection;
