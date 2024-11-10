import React from 'react';

const CacheControl = ({ cacheType, setCacheType, key, setKey, value, setValue, handleGet, handlePut }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Cache Type:
        <select
          value={cacheType}
          onChange={(e) => setCacheType(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="lru">LRU (Least Recently Used)</option>
          <option value="mru">MRU (Most Recently Used)</option>
          <option value="lfu">LFU (Least Frequently Used)</option>
        </select>
      </label>

      <div className="flex flex-col md:flex-row items-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Enter key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          onClick={handleGet}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Get
        </button>
        <button
          onClick={handlePut}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Put
        </button>
      </div>
    </div>
  );
};

export default CacheControl;
