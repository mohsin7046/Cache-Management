class MRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.mostRecentlyUsed = null; // Keeps track of MRU item
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1; // Key not found
        }
        this.mostRecentlyUsed = key; // Update MRU
        return this.cache.get(key);
    }

    put(key, value) {
        if (this.cache.size >= this.capacity) {
            this.cache.delete(this.mostRecentlyUsed); // Remove MRU item
        }
        this.cache.set(key, value);
        this.mostRecentlyUsed = key; // Update MRU
    }
}

export default MRUCache