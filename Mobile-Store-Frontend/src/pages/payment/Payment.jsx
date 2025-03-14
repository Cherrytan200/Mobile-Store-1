import  { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi"); // Default to UPI
  const [cardDetails, setCardDetails] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "India", // Default country
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleProceed = () => {
    if (paymentMethod === "upi") {
      alert("Proceeding with UPI payment...");
    } else if (paymentMethod === "card") {
      if (
        !cardDetails.cardHolderName ||
        !cardDetails.cardNumber ||
        !cardDetails.expiryDate ||
        !cardDetails.cvv
      ) {
        alert("Please fill in all card details.");
      } else {
        alert("Proceeding with card payment...");
        console.log("Card Details:", cardDetails);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Payment Method</label>
        <div className="flex gap-4">
          <button
            onClick={() => handlePaymentMethodChange("upi")}
            className={`px-4 py-2 rounded-md ${
              paymentMethod === "upi"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Pay with UPI
          </button>
          <button
            onClick={() => handlePaymentMethodChange("card")}
            className={`px-4 py-2 rounded-md ${
              paymentMethod === "card"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Pay with Card
          </button>
        </div>
      </div>

      {/* UPI Payment Form */}
      {paymentMethod === "upi" && (
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">UPI ID</label>
          <input
            type="text"
            placeholder="Enter UPI ID"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Card Payment Form */}
      {paymentMethod === "card" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Card Holder Name
            </label>
            <input
              type="text"
              name="cardHolderName"
              value={cardDetails.cardHolderName}
              onChange={handleCardDetailsChange}
              placeholder="Enter Card Holder Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              placeholder="Enter Card Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">
                Expiry Date (MM/YY)
              </label>
              <input
                type="text"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailsChange}
                placeholder="MM/YY"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                placeholder="CVV"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              name="country"
              value={cardDetails.country}
              onChange={handleCardDetailsChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
        </div>
      )}

      {/* Proceed Button */}
      <button
        onClick={handleProceed}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Proceed
      </button>
    </div>
  );
};

export default Payment;