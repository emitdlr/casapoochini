import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './App.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const App = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWRscjczIiwiYSI6ImNrZ3I4MHl6ZzA4cnMycHMwZzZ3MWt5c2MifQ.E3Rqmckb0mWgG1Mx6UtoVA';
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default App;
