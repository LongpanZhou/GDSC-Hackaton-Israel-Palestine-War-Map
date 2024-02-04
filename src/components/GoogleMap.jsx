import React, { useEffect } from 'react';

function GoogleMap() {
    useEffect(() => {
        loadMap();
      }, []);
    
      const loadMap = async () => {
        try {
          const apiKey = 'AIzaSyAqoZN1fgWknLiM_nYOb4WOKKlHF0JbU34&libraries=visualization&callback=initMap';
          const apiUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
          await loadScript(apiUrl);
          initMap();
        } catch (error) {
          console.error('Error loading Google Maps:', error);
        }
      };
    
      const loadScript = (url) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      };
    
      const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      };
    
      return <div id="map" style={{ height: '100vh', width: '100%' }}></div>;
}

export default GoogleMap