"use client";

import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

// Single file lawyer booking system with payment verification
const Consultation = () => {
  // State for booking form
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLawyer, setSelectedLawyer] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [caseDetails, setCaseDetails] = useState("");

  // State for modals
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Mock data for available lawyers
  const LAWYERS = [
    { id: 1, name: "Barr. Joy Edwards", specialization: "Family Law" },
    { id: 2, name: "Barr. Esther Adeleke", specialization: "Divorce Attorney" },
    {
      id: 3,
      name: "Barr. Michael Chibuzor",
      specialization: "Criminal Defense",
    },
    {
      id: 4,
      name: "Barr. Cynthia cole",
      specialization: "Intellectual Property",
    },
    {
      id: 5,
      name: "Barr. Kelvin Johnson",
      specialization: "Litigator",
    },
    {
      id: 6,
      name: "Barr. Rachael Adeyemi",
      specialization: "Tax Law",
    },
  ];

  // Mock data for available time slots
  const TIME_SLOTS = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  // Mock function to check if user has made payment
  const hasUserPaid = () => {
    // This would typically be a check to your backend/database
    // For demo purposes, we'll return false to show the payment required flow
    return false;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!hasUserPaid()) {
      setShowPaymentModal(true);
      return;
    }

    // Process the booking if payment is verified
    setBookingConfirmed(true);
  };

  const handleMakePayment = () => {
    // In a real app, this would redirect to a payment processor
    setShowPaymentModal(false);
    setShowPaymentPage(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate successful payment
    setShowPaymentPage(false);
    setBookingConfirmed(true);
  };

  const isFormValid = () => {
    return (
      selectedDate && selectedLawyer && selectedTime && name && email && phone
    );
  };

  // Helper function to generate calendar days
  const generateCalendarDays = () => {
    const today = new Date();
    const days = [];

    // Generate next 14 days
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue;

      days.push(date);
    }

    return days;
  };

  // Calendar days
  const calendarDays = generateCalendarDays();

  // Format date for display
  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // PaymentRequiredModal Component
  const PaymentRequiredModal = () => {
    if (!showPaymentModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-lg font-medium">Payment Required</h3>
            </div>
            <button
              onClick={() => setShowPaymentModal(false)}
              className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center py-4">
            <div className="rounded-full bg-yellow-100 p-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <p className="text-center mb-2">
              You need to complete payment before booking a consultation with
              our lawyers.
            </p>
            <p className="text-sm text-gray-500 text-center">
              This ensures commitment and helps us provide quality service to
              all clients.
            </p>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button
              onClick={handleMakePayment}
              className="px-4 py-2 bg-[#242E4D] border border-transparent rounded-md text-sm font-medium text-white hover:bg-[#1a223c] cursor-pointer">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Payment Page Component
  const PaymentPage = () => {
    if (!showPaymentPage) return null;

    return (
      <div className="fixed inset-0 bg-white z-50 overflow-auto">
        <div className="max-w-2xl mx-auto py-8 px-4">
          <h1 className="text-2xl font-bold mb-6">Complete Payment</h1>
          <p className="text-gray-600 mb-8">
            Complete your payment to unlock booking capabilities with our legal
            professionals.
          </p>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium">Payment Details</h2>
              <p className="text-sm text-gray-500">
                Choose your payment method and enter your details
              </p>
            </div>

            <form onSubmit={handlePaymentSubmit} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border-2 border-blue-600 rounded-md p-4 flex flex-col items-center bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mb-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span className="text-sm">Card</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Smith"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    placeholder="4242 4242 4242 4242"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="month"
                      className="block text-sm font-medium text-gray-700">
                      Expiry Month
                    </label>
                    <input
                      type="text"
                      id="month"
                      placeholder="MM"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="year"
                      className="block text-sm font-medium text-gray-700">
                      Expiry Year
                    </label>
                    <input
                      type="text"
                      id="year"
                      placeholder="YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="CVC"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-100 p-4">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium">Secure Payment</h4>
                    <p className="text-sm text-gray-500">
                      Your payment information is encrypted and secure. We never
                      store your full card details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setShowPaymentPage(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#242E4D] cursor-pointer border border-transparent rounded-md text-sm font-medium text-white hover:bg-[#1a223c]">
                  Pay N20,000
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Booking Confirmation Component
  const BookingConfirmation = () => {
    if (!bookingConfirmed) return null;

    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="rounded-full bg-green-100 p-3 mx-auto w-16 h-16 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your consultation has been scheduled successfully. You will receive
            a confirmation email shortly.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Date:</div>
              <div className="font-medium">{formatDate(selectedDate)}</div>
              <div className="text-gray-500">Time:</div>
              <div className="font-medium">{selectedTime}</div>
              <div className="text-gray-500">Lawyer:</div>
              <div className="font-medium">
                {LAWYERS.find((l) => l.id.toString() === selectedLawyer)
                  ?.name || ""}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setBookingConfirmed(false);
              setSelectedDate(null);
              setSelectedLawyer("");
              setSelectedTime("");
              setName("");
              setEmail("");
              setPhone("");
              setCaseDetails("");
            }}
            className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700">
            Book Another Consultation
          </button>
        </div>
      </div>
    );
  };

  // Main render
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="bg-black/10 p-5 rounded-full flex justify-center items-center h-10 w-10 mb-8">
        <Link to="/home">
          <IoChevronBack className="text-2xl" />
        </Link>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          Rightice.ng Legal Consultation Booking System
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Calendar Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium">Select Consultation Date</h2>
              <p className="text-sm text-gray-500">
                Choose an available date for your legal consultation. Ensure you
                make your bookings atleast 3 days before meeting the lawyer.
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(day)}
                    className={`p-2 rounded-md text-center ${
                      selectedDate &&
                      day.toDateString() === selectedDate.toDateString()
                        ? "bg-blue-100 border-2 border-blue-600 text-blue-800"
                        : "border border-gray-300 hover:border-blue-500 hover:bg-blue-50"
                    }`}>
                    <div className="text-xs font-medium">
                      {day.toLocaleDateString("en-US", { weekday: "short" })}
                    </div>
                    <div className="text-lg font-bold">{day.getDate()}</div>
                    <div className="text-xs">
                      {day.toLocaleDateString("en-US", { month: "short" })}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium">Booking Details</h2>
              <p className="text-sm text-gray-500">
                Complete your consultation information
              </p>
            </div>

            <div className="p-6">
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="lawyer"
                    className="block text-sm font-medium text-gray-700">
                    Select Lawyer
                  </label>
                  <select
                    id="lawyer"
                    value={selectedLawyer}
                    onChange={(e) => setSelectedLawyer(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required>
                    <option value="">Select a lawyer</option>
                    {LAWYERS.map((lawyer) => (
                      <option key={lawyer.id} value={lawyer.id.toString()}>
                        {lawyer.name} - {lawyer.specialization}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedDate && (
                  <div className="space-y-2">
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700">
                      Select Time
                    </label>
                    <select
                      id="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required>
                      <option value="">Select a time slot</option>
                      {TIME_SLOTS.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="caseDetails"
                    className="block text-sm font-medium text-gray-700">
                    Case Details (Optional)
                  </label>
                  <textarea
                    id="caseDetails"
                    value={caseDetails}
                    onChange={(e) => setCaseDetails(e.target.value)}
                    placeholder="Briefly describe your legal matter"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {selectedDate && (
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-4">
                    <h3 className="text-sm font-medium text-blue-800 mb-2">
                      Booking Summary
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{formatDate(selectedDate)}</span>
                    </div>
                    {selectedTime && (
                      <div className="flex items-center gap-2 text-sm text-blue-800 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{selectedTime}</span>
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full px-4 py-2 rounded-md text-sm font-medium text-white ${
                    isFormValid()
                      ? "bg-[#242E4D] hover:bg-[#1a223c] cursor-pointer"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}>
                  Book Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PaymentRequiredModal />
      <PaymentPage />
      <BookingConfirmation />
    </div>
  );
};

export default Consultation;
