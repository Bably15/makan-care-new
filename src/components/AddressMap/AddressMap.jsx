import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

const pinIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
});

export default function MapPicker({ onLocationSelected }) {
    const [position, setPosition] = useState(null);

    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setPosition([lat, lng]);

            fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
            )
                .then((res) => res.json())
                .then((data) => {
                    const displayName = data.display_name;
                    onLocationSelected({ lat, lng, address: displayName });
                });
        },
    });

    return position ? <Marker position={position} icon={pinIcon} /> : null;
}
