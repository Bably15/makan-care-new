import { MapContainer, TileLayer } from "react-leaflet";
import MapPicker from "../../components/AddressMap/AddressMap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APPROUTES } from "../../constants/routes/appRoutes";
export default function AddressPickerPage() {
    const [location, setLocation] = useState(null);
    const [houseNumber, setHouseNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (location && houseNumber) {
            // Save to context or state management
            console.log({ ...location, houseNumber });
            navigate(APPROUTES.SLOT_BOOKING);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-20">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#333] text-white">
                <button>&larr;</button>
                <h1 className="text-lg font-semibold">Your cart</h1>
                <button className="text-2xl">×</button>
            </div>

            {/* Map */}
            <div className="relative h-96 w-full">
                <MapContainer
                    center={[25.611, 85.144]}
                    zoom={18}
                    className="h-full w-full z-0"
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapPicker onLocationSelected={setLocation} />
                </MapContainer>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded">
                    Place the pin accurately on map
                </div>
            </div>

            {/* Address Display */}
            <div className="px-4 pt-4">
                {location ? (
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-[#6b4f36]">
                                Selected Address
                            </h2>
                            <button className="text-sm text-[#6b4f36]">
                                Change
                            </button>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">
                            {location.address}
                        </p>
                    </div>
                ) : (
                    <p className="text-sm text-gray-500">
                        Click on map to select address
                    </p>
                )}

                {/* Additional Details */}
                <input
                    type="text"
                    placeholder="House/Flat Number*"
                    value={houseNumber}
                    onChange={(e) => setHouseNumber(e.target.value)}
                    className="w-full border px-3 py-2 mt-2 rounded focus:outline-none focus:ring-2 ring-[#6b4f36]"
                />

                {/* Save Button */}
                <button
                    onClick={handleSubmit}
                    disabled={!location || !houseNumber}
                    className={`w-full mt-4 py-3 rounded text-white ${
                        location && houseNumber
                            ? "bg-[#6b4f36]"
                            : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    Save and proceed to slots
                </button>
            </div>
        </div>
    );
}
