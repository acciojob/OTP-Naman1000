
import { useRef } from "react";

export default function OTPVerification() {
  const inputsRef = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (/\d/.test(value) && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 id="verification_heading" className="text-2xl font-bold mb-2">
        Verify Your Account
      </h1>
      <p id="verification_subtext" className="text-gray-600 mb-4">
        Please enter the 6-digit OTP sent to your email or phone.
      </p>
      <div className="flex gap-2 code-container">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="w-10 h-12 text-center border rounded code"
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
    </div>
  );
}
