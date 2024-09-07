import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button/Button";

const ContactForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        businessName: "",
        phoneNumber: "", // Replaced websiteUrl with phoneNumber
        services: {
            webDesign: false,
            branding: false,
            webflowDevelopment: false,
            seo: false,
            other: false,
        },
        budget: "",
        message: "",
        agree: false,
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is not valid.";
        }

        if (formData.phoneNumber.trim() === "") {
            newErrors.phoneNumber = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
        }

        if (formData.budget === "") {
            newErrors.budget = "Please select a budget.";
        }

        if (!formData.agree) {
            newErrors.agree = "You must agree to the terms.";
        }

        const isAnyServiceSelected = Object.values(formData.services).some(value => value);
        if (!isAnyServiceSelected && !formData.services.other) {
            newErrors.services = "Select at least one service";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        if (type === "checkbox" && name !== "agree") {
            setFormData((prevState) => ({
                ...prevState,
                services: {
                    ...prevState.services,
                    [name]: checked,
                },
            }));
        } else if (name === "agree") {
            setFormData((prevState) => ({
                ...prevState,
                [name]: checked,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setFormData({
                name: "",
                email: "",
                businessName: "",
                phoneNumber: "", // Reset phoneNumber instead of websiteUrl
                services: {
                    webDesign: false,
                    branding: false,
                    webflowDevelopment: false,
                    seo: false,
                    other: false,
                },
                budget: "",
                message: "",
                agree: false,
            });

            setErrors({});


            alert("Your message has been sent successfully!");
        }
    };

    return (
        <form className="max-w-2xl mx-auto p-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 block w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"
                            } rounded-md shadow-sm focus:border-[#143cff] focus:outline-none focus:ring-0`}
                    />
                    {errors.name && <p className="mt-1 text-xs !text-[#ef4444]">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                            } rounded-md shadow-sm focus:border-[#143cff] focus:outline-none focus:ring-0`}
                    />
                    {errors.email && <p className="mt-1 text-xs !text-[#ef4444]">{errors.email}</p>}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="number" // Changed to number input
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`mt-1 block w-full p-2 border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                            } rounded-md shadow-sm focus:border-[#143cff] focus:outline-none focus:ring-0`}
                    />
                    {errors.phoneNumber && <p className="mt-1 text-xs !text-[#ef4444]">{errors.phoneNumber}</p>}
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Business name (optional)</label>
                    <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#143cff] focus:outline-none focus:ring-0"
                    />
                </div>

            </div>
            <div className="form-group mt-4">
                <label className="block text-sm font-medium text-gray-700">What services are you interested in?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {Object.keys(formData.services).map((service) => (
                        <label key={service} className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name={service}
                                checked={formData.services[service]}
                                onChange={handleChange}
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-[#143cff]"
                            />
                            <span className="ml-2 text-gray-700 capitalize">{service.replace(/([A-Z])/g, " $1")}</span>
                        </label>
                    ))}
                </div>
                {errors.services && <p className="mt-1 text-xs !text-[#ef4444]">{errors.services}</p>}
            </div>

            <div className="form-group mt-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-[#143cff] focus:outline-none focus:ring-0"
                ></textarea>
            </div>
            <div className="form-group mt-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className={`h-4 w-4 text-indigo-600 ${errors.agree ? "border-red-500" : "border-gray-300"
                            } rounded focus:ring-[#143cff]`}
                    />
                    <span className="ml-2 text-gray-700 ">
                        By clicking the Submit button you agree to our{" "}
                        <a onClick={() => {
                            navigate('/privacy-policy')
                        }} rel="noopener noreferrer" className="cursor-pointer text-[#143cff] underline">
                            Privacy Policy
                        </a>{" "}
                        terms.
                    </span>
                </label>
                {errors.agree && <p className="mt-1 text-xs !text-[#ef4444]">{errors.agree}</p>}
            </div>
            <div className="form-group mt-6 text-white">

                <Button
                    type={"submit"}
                    initialText={"Send message"}
                    flippedText={"Send message"}
                    loadingText={"Sending..."}
                    width="200px"
                    className="text-white"
                    showArrow={true}
                />
            </div>
        </form>
    );
};

export default ContactForm;
