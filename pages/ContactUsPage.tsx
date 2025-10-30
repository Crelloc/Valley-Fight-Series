import React from 'react';

const ContactUsPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bebas tracking-wider text-white">Contact Us</h2>
                <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                    Have a question or want to get in touch? Please contact us directly using the information below.
                </p>
            </div>

            <div className="max-w-lg mx-auto bg-gray-900/50 border border-gray-700 rounded-lg p-8">
                <div className="text-gray-300">
                    <h3 className="text-3xl font-bebas text-white mb-8 text-center">Direct Contact</h3>
                    <div className="space-y-6 text-center">
                        <div>
                            <h4 className="font-bold text-red-500 tracking-wider">General Inquiries</h4>
                            <a href="mailto:info@valleyfightseries.com" className="hover:text-white text-lg">info@valleyfightseries.com</a>
                        </div>
                        <div>
                            <h4 className="font-bold text-red-500 tracking-wider">Sponsorship</h4>
                            <a href="mailto:sponsorship@valleyfightseries.com" className="hover:text-white text-lg">sponsorship@valleyfightseries.com</a>
                        </div>
                         <div>
                            <h4 className="font-bold text-red-500 tracking-wider">Media & Press</h4>
                            <a href="mailto:media@valleyfightseries.com" className="hover:text-white text-lg">media@valleyfightseries.com</a>
                        </div>
                        <div>
                            <h4 className="font-bold text-red-500 tracking-wider">Phone</h4>
                            <p className="text-lg">(559) 123-4567</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;