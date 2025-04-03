import Accordion from "../../components/Accordion/Accordion";
import { helpTopics } from "../../mocks/helpCenter";

const HelpCenter = () => {
    return (
        <div className="w-full py-10 bg-gray-100">
            <div className="max-w-5xl mx-auto p-4">
                <h1 className="text-3xl font-light text-center mb-6">
                    Help Center
                </h1>
                <p className="text-center text-gray-600 mb-10">
                    Find answers to common questions and learn how to make the
                    most out of our platform.
                </p>
                <div className="space-y-4">
                    {helpTopics.map((topic, index) => (
                        <Accordion
                            key={index}
                            title={topic.title}
                            content={topic.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
