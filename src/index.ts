import { LinkedListCollection } from "./LinkedListCollection";
import { NumberCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollection";

const numberCollection = new NumberCollection([2, -12, 25, 12, 54]);
numberCollection.sort();
console.log(numberCollection.data);

const stringCollection = new StringCollection('xarYXabdv');
stringCollection.sort();
console.log(stringCollection.data);

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(1);
linkedListCollection.add(-1);
linkedListCollection.add(21);
linkedListCollection.add(13);
linkedListCollection.add(2);
linkedListCollection.sort();
linkedListCollection.print();
