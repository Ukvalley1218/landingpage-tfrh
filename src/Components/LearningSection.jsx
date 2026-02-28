import React from 'react'
import bookimage from '../assets/bookcovernew.webp'
// import { redirectWithRef } from '../utils/redirectWithRef';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#3B7CC9',
  goldLight: 'rgb(105, 154, 196)',
  white: '#fff',
  textDark: '#111',
  textBody: 'rgba(13,13,13,1)',
  background: '#fff',
  cardShadow: '0px 1px 2px -1px rgba(0,0,0,0.10), 0px 1px 3px 0px rgba(0,0,0,0.10)',
  buttonShadow: '0px 2px 8px rgba(85,134,176,0.06)',
  buttonShadowHover: '0px 3px 11px rgba(85,134,176,0.16)'
};

// ---- END COLOR PALETTE ----

const learnings = [
  "How to earn tax-free rental income in Dubai's lucrative market",
  "Identify high-yield areas and emerging investment hotspots",
  "Understand legal frameworks and foreign ownership rights",
  "Manage your property portfolio remotely with confidence",
  "Reinvest profits for exponential wealth growth",
  "Navigate Dubai's property registration and legal processes",
  "Optimise rental yields through strategic property selection",
  "Build a sustainable passive income stream that scales"
];

// White checkmark SVG for complete color reliability
const WhiteCheck = () => (
  <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" />
    <path
      d="M6 11L9 14L16 6"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

);

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&family=Inter:wght@400;700&display=swap');
.seven-section {
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  background: ${COLORS.background};
  min-height: 860px;
  box-sizing: border-box;
  overflow-x: hidden;
}
.seven-container {
  width: 1440px;
  min-height: 860px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.seven-header {
  width: 100%;
  text-align: center;
  margin-top: 58px;
  margin-bottom: 38px;
}
.seven-heading {
  font-family: 'Tinos', serif;
  font-weight: 700;
  font-size: 53px;
  line-height: 60px;
  color: ${COLORS.textDark};
  margin-bottom: 0px;
}
.seven-highlight {
  color: ${COLORS.gold};
  display: block;
  font-family: 'Tinos', serif;
  font-weight: 700;
  font-size: 53px;
}
.seven-content-row {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 18px;
}
.seven-card-list {
  margin-top:40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 540px;
  margin-left: 0;
  background: transparent;
  max-height: 450px;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  padding-right: 12px;
}
.seven-card-list::-webkit-scrollbar {
  display: none;
}
.seven-learn-card {
  width: 540px;
  height: 84px;
  background: ${COLORS.white};
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: ${COLORS.cardShadow};
  position: relative;
  padding: 28px 3px;
}
.seven-card-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: #3B7CC9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  margin-right: 24px;
}
.seven-card-text {
  font-family: 'Inter', sans-serif;
  font-size: 19px;
  color: ${COLORS.textBody};
  line-height: 26px;
  letter-spacing: 0;
  font-weight: 400;
  text-align: left;
  width: 392px;
  height: 52px;
  display: flex;
  align-items: center;
}
.seven-book-col {
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 520px;
  margin-top: 8px;
  position: relative;
}
.seven-book-bg {
  position: absolute;
  left: 50%;
  top: 63px;
  transform: translateX(-50%);
  width: 410px;
  height: 480px;
  background: ${COLORS.goldLight};
  filter: blur(53px);
  opacity: 0.75;
  border-radius: 40px;
  z-index: 1;
  pointer-events: none;
}
.seven-book-img {
  width: 698px;
  max-width: 144%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  margin-top:74px;
  z-index: 2;
  position: relative;
  box-shadow: none;
}

/* --- CTA BUTTONS STYLING --- */
.seven-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 88px auto 25px auto;
  flex-wrap: wrap;
}
.seven-button {
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
.seven-button-hardcopy {
  background: #3B7CC9;
  border: none;
  color: white;
}
.seven-button-ebook {
  background: white;
  border: 1.5px solid #406890;
  color: #406890;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .seven-section {
    min-height: auto !important;
    padding: 0 !important;
  }
  .seven-container {
    width: 100vw !important;
    min-height: auto !important;
    padding: 0 15px !important;
  }
  .seven-header {
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  .seven-heading {
    font-size: 2rem !important;
    line-height: 1.2 !important;
    padding: 0 10px !important;
  }
  .seven-highlight {
    font-size: 2rem !important;
    line-height: 1.2 !important;
  }
  .seven-content-row {
    flex-direction: column !important;
    align-items: center !important;
    gap: 30px !important;
    margin-top: 0 !important;
    max-width: 100vw !important;
  }
  .seven-card-list {
    width: 100% !important;
    max-width: 95vw !important;
    margin-top: 20px !important;
    max-height: 400px !important;
    gap: 12px !important;
    order: 2 !important;
  }
  .seven-learn-card {
    width: 100% !important;
    height: auto !important;
    min-height: 70px !important;
    padding: 15px 10px !important;
    margin: 0 auto !important;
  }
  .seven-card-icon {
    width: 32px !important;
    height: 32px !important;
    min-width: 32px !important;
    min-height: 32px !important;
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
  .seven-card-text {
    width: auto !important;
    flex: 1 !important;
    font-size: 16px !important;
    line-height: 1.4 !important;
    height: auto !important;
    min-height: 40px !important;
  }
  .seven-book-col {
    width: 100% !important;
    height: auto !important;
    margin-top: 0 !important;
    order: 1 !important;
  }
  .seven-book-bg {
    width: 250px !important;
    height: 300px !important;
    top: 40px !important;
    filter: blur(30px) !important;
  }
  .seven-book-img {
    width: 280px !important;
    max-width: 100% !important;
    margin-top: 40px !important;
  }
  .seven-buttons-container {
    margin: 40px auto 20px auto !important;
    flex-direction: column !important;
    gap: 12px !important;
  }
  .seven-button {
    font-size: 19px !important;
    padding: 10px 9px !important;
    gap: 10px !important;
    width: 83vw !important;
    max-width: 322px !important;
    height: auto !important;
  }
}

/* Extra small devices */
@media (max-width: 380px) {
  .seven-heading {
    font-size: 1.8rem !important;
  }
  .seven-highlight {
    font-size: 1.8rem !important;
  }
  .seven-card-text {
    font-size: 15px !important;
  }
  .seven-learn-card {
    min-height: 65px !important;
    padding: 12px 8px !important;
  }
  .seven-card-icon {
    width: 30px !important;
    height: 30px !important;
    min-width: 30px !important;
    min-height: 30px !important;
    margin-left: 12px !important;
    margin-right: 12px !important;
  }
  .seven-book-img {
    width: 240px !important;
    margin-top: 30px !important;
  }
  .seven-book-bg {
    width: 200px !important;
    height: 250px !important;
    top: 30px !important;
  }
  .seven-button {
    font-size: 16px !important;
    padding: 18px 12px !important;
  }
}

/* Desktop styles */
@media (min-width: 769px) {
  .seven-section {
    min-height: 860px !important;
    padding: 0 !important;
  }
  .seven-container {
    width: 1440px !important;
    min-height: 860px !important;
    padding: 0 !important;
  }
  .seven-header {
    margin-top: 58px !important;
    margin-bottom: 38px !important;
  }
  .seven-heading {
    font-size: 53px !important;
    line-height: 60px !important;
  }
  .seven-highlight {
    font-size: 53px !important;
  }
  .seven-content-row {
    flex-direction: row !important;
    max-width: 1200px !important;
    margin-top: 18px !important;
    gap: 0 !important;
  }
  .seven-card-list {
    width: 540px !important;
    margin-top: 40px !important;
    max-height: 450px !important;
    gap: 18px !important;
    order: 0 !important;
  }
  .seven-learn-card {
    width: 540px !important;
    height: 84px !important;
    padding: 28px 3px !important;
  }
  .seven-card-icon {
    width: 40px !important;
    height: 40px !important;
    margin-left: 32px !important;
    margin-right: 24px !important;
  }
  .seven-card-text {
    width: 392px !important;
    height: 52px !important;
    font-size: 19px !important;
    line-height: 26px !important;
  }
  .seven-book-col {
    width: 540px !important;
    height: 520px !important;
    margin-top: 8px !important;
    order: 0 !important;
  }
  .seven-book-bg {
    width: 410px !important;
    height: 480px !important;
    top: 63px !important;
    filter: blur(53px) !important;
  }
  .seven-book-img {
    width: 450px !important;
    max-width: 144% !important;
    margin-top: 14px !important;
  }
  .seven-buttons-container {
    margin: 88px auto 56px auto !important;
    flex-direction: row !important;
    gap: 16px !important;
  }
  .seven-button {
    font-size: 22px !important;
    padding: 12px 22px !important;
    gap: 14px !important;
    width: auto !important;
    max-width: none !important;
    height: auto !important;
  }
}
  @media (min-width: 769px) and (max-width: 1024px) {

  .seven-section {
    min-height: auto !important;
  }

  .seven-container {
    width: 100% !important;
    min-height: auto !important;
    padding: 0 24px !important;
  }

  .seven-header {
    margin-top: 44px !important;
    margin-bottom: 30px !important;
  }

  .seven-heading,
  .seven-highlight {
    font-size: 42px !important;
    line-height: 48px !important;
  }

  /* Keep desktop row layout, just narrower */
  .seven-content-row {
    max-width: 960px !important;
    gap: 20px !important;
  }

  /* Cards column */
  .seven-card-list {
    width: 440px !important;
    max-height: 420px !important;
    gap: 14px !important;
    margin-top: 30px !important;
  }

  .seven-learn-card {
    width: 440px !important;
    height: auto !important;
    min-height: 78px !important;
    padding: 20px 6px !important;
  }

  .seven-card-icon {
    width: 36px !important;
    height: 36px !important;
    margin-left: 24px !important;
    margin-right: 18px !important;
  }

  .seven-card-text {
    width: auto !important;
    font-size: 17px !important;
    line-height: 24px !important;
    height: auto !important;
  }

  /* Book column */
  .seven-book-col {
    width: 440px !important;
    height: 460px !important;
  }

  .seven-book-bg {
    width: 340px !important;
    height: 400px !important;
    top: 50px !important;
    filter: blur(45px) !important;
  }

  .seven-book-img {
    width: 360px !important;
    margin-top: 40px !important;
  }

  /* CTA buttons stay desktop-style */
  .seven-buttons-container {
    margin: 64px auto 40px auto !important;
    flex-direction: row !important;
    gap: 14px !important;
  }

  .seven-button {
    font-size: 20px !important;
    padding: 12px 20px !important;
  }
}

`;

const LearningSection = () => {
      const ref = sessionStorage.getItem("reference") || "direct";

  
  return (
  <div  className="seven-section">
    <style>{styles}</style>
    <div className="seven-container">
      <div className="seven-header">
        <div className="seven-heading">
          What You Will Learn In
          <br />
          <span className="seven-highlight">
            Dubai Rental Wealth Simplified Book
          </span>
        </div>
      </div>
      <div className="seven-content-row">
        <div className="seven-card-list">
          {learnings.map((item, idx) => (
            <div className="seven-learn-card" key={idx}>
              <div className="seven-card-icon">
                <WhiteCheck />
              </div>
              <div className="seven-card-text">{item}</div>
            </div>
          ))}
        </div>
        <div className="seven-book-col">
          <div className="seven-book-bg"></div>
          <img loading="lazy"  className="seven-book-img" src={bookimage} alt="Dubai Rental Wealth Simplified Book" />
        </div>
      </div>
      {/* Updated CTA Buttons */}
      <div className="seven-buttons-container">
        <button
         onClick={() =>
              (window.location.href = `/books/tfrh/checkout?type=hardcopy&reference=${ref}`)
            }
          className="seven-button seven-button-hardcopy"
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
            } className="seven-button seven-button-ebook"  onMouseEnter={(e) => {
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
export default LearningSection;