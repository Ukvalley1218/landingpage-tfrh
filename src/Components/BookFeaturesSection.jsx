import React from "react";
import bookimage from "../assets/bookcovernew.webp";
import { MdMenuBook } from "react-icons/md";
// import { redirectWithRef } from "../utils/redirectWithRef";

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: "#3B7CC9",
  goldLight: "#3B7CC9",
  goldGradient:
    "linear-gradient(90deg, rgba(85, 134, 176, 0.10) 0%, rgba(85, 134, 176, 0.05) 100%)",
  white: "#fff",
  textDark: "#151515",
  textBody: "rgba(13,13,13,1)",
  background: "#fff",
  buttonShadow: "0 3px 8px rgba(29,26,11,0.13)",
  featureShadow: "0 1px 4px rgba(0,0,0,0.04)",
};

// ---- END COLOR PALETTE ----

const featuresLeft = [
  "Step-by-step guide to tax-free rental income in Dubai",
  "Practical strategies to maximise returns and financial freedom",
  "Simplifies ROI, legal frameworks, and property management",
];

const featuresRight = [
  "Covers property selection, high-yield areas, and remote management",
  "Highlights Dubai's zero tax, high yields, and investor-friendly policies",
  "Includes case studies, market insights, and reinvestment tips",
];

const BookFeaturesSection = () => {
    const ref = sessionStorage.getItem("reference") || "direct";


  return (
    <div id="about-book" 
      className="book-features-root "
      style={{
        background: COLORS.background,
        padding: "80px 0 60px 0",
        width: "100%",
        textAlign: "center",
      }}
    >
      <style>
        {`
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .book-features-root { padding: 40px 0 30px 0 !important; }
          .bf-heading { font-size: 1.8rem !important; line-height: 1.2 !important; padding: 0 15px !important; margin-bottom: 16px !important; }
          .bf-subheading { font-size: 1rem !important; line-height: 1.4 !important; padding: 0 15px !important; margin-bottom: 30px !important; max-width: 95vw !important; }
          .bf-content-layout { display: none !important; }
          .bf-feature-column { align-items: center !important; width: 100% !important; }
          .bf-feature-box { width: 95vw !important; max-width: 400px !important; height: auto !important; min-height: 70px !important; padding: 15px 12px !important; font-size: 16px !important; line-height: 1.4 !important; margin-bottom: 12px !important; }
          .bf-feature-icon { width: 20px !important; height: 20px !important; min-width: 20px !important; min-height: 20px !important; font-size: 14px !important; margin-right: 12px !important; margin-left: 8px !important; border-radius: 50% !important; }
          .bf-book-image { width: 200px !important; height: 325px !important; margin: 20px auto !important; }
          .bf-book-image img { width: 180px !important; height: 300px !important; }
          .bf-cta-button { margin-top: 20px !important; padding: 0 15px !important; flex-direction: column !important; gap: 12px !important; }
          .bf-button { font-size: 17px !important; padding: 20px 12px !important; gap: 10px !important; width: 82vw !important; max-width: 320px !important; }
          .bf-button svg { font-size: 22px !important; margin-right: 8px !important; }
          .bf-button-hardcopy { background: #3B7CC9 !important; border: none !important; color: white !important; }
          .bf-button-ebook { background: white !important; border: 1.5px solid #406890 !important; color: #406890 !important; }
          

          
          /* Mobile Layout */
          .bf-mobile-layout {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 0 !important;
          }
          .bf-mobile-left-features {
            order: 0 !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .bf-mobile-book-image {
            order: 1 !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            margin: 20px 0 !important;
          }
          .bf-mobile-right-features {
            order: 2 !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
        }
        @media (max-width: 380px) {
          .bf-heading { font-size: 1.6rem !important; }
          .bf-subheading { font-size: 0.9rem !important; }
          .bf-feature-box { font-size: 15px !important; min-height: 65px !important; padding: 12px 10px !important; }
          .bf-book-image { width: 180px !important; height: 290px !important; }
          .bf-book-image img { width: 160px !important; height: 270px !important; }
          .bf-button { font-size: 16px !important; padding: 10px 10px !important; }
        }
        @media (min-width: 769px) {
          .book-features-root { padding: 80px 0 60px 0 !important; }
          .bf-heading { font-size: 53px !important; line-height: 105% !important; margin-bottom: 14px !important; }
          .bf-subheading { font-size: 20px !important; line-height: 28px !important; max-width: 898px !important; margin-bottom: 0px !important; }
          .bf-content-layout { display: flex !important; flex-direction: row !important; max-width: 1120px !important; gap: 0 !important; }
          .bf-feature-column { align-items: flex-end !important; width: auto !important; }
          .bf-feature-box { width: 456px !important; height: 82px !important; font-size: 20px !important; line-height: 28px !important; margin-bottom: 18px !important; }
          .bf-feature-icon { width: 24px !important; height: 24px !important; font-size: 16px !important; margin-right: 18px !important; margin-left: 10px !important; border-radius: 50% !important; }
          .bf-book-image { width: 340px !important; height: 519px !important; order: 0 !important; }
          .bf-book-image img { width: 351px !important; height: 535px !important; }
          .bf-cta-button { margin-top: 15px !important; flex-direction: row !important; gap: 16px !important; }
          .bf-button { font-size: 19px !important; padding: 19px 25px !important; gap: 14px !important; width: auto !important; max-width: none !important; }
          .bf-button svg { font-size: 27px !important; margin-right: 11px !important; }
          .bf-button-hardcopy { background: #3B7CC9 !important; border: none !important; color: white !important; }
          .bf-button-ebook { background: white !important; border: 1.5px solid #406890 !important; color: #406890 !important; }
          
          /* Hide mobile layout on desktop */
          .bf-mobile-layout {
            display: none !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {

  /* Same padding as mobile */
  .book-features-root {
    padding: 40px 0 30px 0 !important;
  }

  /* Same text sizing as mobile */
  .bf-heading {
    font-size: 1.8rem !important;
    line-height: 1.2 !important;
    padding: 0 15px !important;
    margin-bottom: 16px !important
    margin-top: 20px !importan;
    text-align: center !important;
  }

  .bf-subheading {
    font-size: 1rem !important;
    line-height: 1.4 !important;
    padding: 0 15px !important;
    margin-bottom: 30px !important;
    max-width: 95vw !important;
  }

  /* 🔥 KEY FIX */
  .bf-content-layout {
    display: none !important;
  }

  .bf-mobile-layout {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
  }

  /* Feature boxes */
  .bf-feature-box {
    width: 95vw !important;
    max-width: 420px !important;
    height: auto !important;
    min-height: 70px !important;
    padding: 15px 12px !important;
    font-size: 16px !important;
    line-height: 1.4 !important;
    margin-bottom: 12px !important;
  }

  .bf-feature-icon {
    width: 20px !important;
    height: 20px !important;
    font-size: 14px !important;
    margin-right: 12px !important;
    margin-left: 8px !important;
  }

  /* Book image */
  .bf-book-image {
    width: 200px !important;
    height: auto !important;
    margin: 20px auto !important;
  }

  .bf-book-image img {
    width: 180px !important;
    height: auto !important;
  }

  /* CTA buttons stack */
  .bf-cta-button {
    flex-direction: column !important;
    gap: 12px !important;
    padding: 0 15px !important;
  }

  .bf-button {
    width: 82vw !important;
    max-width: 320px !important;
    font-size: 17px !important;
    padding: 20px 12px !important;
  }
}
        `}
      </style>

      {/* Heading */}
      <div className="xl:mt-25" style={{ marginBottom: 14 }}>
        <div
          className="bf-heading"
          style={{
            fontFamily: "Tinos, serif",
            fontWeight: 700,
            color: COLORS.textDark,
          }}
        >
          What is the{" "}
          <span style={{ color: COLORS.gold }}>
            Dubai Rental Wealth Simplified (Book)
          </span>
          <br />
          <span style={{ color: COLORS.textDark }}> All About?</span>
        </div>
      </div>

      {/* Subheading */}
      <div
        className="bf-subheading"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          color: COLORS.textBody,
          letterSpacing: "0px",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        This book is your definitive guide to mastering tax-free rental income
        and building sustainable wealth through Dubai's booming real estate
        market.
      </div>

      {/* Desktop Features & Book Layout */}
      <div
        className="bf-content-layout"
        style={{
          display: "flex",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left Feature List */}
        <div
          className="bf-feature-column"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {featuresLeft.map((feature, idx) => (
            <div
              className="bf-feature-box text-left"
              key={idx}
              style={{
                background: COLORS.goldGradient,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderLeft: `4px solid ${COLORS.goldLight}`,
                display: "flex",
                alignItems: "center",
                boxShadow: COLORS.featureShadow,
                fontFamily: "Inter, sans-serif",
                color: COLORS.textBody,
                fontWeight: 400,
              }}
            >
              <span
                className="bf-feature-icon"
                style={{
                  width: 24,
                  height: 24,
                  minWidth: 24,
                  minHeight: 24,
                  background: COLORS.goldLight,
                  borderRadius: "50%", // <-- perfect circle!
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.white,
                  fontWeight: 700,
                  fontSize: 16,
                  marginRight: 18,
                  marginLeft: 10,
                }}
              >
                !
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Book Image */}
        <div
          className="bf-book-image"
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 38,
          }}
        >
          <img loading="lazy" 
            src={bookimage}
            alt="Dubai Rental Wealth Simplified Book"
            style={{
              objectFit: "cover",
              borderRadius: "18px",
            }}
          />
        </div>

        {/* Right Feature List */}
        <div
          className="bf-feature-column text-left"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {featuresRight.map((feature, idx) => (
            <div
              className="bf-feature-box"
              key={idx}
              style={{
                background: COLORS.goldGradient,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderLeft: `4px solid ${COLORS.goldLight}`,
                display: "flex",
                alignItems: "center",
                boxShadow: COLORS.featureShadow,
                fontFamily: "Inter, sans-serif",
                color: COLORS.textBody,
                fontWeight: 400,
              }}
            >
              <span
                className="bf-feature-icon"
                style={{
                  width: 24,
                  height: 24,
                  minWidth: 24,
                  minHeight: 24,
                  background: COLORS.goldLight,
                  borderRadius: "50%", // <-- perfect circle!
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.white,
                  fontWeight: 700,
                  fontSize: 16,
                  marginRight: 18,
                  marginLeft: 10,
                }}
              >
                !
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Features & Book Layout */}
      <div
        className="bf-mobile-layout"
        style={{
          display: "none",
        }}
      >
        {/* Left Features (First 3 boxes) */}
        <div className="bf-mobile-left-features">
          {featuresLeft.map((feature, idx) => (
            <div
              className="bf-feature-box"
              key={idx}
              style={{
                background: COLORS.goldGradient,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderLeft: `4px solid ${COLORS.goldLight}`,
                display: "flex",
                alignItems: "center",
                boxShadow: COLORS.featureShadow,
                fontFamily: "Inter, sans-serif",
                color: COLORS.textBody,
                fontWeight: 400,
              }}
            >
              <span
                className="bf-feature-icon"
                style={{
                  width: 20,
                  height: 20,
                  minWidth: 20,
                  minHeight: 20,
                  background: COLORS.goldLight,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.white,
                  fontWeight: 700,
                  fontSize: 14,
                  marginRight: 12,
                  marginLeft: 8,
                }}
              >
                !
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Book Image */}
        <div
          className="bf-mobile-book-image bf-book-image"
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 38,
          }}
        >
          <img loading="lazy" 
            src={bookimage}
            alt="Dubai Rental Wealth Simplified Book"
            style={{
              objectFit: "cover",
              borderRadius: "18px",
            }}
          />
        </div>

        {/* Right Features (Last 3 boxes) */}
        <div className="bf-mobile-right-features">
          {featuresRight.map((feature, idx) => (
            <div
              className="bf-feature-box"
              key={idx}
              style={{
                background: COLORS.goldGradient,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderLeft: `4px solid ${COLORS.goldLight}`,
                display: "flex",
                alignItems: "center",
                boxShadow: COLORS.featureShadow,
                fontFamily: "Inter, sans-serif",
                color: COLORS.textBody,
                fontWeight: 400,
              }}
            >
              <span
                className="bf-feature-icon"
                style={{
                  width: 20,
                  height: 20,
                  minWidth: 20,
                  minHeight: 20,
                  background: COLORS.goldLight,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.white,
                  fontWeight: 700,
                  fontSize: 14,
                  marginRight: 12,
                  marginLeft: 8,
                }}
              >
                !
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div
        className="bf-cta-button"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <button
          onClick={() =>
             (window.location.href = `/books/tfrh/checkout?type=hardcopy&reference=${ref}`)
          }
          className="bf-button bf-button-hardcopy"
          style={{
            width: "390px",
            height: "55px",
            borderRadius: "8px",
            background: "#3B7CC9",
            border: "none",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "22px",
            lineHeight: "28px",
            letterSpacing: "-0.44px",
            color: "white",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 3px 8px rgba(29,26,11,0.13)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(59, 124, 201, 0.4)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 3px 8px rgba(29,26,11,0.13)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <span>📙 </span>
          Order Your Hard Copy Today
        </button>

        <button
          onClick={() =>
            (window.location.href = `/books/tfrh/checkout?type=ebook&reference=${ref}`)
          }
          className="bf-button bf-button-ebook"
           onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('box-shadow', '0 8px 20px rgba(59, 124, 201, 0.4)', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(-2px)', 'important');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('box-shadow', 'none', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(0)', 'important');
            }}
          style={{
            width: "390px",
            height: "55px",
            borderRadius: "8px",
            background: "white",
            border: "1.5px solid #406890",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "22px",
            lineHeight: "28px",
            letterSpacing: "-0.44px",
            color: "#406890",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 3px 8px rgba(29,26,11,0.13)",
          }}
        >
          <span>⬇️</span>
          Order Your Digital E-Book Today
        </button>
      </div>
    </div>
  );
};

export default BookFeaturesSection;
