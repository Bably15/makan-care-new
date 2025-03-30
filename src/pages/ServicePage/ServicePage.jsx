import React from "react";
import Services from "../../components/Services/Services";
import { services } from "../../mocks/services";
import { useParams } from "react-router-dom";

const ServicePage = () => {
    const { service } = useParams();

    const selectedService = services.find(
        (s) => s.title.toLowerCase() === service.toLowerCase()
    );

    if (!selectedService) {
        return <h2>Service not found</h2>;
    }

    return <Services service={selectedService} />;
};

export default ServicePage;
