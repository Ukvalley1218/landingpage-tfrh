import React from "react";
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png'

import { icons } from "lucide-react";

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#3B7CC9',
  goldLight: 'rgba(85, 134, 176, 0.1)',
  goldLighter: 'rgba(85, 134, 176, 0.05)',
  goldBorder: 'rgba(85, 134, 176, 0.2)',
  white: '#fff',
  textDark: '#111',
  textHeading: '#232323',
  textBody: '#444',
  textFeatures: '#222',
  textNote: 'rgb(85, 134, 176)',
  background: '#FAF9F6',
  cardShadow: '0px 8px 20px rgba(0,0,0,0.10)',
  iconBg: 'rgba(85, 134, 176, 0.1)'
};

// ---- END COLOR PALETTE ----

const BENEFIT_CARDS = [
  {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Graduation Cap SVG in larger gold icon, squared bg */}
        <img loading="lazy"  src={icon5} alt="" />
      </span>
    ),
    heading: "New Investors",
    description: "Starting your real estate journey with Dubai's beginner-friendly market:",
    points: [
      "Step-by-step guidance",
      "Risk mitigation strategies",
      "Market fundamentals",
    ],
  },
   {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Document */}
       <img loading="lazy"  src={icon6} alt="" />
      </span>
    ),
    heading: "Real Estate Advisors & Consultants",
    description: "Enhancing client portfolios through strategic, tax-efficient Dubai investments:",
    points: [
      "Deep market insights",
      "Legal and financial frameworks",
      "Value-driven advisory approach",
    ],
  },
  {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Target/Bulls-eye */}
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect width="56" height="56" rx="16" fill={COLORS.iconBg}/>
          <circle cx="28" cy="28" r="16" stroke={COLORS.gold} strokeWidth="2.2"/>
          <circle cx="28" cy="28" r="10" stroke={COLORS.gold} strokeWidth="2.2"/>
          <circle cx="28" cy="28" r="4" fill={COLORS.gold}/>
        </svg>
      </span>
    ),
    heading: "Experienced Investors",
    description: "Expanding your portfolio into Dubai's high-yield market:",
    points: [
      "Advanced strategies",
      "Portfolio optimization",
      "Market insights",
    ],
  },
    {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Globe */}
      <img loading="lazy"  src={icon7} alt="" />
      </span>
    ),
    heading: "Global Entrepreneurs",
    description: "Diversifying wealth through Dubai's tax-advantaged real estate:",
    points: [
      "Tax optimization",
      "Wealth diversification",
      "Global perspective",
    ],
  },
  {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Laptop */}
      <img loading="lazy"  src={icon8} alt="" />
      </span>
    ),
    heading: "Remote Professionals",
    description: "Building passive income streams while working from anywhere:",
    points: [
      "Remote management",
      "Passive income focus",
      "Location independence",
    ],
  },
 

  {
    icon: (
      <span className="dubai-benefit-icon-bg">
        {/* Bars/Graph */}
      <img loading="lazy"  src={icon9} alt="" />
      </span>
    ),
    heading: "Wealth Builders",
    description: "Creating consistent, sustainable, and tax-free passive income:",
    points: [
      "Long-term wealth planning",
      "Cash flow optimisation",
      "Financial independence roadmap",
    ],
  },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&family=Inter:wght@400;500;700&display=swap');
.dubai-section-main {
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  min-height: 1531px;
  background: ${COLORS.background};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 0;
}
.dubai-section-container {
  width: 1439px;
  min-height: 1531px;
  background: ${COLORS.background};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 80px;
  padding-bottom: 40px;
}
.dubai-title {
  width: 904px;
  margin: 0 auto 54px auto;
  font-family: 'Tinos', serif;
  font-size: 53px;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
  color: ${COLORS.textDark};
  letter-spacing: 0;
}
.dubai-title .gold {
  color: ${COLORS.gold};
}
.dubai-cards-grid {
  width: 1202px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 32px 32px;
  margin: 0 auto 44px auto;
  box-sizing: border-box;
}
.dubai-benefit-card {
  width: 585px;
  min-height: 265px;
  background: ${COLORS.white};
  border-radius: 16px;
  box-shadow: ${COLORS.cardShadow};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-left: 4px solid ${COLORS.gold};
  padding: 28px 34px 32px 36px;
  box-sizing: border-box;
  position: relative;
  gap: 24px;
  margin-bottom: 8px;
}
.dubai-benefit-icon-bg {
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  background: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  background: ${COLORS.iconBg};
}
.dubai-benefit-vert {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% - 78px);
}
.dubai-benefit-heading {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: ${COLORS.textHeading};
  margin-bottom: 5px;
  width: 440px;
  height: 28px;
  letter-spacing: 0;
  line-height: 1.22;
  display: flex;
  align-items: flex-end;
  text-align: left;
}
.dubai-benefit-desc {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: ${COLORS.textBody};
  font-size: 18px;
  line-height: 26px;
  margin: 0 0 15px 0;
  width: 437px;
  height: 48px;
  display: block;
  text-align: left;
  overflow-wrap: break-word;
}
.dubai-benefit-features {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: ${COLORS.textFeatures};
  margin: 0;
  padding: 0 0 0 4px;
  list-style: none;
  width: 437px;
  min-height: 66px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}
.dubai-benefit-features li {
  position: relative;
  padding-left: 20px;
  margin-bottom:0;
  line-height: 1.6;
  width: 437px;
  height: 28px;
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: ${COLORS.textFeatures};
}
.dubai-benefit-features li:before {
  content: '';
  width: 8px;
  height: 8px;
  background: ${COLORS.gold};
  border-radius: 100%;
  left: 3px;
  top: 10px;
  position: absolute;
  display: block;
}
.dubai-note-card {
  background: #e1ebf7;
  border-radius: 16px;
  padding: 5px 10px;
  width: 1202px;
  min-height: 0;
  margin: 24px auto 0 auto;
  font-family: 'Inter', serif;
  font-style: italic;
  font-weight: 400;
  text-align: center;
  color: #0D0D0D;
  font-size: 24px;
  letter-spacing: 0;
  border-top: 1px solid ${COLORS.goldBorder};
}
.dubai-cta-btn {
  width: 340px;
  height: 55px;
  background: ${COLORS.gold};
  border: none;
  border-radius: 8px;
  margin: 40px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: ${COLORS.white};
  line-height: 28px;
  letter-spacing: -0.44px;
  transition: filter 0.16s;
}
.dubai-cta-btn:hover {
  filter: brightness(0.98);
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .dubai-section-main {
    min-height: auto !important;
    padding: 0 !important;
  }
  .dubai-section-container {
    width: 100vw !important;
    min-height: auto !important;
    padding: 40px 15px 30px 15px !important;
  }
  .dubai-title {
    width: 95vw !important;
    font-size: 2rem !important;
    line-height: 1.2 !important;
    margin-bottom: 30px !important;
    padding: 0 10px !important;
  }
  .dubai-cards-grid {
    width: 100% !important;
    grid-template-columns: 1fr !important;
    gap: 20px !important;
    margin-bottom: 30px !important;
  }
  .dubai-benefit-card {
    width: 100% !important;
    min-height: auto !important;
    padding: 20px 15px 25px 15px !important;
    margin-bottom: 0 !important;
    gap: 15px !important;
  }
  .dubai-benefit-icon-bg {
    width: 50px !important;
    height: 50px !important;
    min-width: 50px !important;
    min-height: 50px !important;
    margin-top: 0 !important;
  }
  .dubai-benefit-icon-bg svg {
    width: 28px !important;
    height: 28px !important;
  }
  .dubai-benefit-vert {
    width: calc(100% - 65px) !important;
  }
  .dubai-benefit-heading {
    font-size: 18px !important;
    width: 100% !important;
    height: auto !important;
    margin-bottom: 8px !important;
  }
  .dubai-benefit-desc {
    font-size: 16px !important;
    line-height: 1.4 !important;
    width: 100% !important;
    height: auto !important;
    margin-bottom: 12px !important;
  }
  .dubai-benefit-features {
    width: 100% !important;
    min-height: auto !important;
    font-size: 15px !important;
    gap: 4px !important;
  }
  .dubai-benefit-features li {
    width: 100% !important;
    height: auto !important;
    font-size: 15px !important;
    line-height: 1.4 !important;
    padding-left: 18px !important;
    margin-bottom: 4px !important;
  }
  .dubai-benefit-features li:before {
    top: 8px !important;
  }
  .dubai-note-card {
    width: 95vw !important;
    padding: 20px 15px 15px 15px !important;
    min-height: auto !important;
    margin: 30px auto 0 auto !important;
    font-size: 18px !important;
  }
  .dubai-cta-btn {
    width: 90vw !important;
    max-width: 300px !important;
    height: 48px !important;
    font-size: 18px !important;
    margin: 25px auto 0 auto !important;
  }
}

/* Extra small devices */
@media (max-width: 380px) {
  .dubai-section-container {
    padding: 30px 10px 20px 10px !important;
  }
  .dubai-title {
    font-size: 1.8rem !important;
    margin-bottom: 25px !important;
  }
  .dubai-benefit-card {
    padding: 18px 12px 22px 12px !important;
    gap: 12px !important;
  }
  .dubai-benefit-icon-bg {
    width: 45px !important;
    height: 45px !important;
    min-width: 45px !important;
    min-height: 45px !important;
  }
  .dubai-benefit-icon-bg svg {
    width: 24px !important;
    height: 24px !important;
  }
  .dubai-benefit-heading {
    font-size: 17px !important;
  }
  .dubai-benefit-desc {
    font-size: 15px !important;
  }
  .dubai-benefit-features {
    font-size: 14px !important;
  }
  .dubai-benefit-features li {
    font-size: 14px !important;
  }
  .dubai-note-card {
    font-size: 16px !important;
    padding: 18px 12px 12px 12px !important;
  }
  .dubai-cta-btn {
    height: 44px !important;
    font-size: 16px !important;
  }
}

/* Desktop styles remain unchanged */
@media (min-width: 769px) {
  .dubai-section-main {
    min-height: 1460px !important;
    padding: 0 !important;
  }
  .dubai-section-container {
    width: 1439px !important;
    min-height: 1460px!important;
    padding-top: 80px !important;
    padding-bottom: 40px !important;
  }
  .dubai-title {
    width: 904px !important;
    font-size: 53px !important;
    line-height: 60px !important;
    margin-bottom: 54px !important;
  }
  .dubai-cards-grid {
    width: 1202px !important;
    grid-template-columns: 1fr 1fr !important;
    grid-template-rows: repeat(3, 1fr) !important;
    gap: 32px 32px !important;
    margin-bottom: 44px !important;
  }
  .dubai-benefit-card {
    width: 585px !important;
    min-height: 265px !important;
    padding: 28px 34px 32px 36px !important;
    gap: 24px !important;
    margin-bottom: 8px !important;
  }
  .dubai-benefit-icon-bg {
    width: 64px !important;
    height: 64px !important;
    min-width: 64px !important;
    min-height: 64px !important;
    margin-top: 2px !important;
  }
  .dubai-benefit-icon-bg svg {
    width: 56px !important;
    height: 56px !important;
  }
  .dubai-benefit-vert {
    width: calc(100% - 78px) !important;
  }
  .dubai-benefit-heading {
    font-size: 22px !important;
    width: 440px !important;
    height: 28px !important;
    margin-bottom: 5px !important;
  }
  .dubai-benefit-desc {
    font-size: 18px !important;
    line-height: 26px !important;
    width: 437px !important;
    height: 48px !important;
    margin-bottom: 15px !important;
  }
  .dubai-benefit-features {
    font-size: 18px !important;
    width: 437px !important;
    min-height: 66px !important;
    gap: 6px !important;
  }
  .dubai-benefit-features li {
    width: 437px !important;
    height: 28px !important;
    font-size: 18px !important;
    line-height: 1.6 !important;
    padding-left: 20px !important;
    margin-bottom: 0 !important;
  }
  .dubai-benefit-features li:before {
    top: 10px !important;
  }
  .dubai-note-card {
    width: 1202px !important;
    padding: 33px 33px 1px 33px !important;
    min-height: 98px !important;
    // margin: 58px auto 0 auto !important;
    font-size: 24px !important;
  }
  .dubai-cta-btn {
    width: 340px !important;
    height: 55px !important;
    font-size: 22px !important;
    margin: 40px auto 0 auto !important;
  }
}

@media (max-width: 1240px) {
  .dubai-cards-grid, .dubai-note-card {
    width: 98vw;
    min-width: 0;
    max-width: 102vw;
  }
  .dubai-section-container {
    padding-left: 2vw;
    padding-right: 2vw;
  }
}
@media (max-width: 900px) {
  .dubai-cards-grid {
    grid-template-columns: 1fr;
    gap: 26px;
    width: 94vw;
  }
  .dubai-benefit-card, .dubai-note-card {
    width: 98vw;
    min-width: 0;
    max-width: 400vw;
  }
}
  @media (min-width: 769px) and (max-width: 1024px) {

  .dubai-section-main {
    min-height: auto !important;
  }

  .dubai-section-container {
    width: 100% !important;
    min-height: auto !important;
    padding: 60px 24px 40px 24px !important;
  }

  /* Title scaling */
  .dubai-title {
    width: 90% !important;
    font-size: 42px !important;
    line-height: 48px !important;
    margin-bottom: 44px !important;
  }

  /* Keep grid, just narrower */
  .dubai-cards-grid {
    width: 100% !important;
    max-width: 960px !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 24px !important;
    margin-bottom: 36px !important;
  }

  /* Cards scale down */
  .dubai-benefit-card {
    width: 100% !important;
    min-height: 240px !important;
    padding: 24px 26px 26px 28px !important;
    gap: 18px !important;
  }

  .dubai-benefit-icon-bg {
    width: 56px !important;
    height: 56px !important;
    min-width: 56px !important;
    min-height: 56px !important;
  }

  .dubai-benefit-icon-bg svg,
  .dubai-benefit-icon-bg img {
    width: 36px !important;
    height: 36px !important;
  }

  .dubai-benefit-vert {
    width: calc(100% - 70px) !important;
  }

  .dubai-benefit-heading {
    width: 100% !important;
    height: auto !important;
    font-size: 20px !important;
    margin-bottom: 6px !important;
  }

  .dubai-benefit-desc {
    width: 100% !important;
    height: auto !important;
    font-size: 16.5px !important;
    line-height: 24px !important;
    margin-bottom: 12px !important;
  }

  .dubai-benefit-features {
    width: 100% !important;
    font-size: 16px !important;
    min-height: auto !important;
    gap: 4px !important;
  }

  .dubai-benefit-features li {
    width: 100% !important;
    height: auto !important;
    font-size: 16px !important;
    line-height: 1.5 !important;
  }

  /* Note card */
  .dubai-note-card {
    width: 94% !important;
    font-size: 20px !important;
    padding: 26px 22px !important;
    // margin-top: 44px !important;
  }
}
`;

export default function TargetAudienceSection() {
  return (
    <div className="dubai-section-main">
      <style>{styles}</style>
      <div className="dubai-section-container">
        <div className="dubai-title">
          Who is <span className="gold">Dubai Rental Wealth Simplified Book</span> For?
        </div>
        <div className="dubai-cards-grid">
          {BENEFIT_CARDS.map((card, idx) => (
            <div className="dubai-benefit-card" key={idx}>
              {card.icon}
              <div className="dubai-benefit-vert">
                <div className="dubai-benefit-heading">{card.heading}</div>
                <div className="dubai-benefit-desc">{card.description}</div>
                <ul className="dubai-benefit-features">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="dubai-note-card">
          "No matter your level, this book shows how to earn passive income the right way."
        </div>
        {/* <button onClick={() => window.location.href = '/books/tfrh/checkout'} className="dubai-cta-btn">
          <span role="img" aria-label="book" style={{fontSize: '24px', marginRight: 8}}>📘</span>
          Order Your Copy Today
        </button> */}
      </div>
    </div>
  );
}