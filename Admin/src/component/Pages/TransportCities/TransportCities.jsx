import React, { useState } from 'react';

const TransportCities = () => {
  const [cityName, setCityName] = useState('');
  const [cities, setCities] = useState([]);

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleAddCity = (event) => {
    event.preventDefault();
    if (cityName.trim()) {
      setCities((prevCities) => [...prevCities, cityName]);
      setCityName(''); // Clear input field
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddCity(event);
    }
  };

  const handleRemoveCity = (index) => {
    setCities((prevCities) => prevCities.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission if needed
    console.log('Cities to be submitted:', cities);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg max-w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="font-bold text-gray-800 text-2xl mb-4 sm:mb-0">Transport City from Ahmedabad</h1>
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-red-600 text-white rounded-full py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition"
            >
              ADD
            </button>
            <a
              href="/admin/Transport-Cities-List"
              className="bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition"
            >
              Back
            </a>
          </div>
        </div>
        <div>
          <label
            className="text-xl font-medium text-gray-600 mb-2 block"
            htmlFor="CityName"
          >
            Add Transport Cities
          </label>
          <input
            id="CityName"
            name="CityName"
            value={cityName}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            placeholder="Enter City Name Here"
          />
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Cities List:</h2>
          <ul className="list-disc list-inside space-y-2">
            {cities.map((city, index) => (
              <li key={index} className="flex items-center justify-between p-2 border-b border-gray-200">
                <span className='font-bold'>{city}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveCity(index)}
                  className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default TransportCities;
