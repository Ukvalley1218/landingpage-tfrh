import React from 'react';
import bookimage from '../assets/cover.webp'
import bgimage from '../assets/bgimage.jpg'
import icon31 from '../assets/icon31.png'
import icon32 from '../assets/icon32.png'
import icon33 from '../assets/icon33.png'
// import { redirectWithRef } from '../utils/redirectWithRef';
import logoo from '../assets/logo.webp'
import { Award, Landmark, Wifi } from 'lucide-react';
// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  primary: "#5586B0",                         // Main accent and brand color
  bannerGradient: "linear-gradient(90deg, #7AB0D9 0%, #406890 100%)", // Blue gradient
  iconBg: "rgba(85,134,176,0.12)",            // Soft blue tint for icon backgrounds
  cardBg: "rgba(255,255,255,0.8)",            // Light, semi-transparent card background
  cardText: "rgba(32,52,74,1)",               // Deep blue for card text
  btnBg: "#3B7CC9",                           // Button solid blue
  btnText: "rgba(255,255,255,1)",             // Button text: white
  btnBorder: "#406890",                       // Button border: darker blue
  subtitle: "#0D0D0D",                        // Subtitle: bold blue tone
  heading: "#3B7CC9",
  icon: "black",                          // Heading: main blue
};

// ---- END COLOR PALETTE ----
const messages = [
  { text: "Limited Stock", icon: "🛒" },
  { text: "Fast Delivery", icon: "🚚" },
  { text: "Bestseller Book", icon: "⭐" },
  { text: "10,000+ Readers", icon: "📚" },
  { text: "Ships Worldwide", icon: "🌍" },
  { text: "Top Rated", icon: "🔥" },
  { text: "Entrepreneur's Pick", icon: "💼" },
  { text: "Instant eBook Access", icon: "⚡" }
];

const MarqueeContent = () => {
  return (
    <>
      {messages.map((item, index) => (
        <span
          key={index}
          className="inline-flex items-center text-white mx-6 font-medium hover:-translate-y-0.5  transition-transform whitespace-nowrap"
        >
          <span className="text-lg">{item.icon}</span>
          <span className="ml-2 font-semibold">{item.text}</span>
        </span>
      ))}
    </>
  );
};
 
const CartIcon = () => (
  <svg width="25" height="25" viewBox="0 0 20 20" fill="none">
    <g>
      <circle cx="9.5" cy="9.5" r="9.5" fill="rgba(255,255,255,0)" />
      <path d="M3 5H4.5L6.7 13.1C6.84877 13.6882 7.37675 14.1001 7.98701 14.1H15.35C15.9144 14.0991 16.4125 13.729 16.5567 13.1791L18 7.75H5.1"
        stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8.45" cy="16" r="1.05" fill="#fff" />
      <circle cx="15.1" cy="16" r="1.05" fill="#fff" />
      <rect x="9.3" y="8" width="1.5" height="3.1" rx="0.7" fill="white" />
    </g>
  </svg>
);

export default function DubaiWealthHero() {
    const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div className="min-h-screen ">
      <style>{`
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .marquee-mobile {
            font-size: 13px !important;
            margin-left: 7px !important;
            margin-right: 7px !important;
          }
          .hero-heading {
            font-size: 2rem !important;
            line-height: 2.35rem !important;
            margin-bottom: 16px !important;
            padding: 0 10px !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
            line-height: 1.4rem !important;
            width: 95vw !important;
            max-width: 100% !important;
            word-break: break-word;
            padding: 0 10px !important;
            margin-bottom: 24px !important;
          }
          .feature-icons-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            padding: 0 10px !important;
            margin-bottom: 24px !important;
          }
          .feature-card {
            width: 95vw !important;
            max-width: 320px !important;
            height: 60px !important;
            padding: 12px 16px !important;
            margin: 0 auto !important;
            gap: 12px !important;
          }
          .feature-card span:last-child {
            font-size: 16px !important;
            width: auto !important;
            flex: 1 !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            gap: 12px !important;
            padding: 0 10px !important;
          }
          .hero-btn, .hero-btn-trailer {
            width: 95vw !important;
            max-width: 320px !important;
            font-size: 16px !important;
            height: 48px !important;
            border-radius: 8px !important;
            margin: 0 auto !important;
          }
          .book-row {
            min-height: 300px !important;
            height: auto !important;
            margin-bottom: 20px !important;
            padding: 0 10px !important;
            margin-top: -40px !important;
          }
          .book-viewer {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
          .book-viewer img {
            width: 268px !important;
            height: 350px !important;
            object-fit: cover !important;
          }
          .rating-badge {
            position: static !important;
            margin: 20px auto 0 auto !important;
            display: flex !important;
            justify-content: center !important;
            transform: none !important;
            padding: 12px 20px 8px 20px !important;
          }
          .rating-badge span:first-child {
            font-size: 18px !important;
          }
          .rating-badge span:last-child {
            font-size: 14px !important;
          }
        }
          
        /* Extra small devices */
        @media (max-width: 380px) {
          .hero-heading {
            font-size: 1.8rem !important;
            line-height: 2.1rem !important;
          }
          .hero-subtitle {
            font-size: 0.9rem !important;
            line-height: 1.3rem !important;
          }
          .feature-card {
            height: 55px !important;
            padding: 10px 14px !important;
          }
          .feature-card span:last-child {
            font-size: 15px !important;
          }
          .hero-btn, .hero-btn-trailer {
            height: 45px !important;
            font-size: 15px !important;
          }
          .book-viewer img {
            width: 180px !important;
            height: 320px !important;
          }
        }

        /* iPhone SE Specific Button Styles Only (320px-375px) */
        @media (max-width: 375px) {
          .feature-card {
            width: 239px !important;
            max-width: 280px !important;
            height: 50px !important;
            padding: 10px 12px !important;
            gap: 10px !important;
          }
          .feature-card span:last-child {
            font-size: 14px !important;
          }
          .feature-card span:first-child {
            min-width: 28px !important;
            min-height: 28px !important;
            font-size: 16px !important;
          }
          .hero-btn, .hero-btn-trailer {
            width: 239px !important;
            max-width: 280px !important;
            height: 42px !important;
            font-size: 14px !important;
            margin: 0 auto !important;
          }
        }

        /* Desktop styles remain unchanged */
        @media (min-width: 769px) {
          .hero-heading {
            font-size: 65px !important;
            line-height: normal !important;
          }
          .hero-subtitle {
            font-size: 22px !important;
            line-height: 30px !important;
            width: 765px !important;
          }
          .feature-icons-row {
            flex-direction: row !important;
            gap: 24px !important;
          }
          .feature-card {
            width: 270px !important;
            height: 72px !important;
          }
          .hero-cta-row {
            flex-direction: row !important;
            gap: 16px !important;
          }
          .hero-btn, .hero-btn-trailer {
            width: 265px !important;
            height: 52px !important;
          }
          .book-viewer img {
            width: 600px !important;
            height: 700px !important;
          }
          .rating-badge {
            position: absolute !important;
            bottom: 24px !important;
            right: -40px !important;
          }
          .book-row {
            margin-top: -80px !important;
          }
        }
      `}</style>

      {/* Limited Stock Banner */}
     <div className="flex items-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] font-medium overflow-hidden py-2 bg-[#5586B0]">
  <div className="animate-marquee inline-flex whitespace-nowrap">
    {[...Array(3)].map((_, i) => (
      <MarqueeContent key={i} />
    ))}
  </div>
  
  <style>{`
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }

    .animate-marquee {
      animation: marquee 25s linear infinite;
    }

    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
</div>

      {/* Background Image Section */}
      <div
        className="absolute top-0 left-0 z-0 w-full h-[120vh]"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: '0.1',
        }}
      />

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl px-6 py-16 mx-auto text-center ">
        
        {/* Main Heading */}
        <h1
          className="text-5xl md:text-[65px] font-bold text-gray-800 mb-6 hero-heading"
          style={{ fontFamily: 'Tinos, serif' }}
        >
          Unlock The Secrets to{' '}
          <span style={{ color: COLORS.heading }}>Tax-Free Rental</span>
          <br />
          <span style={{ color: COLORS.heading }}>Wealth</span> in Dubai
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-8 text-center capitalize hero-subtitle"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            letterSpacing: '-0.45px',
            color: COLORS.subtitle
          }}
        >
          Your Roadmap To Building Consistent, Tax-Free Passive Income In The <br />
          World's Most Lucrative Real Estate Market.
        </p>

        {/* Feature Icons */}
        <div className="feature-icons-row" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '32px',
        }}>
          {/* Box 1 */}
          <div className="feature-card" style={{
            borderRadius: '10px',
            background: COLORS.cardBg,
            boxShadow: '0px 1px 2px -1px rgba(0,0,0,0.1), 0px 1px 3px 0px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            gap: '12px',
          }}>
            <span style={{
              minWidth: '45px',
              minHeight: '45px',
              borderRadius: '50%',
              background: "#dae5f0",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
            }}>
              <Landmark className='text-[#5586B0]' />
            </span>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '19px',
              lineHeight: '20px',
              letterSpacing: '-0.15px',
              color: COLORS.cardText,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
            }}>
              Tax-Free Income
            </span>
          </div>
          {/* Box 2 */}
          <div className="feature-card" style={{
            borderRadius: '10px',
            background: COLORS.cardBg,
            boxShadow: '0px 1px 2px -1px rgba(0,0,0,0.1), 0px 1px 3px 0px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            gap: '12px',
          }}>
            <span style={{
              minWidth: '45px',
              minHeight: '45px',
              borderRadius: '50%',
              background: "#dae5f0",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
            }}>
              <Award className='text-[#5586B0]' />
            </span>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '19px',
              lineHeight: '20px',
              letterSpacing: '-0.15px',
              color: COLORS.cardText,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap'
            }}>
              Proven Strategies
            </span>
          </div>
          {/* Box 3 */}
          <div className="feature-card" style={{
            borderRadius: '10px',
            background: COLORS.cardBg,
            boxShadow: '0px 1px 2px -1px rgba(0,0,0,0.1), 0px 1px 3px 0px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            gap: '20px',
          }}>
            <span style={{
              minWidth: '32px',
              minHeight: '32px',
              borderRadius: '50%',
              background: "#dae5f0",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
            }}>
              <Wifi className='text-[#5586B0]' />
            </span>
            <span style={{
              fontFamily: 'inter, sans-serif',
              fontWeight: 400,
              fontSize: '19px',
              lineHeight: '20px',
              letterSpacing: '-0.15px',
              color: COLORS.cardText,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap'
            }}>
              Remote Management
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta-row" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              
              (window.location.href = `/books/tfrh/checkout?type=hardcopy&reference=${ref}`)
            
            }}
            className="hero-btn"
            style={{
              borderRadius: '8px',
              background: COLORS.btnBg,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: COLORS.btnText,
              fontWeight: 500,
              transition: 'all 0.2s ease',
              position: 'relative',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('box-shadow', '0 8px 20px rgba(59, 124, 201, 0.4)', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(-2px)', 'important');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('box-shadow', 'none', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(0)', 'important');
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                lineHeight: '20px',
                color: COLORS.btnText,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: "18px",
                pointerEvents: 'none'
              }}
            >
              📙 Get Your Hard copy Now
            </span>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              (window.location.href = `/books/tfrh/checkout?type=ebook&reference=${ref}`)
            }}
            className="hero-btn"
            style={{
              borderRadius: '8px',
              background: "#fff",
              border: `1.5px solid ${COLORS.btnBorder}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: COLORS.btnBorder,
              fontWeight: 500,
              transition: 'all 0.2s ease',
              position: 'relative',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('box-shadow', '0 8px 20px rgba(59, 124, 201, 0.4)', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(-2px)', 'important');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('box-shadow', 'none', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(0)', 'important');
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                lineHeight: '20px',
                color: COLORS.btnBorder,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: "18px",
                pointerEvents: 'none'
              }}
            >
              ⬇️  Get Your Digital E-Book
            </span>
          </button>

          {/* <button className="hero-btn-trailer"
            style={{
              borderRadius: '8px',
              background: '#fff',
              border: `1px solid ${COLORS.btnBorder}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: COLORS.btnBorder,
              fontWeight: 500
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                lineHeight: '20px',
                color: COLORS.btnBorder,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                  fontSize:"18px"

              }}
            >
              ▶ Watch Book Trailer
            </span>
          </button> */}
        </div>

        {/* Book Display Section */}
        <div className="book-row" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '500px',
          position: 'relative',
        }}>
          <div className="book-viewer  mt-12 lg:mt-0" style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>


            <img loading="lazy" 
              src={bookimage}
              alt="Dubai Rental Wealth Simplified Book"
              style={{
                objectFit: 'cover',
                borderRadius: '18px',
                position: 'relative',
                zIndex: 1,
                boxShadow: 'none',
                maxWidth: '800px',
                width: '100%',
                display: 'block',
                margin: '0 auto',
              }}
            />
            {/* Rating Badge */}


          </div>
        </div>

      </div>
    </div>
  );
}