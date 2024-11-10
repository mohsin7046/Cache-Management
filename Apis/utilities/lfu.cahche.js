class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.frequencyMap = new Map(); // Map of key -> frequency
        this.minFrequency = 0; // Track the minimum frequency in the cache
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1; // Key not found
        }
        // Update frequency
        const { value, frequency } = this.cache.get(key);
        this.cache.set(key, { value, frequency: frequency + 1 });
        this.frequencyMap.get(frequency).delete(key);
        
        if (!this.frequencyMap.has(frequency + 1)) {
            this.frequencyMap.set(frequency + 1, new Set());
        }
        this.frequencyMap.get(frequency + 1).add(key);
        
        if (this.frequencyMap.get(frequency).size === 0) {
            this.frequencyMap.delete(frequency);
            if (frequency === this.minFrequency) {
                this.minFrequency++;
            }
        }

        return value;
    }

    put(key, value) {
        if (this.capacity <= 0) return;
        
        if (this.cache.has(key)) {
            this.cache.set(key, { value, frequency: this.cache.get(key).frequency });
            this.get(key); // Update frequency
            return;
        }
        
        if (this.cache.size >= this.capacity) {
            const lfuKey = this.frequencyMap.get(this.minFrequency).keys().next().value;
            this.frequencyMap.get(this.minFrequency).delete(lfuKey);
            this.cache.delete(lfuKey);
        }
        
        // Insert new key-value pair
        this.cache.set(key, { value, frequency: 1 });
        this.minFrequency = 1;
        if (!this.frequencyMap.has(1)) {
            this.frequencyMap.set(1, new Set());
        }
        this.frequencyMap.get(1).add(key);
    }
}

export default LFUCache