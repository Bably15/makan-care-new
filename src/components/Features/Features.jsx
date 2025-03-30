import TRUCK_IMG from "../../assets/truck.png";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";

const Features = () => {
    return (
        <>
            <div className="w-full py-2 border-2 border-red-400">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap items-center -mx-2">
                        <div className="w-full sm:w-4/12 lg:w-4/12 p-2">
                            <div className="flex items-center">
                                <img className="mr-5" src={TRUCK_IMG} alt="" />
                                <h2 className="text-2xl font-bold">
                                    FAST SERVICE
                                </h2>
                            </div>
                        </div>
                        <div className="w-full sm:w-4/12 lg:w-4/12 p-2">
                            <p>
                                Free Delivery Now On Your First Order and over
                                {COMMON_CONSTANTS.currency} 200
                            </p>
                        </div>
                        <div className="w-full sm:w-4/12 lg:w-4/12 p-2">
                            <h2 className="text-2xl font-bold">
                                - STARTING FROM Only {COMMON_CONSTANTS.currency}{" "}
                                200*
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
