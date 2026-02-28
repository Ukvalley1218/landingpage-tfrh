import React from 'react';
import icon2 from '../assets/icon2.png'
// import { redirectWithRef } from '../utils/redirectWithRef';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#3B7CC9',
  goldDark: 'rgba(70, 110, 150, 1)',
  goldLight: 'rgba(85, 134, 176, 0.1)',
  goldBorder: 'rgba(85, 134, 176, 0.15)',
  white: '#fff',
  textDark: '#191919',
  textBody: '#111',
  textMuted: '#444',
  textSubtitle: 'rgba(45,48,50,1)',
  background: '#fff',
  cardShadow: '0 4px 20px rgba(0,0,0,0.05)',
  cardShadowHover: '0 8px 24px rgba(0,0,0,0.08)',
  quoteShadow: '0 2px 6px rgba(85, 134, 176, 0.3)'
};

const testimonials = [
  {
    name: 'Shivam Diwakar',
    position: 'London, UK',
    stars: 5,
    text: "\"As someone new to international real estate, I was overwhelmed by the thought of investing in Dubai. But this book broke it down perfectly! It's packed with insider strategies that make the process of investing and managing properties from abroad easy. I feel much more confident about my investment decisions now\"",
    badge: '11% yields achieved'
  },
  {
    name: 'Sarah Ali Khan',
    position: 'Dubai, UAE',
    stars: 5,
    text: "\"I've been working in the property investment industry for years, but this book opened my eyes to the incredible opportunities in Dubai. The in-depth analysis of tax-free rental income and the high ROI in key areas is exactly what every serious investor needs to know. Highly recommended\"",
    badge: 'Transformed investment approach'
  },
  {
    name: 'Lisa Chen',
    position: 'Changi, Singapore',
    stars: 5,
    text: "\"I've been looking for ways to diversify my income streams, and Dubai's real estate market has been a game-changer. This book is like a roadmap to success – it covers everything from property selection to remote management. I'm already seeing great returns.\"",
    badge: 'First-time investor success'
  },
  {
    name: 'Ravi Upneja',
    position: 'Mumbai, India',
    stars: 5,
    text: "\"What sets this book apart is how actionable and practical it is. The author not only explains the advantages of investing in Dubai but also provides clear guidance on how to get started. I love the chapter on managing properties remotely; it's been a lifesaver for me as an overseas investor.\"",
    badge: 'Recommended to all clients'
  },
  {
    name: 'David Romero',
    position: 'Madrid, Spain',
    stars: 5,
    text: "\"I've explored several investment options over the years, and Dubai's real estate sector truly stands out. This guide provides clear steps to success – from market analysis to effective portfolio management. I'm already noticing impressive growth.\"",
    badge: 'Smart investment strategy'
  },
  {
    name: 'Marcus Johnson',
    position: 'New York, USA',
    stars: 5,
    text: "\"The tax optimization strategies are brilliant. Dr. Mamata Jain's expertise shines through every chapter. I've recommended this book to all my clients interested in international real estate.\"",
    badge: 'Investment Consultant'
  },
];


const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&family=Inter:wght@400;700&display=swap');
.six-section {
  padding: 60px 20px 0 20px;
  background: ${COLORS.background};
  display: flex;
  flex-direction: column;
  align-items: center;
}
.six-heading {
  font-family: 'Tinos', serif;
  font-weight: 700;
  font-size: 53px;
  line-height: 60px;
  text-align: center;
  margin-bottom: 0px;
}
.six-highlight {
  color: ${COLORS.gold};
  display: block;
  margin-top: 0px;
}
.six-subheading {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.44px;
  color: ${COLORS.textSubtitle};
  text-align: center;
  max-width: 900px;
  margin-top: 30px;
  margin-bottom: 70px;
}
.six-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 10px;
  justify-items: center;
  width: 100%;
  max-width: 1400px;
}
.six-card {
  background: ${COLORS.white};
  border-radius: 16px;
  border-top: 1px solid ${COLORS.goldBorder};
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  padding: 36px 32px 70px 32px;
  width: 100%;
  max-width: 630px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.six-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}
.six-card-quote {
  position: absolute;
  top: -16px;
  left: -16px;
}
.six-card-quote-icon {
  width: 42px;
  height: 42px;
  background: ${COLORS.gold};
  color: ${COLORS.white};
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${COLORS.quoteShadow};
}
.six-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 65px 0 40px 0;
  flex-wrap: wrap;
}
.six-button {
  border-radius: 8px;
  
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
.six-button-hardcopy {
  background: #3B7CC9;
  border: none;
  color: white;
}
.six-button-ebook {
  background: white;
  border: 1.5px solid #406890;
  color: #406890;
}
/* Mobile quote circle size 30px only */
@media (max-width: 768px) {
  .six-card-quote-icon {
    width: 30px !important;
    height: 30px !important;
    font-size: 14px !important;
  }
}
.six-card-figure {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 14px;
}
.six-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.six-card-name {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: ${COLORS.textDark};
}
.six-card-position {
  font-size: 16px;
  color: ${COLORS.textMuted};
  margin-top: 2px;
}
.six-stars {
  display: flex;
  gap: 3px;
  margin-top: 4px;
}
.six-star {
  width: 18px;
  height: 18px;
  color: #FFD700;
}
.six-card-text {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: ${COLORS.textBody};
  line-height: 30px;
  margin-top: 10px;
  font-weight: 500;
  text-align: justify;
  text-justify: inter-word;
}
.six-badge {
  position: absolute;
  bottom: 20px;
  left: 32px;
  background: ${COLORS.goldLight};
  color: #3B7CC9;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  padding: 6px 18px;
  border-radius: 999px;
}
/* Hide desktop on mobile */
.six-desktop {
  display: grid;
}

@media (max-width: 768px) {
  .six-desktop {
    display: none;
  }
}

/* Mobile slider */
.six-mobile {
  display: none;
  overflow: hidden;
  width: 100%;
  margin-top: 24px;
}

@media (max-width: 768px) {
  .six-mobile {
    display: block;
  }
}

.six-marquee {
  display: flex;
  width: max-content;
  gap: 16px;
  animation: sixMarquee 28s linear infinite;
  align-items: stretch;
}

.six-slide {
  min-width: 85vw;
  max-width: 85vw;
  display: flex;
}

/* Equal height cards */
.six-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Auto-scroll */
@keyframes sixMarquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

/* Pause on touch / hover */
.pause-on-hover:hover,
.pause-on-hover:active {
  animation-play-state: paused;
}

.pause-on-hover {
  touch-action: pan-x;
}


/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .six-section {
    padding: 40px 15px 0 15px !important;
  }
  .six-heading {
    font-size: 2rem !important;
    line-height: 1.2 !important;
    margin-bottom: 0px !important;
    padding: 0 10px !important;
  }
  .six-subheading {
    font-size: 16px !important;
    line-height: 1.4 !important;
    margin-top: 20px !important;
    margin-bottom: 40px !important;
    padding: 0 10px !important;
    max-width: 95vw !important;
  }
  .six-list {
    grid-template-columns: 1fr !important;
    gap: 15px !important;
    width: 100% !important;
  }
  .six-card {
    max-width: 95vw !important;
    padding: 25px 20px 60px 20px !important;
    margin: 0 auto !important;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1) !important;
  }
  .six-card-figure {
    gap: 15px !important;
    margin-bottom: 12px !important;
  }
  .six-avatar {
    width: 50px !important;
    height: 50px !important;
  }
  .six-card-name {
    font-size: 18px !important;
  }
  .six-card-position {
    font-size: 14px !important;
  }
  .six-star {
    width: 16px !important;
    height: 16px !important;
  }
  .six-card-text {
    font-size: 16px !important;
    line-height: 1.5 !important;
    margin-top: 8px !important;
    text-align: justify !important;
    text-justify: inter-word !important;
  }
  .six-badge {
    bottom: 15px !important;
    left: 20px !important;
    font-size: 14px !important;
    padding: 5px 15px !important;
  }
  .six-buttons-container {
    margin: 40px 0 30px 0 !important;
    flex-direction: column !important;
    gap: 12px !important;
  }
  .six-button {
    font-size: 19px !important;
    padding: 18px 0 !important;
    gap: 10px !important;
    width: 78vw !important;
    max-width: 322px !important;
    height: auto !important;
  }
}


/* Extra small devices */
@media (max-width: 380px) {
  .six-heading {
    font-size: 1.8rem !important;
  }
  .six-subheading {
    font-size: 15px !important;
  }
  .six-card {
    padding: 20px 15px 55px 15px !important;
  }
  .six-card-figure {
    gap: 12px !important;
  }
  .six-avatar {
    width: 45px !important;
    height: 45px !important;
  }
  .six-card-name {
    font-size: 17px !important;
  }
  .six-card-text {
    font-size: 15px !important;
    text-align: justify !important;
    text-justify: inter-word !important;
  }
  .six-button {
    font-size: 16px !important;
    padding: 18px 12px !important;
  }
}


/* Desktop styles */
@media (min-width: 769px) {
  .six-section {
    padding: 60px 20px 0 20px !important;
  }
  .six-heading {
    font-size: 53px !important;
    line-height: 60px !important;
    margin-bottom: 0px !important;
  }
  .six-subheading {
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: 30px !important;
    margin-bottom: 70px !important;
    max-width: 900px !important;
  }
  .six-list {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px 0px !important;
    max-width: 1317px !important;
  }
  .six-card {
    padding: 36px 32px 70px 32px !important;
    max-width: 630px !important;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
  }
  .six-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 12px 40px rgba(0,0,0,0.15) !important;
  }
  .six-card-figure {
    gap: 18px !important;
    margin-bottom: 14px !important;
  }
  .six-avatar {
    width: 60px !important;
    height: 60px !important;
  }
  .six-card-name {
    font-size: 22px !important;
  }
  .six-card-position {
    font-size: 16px !important;
  }
  .six-star {
    width: 18px !important;
    height: 18px !important;
  }
  .six-card-text {
    font-size: 18px !important;
    line-height: 30px !important;
    margin-top: 10px !important;
    font-weight: 500 !important;
    text-align: justify !important;
    text-justify: inter-word !important;
    padding-right:7px;
    padding-left:5px;
    padding-bottom:5px;
  }
  .six-badge {
    bottom: 20px !important;
    left: 32px !important;
    font-size: 16px !important;
    padding: 6px 18px !important;
  }
  .six-buttons-container {
    margin: 65px 0 40px 0 !important;
    flex-direction: row !important;
    gap: 16px !important;
  }
  .six-button {
    font-size: 22px !important;
    padding: 15px 23px !important;
    gap: 14px !important;
    width: auto !important;
    max-width: none !important;
    height: auto !important;
  }
}


@media (max-width: 992px) {
  .six-list {
    grid-template-columns: 1fr !important;
    gap: 15px !important;
  }
  .six-card {
    max-width: 90vw !important;
  }
}
`;

const TestimonialsSection = () => {
    const ref = sessionStorage.getItem("reference") || "direct";

  return (
  
  <div id='reader-reviews' className="six-section">
    <style>{styles}</style>
    <div className="six-heading">
      What Users Are Saying About <br />
      <span className="six-highlight">Dubai Rental Wealth Simplified Book</span>
    </div>
    <div className="six-subheading">
      Join thousands of successful investors who have transformed their financial future with this guide
    </div>
    {/* Desktop layout */}
    <div className="six-list six-desktop">
      {testimonials.map((t, idx) => (
        <div className="six-card" key={idx}>
          <div className="six-card-quote">
            <div className="six-card-quote-icon" style={{ display: 'flex', alignItems: 'center' }}>

              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6663 2C10.3127 2 9.97358 2.14048 9.72353 2.39052C9.47348 2.64057 9.33301 2.97971 9.33301 3.33333V7.33333C9.33301 7.68696 9.47348 8.02609 9.72353 8.27614C9.97358 8.52619 10.3127 8.66667 10.6663 8.66667C10.8432 8.66667 11.0127 8.7369 11.1377 8.86193C11.2628 8.98695 11.333 9.15652 11.333 9.33333V10C11.333 10.3536 11.1925 10.6928 10.9425 10.9428C10.6924 11.1929 10.3533 11.3333 9.99967 11.3333C9.82286 11.3333 9.65329 11.4036 9.52827 11.5286C9.40325 11.6536 9.33301 11.8232 9.33301 12V13.3333C9.33301 13.5101 9.40325 13.6797 9.52827 13.8047C9.65329 13.9298 9.82286 14 9.99967 14C11.0605 14 12.078 13.5786 12.8281 12.8284C13.5782 12.0783 13.9997 11.0609 13.9997 10V3.33333C13.9997 2.97971 13.8592 2.64057 13.6091 2.39052C13.3591 2.14048 13.02 2 12.6663 2H10.6663Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33333 2C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V7.33333C2 7.68696 2.14048 8.02609 2.39052 8.27614C2.64057 8.52619 2.97971 8.66667 3.33333 8.66667C3.51014 8.66667 3.67971 8.7369 3.80474 8.86193C3.92976 8.98695 4 9.15652 4 9.33333V10C4 10.3536 3.85952 10.6928 3.60948 10.9428C3.35943 11.1929 3.02029 11.3333 2.66667 11.3333C2.48986 11.3333 2.32029 11.4036 2.19526 11.5286C2.07024 11.6536 2 11.8232 2 12V13.3333C2 13.5101 2.07024 13.6797 2.19526 13.8047C2.32029 13.9298 2.48986 14 2.66667 14C3.72753 14 4.74495 13.5786 5.49509 12.8284C6.24524 12.0783 6.66667 11.0609 6.66667 10V3.33333C6.66667 2.97971 6.52619 2.64057 6.27614 2.39052C6.02609 2.14048 5.68696 2 5.33333 2H3.33333Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>
          <div className="six-card-figure">
            <div>
              <div className="six-card-name">{t.name}</div>
              <div className="six-card-position">{t.position}</div>
              <div className="six-stars">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} className="six-star" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="six-card-text">{t.text}</div>
          <div className="six-badge">{t.badge}</div>
        </div>
      ))}
    </div>
    {/* Mobile marquee slider */}
<div className="six-mobile">
  <div className="six-marquee pause-on-hover">
    {[...testimonials, ...testimonials].map((t, idx) => (
      <div className="six-slide" key={idx}>
        <div className="six-card">
          <div className="six-card-quote">
            {/* <div className="six-card-quote-icon">

              
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6663 2C10.3127 2 9.97358 2.14048 9.72353 2.39052C9.47348 2.64057 9.33301 2.97971 9.33301 3.33333V7.33333C9.33301 7.68696 9.47348 8.02609 9.72353 8.27614C9.97358 8.52619 10.3127 8.66667 10.6663 8.66667C10.8432 8.66667 11.0127 8.7369 11.1377 8.86193C11.2628 8.98695 11.333 9.15652 11.333 9.33333V10C11.333 10.3536 11.1925 10.6928 10.9425 10.9428C10.6924 11.1929 10.3533 11.3333 9.99967 11.3333C9.82286 11.3333 9.65329 11.4036 9.52827 11.5286C9.40325 11.6536 9.33301 11.8232 9.33301 12V13.3333C9.33301 13.5101 9.40325 13.6797 9.52827 13.8047C9.65329 13.9298 9.82286 14 9.99967 14C11.0605 14 12.078 13.5786 12.8281 12.8284C13.5782 12.0783 13.9997 11.0609 13.9997 10V3.33333C13.9997 2.97971 13.8592 2.64057 13.6091 2.39052C13.3591 2.14048 13.02 2 12.6663 2H10.6663Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33333 2C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V7.33333C2 7.68696 2.14048 8.02609 2.39052 8.27614C2.64057 8.52619 2.97971 8.66667 3.33333 8.66667C3.51014 8.66667 3.67971 8.7369 3.80474 8.86193C3.92976 8.98695 4 9.15652 4 9.33333V10C4 10.3536 3.85952 10.6928 3.60948 10.9428C3.35943 11.1929 3.02029 11.3333 2.66667 11.3333C2.48986 11.3333 2.32029 11.4036 2.19526 11.5286C2.07024 11.6536 2 11.8232 2 12V13.3333C2 13.5101 2.07024 13.6797 2.19526 13.8047C2.32029 13.9298 2.48986 14 2.66667 14C3.72753 14 4.74495 13.5786 5.49509 12.8284C6.24524 12.0783 6.66667 11.0609 6.66667 10V3.33333C6.66667 2.97971 6.52619 2.64057 6.27614 2.39052C6.02609 2.14048 5.68696 2 5.33333 2H3.33333Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div> */}
          </div>

          <div className="six-card-figure">
            <div>
              <div className="six-card-name">{t.name}</div>
              <div className="six-card-position">{t.position}</div>
              <div className="six-stars">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} className="six-star" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="six-card-text">{t.text}</div>
          <div className="six-badge">{t.badge}</div>
        </div>
      </div>
    ))}
  </div>
</div>
    {/* Updated CTA Buttons */}
    <div  className="six-buttons-container">
      <button
        onClick={() =>
             (window.location.href = `/books/tfrh/checkout?type=hardcopy&reference=${ref}`)
          }
        className="six-button six-button-hardcopy"
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

        📙 Order Your Hard Copy Today
      </button>
      <button onClick={() =>
             (window.location.href = `/books/tfrh/checkout?type=ebook&reference=${ref}`)
          } className="six-button six-button-ebook"
        onMouseEnter={(e) => {
          e.currentTarget.style.setProperty('box-shadow', '0 8px 20px rgba(59, 124, 201, 0.4)', 'important');
          e.currentTarget.style.setProperty('transform', 'translateY(-2px)', 'important');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty('box-shadow', 'none', 'important');
          e.currentTarget.style.setProperty('transform', 'translateY(0)', 'important');
        }}>

        ⬇️ Order Your Digital E-Book Today
      </button>
    </div>
  </div>
)
}
export default TestimonialsSection;