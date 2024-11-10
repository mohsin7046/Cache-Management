import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();
const PORT = 3000;
import LRUCache from './utilities/lru.cache.js';
import MRUCache from './utilities/mru.cacjhe.js';
import LFUCache from './utilities/lfu.cahche.js';



// Initialize Cache Instances
const lruCache = new LRUCache(3);
const mruCache = new MRUCache(3);
const lfuCache = new LFUCache(3);



// Routes
app.use(bodyParser.json());
app.use(cors())
// LRU Cache Routes
app.get('/cache/lru/get/:key', (req, res) => {
    const { key } = req.params;
    const value = lruCache.get(key);
    res.json({ value });
});

app.post('/cache/lru/put', (req, res) => {
    const { key, value } = req.body;
    lruCache.put(key, value);
    res.json({ message: 'Value added to LRU cache' });
});

app.get('/cache/lru/contents', (req, res) => {
    res.json(Object.fromEntries(lruCache.cache));
});

// MRU Cache Routes
app.get('/cache/mru/get/:key', (req, res) => {
    const { key } = req.params;
    const value = mruCache.get(key);
    res.json({ value });
});

app.post('/cache/mru/put', (req, res) => {
    const { key, value } = req.body;
    mruCache.put(key, value);
    res.json({ message: 'Value added to MRU cache' });
});

app.get('/cache/mru/contents', (req, res) => {
    res.json(Object.fromEntries(mruCache.cache));
});

// LFU Cache Routes
app.get('/cache/lfu/get/:key', (req, res) => {
    const { key } = req.params;
    const value = lfuCache.get(key);
    res.json({ value });
});

app.post('/cache/lfu/put', (req, res) => {
    const { key, value } = req.body;
    lfuCache.put(key, value);
    res.json({ message: 'Value added to LFU cache' });
});

app.get('/cache/lfu/contents', (req, res) => {
    res.json(Object.fromEntries(lfuCache.cache));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
