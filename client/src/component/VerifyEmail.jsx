import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "../context/ToastContext";
import { useLogin } from "../context/LoginContext";
import Button from "../component/ui/Button";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { showToast } = useToast();
  const { openLogin } = useLogin();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp.trim()) {
      showToast("error", "Please enter the OTP");
      return;
    }

    if (otp.length !== 6) {
      showToast("error", "OTP must be 6 digits");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-email",
        {
          email,
          otp,
        }
      );

      showToast(
        "success",
        response.data.message || "Email verified successfully!"
      );

      setTimeout(() => {
        navigate("/");
        openLogin();
      }, 500);

    } catch (error) {
      console.error("OTP verification error:", error);

      showToast(
        "error",
        error.response?.data?.message || "Invalid or expired OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0) return;

    try {
      setResendLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/resend-otp",
        {
          email,
        }
      );

      showToast(
        "success",
        response.data.message || "New OTP sent successfully"
      );

      setTimer(60);
      setOtp("");

    } catch (error) {
      console.error("Resend OTP error:", error);

      showToast(
        "error",
        error.response?.data?.message || "Unable to resend OTP"
      );
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-12 dark:bg-dark-background">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md dark:bg-[#1F2937]">
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark dark:text-white">
            Verify Your Email
          </h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            We have sent a 6-digit OTP to
          </p>

          <p className="mt-1 font-medium text-primary break-all">
            {email}
          </p>
        </div>

        <form onSubmit={handleVerify} className="mt-8">
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setOtp(value);
            }}
            className="w-full rounded-lg border border-[#E2E2E2] bg-white px-4 py-3 text-center text-lg tracking-[0.4em] outline-none transition-all focus:border-primary dark:border-[#374151] dark:bg-[#1F2937] dark:text-white"
          />

          <Button
            text={loading ? "Verifying..." : "Verify Email"}
            type="submit"
            size="md"
            disabled={loading}
            className="mt-5 w-full"
          />
        </form>

        <div className="mt-6 text-center">
          {timer > 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Resend OTP in{" "}
              <span className="font-semibold text-primary">
                {timer}s
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={resendLoading}
              className="text-sm font-medium text-primary hover:underline disabled:opacity-50"
            >
              {resendLoading ? "Sending..." : "Resend OTP"}
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="mt-5 block w-full text-center text-sm text-gray-500 hover:text-primary dark:text-gray-400"
        >
          Back to Signup
        </button>
      </div>
    </section>
  );
};

export default VerifyEmail;