import React, { useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";

const MapComp = ({ selectedLocation, waterData }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // Initialize the map
    mapInstance.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [85.0, 25.0], // Default coordinates
        zoom: 6,
        projection: "EPSG:4326",
      }),
    });
  }, []);

  useEffect(() => {
    if (!selectedLocation || !waterData || !mapInstance.current) return;

    // Pan to the selected location
    const view = mapInstance.current.getView();
    const { lat, lng } = selectedLocation; // Extract latitude and longitude
    view.setCenter([lng, lat]);
    view.setZoom(10);

    // Log the water quality data (you can display this in a popup or overlay)
    console.log("Water Data for Location:", waterData);
  }, [selectedLocation, waterData]);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{
        width: "100%",
        height: "500px",
        border: "1px solid #ddd",
      }}
    ></div>
  );
};

export default MapComp;
