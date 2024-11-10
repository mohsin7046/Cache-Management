import React, { useEffect } from 'react';

const CacheView = ({ cacheType, cacheData, fetchCacheContents }) => {
  useEffect(() => {
    fetchCacheContents(); // Fetch cache contents on initial load
  }, [cacheType]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Current {cacheType.toUpperCase()} Cache Content</h2>
      <button
        onClick={fetchCacheContents}
        className="mb-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
      >
        View Cache
      </button>
      <ul className="space-y-2">
        {Object.entries(cacheData).map(([key, value]) => (
          <li key={key} className="p-2 bg-gray-50 rounded-md shadow-sm">
            <strong className="text-gray-700">{key}:</strong> {JSON.stringify(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CacheView;
