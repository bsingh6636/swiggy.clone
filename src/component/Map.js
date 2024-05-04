import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaHome } from 'react-icons/fa'

const Map = () => {
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    if (!mapInitialized) {
      const map = L.map('map').setView([13.088298274863718, 77.63616713934383], 16); 

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; '
      }).addTo(map);

      // Use a custom icon for the marker
      const homeIcon = L.icon({
        iconUrl: <FaHome/>, // Path to your custom icon
        iconSize: [25, 25], // Size of the icon
        iconAnchor: [12, 12], // Point of the icon which will correspond to marker's location
        popupAnchor: [1, -34] // Point from which the popup should open relative to the iconAnchor
      });

      L.marker([13.088298274863718, 77.63616713934383], {icon: homeIcon}).addTo(map)
       .bindPopup('Home')
       .openPopup();

      setMapInitialized(true); // Mark the map as initialized
    }
  }, [mapInitialized]);

  return (
    <div id="map" className='h-[280px] w-[300px]'></div>
  );
};

export default Map;
