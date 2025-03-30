import { useNavigate } from "react-router-dom";

const useCategoryNavigation = () => {
    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        if (category?.value) {
            navigate(`/services/${category.value}`);
        }
    };

    return handleCategorySelect;
};

export { useCategoryNavigation };
