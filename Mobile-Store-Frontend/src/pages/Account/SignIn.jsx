import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import PhoneInput, {parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Login = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [country, setCountry] = useState('IN');
  const [mobile,setMobile]=useState("") // Default country is India
  const navigate = useNavigate();

  const handlePhoneChange = (number) => {
    setValue(number);
    try {
      const parsed = parsePhoneNumber(number);
      if (parsed) {
        setCountry(parsed.country); // Set the country dynamically
      }
    } catch (error) {
      console.error("Invalid number format");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedNumber = mobile.replace(/\D/g, '');

    if (!cleanedNumber ||  cleanedNumber.length!==10) {
      setError('Please enter a valid 10-digit mobile number.');
    } else {
      setError('');
      navigate('/otp', { state: { mobileNumber: mobile } });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h2>
        <img className="w-[200px] mx-auto mb-4" src='/Login.jpg' alt="Udaan Logo" />

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            {/* Label */}
            <label className="block text-xl font-medium text-gray-700 text-center p-3">
              Enter <span className="text-red-700">Mobile</span> Number
            </label>
            <p className="text-gray-500 text-center mb-3 p-3">
              Enter your 10-digit mobile number to receive the verification code.
            </p>

            {/* Phone Input Container */}
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-300 transition-all">
              
              {/* Country Code Section - Small Width */}
              <div className="w-28 flex items-center justify-center px-3 py-3 bg-gray-100 border-r border-gray-300">
                <PhoneInput
                  international
                  defaultCountry="IN"
                  country={country}
                  value={value}
                  onChange={handlePhoneChange}
                  className="w-full focus:outline-none"
                />
              </div>

              {/* User Phone Number Input - More Width */}
              <input
                type="tel"
                className="flex-1 px-4 py-3 focus:outline-none bg-transparent w-full"
                placeholder="Enter phone number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-xl bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all shadow-md"
          >
            Get Verification Code
          </button>

          {/* Terms and Privacy Policy */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            By continuing, you agree to our{' '}
            <a href="#" className="text-orange-500 hover:underline">Terms of Service</a> and{' '}
            <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;