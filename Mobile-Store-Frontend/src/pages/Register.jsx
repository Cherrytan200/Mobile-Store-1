import React, { useState } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import OTPInput from "otp-input-react";

export default function Register() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [gstIn, setGstIn] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [bankAccount, setBankAccount] = useState({
    accountNumber: "",
    ifscCode: "",
    accountHolderName: "",
  });

  const handleOtpSend = () => {
    if (mobile.length === 10) setOtpSent(true);
    else alert("Please enter a valid 10-digit mobile number.");
  };

  const handleOtpVerify = () => {
    if (otp.length === 6) setOtpVerified(true);
    else alert("Please enter a valid 6-digit OTP.");
  };

  const handleEmailOtpSend = () => {
    if (email.includes("@") && email.includes(".")) setEmailOtpSent(true);
    else alert("Please enter a valid email address.");
  };

  const handleEmailVerify = () => {
    if (emailOtp.length === 6) setEmailVerified(true);
    else alert("Please enter a valid 6-digit OTP.");
  };

  const isPasswordValid =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password);

  const steps = [
    "Email & GST Verification",
    "Password Creation",
    "Onboarding Dashboard",
  ];

  const handleNextStep = () => {
    if (step === 1) {
      if (!mobile || !email || !gstIn || !otpVerified || !emailVerified) {
        alert("Please complete all fields and verify OTPs.");
        return;
      }
    } else if (step === 2) {
      if (!fullName || !displayName || !password || !isPasswordValid) {
        alert("Please complete all fields and ensure the password is valid.");
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBankAccountChange = (e) => {
    const { name, value } = e.target;
    setBankAccount({ ...bankAccount, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8">
        {/* Step Indicator */}
        <div className="flex justify-between mb-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex-1 text-center text-sm font-semibold ${
                step === i + 1
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-400"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Step 1: Email & GST Verification */}
        {step === 1 && (
          <div className="space-y-6">
            {/* Mobile Number Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="* Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 border-2 h-12 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-0 transition-all pr-24"
                disabled={otpVerified}
              />
              {otpVerified && (
                <FaCheckCircle className="absolute right-14 top-3.5 text-green-500" />
              )}
              <button
                onClick={handleOtpSend}
                className="absolute right-3 top-1.5 font-semibold text-blue-600 bg-transparent p-2 rounded-lg hover:text-blue-700 transition-all"
                disabled={otpVerified}
              >
                Send OTP
              </button>
            </div>

            {/* OTP Input */}
            {otpSent && (
              <div className="flex flex-col space-y-4">
                <h4 className="mb-2">* Enter OTP sent to your mobile number</h4>
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  secure
                />
                <div className="flex gap-3 justify-center items-center">
                  <p className="text-sm text-gray-600">Didn&apos;t receive OTP?</p>
                  <button className="font-semibold text-blue-400">Resend OTP</button>
                </div>
                <button
                  onClick={handleOtpVerify}
                  className="w-full md:w-1/4 font-semibold text-white bg-blue-600 rounded-lg p-3 hover:bg-blue-700 transition-all"
                >
                  Verify OTP
                </button>
              </div>
            )}

            {/* Email Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="* Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-2 h-12 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-0 transition-all pr-24"
                disabled={emailVerified}
              />
              {emailVerified && (
                <FaCheckCircle className="absolute right-14 top-3.5 text-green-500" />
              )}
              <button
                onClick={handleEmailOtpSend}
                className="absolute right-3 top-1.5 font-semibold text-blue-600 bg-transparent p-2 rounded-lg hover:text-blue-700 transition-all"
                disabled={emailVerified}
              >
                Send OTP
              </button>
            </div>

            {/* Email OTP Input */}
            {emailOtpSent && (
              <div className="flex flex-col space-y-4">
                <h4 className="mb-2">* Enter OTP sent to your email</h4>
                <OTPInput
                  value={emailOtp}
                  onChange={setEmailOtp}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  secure
                />
                <div className="flex gap-3 justify-center items-center">
                  <p className="text-sm text-gray-600">Didn&apos;t receive OTP?</p>
                  <button className="font-semibold text-blue-400">Resend OTP</button>
                </div>
                <button
                  onClick={handleEmailVerify}
                  className="w-full md:w-1/4 font-semibold text-white bg-blue-600 rounded-lg p-3 hover:bg-blue-700 transition-all"
                >
                  Verify OTP
                </button>
              </div>
            )}

            {/* GST Input */}
            <input
              type="text"
              placeholder="* Enter GSTIN"
              value={gstIn}
              onChange={(e) => setGstIn(e.target.value)}
              className="w-full p-3 border-2 h-12 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-0 transition-all"
            />
          </div>
        )}

        {/* Step 2: Password Creation */}
        {step === 2 && (
          <div className="space-y-6">
            <input
              type="text"
              placeholder="* Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border-2 h-12 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-0 transition-all"
            />
            <input
              type="text"
              placeholder="* Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full p-3 border-2 h-12 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-0 transition-all"
            />
            <input
              type="password"
              placeholder="* Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border-2 h-12 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-0 transition-all"
            />
            {!isPasswordValid && (
              <p className="text-sm text-red-500">
                Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
              </p>
            )}
          </div>
        )}

        {/* Step 3: Bank Account Form */}
        {step === 3 && (
          <div className="space-y-6">
            <input
              type="text"
              placeholder="* Account Number"
              name="accountNumber"
              value={bankAccount.accountNumber}
              onChange={handleBankAccountChange}
              className="w-full p-3 border-2 h-12 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-0 transition-all"
            />
            <input
              type="text"
              placeholder="* IFSC Code"
              name="ifscCode"
              value={bankAccount.ifscCode}
              onChange={handleBankAccountChange}
              className="w-full p-3 border-2 h-12 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-0 transition-all"
            />
            <input
              type="text"
              placeholder="* Account Holder Name"
              name="accountHolderName"
              value={bankAccount.accountHolderName}
              onChange={handleBankAccountChange}
              className="w-full p-3 border-2 h-12 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-0 transition-all"
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePreviousStep}
            disabled={step === 1}
            className="flex items-center gap-2 font-semibold text-blue-600 bg-transparent p-2 rounded-lg hover:text-blue-700 transition-all"
          >
            <FaArrowRight className="rotate-180" /> Previous
          </button>
          <button
            onClick={handleNextStep}
            className="flex items-center gap-2 font-semibold text-white bg-blue-600 rounded-lg p-3 hover:bg-blue-700 transition-all"
          >
            {step === 3 ? "Complete Registration" : "Next"} <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}