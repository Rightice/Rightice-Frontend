"use client"

import { useState } from "react"
import Sidebar from "../components/side-top-bar"
import { CreditCard, Plus, Trash2, CheckCircle, AlertCircle, Download } from "lucide-react"

const Payment = () => {
  const [activeTab, setActiveTab] = useState("payment-methods")
  const [showAddCard, setShowAddCard] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  // Sample payment methods
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "visa", last4: "4242", expMonth: 12, expYear: 2024, isDefault: true },
    { id: 2, type: "mastercard", last4: "5555", expMonth: 10, expYear: 2023, isDefault: false },
  ])

  // Sample invoices
  // const [invoices, setInvoices] = useState([
  //   { id: "INV-001", date: "2023-04-15", amount: 250.0, status: "paid", description: "Legal Consultation" },
  //   { id: "INV-002", date: "2023-05-20", amount: 500.0, status: "paid", description: "Document Preparation" },
  //   { id: "INV-003", date: "2023-06-10", amount: 350.0, status: "pending", description: "Case Review" },
  // ])

  // Form state for adding a new card
  const [newCard, setNewCard] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
    setAsDefault: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setNewCard({
      ...newCard,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "")
    // Add space after every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ")
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.slice(0, 19)
  }

  const formatExpiryDate = (value) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "")
    // Format as MM/YY
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`
    }
    return digits
  }

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value)
    setNewCard({ ...newCard, cardNumber: formatted })
  }

  const handleExpiryDateChange = (e) => {
    const formatted = formatExpiryDate(e.target.value)
    setNewCard({ ...newCard, expiryDate: formatted })
  }

  const handleAddCard = (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      // Extract month and year from expiry date
      const [expMonth, expYear] = newCard.expiryDate.split("/")

      // Create new card object
      const newPaymentMethod = {
        id: Date.now(),
        type: getCardType(newCard.cardNumber),
        last4: newCard.cardNumber.replace(/\s/g, "").slice(-4),
        expMonth: Number.parseInt(expMonth),
        expYear: Number.parseInt("20" + expYear),
        isDefault: newCard.setAsDefault,
      }

      // If new card is default, update other cards
      let updatedMethods = paymentMethods.map((method) => ({
        ...method,
        isDefault: newCard.setAsDefault ? false : method.isDefault,
      }))

      // Add new card
      updatedMethods = [...updatedMethods, newPaymentMethod]
      setPaymentMethods(updatedMethods)

      // Reset form and show success message
      setNewCard({
        cardNumber: "",
        cardholderName: "",
        expiryDate: "",
        cvv: "",
        setAsDefault: false,
      })
      setShowAddCard(false)
      setMessage({ type: "success", text: "Payment method added successfully" })
      setIsProcessing(false)

      // Clear message after 3 seconds
      setTimeout(() => setMessage({ type: "", text: "" }), 3000)
    }, 1500)
  }

  const handleSetDefault = (id) => {
    const updatedMethods = paymentMethods.map((method) => ({
      ...method,
      isDefault: method.id === id,
    }))
    setPaymentMethods(updatedMethods)
    setMessage({ type: "success", text: "Default payment method updated" })
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  const handleDeleteCard = (id) => {
    // Check if trying to delete the default card
    const isDefault = paymentMethods.find((method) => method.id === id)?.isDefault

    if (isDefault && paymentMethods.length > 1) {
      setMessage({
        type: "error",
        text: "Cannot delete default payment method. Please set another card as default first.",
      })
      setTimeout(() => setMessage({ type: "", text: "" }), 3000)
      return
    }

    const updatedMethods = paymentMethods.filter((method) => method.id !== id)

    // If we deleted the only card, or if we deleted a non-default card, just update the list
    if (updatedMethods.length === 0 || !isDefault) {
      setPaymentMethods(updatedMethods)
      setMessage({ type: "success", text: "Payment method removed" })
      setTimeout(() => setMessage({ type: "", text: "" }), 3000)
      return
    }

    // If we deleted the default card and there are other cards, make the first one default
    if (isDefault && updatedMethods.length > 0) {
      updatedMethods[0].isDefault = true
      setPaymentMethods(updatedMethods)
      setMessage({ type: "success", text: "Payment method removed and default updated" })
      setTimeout(() => setMessage({ type: "", text: "" }), 3000)
    }
  }

  const getCardType = (cardNumber) => {
    const cleanNumber = cardNumber.replace(/\s+/g, "")
    if (/^4/.test(cleanNumber)) return "visa"
    if (/^5[1-5]/.test(cleanNumber)) return "mastercard"
    if (/^3[47]/.test(cleanNumber)) return "amex"
    if (/^6(?:011|5)/.test(cleanNumber)) return "discover"
    return "unknown"
  }

  const getCardIcon = (type) => {
    switch (type) {
      case "visa":
        return "💳 Visa"
      case "mastercard":
        return "💳 Mastercard"
      case "amex":
        return "💳 American Express"
      case "discover":
        return "💳 Discover"
      default:
        return "💳 Card"
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-NG", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <Sidebar>
      <div className="p-6">
        <h1 className="text-3xl font-semibold text-[#242E4D] mb-6">Payments</h1>

        {/* Message display */}
        {message.text && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center ${
              message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle className="mr-2 h-5 w-5" />
            ) : (
              <AlertCircle className="mr-2 h-5 w-5" />
            )}
            {message.text}
          </div>
        )}

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("payment-methods")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "payment-methods"
                  ? "border-[#242E4D] text-[#242E4D]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Payment Methods
            </button>
            <button
              onClick={() => setActiveTab("billing-history")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "billing-history"
                  ? "border-[#242E4D] text-[#242E4D]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Billing History
            </button>
          </nav>
        </div>

        {/* Payment Methods Tab */}
        {activeTab === "payment-methods" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium text-[#242E4D]">Your Payment Methods</h2>
              {!showAddCard && (
                <button
                  onClick={() => setShowAddCard(true)}
                  className="flex items-center gap-2 bg-[#242E4D] text-white px-4 py-2 rounded hover:bg-[#182038] transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  Add Payment Method
                </button>
              )}
            </div>

            {/* Add Card Form */}
            {showAddCard && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-[#242E4D]">Add New Card</h3>
                  <button onClick={() => setShowAddCard(false)} className="text-gray-500 hover:text-gray-700">
                    Cancel
                  </button>
                </div>

                <form onSubmit={handleAddCard}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-2">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={newCard.cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#242E4D] focus:border-transparent"
                          required
                          maxLength={19}
                        />
                        <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        id="cardholderName"
                        name="cardholderName"
                        value={newCard.cardholderName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#242E4D] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={newCard.expiryDate}
                        onChange={handleExpiryDateChange}
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#242E4D] focus:border-transparent"
                        required
                        maxLength={5}
                      />
                    </div>

                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={newCard.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#242E4D] focus:border-transparent"
                        required
                        maxLength={4}
                        pattern="\d{3,4}"
                      />
                    </div>

                    <div className="col-span-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="setAsDefault"
                          name="setAsDefault"
                          checked={newCard.setAsDefault}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-[#242E4D] focus:ring-[#242E4D] border-gray-300 rounded"
                        />
                        <label htmlFor="setAsDefault" className="ml-2 block text-sm text-gray-700">
                          Set as default payment method
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="bg-[#242E4D] text-white px-6 py-2 rounded hover:bg-[#182038] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center min-w-[150px]"
                    >
                      {isProcessing ? "Processing..." : "Add Card"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Saved Payment Methods */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              {paymentMethods.length === 0 ? (
                <div className="text-center py-8">
                  <CreditCard className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No payment methods</h3>
                  <p className="mt-1 text-sm text-gray-500">Add a payment method to get started.</p>
                  <div className="mt-6">
                    <button
                      onClick={() => setShowAddCard(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#242E4D] hover:bg-[#182038]"
                    >
                      <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      Add Payment Method
                    </button>
                  </div>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {paymentMethods.map((method) => (
                    <li key={method.id} className="py-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="mr-4 flex-shrink-0 h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {getCardIcon(method.type)} •••• {method.last4}
                          </p>
                          <p className="text-sm text-gray-500">
                            Expires {method.expMonth}/{method.expYear}
                          </p>
                          {method.isDefault && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {!method.isDefault && (
                          <button
                            onClick={() => handleSetDefault(method.id)}
                            className="text-sm text-[#242E4D] hover:text-[#182038]"
                          >
                            Set as default
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteCard(method.id)}
                          className="text-sm text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Billing History Tab */}
        {activeTab === "billing-history" && (
          <div>
            <h2 className="text-xl font-medium text-[#242E4D] mb-6">Billing History</h2>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Invoice
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500">
                          No billing history available
                        </td>
                      </tr>
                    ) : (
                      invoices.map((invoice) => (
                        <tr key={invoice.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {invoice.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(invoice.date)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(invoice.amount)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                invoice.status === "paid"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {invoice.status === "paid" ? "Paid" : "Pending"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-[#242E4D] hover:text-[#182038] flex items-center justify-end">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </Sidebar>
  )
}

export default Payment
