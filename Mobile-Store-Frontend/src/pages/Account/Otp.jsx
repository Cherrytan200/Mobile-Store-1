import { useLocation } from 'react-router-dom';

const Otp = () => {
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber || '+91 XXXXX XXXXX'; // Default value if state is not passed

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Enter <span className="text-orange-500">OTP</span>
        </h1>

        {/* OTP Sent Message */}
        <p className="text-sm text-gray-600 mb-4">
          An OTP has been sent to your registration mobile number{' '}
          <span className="font-semibold">{mobileNumber}</span>.
        </p>

        {/* Resend OTP and Phone Call Links */}
        <div className="text-sm text-gray-600 mb-6">
          <p className="mb-2">
            In case you have not received it,{' '}
            <a href="#" className="text-orange-500 hover:underline">
              Resend OTP
            </a>
          </p>
          <p>
            <a href="#" className="text-orange-500 hover:underline">
              Get OTP on a Phone Call
            </a>
          </p>
        </div>

        {/* OTP Input Boxes */}
        <div className="flex justify-center space-x-4 mb-6">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default Otp;