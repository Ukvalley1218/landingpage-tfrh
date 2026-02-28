import React from 'react'
import testimonial from '../assets/Testimonial.png'

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  white: '#fff',
  background: '#fff',
  imageBg: '#eee',
  shadow: '0 1.5px 8px rgba(0,0,0,0.10)',
  heading: '#0D0D0D',
  subheading: '#0D0D0D'
};
// ---- END COLOR PALETTE ----

const styles = `
.newtwo-section {
  width: 100vw;
  background: ${COLORS.background};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.investors-heading {
  width: 1132px;
  max-width: 90vw;
  height: auto;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  text-align: center;
  color: ${COLORS.heading};
  margin-top: 60px;
  margin-bottom: 6px;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
}
.investors-subheading {
  width: 1115px;
  max-width: 90vw;
  height: auto;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: ${COLORS.subheading};
  margin-bottom: 4px;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
}
.newtwo-image-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  max-width: 1420px;
  margin: 44px auto 0 auto;
  padding-bottom: 46px;
}
.newtwo-image-box {
  width: calc(4 * 342px + 3 * 9px);
  height: calc(5 * 382px + 4 * 8px);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.newtwo-image-box img {
  width: 86%;
  height: auto;
  display: block;
  object-fit: contain;
}

/* Tablets */
@media (max-width: 992px) {
  .investors-heading {
    font-size: 36px;
    line-height: 50px;
    margin-top: 40px;
  }
  .investors-subheading {
    font-size: 20px;
    line-height: 32px;
  }
  .newtwo-image-box {
    width: 90vw !important;
    height: auto !important;
    border-radius: 12px !important;
  }
  .newtwo-image-box img {
    width: 90%;
    height: auto;
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .investors-heading {
    font-size: 28px;
    line-height: 42px;
    margin-top: 30px;
    margin-bottom: 4px;
    padding: 0 4vw;
  }
  .investors-subheading {
    font-size: 16px;
    line-height: 26px;
    padding: 0 4vw;
    margin-bottom: 10px;
  }
  .newtwo-image-box {
    width: 95vw !important;
    height: auto !important;
    min-height: 340px !important;
    max-height: 600px !important;
  }
  .newtwo-image-grid {
    flex-direction: column;
    padding-bottom: 30px !important;
  }
}

/* Small Mobile */
@media (max-width: 400px) {
  .investors-heading {
    font-size: 17px;
    line-height: 30px;
  }
  .investors-subheading {
    font-size: 12px;
    line-height: 22px;
  }
  .newtwo-image-box {
    width: 97vw !important;
    height: auto !important;
    border-radius: 8px !important;
  }
}
`;

const InvestorsGallerySection = () => {
  return (
    <div className="newtwo-section mb-20">
      <style>{styles}</style>
      <div className="investors-heading">
       Join the Growing Community of Global Investors Unlocking Tax-Free Wealth in Dubai!
      </div>
      <div className="investors-subheading">
Let me know where to send your copy of Dubai Rental Wealth Simplified Book and start building a portfolio that delivers tax-free income, higher returns, and long-term financial freedom today!      </div>
      {/* <div className="newtwo-image-grid">
        <div className="newtwo-image-box">
          <img loading="lazy"  src={testimonial} alt="Investors Gallery" />
        </div>
      </div> */}
    </div>
  );
};

export default InvestorsGallerySection;
