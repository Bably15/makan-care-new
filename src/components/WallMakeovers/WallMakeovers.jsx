import wallmakeover from "../../assets/pic4.png";

const WallMakeover = () => {
    return (
        <div className="">
            <div className="w-full py-5">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full flex justify-between">
                            <img src={wallmakeover} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WallMakeover;
