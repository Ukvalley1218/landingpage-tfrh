import React from 'react';
import icon21 from "../assets/icon21.png"
import icon22 from "../assets/icon22.png"
import icon23 from "../assets/icon23.png"
import icon24 from "../assets/icon24.png"
import icon25 from "../assets/icon25.png"
import conatiner from "../assets/container.png"
import { Globe, Home, Percent, Shield, TrendingUp } from 'lucide-react';
// import { redirectWithRef } from '../utils/redirectWithRef';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#FFD700',
  goldDark: 'rgb(70, 110, 150)',
  goldLight: 'rgba(85, 134, 176, 0.18)',
  white: '#fff',
  textLight: '#f0f0f0',
  textGold: 'rgb(85, 134, 176)',
  textMuted: '#e0e0e0',
  backgroundDark: '#2C548A',
  cardBg: 'rgba(255,255,255,0.08)',
  hotzoneBg: '#434C58',
  buttonShadow: '0 4px 22px rgba(85, 134, 176, 0.18)',
  cardShadow: '0px 22px 54px rgba(30,25,15,0.20)',
  hotzoneShadow: '0px 7px 32px rgba(43,48,59,0.17)'
};

// ---- END COLOR PALETTE ----

const benefitCards = [
  {
    icon: (
      <span className="dubai-card-icon">
        <img loading="lazy"  src={icon21} alt="" />
      </span>
    ),
    top: <span className="card-top-orange">0%</span>,
    heading: <span className="card-main-bold">0% Tax on Rental Income</span>,
    text: <span className="card-main-light">Enjoy complete tax exemption<br />on your rental earnings</span>
  },
  {
    icon: (
      <span className="dubai-card-icon">
        <img loading="lazy"  src={icon22} alt="" />
      </span>
    ),
    top: <span className="card-top-orange">100% Secure</span>,
    heading: <span className="card-main-bold">Strong Legal Protection</span>,
    text: <span className="card-main-light">Robust legal framework<br />protecting foreign investors</span>
  },
  {
    icon: (
      <span className="dubai-card-icon">
        <img loading="lazy"  src={icon23} alt="" />
      </span>
    ),
    top: <span className="card-top-orange">Full Ownership</span>,
    heading: <span className="card-main-bold">Freehold Ownership Rights</span>,
    text: <span className="card-main-light">Full ownership rights for<br />international investors</span>
  },
  {
    icon: (
      <span className="dubai-card-icon">
        <img loading="lazy"  src={icon24} alt="" />
      </span>
    ),
    top: <span className="card-top-orange">8–12%</span>,
    heading: <span className="card-main-bold">High Yields (8–12%)</span>,
    text: <span className="card-main-light">Superior rental yields<br />compared to global markets</span>
  },
  {
    icon: (
      <span className="dubai-card-icon">
        <img loading="lazy"  src={icon25} alt="" />
      </span>
    ),
    top: <span className="card-top-orange">Pro-Investor</span>,
    heading: <span className="card-main-bold">Investor-Friendly Policies</span>,
    text: <span className="card-main-light">Government initiatives<br />supporting real estate investment</span>
  }
];

const hotZones = [
  { name: "Downtown Dubai", roi: "9-11%" },
  { name: "Dubai Marina", roi: "8-10%" },
  { name: "Palm Jumeirah", roi: "7-9%" },
  { name: "Business Bay", roi: "10-12%" },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&display=swap');
.why-dubai-section {
  width: 100vw;
  max-width: 100vw;
  min-height: 626px;
  margin: 0 auto;
background: linear-gradient(to bottom, #3B7CC9 10%, #6ca4e6 60%, #1C2B4A 100%);  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 0 0;
  position: relative;
  box-sizing: border-box;
}
.why-dubai-heading {
  font-family: 'Tinos', serif;
  font-size: 53px;
  font-weight: 700;
  color: ${COLORS.white};
  line-height: 48px;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 54px auto;
  box-sizing: border-box;
}
.why-dubai-heading .gold {
  color: #FFD700;
}
.why-dubai-benefits-container {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto 38px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 44px;
  justify-items: center;
}

.why-dubai-benefits-container > .why-dubai-card:nth-child(4),
.why-dubai-benefits-container > .why-dubai-card:nth-child(5) {
  grid-column: 1 / -1;      /* Span full width */
  justify-self: center;     /* Center horizontally */
}



.why-dubai-card {
  width: 394px;
  height: 300px;
  background: ${COLORS.cardBg};
  border-radius: 20px;
  border: 1.5px solid ${COLORS.goldLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: ${COLORS.cardShadow};
  padding: 34px 24px 12px 24px;
}
.dubai-card-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background:#FFD700;
  margin-bottom: 15px;
  margin-top: 3px;
}
.card-top-orange {
  color: ${COLORS.gold};
  font-size: 22px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
  margin-top: 4px;
  letter-spacing:0.1px;
  text-align:center;
}
.card-main-bold {
  color: ${COLORS.white};
  font-family: 'Tinos', serif;
  font-weight: bold;
  font-size: 20px;
  text-align:center;
  margin-bottom: 10px;
  letter-spacing:0px;
  display: block;
}
.card-main-light {
  color: ${COLORS.textLight};
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  text-align: center;
  font-weight: 400;
  display: block;
}
.why-dubai-hotzone-container {
  margin: 64px auto 0 auto;
  width: 100%;
  max-width: 901px;
  background: ${COLORS.white};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${COLORS.hotzoneShadow};
  padding: 33px 0 18px 0;
  box-sizing: border-box;
}
.why-dubai-hotzone-heading {
  font-family: 'Tinos', serif;
  font-size: 22px;
  font-weight: 700;
  color:#3B7CC9;
  margin-bottom: 11px;
  text-align: center;
}
.why-dubai-hotzone-subheading {
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-size: 19px;
  margin-bottom: 22px;
  text-align: center;
  padding: 0 18px;
}
.why-dubai-hotzone-tagbox {
  display: flex;
  gap: 19px;
  justify-content: center;
  flex-wrap: wrap;
}
.why-dubai-hotzone-tag {
  background:#F4F8FE;
  color:#3B7CC9;
  font-family: 'Inter', sans-serif;
  border:0.5px solid #a1bad6;
  font-weight: 400;
  font-size: 16px;
  border-radius: 8px;
  padding: 8px 22px;
  margin-right: 0px;
  margin-bottom: 0;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.why-dubai-hotzone-tag span {
  font-size: 13.5px;
  color: black;
  margin-top: 2px;
}

/* CTA Buttons Styling */
.why-dubai-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 45px 0 54px 0;
  flex-wrap: wrap;
  width: 100%;
}
.why-dubai-button {
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
.why-dubai-button-hardcopy {
  background: #3B7CC9;
  border: none;
  color: white;
}
.why-dubai-button-ebook {
  background: white;
  border: 1.5px solid #406890;
  color: #406890;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .why-dubai-section {
    min-height: auto !important;
    padding: 40px 0 30px 0 !important;
  }
  .why-dubai-heading {
    font-size: 2rem !important;
    line-height: 1.2 !important;
    margin: 0 auto 30px auto !important;
    padding: 0 15px !important;
    width: 95vw !important;
  }
  .why-dubai-benefits-container {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto !important;
    gap: 20px !important;
    width: 95vw !important;
    margin-bottom: 30px !important;
  }
  .why-dubai-card {
    width: 100% !important;
    max-width: 95vw !important;
    height: auto !important;
    min-height: 220px !important;
    padding: 25px 20px 20px 20px !important;
    margin: 0 auto !important;
  }
  .dubai-card-icon {
    width: 50px !important;
    height: 50px !important;
    margin-bottom: 12px !important;
    margin-top: 0 !important;
  }
  .dubai-card-icon svg {
    width: 50px !important;
    height: 50px !important;
  }
  .card-top-orange {
    font-size: 20px !important;
    margin-bottom: 6px !important;
    margin-top: 0 !important;
  }
  .card-main-bold {
    font-size: 18px !important;
    margin-bottom: 8px !important;
  }
  .card-main-light {
    font-size: 16px !important;
    line-height: 1.4 !important;
  }
  .why-dubai-hotzone-container {
    margin: 40px auto 0 auto !important;
    width: 95vw !important;
    padding: 25px 15px 15px 15px !important;
  }
  .why-dubai-hotzone-heading {
    font-size: 20px !important;
    margin-bottom: 8px !important;
  }
  .why-dubai-hotzone-subheading {
    font-size: 16px !important;
    margin-bottom: 18px !important;
    padding: 0 10px !important;
  }
  .why-dubai-hotzone-tagbox {
    gap: 12px !important;
    width: 100% !important;
  }
  .why-dubai-hotzone-tag {
    min-width: 130px !important;
    padding: 8px 16px !important;
    font-size: 15px !important;
  }
  .why-dubai-hotzone-tag span {
    font-size: 13px !important;
  }
  .why-dubai-buttons-container {
    margin: 35px 0 30px 0 !important;
    flex-direction: column !important;
    gap: 12px !important;
  }
  .why-dubai-button {
    font-size: 18px !important;
    padding: 11px 7px !important;
    gap: 10px !important;
    width: 82vw !important;
    max-width: 320px !important;
    height: auto !important;
  }
  
  /* Remove grid positioning for mobile */
  .why-dubai-benefits-container > .why-dubai-card:nth-child(4),
  .why-dubai-benefits-container > .why-dubai-card:nth-child(5) {
    grid-column: auto !important;
    justify-self: center !important;
  }
}

/* Extra small devices */
@media (max-width: 380px) {
  .why-dubai-section {
    padding: 30px 0 20px 0 !important;
  }
  .why-dubai-heading {
    font-size: 17px !important;
    margin-bottom: 25px !important;
  }
  .why-dubai-card {
    min-height: 200px !important;
    padding: 20px 15px 15px 15px !important;
  }
  .dubai-card-icon {
    width: 45px !important;
    height: 45px !important;
  }
  .dubai-card-icon svg {
    width: 45px !important;
    height: 45px !important;
  }
  .card-top-orange {
    font-size: 18px !important;
  }
  .card-main-bold {
    font-size: 17px !important;
  }
  .card-main-light {
    font-size: 15px !important;
  }
  .why-dubai-hotzone-container {
    padding: 20px 12px 12px 12px !important;
  }
  .why-dubai-hotzone-heading {
    font-size: 18px !important;
  }
  .why-dubai-hotzone-subheading {
    font-size: 15px !important;
  }
  .why-dubai-hotzone-tag {
    min-width: 120px !important;
    padding: 6px 14px !important;
    font-size: 14px !important;
  }
  .why-dubai-button {
    font-size: 16px !important;
    padding: 18px 12px !important;
  }
}

/* Desktop styles */
@media (min-width: 769px) {
  .why-dubai-section {
    min-height: 626px !important;
    padding: 64px 0 0 0 !important;
  }
  .why-dubai-heading {
    font-size: 53px !important;
    line-height: 48px !important;
    max-width: 1200px !important;
    margin: 0 auto 54px auto !important;
  }
  .why-dubai-benefits-container {
    grid-template-columns: repeat(3, 1fr) !important;
    grid-template-rows: repeat(2, 1fr) !important;
    gap: 44px 44px !important;
    max-width: 1250px !important;
    margin-bottom: 38px !important;
  }
  .why-dubai-benefits-container > .why-dubai-card:nth-child(4) {
    grid-column: 1 / 2 !important;
    justify-self: end !important;
  }
  .why-dubai-benefits-container > .why-dubai-card:nth-child(5) {
    grid-column: 2 / 3 !important;
    justify-self: start !important;
  }
  .why-dubai-card {
    width: 394px !important;
    height: 300px !important;
    padding: 34px 24px 12px 24px !important;
  }
  .dubai-card-icon {
    width: 60px !important;
    height: 60px !important;
    margin-bottom: 15px !important;
    margin-top: 3px !important;
  }
  .dubai-card-icon svg {
    width: 64px !important;
    height: 64px !important;
  }
  .card-top-orange {
    font-size: 22px !important;
    margin-bottom: 8px !important;
    margin-top: 4px !important;
  }
  .card-main-bold {
    font-size: 20px !important;
    margin-bottom: 10px !important;
  }
  .card-main-light {
    font-size: 17px !important;
  }
  .why-dubai-hotzone-container {
    max-width: 901px !important;
    margin: 64px auto 64px auto !important;
    padding: 33px 0 18px 0 !important;
  }
  .why-dubai-hotzone-heading {
    font-size: 22px !important;
    margin-bottom: 11px !important;
  }
  .why-dubai-hotzone-subheading {
    font-size: 19px !important;
    margin-bottom: 22px !important;
  }
  .why-dubai-hotzone-tagbox {
    gap: 19px !important;
  }
  .why-dubai-hotzone-tag {
    min-width: 150px !important;
    padding: 8px 22px !important;
    font-size: 16px !important;
  }
  .why-dubai-hotzone-tag span {
    font-size: 13.5px !important;
  }
  .why-dubai-buttons-container {
    margin: 45px 0 54px 0 !important;
    flex-direction: row !important;
    gap: 16px !important;
  }
  .why-dubai-button {
    font-size: 21px !important;
    padding: 12px 16px !important;
    gap: 14px !important;
    width: auto !important;
    max-width: none !important;
    height: auto !important;
  }
}

@media (max-width: 1280px) and (min-width: 769px) {
  .why-dubai-section { max-width:98vw;}
  .why-dubai-benefits-container {max-width:96vw;}
  .why-dubai-card {max-width:94vw;width:300px;height:240px;}
  .card-main-bold  {font-size:16px;}
  .why-dubai-hotzone-container {max-width:98vw;}
}

/* =====================================
   TABLET = DESKTOP (SCALED)
   769px – 1024px
   ===================================== */
@media (min-width: 769px) and (max-width: 1024px) {

  .why-dubai-section {
    padding: 56px 0 0 0 !important;
    min-height: auto !important;
  }

  /* Heading */
  .why-dubai-heading {
    font-size: 42px !important;
    line-height: 46px !important;
    max-width: 92% !important;
    margin-bottom: 42px !important;
  }

  /* ===== Benefit Cards Grid ===== */
  .why-dubai-benefits-container {
    max-width: 960px !important;
    gap: 28px !important;
  }

  .why-dubai-card {
    width: 100% !important;
    max-width: 300px !important;
    height: 260px !important;
    padding: 26px 20px 18px 20px !important;
  }

  .dubai-card-icon {
    width: 54px !important;
    height: 54px !important;
  }

  .dubai-card-icon img,
  .dubai-card-icon svg {
    width: 32px !important;
    height: 32px !important;
  }

  .card-top-orange {
    font-size: 20px !important;
    margin-bottom: 6px !important;
  }

  .card-main-bold {
    font-size: 18px !important;
    margin-bottom: 8px !important;
  }

  .card-main-light {
    font-size: 15.5px !important;
    line-height: 1.4 !important;
  }

  /* Center last 2 cards properly */
  .why-dubai-benefits-container > .why-dubai-card:nth-child(4),
  .why-dubai-benefits-container > .why-dubai-card:nth-child(5) {
    grid-column: span 1 !important;
    justify-self: center !important;
  }

  /* ===== Hot Zones ===== */
  .why-dubai-hotzone-container {
    max-width: 760px !important;
    margin-top: 56px !important;
    padding: 28px 20px 18px 20px !important;
  }

  .why-dubai-hotzone-heading {
    font-size: 20px !important;
  }

  .why-dubai-hotzone-subheading {
    font-size: 17px !important;
    margin-bottom: 18px !important;
  }

  .why-dubai-hotzone-tag {
    min-width: 140px !important;
    font-size: 15px !important;
  }

  /* ===== CTA Buttons ===== */
  .why-dubai-buttons-container {
    margin: 0 0 46px 0 !important;
  }

  .why-dubai-button {
    font-size: 19px !important;
    padding: 12px 18px !important;
  }
}

`;

export default function WhyDubaiSection() {
  const benefits = [
    {
      icon: Percent,
      badge: '0%',
      title: '0% Tax on Rental Income',
      description: 'Enjoy complete tax exemption on your rental earnings.'
    },
    {
      icon: Shield,
      badge: '100% Secure',
      title: 'Strong Legal Protection',
      description: 'Robust legal framework protecting foreign investors.'
    },
    {
      icon: Home,
      badge: 'Full Ownership',
      title: 'Freehold Ownership Rights',
      description: 'Full ownership rights for international investors.'
    }
  ];

  const additionalBenefits = [
    {
      icon: TrendingUp,
      badge: '8-12%',
      title: 'High Yields (8–12%)',
      description: 'Superior rental yields compared to global markets.'
    },
    {
      icon: Globe,
      badge: 'Pro-Investor',
      title: 'Investor-Friendly Policies',
      description: 'Government initiatives supporting real estate investment.'
    }
  ];

  return (
    <div className="why-dubai-section">
      <style>{styles}</style>
      <div className="why-dubai-heading">
        Why Dubai Is <span className="gold">Your Best Investment <br /> Destination</span>
      </div>
      {/* <div className="lg:max-w-6xl">
        <img loading="lazy"  src={conatiner} alt="" />
      </div> */}
      <div className="lg:min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Top 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF1A] backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-blue-600/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 rounded-full p-5">
                  <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-yellow-400 text-2xl font-semibold mb-4">
                {benefit.badge}
              </div>
              <h3 className="text-white text-xl font-bold mb-3"
              style={{
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
  }}>
                {benefit.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom 2 cards - centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {additionalBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF1A] backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-blue-600/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 rounded-full p-5">
                  <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-yellow-400 text-2xl font-semibold mb-4">
                {benefit.badge}
              </div>
              <h3 className="text-white text-xl font-bold mb-3" style={{
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
  }}>
                {benefit.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className="why-dubai-hotzone-container">
        <div className="why-dubai-hotzone-heading">Dubai's ROI Hot Zones</div>
        <div className="why-dubai-hotzone-subheading">
          Discover the highest-yielding areas across Dubai's premium districts:
        </div>
        <div className="why-dubai-hotzone-tagbox">
          {hotZones.map((zone, i) => (
            <div className="why-dubai-hotzone-tag" key={i}>
              {zone.name}
              <span>{zone.roi}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Updated CTA Buttons */}
      <div className="why-dubai-buttons-container">
        <button
          onClick={() => redirectWithRef('/books/tfrh/checkout?type=hardcopy')}
          className="why-dubai-button why-dubai-button-hardcopy"
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

        <button onClick={() => redirectWithRef('/books/tfrh/checkout?type=ebook')} className="why-dubai-button why-dubai-button-ebook"  onMouseEnter={(e) => {
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
  );
}