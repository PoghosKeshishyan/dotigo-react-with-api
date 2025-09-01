import './Map.css';

export default function Map({ mapData }) {
    return (
        <div className="map-locations wrapper">
            <h2>{mapData.title}</h2>
            <p>{mapData.subtitle}</p>
            <img src={mapData.image} alt="map" />
        </div>
    )
}