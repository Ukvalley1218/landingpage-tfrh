import React from 'react'
import bookimage from '../assets/bookcovernew.png'
import icon11 from '../assets/icon11.png'
import icon12 from '../assets/icon12.png'
import icon13 from '../assets/icon13.png'
import icon14 from '../assets/icon14.png'
import icon15 from '../assets/icon15.png'
import frame from '../assets/Frame.webp'
// import { redirectWithRef } from '../utils/redirectWithRef'

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#3B7CC9',
  goldLight: 'rgba(85, 134, 176, 0.1)',
  white: '#fff',
  textDark: '#111',
  textHeading: '#232323',
  background: '#fff',
  iconBg: 'rgba(85, 134, 176, 0.1)',
  cardShadow: '0px 4px 6px -4px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)'
};

const featureCards = [
  {
    icon: (
      <span className="book-contents-feature-icon">
        <img loading="lazy"  src={icon11} alt="" />
      </span>
    ),
    heading: "Dubai Real Estate Market",
    list: [
      "Understanding Dubai's Property Landscape",
      "Market Trends and Future Outlook",
      "Investment Hotspots and Emerging Areas",
      "Regulatory Environment Overview"
    ]
  },
  {
    icon: (
      <span className="book-contents-feature-icon">
        <img loading="lazy"  src={icon12} alt="" />
      </span>
    ),
    heading: "Maximising Returns",
    list: [
      "Rental Yield Optimization Strategies",
      "Capital Appreciation Techniques",
      "Tax-Free Income Structuring",
      "Portfolio Diversification Methods"
    ]
  },
  {
    icon: (
      <span className="book-contents-feature-icon">
        <img loading="lazy"  src={icon13} alt="" />
      </span>
    ),
    heading: "Legal Framework",
    list: [
      "Foreign Ownership Rights",
      "Property Registration Process",
      "Tenancy Laws and Regulations",
      "Dispute Resolution Mechanisms"
    ]
  },
  {
    icon: (
      <span className="book-contents-feature-icon">
        <img loading="lazy"  src={icon14} alt="" />
      </span>
    ),
    heading: "Finding the Right Property",
    list: [
      "Location Analysis and Selection",
      "Property Types and Investment Potential",
      "Due Diligence Checklist",
      "Negotiation Strategies"
    ]
  },
  {
    icon: (
      <span className="book-contents-feature-icon">
        <img loading="lazy"  src={icon15} alt="" />
      </span>
    ),
    heading: "Managing Property Remotely",
    list: [
      "Property Management Solutions",
      "Technology Tools for Remote Investors",
      "Tenant Screening and Retention",
      "Maintenance and Upkeep Systems"
    ]
  }
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

.book-contents-section {
  width: 100vw;
  background: ${COLORS.background};
  min-height: 100vh;
  padding: 0;
  overflow-x: hidden;
}
.book-contents-container {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.book-contents-heading {
  font-family: 'Tinos', serif;
  font-size: 48px;
  font-weight: 700;
  color: ${COLORS.textDark};
  letter-spacing: 0;
  line-height: 48px;
  text-align: center;
  margin: 58px 0 14px 0;
  width: 1050px;
}
.book-contents-heading .gold {
  color: ${COLORS.gold};
}
.book-contents-center-img-block {
  width: 585px;
  height: 591px;
  position: absolute;
  left: 50%;
  top: 23%;
  transform: translate(-50%, 0);
  z-index: 1;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 294px;
}
.book-contents-center-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
  box-shadow: none;
  background: none;
  display: block;
  margin: 0 auto;
}
.book-contents-feature-grid {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 390px 1fr 390px;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px;
  position: relative;
  z-index: 2;
}
.book-contents-feature-card {
  background: ${COLORS.white};
  border-radius: 16px;
  box-shadow: ${COLORS.cardShadow};
  padding: 25px 25px 1px 25px;
  border-top: 1px solid ${COLORS.goldLight};
  border: 1px solid ${COLORS.white};
  min-width: 380px;
  max-width: 410px;
  min-height: 213px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 16px;
}
/* Flex row for all boxes: icon + heading */
.book-feature-header-row {
  display: flex;
  align-items: center;
  gap: 18px;
}
.book-contents-feature-icon {
  margin-bottom: 0;
}
.book-contents-feature-heading {
  margin: 0;
  white-space: normal;
  width: auto;
  height: auto;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: ${COLORS.textHeading};
  line-height: 28px;
  letter-spacing: 0;
}
.book-contents-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 60px 80px 0;
  flex-wrap: wrap;
  z-index: 3;
  position: relative;
  width: 100%;
}
.book-contents-button {
  border-radius: 8px;
  // font-family: 'Inter, sans-serif';
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.44px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 8px rgba(29,26,11,0.13);
  transition: all 0.2s;
}
.book-contents-button-hardcopy {
  background: #3B7CC9;
  border: none;
  color: white;
}
.book-contents-button-ebook {
  background: white;
  border: 1.5px solid #406890;
  color: #406890;
}
/* Connecting lines and dots: only show on desktop, hide on mobile */
.book-contents-feature-card::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${COLORS.gold};
  border-radius: 50%;
  z-index: 10;
}
.book-contents-feature-card::before {
  content: '';
  position: absolute;
  height: 2px;
  background: ${COLORS.gold};
  z-index: 5;
}
/* Card 1 - Top Left - Line to right to book */
.book-contents-feature-card:nth-child(1)::before {
  top: 90%;
  left: 100%;
  width: 150px;
  transform: translateY(-50%);
}
.book-contents-feature-card:nth-child(1)::after {
  top: 90%;
  right: -10px;
  transform: translate(-30%, -50%);
}
/* Card 2 - Top Right - Line to left to book */
.book-contents-feature-card:nth-child(2)::before {
  top: 90%;
  right: 100%;
  width: 150px;
  transform: translateY(-50%);
}
.book-contents-feature-card:nth-child(2)::after {
  top: 90%;
  left: -10px;
  transform: translate(-1%, -50%);
}
/* Card 3 - Middle Left - Line to right to book */
.book-contents-feature-card:nth-child(3)::before {
  top: 50%;
  left: 100%;
  width: 150px;
  transform: translateY(-50%);
}
.book-contents-feature-card:nth-child(3)::after {
  top: 50%;
  right: -10px;
  transform: translate(-28%, -50%);
}
/* Card 4 - Middle Right - Line to left to book */
.book-contents-feature-card:nth-child(4)::before {
  top: 50%;
  right: 100%;
  width: 150px;
  transform: translateY(-50%);
}
.book-contents-feature-card:nth-child(4)::after {
  top: 50%;
  left: -10px;
  transform: translate(12%, -50%);
}
/* Card 5 - Bottom Center - Line to bottom of book */
.book-contents-feature-card:nth-child(5)::before {
  bottom: 100%;
  left: 50%;
  width: 2px;
  height: 105px;
  transform: translateX(-50%);
}
.book-contents-feature-card:nth-child(5)::after {
  top: -10px;
  left: 50%;
  transform: translate(-50%, 21%);
}

.book-contents-feature-icon {
  width: 56px;
  height: 56px;
  background: ${COLORS.iconBg};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* NOTE: margin-bottom removed for row alignment */
}
.book-contents-feature-list {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  color: ${COLORS.textHeading};
  margin-top: 8px;
  width: 330px;
  line-height: 26px;
  letter-spacing: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding-left: 0;
}
.book-contents-feature-list li::before {
  content: '•';
  color: ${COLORS.gold};
  font-size: 20px;
  font-weight: bold;
  margin-right: 8px;
  vertical-align: middle;
}
.book-contents-feature-list li {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0;
  margin: 0;
}
.book-contents-feature-grid > .book-contents-feature-card {
  margin: 50px 0 50px 0;
}

/* Mobile Book Image Block */
.book-contents-mobile-img-block {
  display: none;
}

/* Mobile Responsive Styles */
@media (max-width: 900px) {
  .book-contents-section {
    width: 100%;
    padding: 60px 0 40px 0;
    min-height: auto;
    overflow-x: hidden;
  }
  .book-contents-container {
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  .book-contents-heading {
    font-size: 32px;
    line-height: 38px;
    width: 100%;
    max-width: 320px;
    margin: 0;
    text-align: center;
    order: 1;
  }
  
  /* Mobile image block - show only on mobile */
  .book-contents-mobile-img-block {
    display: flex;
    width: 280px;
    height: 280px;
    order: 2;
    margin: 0 auto;
  }
  .book-contents-mobile-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  /* Hide desktop image on mobile */
  .book-contents-center-img-block {
    display: none;
  }
  
  .book-contents-feature-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    order: 3;
  }
  .book-contents-feature-card {
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
    padding: 24px 20px;
    margin: 0 !important;
    gap: 16px;
    border: 1px solid ${COLORS.goldLight};
  }
  .book-feature-header-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .book-contents-feature-heading {
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    height: auto;
    margin-bottom: 8px;
  }
  .book-contents-feature-list {
    width: 100%;
    font-size: 15px;
    line-height: 22px;
    gap: 8px;
    margin-top: 0;
  }
  .book-contents-feature-list li {
    font-size: 15px;
    line-height: 22px;
  }
  .book-contents-feature-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 0;
  }
  .book-contents-feature-icon svg {
    width: 32px;
    height: 32px;
  }
  .book-contents-buttons-container {
    margin: 40px 0 50px 0 !important;
    flex-direction: column !important;
    gap: 12px !important;
    order: 4;
  }
  .book-contents-button {
    font-size: 17px !important;
    padding: 20px 12px !important;
    gap: 10px !important;
    width: 82vw !important;
    max-width: 320px !important;
    height: auto !important;
  }
  .book-contents-feature-card::before,
  .book-contents-feature-card::after {
    display: none !important;
  }
}

@media (max-width: 480px) {
  .book-contents-section {
    padding: 40px 0 30px 0;
  }
  .book-contents-container {
    padding: 0 16px;
    gap: 0px;
  }
  .book-contents-heading {
    font-size: 28px;
    line-height: 34px;
    max-width: 280px;
  }
  .book-contents-mobile-img-block {
    width: 240px;
    height: 240px;
  }
  .book-contents-feature-grid {
    gap: 20px;
    max-width: 100%;
  }
  .book-contents-feature-card {
    padding: 20px 16px;
    gap: 14px;
  }
  .book-contents-feature-heading {
    font-size: 17px;
    line-height: 22px;
  }
  .book-contents-feature-list {
    font-size: 14px;
    line-height: 20px;
    gap: 6px;
  }
  .book-contents-feature-list li {
    font-size: 14px;
    line-height: 20px;
  }
  .book-contents-feature-list li::before {
    font-size: 16px;
    margin-right: 6px;
  }
  .book-contents-feature-icon {
    width: 44px;
    height: 44px;
  }
  .book-contents-feature-icon svg {
    width: 28px;
    height: 28px;
  }
  .book-contents-button {
    font-size: 19px !important;
    padding: 12px 8px !important;
  }
}

@media (max-width: 360px) {
  .book-contents-heading {
    font-size: 26px;
    line-height: 32px;
    max-width: 260px;
  }
  .book-contents-mobile-img-block {
    width: 220px;
    height: 220px;
  }
  .book-contents-feature-card {
    padding: 18px 14px;
  }
  .book-contents-feature-heading {
    font-size: 16px;
  }
  .book-contents-feature-list {
    font-size: 13px;
    line-height: 19px;
  }
  .book-contents-feature-list li {
    font-size: 13px;
    line-height: 19px;
  }
}

@media (min-width: 769px) {
  .book-contents-buttons-container {
    margin: 0px 0 80px 0 !important;
    flex-direction: row !important;
    gap: 16px !important;
  }
  .book-contents-button {
    font-size: 21px !important;
    padding: 16px 20px !important;
    gap: 14px !important;
    width: auto !important;
    max-width: none !important;
    height: auto !important;
  }
  
  /* Hide mobile image on desktop */
  .book-contents-mobile-img-block {
    display: none;
  }
  
  /* Show desktop image on desktop */
  .book-contents-center-img-block {
    display: flex;
  }
}
`;

export default function BookContentsSection() {
        const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div className="book-contents-section">
      <style>{styles}</style>
      <div className="book-contents-container">
        <img loading="lazy"  src={frame} alt="" />

        <div className="book-contents-buttons-container">
          <button
            onClick={() =>
              (window.location.href = `/books/tfrh/checkout?type=hardcopy&reference=${ref}`)
            }
            className="book-contents-button book-contents-button-hardcopy"
            style={{
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(59, 124, 201, 0.4)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>📙 </span>
            Order Your Hard Copy Today
          </button>
          <button onClick={() =>
              (window.location.href = `/books/tfrh/checkout?type=ebook&reference=${ref}`)
            } className="book-contents-button book-contents-button-ebook"  onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('box-shadow', '0 8px 20px rgba(59, 124, 201, 0.4)', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(-2px)', 'important');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('box-shadow', 'none', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(0)', 'important');
            }}>
            <span>⬇️</span>
            Order Your Digital E-Book Today
          </button>
        </div>
      </div>
    </div>
  );
}