import { Link } from "react-router-dom";
import { APPROUTES } from "../../constants/routes/appRoutes";

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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">
                            Getting Started
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Learn how to set up your account and start using our
                            services.
                        </p>
                        <Link
                            to={APPROUTES.CONTACT}
                            className="bg-[#6b4f36] hover:bg-stone-900 rounded-md p-2 px-4 text-sm text-white"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">
                            Account Management
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Manage your account settings and preferences.
                        </p>
                        <Link
                            to={APPROUTES.CONTACT}
                            className="bg-[#6b4f36] hover:bg-stone-900 rounded-md p-2 px-4 text-sm text-white"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">
                            Billing & Payments
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Get information about billing, invoices, and payment
                            methods.
                        </p>
                        <Link
                            to={APPROUTES.CONTACT}
                            className="bg-[#6b4f36] hover:bg-stone-900 rounded-md p-2 px-4 text-sm text-white"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">
                            Technical Support
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Troubleshoot technical issues and find solutions.
                        </p>
                        <Link
                            to={APPROUTES.CONTACT}
                            className="bg-[#6b4f36] hover:bg-stone-900 rounded-md p-2 px-4 text-sm text-white"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">
                            Security & Privacy
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Understand how we protect your data and ensure
                            privacy.
                        </p>
                        <Link
                            to={APPROUTES.CONTACT}
                            className="bg-[#6b4f36] hover:bg-stone-900 rounded-md p-2 px-4 text-sm text-white"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">
                            Contact Us
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Still have questions? Get in touch with our support
                            team.
                        </p>
                        <Link
                            to={APPROUTES.CONTACT}
                            className="bg-[#6b4f36] hover:bg-stone-900 rounded-md p-2 px-4 text-sm text-white"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
