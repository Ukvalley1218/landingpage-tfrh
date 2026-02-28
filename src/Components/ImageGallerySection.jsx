import React from 'react'
import img2 from '../assets/group1786/2.webp'
import img3 from '../assets/group1786/3.png'
import img4 from '../assets/group1786/4.webp'
import img5 from '../assets/imgone.webp'
import img6 from '../assets/group1786/6.jpg'
import img7 from '../assets/group1786/1.webp'
import img8 from '../assets/imgthree.webp'
import imgA from '../assets/group1786/a.webp'
import imgD from '../assets/img (14).webp'
import imgF from '../assets/group1786/e.webp'
import imgH from '../assets/imgtwo.webp'
// import { redirectWithRef } from '../utils/redirectWithRef'


// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: 'rgba(85, 134, 176, 1)',
  goldDark: 'rgba(70, 110, 150, 1)',
  white: '#fff',
  blue: '#3B7CC9',
  borderBlue: '#406890',
  background: 'transparent'
};
// ---- END COLOR PALETTE ----


const row1 = [ img2, img3, img4, img5, img7, img8, img6]
const row2 = [imgA,    imgH, imgD, imgF]


const styles = `
.five-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding-top: 50px;
}
.five-row {
  width: 1440px;
  height: 215px;
  overflow: hidden;
  position: relative;
  margin-bottom: 32px;
  border-radius: 8px;
}
.five-scroller {
  display: flex;
  gap: 18px;
  align-items: center;
  height: 215px;
  animation-duration: 7s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}
.five-row.row1 .five-scroller {animation-name: scroll-ltr;}
.five-row.row2 .five-scroller {animation-name: scroll-rtl;}
@keyframes scroll-ltr {0% { transform: translateX(0);}100% { transform: translateX(-50%);}}
@keyframes scroll-rtl {0% { transform: translateX(-50%);}100% { transform: translateX(0);}}
.five-img {
  width: 322px;
  height: 215px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}


/* Button group - desktop: row, mobile: column */
.five-btn-group {
  display: flex;
  gap: 24px;
  margin-top: 36px;
  justify-content: center;
  align-items: center;
}
.five-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 19px;
  font-weight: 500;
  height: 55px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  padding: 19 25px;
  font-family: 'Inter', sans-serif;
  gap: 10px;
  width: 430px;
  max-width: 95vw;
  transition: background 0.2s;
  box-shadow: 0 2px 12px 0px rgba(80,110,150,0.07);
}
.five-btn-hardcopy {
  background: ${COLORS.blue};
  border: none;
  color: ${COLORS.white};
}

.five-btn-ebook {
  background: ${COLORS.white};
  border: 1.5px solid ${COLORS.borderBlue};
  color: ${COLORS.borderBlue};
}
.five-btn-ebook:hover {
  background: #f4f7fa;
}
.five-btn svg {
  width: 24px;
  height: 24px;
  margin-right: 11px;
  flex-shrink: 0;
  display: block;
}


/* Mobile Responsive Styles */
@media (max-width: 768px) {
  // .five-section {padding-top: 30px !important;}
  .five-row {width: 100vw !important;height: 120px !important;margin-bottom: 20px !important;border-radius: 6px !important;}
  .five-scroller {height: 120px !important;gap: 12px !important;animation-duration: 5s !important;}
  .five-img {width: 180px !important;height: 120px !important;border-radius: 6px !important;}
  .five-btn-group {
    flex-direction: column !important;
    gap: 13px !important;
    margin-top: 22px !important;
    width: 100%;
  }
  .five-btn {
    font-size: 17px !important;
    height: 48px !important;
    width: 82vw !important;
    max-width: 400px !important;
    padding: 20 12px !important;
    gap: 7px !important;
  }
  .five-btn svg {
    width: 19px !important;
    height: 19px !important;
    margin-right: 7px !important;
  }
}


/* Extra small devices */
@media (max-width: 380px) {
  .five-row {height: 100px !important;margin-bottom: 15px !important;}
  .five-scroller {height: 100px !important;gap: 10px !important;}
  .five-img {width: 150px !important;height: 100px !important;}
  .five-btn {
    height: 44px !important;
    font-size: 15px !important;
    width: 95vw !important;
    max-width: 300px !important;
    padding: 0 4px !important;
  }
  .five-btn-group {gap: 10px !important;margin-top: 12px !important;}
}


/* Desktop styles remain unchanged */
@media (min-width: 769px) {
  // .five-section {padding-top: 50px !important;}
  .five-row {width: 1440px !important;height: 215px !important;margin-bottom: 32px !important;border-radius: 8px !important;}
  .five-scroller {height: 215px !important;gap: 18px !important;animation-duration: 7s !important;}
  .five-img {width: 322px !important;height: 215px !important;border-radius: 8px !important;}
  .five-btn-group {gap: 24px !important;margin-top: 36px !important;}
  .five-btn {font-size: 19px !important;height: 55px !important;width: 377px !important;max-width: 430px !important;padding: 19 25px !important;}
  .five-btn svg {width: 24px !important;height: 24px !important;margin-right: 11px !important;}
}
`;


const ImageGallerySection = () => {
  const renderImages = (images) => (
    [...images, ...images, ...images, ...images].map((img, i) => (
      <img loading="lazy"  src={img} alt="" key={i} className="five-img" draggable={false} />
    ))
  );

    const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div className="five-section">
      <style>{styles}</style>
      <div className="five-row row1">
        <div className="five-scroller">
          {renderImages(row1)}
        </div>
      </div>
      <div className="five-row row2">
        <div className="five-scroller">
          {renderImages(row2)}
        </div>
      </div>
      <div className="five-btn-group">
        {/* Hard Copy Button */}
  <button
  onClick={() =>  (window.location.href = `/books/tfrh/checkout?type=hardcopy&reference=${ref}`)}
  className="five-btn five-btn-hardcopy"
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
        {/* Digital E-Book Button */}
        <button
          onClick={() =>  (window.location.href = `/books/tfrh/checkout?type=ebook&reference=${ref}`)}
          className="five-btn five-btn-ebook"
           onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('box-shadow', '0 8px 20px rgba(59, 124, 201, 0.4)', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(-2px)', 'important');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('box-shadow', 'none', 'important');
              e.currentTarget.style.setProperty('transform', 'translateY(0)', 'important');
            }}
        >
          <span>⬇️</span>


          Order Your Digital E-Book Today
        </button>
      </div>
    </div>
  );
};


export default ImageGallerySection