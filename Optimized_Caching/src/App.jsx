import React, { useState } from 'react';
import axios from 'axios';
import CacheControl from './components/CacheControl';
import CacheView from './components/CacheView';

const App = () => {
  const [cacheType, setCacheType] = useState('lru'); // Default to LRU Cache
  const [cacheData, setCacheData] = useState({}); // State to hold cache data
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  // Function to handle getting data from cache
  const handleGet = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cache/${cacheType}/get/${key}`);
      alert(`Value for key "${key}" is: ${response.data.value}`);
    } catch (error) {
      console.error('Error fetching data from cache:', error);
    }
  };

  // Function to handle putting data into cache
  const handlePut = async () => {
    try {
      await axios.post(`http://localhost:3000/cache/${cacheType}/put`, { key, value });
      alert(`Inserted key "${key}" with value "${value}" into ${cacheType.toUpperCase()} cache.`);
      setKey('');
      setValue('');
    } catch (error) {
      console.error('Error inserting data into cache:', error);
    }
  };

  // Function to fetch cache contents for visualization (for CacheView component)
  const fetchCacheContents = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cache/${cacheType}/contents`);
      setCacheData(response.data);
    } catch (error) {
      console.error('Error fetching cache contents:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Optimized Cache System</h1>
      <CacheControl
        cacheType={cacheType}
        setCacheType={setCacheType}
        key={key}
        setKey={setKey}
        value={value}
        setValue={setValue}
        handleGet={handleGet}
        handlePut={handlePut}
      />
      <CacheView cacheType={cacheType} cacheData={cacheData} fetchCacheContents={fetchCacheContents} />
    </div>
  );
};

export default App;
