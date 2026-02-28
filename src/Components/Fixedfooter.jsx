import React, { useEffect, useState } from "react";
// import { redirectWithRef } from "../utils/redirectWithRef";

const FixedFooter = () => {
            const ref = sessionStorage.getItem("reference") || "direct";

  const [pricing, setPricing] = useState({ symbol: "$", amount: "4.99" ,discount:9.99});
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 30,
    seconds: 23,
  });

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const country = data.country_code;
        if (country === "IN")
          setPricing({ symbol: "₹", amount: "99", discount: 199 });
        else if (country === "AE")
          setPricing({ symbol: "AED", amount: "9", discount:  19 });
        else setPricing({ symbol: "$", amount: "4.99", discount: 9.99 });
      })
      .catch(() =>
        setPricing({ symbol: "$", amount: "4.99", discount: 9.99 })
      );

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed-footer-bar">
      {/* ✅ Sticky Footer - Fully Responsive */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#3B7CC9] bg-[#FAFAF7] shadow-2xl rounded-t-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 overflow-x-auto lg:flex-nowrap sm:gap-4 sm:px-5 md:px-8 sm:py-3 no-scrollbar">
          {/* 💰 Price Section */}
          <div className="bg-gradient-to-r from-[#3B7CC9] to-[#1C2B4A] cta-dynamic-footer flex items-center justify-center flex-shrink-0 px-3 sm:px-4 rounded-md lg:py-3 space-x-2 min-w-[100px] sm:min-w-[140px] text-center">
            <span className="text-white cta-text font-bold text-[18px] sm:text-[22px] md:text-[25px] whitespace-nowrap">
              {pricing.symbol}
              {pricing.amount}
            </span>
            <span className="text-white line-through text-[12px] sm:text-[15px] md:text-[18px] font-medium whitespace-nowrap">
              {pricing.symbol}
              {pricing.discount}
            </span>
          </div>

          {/* ⏳ Countdown Timer Section */}
          <div className="flex-1 flex items-center justify-center min-w-[120px] text-center">
            <div>
              <p className="text-black text-[10px] sm:text-[12px] md:text-[13px] mb-1">
                Offer Will Expire In
              </p>
              <div className="flex items-center justify-center gap-[2px] sm:gap-[6px]">
                {/* Hours */}
                <div className="text-center">
                  <div className="text-[#3B7CC9] font-bold text-[16px] sm:text-[20px] md:text-[32px] leading-none">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-[#3B7CC9] text-[9px] sm:text-[11px] md:text-[12px] leading-none mt-[2px]">
                    Hours
                  </div>
                </div>
                {/* Colon with proper vertical alignment */}
                <div className="text-[#3B7CC9] font-bold text-[16px] sm:text-[20px] md:text-[24px] leading-none self-start">
                  :
                </div>
                {/* Minutes */}
                <div className="text-center">
                  <div className="text-[#3B7CC9] font-bold text-[16px] sm:text-[20px] md:text-[32px] leading-none">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-[#3B7CC9] text-[9px] sm:text-[11px] md:text-[12px] leading-none mt-[2px]">
                    Minutes
                  </div>
                </div>
                {/* Colon with proper vertical alignment */}
                <div className="text-[#3B7CC9] font-bold text-[16px] sm:text-[20px] md:text-[24px] leading-none self-start">
                  :
                </div>
                {/* Seconds */}
                <div className="text-center">
                  <div className="text-[#3B7CC9] font-bold text-[16px] sm:text-[20px] md:text-[32px] leading-none">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-[#3B7CC9] text-[9px] sm:text-[11px] md:text-[12px] leading-none mt-[2px]">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🛒 Order Now Button */}
          <button
            onClick={() =>
              (window.location.href = `/books/tfrh/checkout?type=ebook&reference=${ref}`)
            }
            className="
            cursor-pointer bg-white border border-[#3B7CC9] text-black
            cta-text font-semibold
            px-3 sm:px-5 md:px-6
            py-1.5 sm:py-2 md:py-3
            text-[12px] sm:text-[18px] md:text-[22px]
            rounded-md hover:bg-gray-100 transition duration-200
            hover:scale-105 flex-shrink-0
            whitespace-nowrap
          "
          >
            Order Now
          </button>
        </div>
      </div>

      <style>{`
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      25% { transform: scale(1.05); }
      50% { transform: scale(1); }
      75% { transform: scale(1.05); }
    }
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    @keyframes ripple {
      0% { transform: scale(0); opacity: 0.8; }
      100% { transform: scale(3); opacity: 0; }
    }
    .cta-text {
      animation: heartbeat 1.2s ease-in-out infinite;
      display: inline-block;
    }
    .cta-dynamic-footer {
      position: relative;
      overflow: hidden;
      background-size: 400% 400%;
      animation: gradientShift 6s ease infinite, float 3s ease-in-out infinite;
      color: white;
      font-weight: 600;
      transition: all 0.4s ease;
      box-shadow: 0 6px 18px rgba(255, 215, 100, 0.5);
      // cursor: pointer;
    }
    .cta-dynamic-footer:hover {
      transform: scale(1.05) translateY(-3px);
      box-shadow: 0 8px 25px rgba(255, 230, 120, 0.8);
    }
    .cta-dynamic-footer::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
      pointer-events: none;
    }
    .cta-dynamic-footer:hover::after {
      animation: ripple 0.6s ease-out;
      opacity: 1;
    }
  `}</style>
    </div>
  );
};

export default FixedFooter;