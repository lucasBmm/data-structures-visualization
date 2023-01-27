class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null = null;

    constructor(data: T) {
        this.value = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: LinkedListNode<T> | null;
    tail: LinkedListNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Add an element at the beggining of the Linked List.
     *
     * @param data      Value to be inserted.
     */
    add(data: T): LinkedList<T> {
        let newNode = new LinkedListNode<T>(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return this;
        }

        if (!this.tail) {
            this.tail = newNode;
        }

        [this.head, newNode.next] = [newNode, this.head];
        
        this.size++;

        return this;
    }

    /**
     * Add an element at the end of the Linked List.
     *
     * @param data      Value to be inserted.
     */
    append(data: T): LinkedList<T> {
        let newNode = new LinkedListNode<T>(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return this;
        }

        if (this.tail)
            this.tail.next = newNode;
            
        this.tail = newNode;

        this.size++;

        return this;
    }

    /**
     * Add an element at determined index
     *
     * @param location  The index you want to insert.
     * @param data      Value to be inserted.
     */

    insertAt(location: number, data: T): void {
        let newNode = new LinkedListNode<T>(data);

        if (location > this.size) {
            throw new Error("Insert local must not be greater then the Linked List");
        }

        if (location === 0) {
            this.add(data);
            return;
        }

        if (location === this.size) {
            this.append(data);
            return;
        }

        let n = this.head;

        for (let i = 1; i < location; i++) {
            n = n?.next!;
        }

        if (n?.next) [n.next, newNode.next] = [newNode, n.next];
        this.size++;
    }
    
    /**
     * Find a value of a node at determined index.
     *
     * @param index  The index of the node you want to find.
     */
    find(index: number): T {
        let n = this.head;

        if (index >= this.size) {
            throw new Error("Index must be less then the size of the linked list")
        }

        for (let i = 0; i < index; i++) {
            n = n?.next!;
        }

        let value = n?.value!;

        return value;
    }

    /**
     * Remove the last node.
     */
    pop(): this {
        if (!this.head) {
            return this;
        }

        let n = this.head;
        let previusNode = n;

        if (!this.head.next)
            this.head = null;
            this.tail = null;

        while(n?.next) {
            previusNode = n;
            n = n.next;
        }

        if (previusNode) 
            previusNode.next = null;
            this.tail = previusNode;

        this.size--;

        return this;
    }

     /**
     * Remove the first node.
     */
    shift(): this {
        if (!this.head) return this;

        let n = this.head;
        
        if (n?.next)
            this.head = n?.next;
        else 
            this.head = null;
            
        if (!this.head) this.tail = null;    
        
        this.size--;

        return this;
    }

    reverse(): this {
        if (!this.head) return this;

        let previusNode: LinkedListNode<T> | null = null;
        let nextNode: LinkedListNode<T>    | null = null;

        this.tail = this.head;

        while (this.head) {
            nextNode = this.head.next;
            this.head.next = previusNode;
            previusNode = this.head;
            this.head = nextNode;
        }

        this.head = previusNode;

        return this;
    }

    /**
     * Clear the intire list.
     */
     clear(): void {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    toList(): T[] {
        const list: T[] = [];
        let n = this.head;

        while(n) {
            list.push(n.value);
            n = n.next;
        }

        return list;
    }

    toString(): string {
        const list: string[] = [];
        let n = this.head;

        while(n) {
            list.push(JSON.stringify(n.value));
            n = n.next;
        }

        return list.toString();
    }
}

export default LinkedList;