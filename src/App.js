import React, { useState, useEffect } from 'react';

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
       fetch(url)
       .then((response) => response.json())
       .then((data) => {
         const address = data.display_name;
         console.log(address);
         setLocation(address)
       });
    });

    

  }, []);

  return (
    <div>
      <p>Current address: {location}</p>
    </div>
  );
}

export default App;
