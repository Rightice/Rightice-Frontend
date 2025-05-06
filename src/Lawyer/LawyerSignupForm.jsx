"use client";

import "react";

import { useState, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight, Upload, X } from "lucide-react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function LawyerSignupForm() {
  const [step, setStep] = useState(0);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [licensePreviewUrl, setLicensePreviewUrl] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profilePhoto: null,
    password: "",
    confirmPassword: "",
    expertise: [],
    experience: "",
    workplace: "",
    licenseNumber: "",
    licenseRegion: "",
    licenseUpload: null,
    linkedIn: "",
    languages: [],
    country: "",
    state: "",
    city: "",
    address: "",
    availableDays: [],
    timeSlots: "",
    consultationTypes: [],
    consultationFee: "",
    isLicensed: false,
    agreeTerms: false,
    consentCheck: false,
  });

  const steps = [
    {
      name: "Personal Info",
      icon: "1",
    },
    {
      name: "Professional",
      icon: "2",
    },
    {
      name: "Location",
      icon: "3",
    },
    {
      name: "Availability",
      icon: "4",
    },
    {
      name: "Consent",
      icon: "5",
    },
  ];

  const availableDaysOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const consultationTypesOptions = [
    "In-person",
    "Video call",
    "Phone call",
    "Email",
    "Chat",
  ];

  const expertiseOptions = [
    "Family Law",
    "Criminal Law",
    "Corporate Law",
    "Intellectual Property",
    "Real Estate",
    "Immigration",
    "Tax Law",
    "Labor Law",
    "Environmental Law",
    "Bankruptcy",
  ];

  useEffect(() => {
    // Check if passwords match
    if (formData.confirmPassword) {
      setPasswordMatch(formData.password === formData.confirmPassword);
    }
  }, [formData.password, formData.confirmPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type === "checkbox") {
      const checked = e.target.checked;
      setFormData({ ...formData, [name]: checked });
    } else if (e.target.type === "file") {
      const files = e.target.files;
      if (files && files.length > 0) {
        setFormData({ ...formData, [name]: files[0] });

        // Create preview URL for image
        const fileUrl = URL.createObjectURL(files[0]);
        if (name === "profilePhoto") {
          setPreviewUrl(fileUrl);
        } else if (name === "licenseUpload") {
          setLicensePreviewUrl(fileUrl);
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleMultiSelect = (name, value) => {
    const currentValues = [...formData[name]];

    if (currentValues.includes(value)) {
      setFormData({
        ...formData,
        [name]: currentValues.filter((item) => item !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: [...currentValues, value],
      });
    }
  };

  const nextStep = () => {
    if (step === 0 && !validateStep1()) return;
    if (step === 1 && !validateStep2()) return;
    if (step === 2 && !validateStep3()) return;
    if (step === 3 && !validateStep4()) return;

    setStep((prev) => Math.min(prev + 1, steps.length - 1));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const validateStep1 = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all required fields");
      return false;
    }
    if (!passwordMatch) {
      alert("Passwords do not match");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (
      formData.expertise.length === 0 ||
      !formData.experience ||
      !formData.licenseNumber ||
      !formData.licenseRegion
    ) {
      alert("Please fill in all required fields");
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (!formData.country || !formData.state || !formData.city) {
      alert("Please fill in all required fields");
      return false;
    }
    return true;
  };

  const validateStep4 = () => {
    if (
      formData.availableDays.length === 0 ||
      formData.consultationTypes.length === 0
    ) {
      alert("Please select at least one available day and consultation type");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.isLicensed ||
      !formData.agreeTerms ||
      !formData.consentCheck
    ) {
      alert("Please agree to all terms and conditions");
      return;
    }

    // Submit logic here
    console.log(formData);
    alert("Form submitted successfully!");
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Photo
                </label>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      id="profilePhoto"
                      name="profilePhoto"
                      type="file"
                      onChange={handleChange}
                      className="hidden"
                      accept="image/*"
                    />
                    <label
                      htmlFor="profilePhoto"
                      className="flex items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-full cursor-pointer hover:border-emerald-500 transition">
                      {previewUrl ? (
                        <img
                          src={previewUrl || "/placeholder.svg"}
                          alt="Profile preview"
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <div className="text-center">
                          <Upload className="mx-auto h-8 w-8 text-gray-400" />
                          <span className="mt-1 block text-xs text-gray-500">
                            Upload
                          </span>
                        </div>
                      )}
                    </label>
                    {previewUrl && (
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewUrl(null);
                          setFormData({ ...formData, profilePhoto: null });
                        }}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    Upload a professional photo. This will be visible to
                    clients.
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Must be at least 8 characters with a number and special
                  character
                </p>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password *
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition ${
                    formData.confirmPassword && !passwordMatch
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  required
                />
                {formData.confirmPassword && !passwordMatch && (
                  <p className="mt-1 text-xs text-red-500">
                    Passwords do not match
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Professional Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Expertise *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {expertiseOptions.map((option) => (
                    <label
                      key={option}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                        formData.expertise.includes(option)
                          ? "bg-emerald-50 border-emerald-500"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={formData.expertise.includes(option)}
                        onChange={() => handleMultiSelect("expertise", option)}
                      />
                      <span className="flex items-center">
                        {formData.expertise.includes(option) && (
                          <Check className="h-4 w-4 text-emerald-500 mr-2" />
                        )}
                        <span
                          className={
                            formData.expertise.includes(option)
                              ? "text-emerald-700"
                              : "text-gray-700"
                          }>
                          {option}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience *
                </label>
                <input
                  name="experience"
                  type="number"
                  min="0"
                  placeholder="5"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Law Firm / Workplace
                </label>
                <input
                  name="workplace"
                  type="text"
                  placeholder="Smith & Associates"
                  value={formData.workplace}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  License Number *
                </label>
                <input
                  name="licenseNumber"
                  type="text"
                  placeholder="BAR12345678"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  License Region/State *
                </label>
                <input
                  name="licenseRegion"
                  type="text"
                  placeholder="California"
                  value={formData.licenseRegion}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  License Document *
                </label>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      id="licenseUpload"
                      name="licenseUpload"
                      type="file"
                      onChange={handleChange}
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                    <label
                      htmlFor="licenseUpload"
                      className="flex items-center justify-center w-40 h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-emerald-500 transition">
                      {licensePreviewUrl ? (
                        <div className="w-full h-full relative">
                          <img
                            src={licensePreviewUrl || "/placeholder.svg"}
                            alt="License preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
                            <span className="text-white text-xs font-medium">
                              View Document
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="mx-auto h-8 w-8 text-gray-400" />
                          <span className="mt-1 block text-xs text-gray-500">
                            Upload License
                          </span>
                        </div>
                      )}
                    </label>
                    {licensePreviewUrl && (
                      <button
                        type="button"
                        onClick={() => {
                          setLicensePreviewUrl(null);
                          setFormData({ ...formData, licenseUpload: null });
                        }}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    Upload a copy of your legal license. We accept PDF or image
                    formats.
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn Profile
                </label>
                <input
                  name="linkedIn"
                  type="url"
                  placeholder="https://linkedin.com/in/johndoe"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                />
              </div>
              {/* <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Languages
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  {languageOptions.map((option) => (
                    <label
                      key={option}
                      className={`flex items-center p-2 border rounded-lg cursor-pointer transition ${
                        formData.languages.includes(option)
                          ? "bg-emerald-50 border-emerald-500"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={formData.languages.includes(option)}
                        onChange={() => handleMultiSelect("languages", option)}
                      />
                      <span className="flex items-center">
                        {formData.languages.includes(option) && (
                          <Check className="h-4 w-4 text-emerald-500 mr-2" />
                        )}
                        <span
                          className={
                            formData.languages.includes(option)
                              ? "text-emerald-700"
                              : "text-gray-700"
                          }>
                          {option}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country *
                </label>
                <input
                  name="country"
                  type="text"
                  placeholder="United States"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State/Province *
                </label>
                <input
                  name="state"
                  type="text"
                  placeholder="California"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder="San Francisco"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  required
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Office Address
                </label>
                <textarea
                  name="address"
                  placeholder="123 Legal Street, Suite 456"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Availability
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Available Days *
                </label>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-2 mt-2">
                  {availableDaysOptions.map((day) => (
                    <label
                      key={day}
                      className={`flex items-center justify-center p-2 border rounded-lg cursor-pointer transition ${
                        formData.availableDays.includes(day)
                          ? "bg-emerald-50 border-emerald-500"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={formData.availableDays.includes(day)}
                        onChange={() => handleMultiSelect("availableDays", day)}
                      />
                      <span
                        className={
                          formData.availableDays.includes(day)
                            ? "text-emerald-700"
                            : "text-gray-700"
                        }>
                        {day.substring(0, 3)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Slots
                </label>
                <input
                  name="timeSlots"
                  type="text"
                  placeholder="9:00 AM - 5:00 PM"
                  value={formData.timeSlots}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Specify your general working hours (e.g., 9:00 AM - 5:00 PM)
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Consultation Types *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2">
                  {consultationTypesOptions.map((type) => (
                    <label
                      key={type}
                      className={`flex items-center justify-center p-2 border rounded-lg cursor-pointer transition ${
                        formData.consultationTypes.includes(type)
                          ? "bg-emerald-50 border-emerald-500"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={formData.consultationTypes.includes(type)}
                        onChange={() =>
                          handleMultiSelect("consultationTypes", type)
                        }
                      />
                      <span
                        className={
                          formData.consultationTypes.includes(type)
                            ? "text-emerald-700"
                            : "text-gray-700"
                        }>
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Consultation Fee (USD)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <input
                    name="consultationFee"
                    type="number"
                    min="0"
                    placeholder="150"
                    value={formData.consultationFee}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Leave blank if you prefer to discuss fees on a case-by-case
                  basis
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Terms & Consent
            </h3>
            <div className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5">
                  <input
                    id="isLicensed"
                    name="isLicensed"
                    type="checkbox"
                    checked={formData.isLicensed}
                    onChange={handleChange}
                    className="h-5 w-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="isLicensed"
                    className="font-medium text-gray-700">
                    Professional License Confirmation
                  </label>
                  <p className="text-gray-500 text-sm">
                    I confirm that I am a licensed legal professional in good
                    standing with the relevant bar association or regulatory
                    body.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="h-5 w-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="agreeTerms"
                    className="font-medium text-gray-700">
                    Terms and Privacy Policy
                  </label>
                  <p className="text-gray-500 text-sm">
                    I have read and agree to the{" "}
                    <a
                      href="#"
                      className="text-emerald-600 hover:text-emerald-800 underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-emerald-600 hover:text-emerald-800 underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5">
                  <input
                    id="consentCheck"
                    name="consentCheck"
                    type="checkbox"
                    checked={formData.consentCheck}
                    onChange={handleChange}
                    className="h-5 w-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="consentCheck"
                    className="font-medium text-gray-700">
                    Verification Consent
                  </label>
                  <p className="text-gray-500 text-sm">
                    I consent to the verification of my credentials and
                    understand that a background check may be conducted to
                    confirm my professional status.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    By submitting this form, you are creating a professional
                    profile that will be visible to potential clients. Please
                    ensure all information is accurate and up-to-date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-2xl">
      <div className="bg-black/10 p-5 rounded-full flex justify-center items-center h-10 w-10 mb-8">
        <Link to="/">
          <IoChevronBack className="text-2xl" />
        </Link>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Lawyer Registration
        </h2>
        <p className="text-gray-600 mt-2">
          Join our network of legal professionals
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between w-full mb-2">
          {steps.map((stepItem, i) => (
            <div
              key={i}
              className={`flex flex-col items-center ${
                i !== steps.length - 1 ? "w-full" : ""
              }`}>
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold ${
                  i < step
                    ? "bg-black text-white"
                    : i === step
                    ? "text-black ring-1 ring-blue-700"
                    : "bg-gray-100 text-gray-400"
                }`}>
                {i < step ? <Check className="h-5 w-5" /> : stepItem.icon}
              </div>
              <div className="text-xs mt-1 text-center font-medium">
                {stepItem.name}
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full h-1 bg-gray-200 rounded-full mt-2">
          <div
            className="absolute top-0 left-0 h-1 bg-black rounded-full transition-all duration-300"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStepContent()}

        <div className="mt-8 flex justify-between">
          {step > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded text-gray-700 font-medium hover:bg-gray-50 transition cursor-pointer">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center ml-auto px-6 py-3 bg-black rounded text-white font-medium cursor-pointer hover:bg-black/90 transition">
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center ml-auto px-6 py-3 bg-emerald-600 rounded-lg text-white font-medium hover:bg-emerald-700 transition">
              Complete Registration
              <Check className="h-4 w-4 ml-2" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
