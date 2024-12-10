import React, { useEffect } from "react";
import GangaLocations from "../data/GangaLocations"
// import { OlaMaps } from '../OlaMaps/olamaps-js-sdk.es'
// import '../OlaMaps/style.css';


const MapComp = ({ selectedLocation, waterData }) => {
    <>
    <h1>HELLO</h1>
    </>
   
//   useEffect(() => {
//     const checkSDKLoaded = () => {
//         if (window.Ola) {
//           initializeMap();
//         } else {
//           console.error("Ola Maps SDK is not loaded yet.");
//           setTimeout(checkSDKLoaded, 100); // Retry after 100ms
//         }};
      
    //   const olaMaps = new olaMaps({
    //     apiKey: rxoj0kIXPPc5C0S2RwKxlr9DqWXbznUtpoqsytwU,
    // })
    // const map = new OlaMaps.Map("map", {
    //   center: [25.0, 85.0], // Default center point for the map
    //   zoom: 6, // Adjust zoom to cover all locations
    //   apiKey: "rxoj0kIXPPc5C0S2RwKxlr9DqWXbznUtpoqsytwU", // Replace with your Ola Maps API Key
    // });

    // const myMap = olaMaps.init({
    //     style: "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
    //     container: 'map',
    //     center: [25.0, 85.0],
    //     zoom: 6
    //   })
    // Find the selected location in GangaLocations
//     const location = GangaLocations.find(
//       (loc) => loc.name.toLowerCase() === selectedLocation.toLowerCase()
//     );

//     if (location) {
//       // Center map on the selected location
//       myMap.setView([location.lat, location.lng], 10);

//       // Add a marker for the selected location
//       const marker = new OlaMaps.Marker([location.lat, location.lng]).addTo(map);

//       // Get water data for the location
//       const { ph, do: dissolvedOxygen, bod, totalColiform } = waterData;

//       // Bind popup with water quality data
//       marker.bindPopup(`
//         <div>
//           <h3>${location.name}</h3>
//           <p><strong>PH:</strong> ${ph}</p>
//           <p><strong>DO:</strong> ${dissolvedOxygen}</p>
//           <p><strong>BOD:</strong> ${bod}</p>
//           <p><strong>Total Coliform:</strong> ${totalColiform}</p>
//         </div>
//       `);
//     } else {
//       console.error("Selected location not found in GangaLocations.");
//     }
//   }, [selectedLocation, waterData]);

//   return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default MapComp;
