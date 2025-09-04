import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "300px", // ancho del mapa
  height: "350px", // alto del mapa
};

const center = {
  lat: -27.39184,
  lng: -55.92379,
};

const GoogleMapComponent = () => {
  const apiKey = import.meta.env.VITE_MAP_API;
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12} // nivel de zoom
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
