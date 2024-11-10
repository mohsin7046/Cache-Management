class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // Maintains insertion order
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1; // Key not found
        }
        const value = this.cache.get(key);
        this.cache.delete(key); // Remove and re-insert to update order
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key); // Remove old value
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            // Remove the least recently used (first item in the Map)
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
    }
}

export default LRUCache