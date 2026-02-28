import React, { useState } from 'react';
// import { redirectWithRef } from '../utils/redirectWithRef';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: 'rgb(85, 134, 176)',
  goldDark: 'rgb(70, 110, 150)',
  goldLight: 'rgb(105, 154, 196)',
  goldBorder: 'rgba(85, 134, 176, 0.5)',
  white: '#fff',
  textDark: '#232323',
  background: '#c5dae6',
  cardShadow: '0 2.5px 10px rgba(85, 134, 176, 0.07)',
  cardShadowHover: '0 7px 27px rgba(85, 134, 176, 0.17)',
  buttonShadow: '0 2.5px 14px rgba(85, 134, 176, 0.18)'
};
// ---- END COLOR PALETTE ----

const faqs = [
  {
    q: "Who should read this book?",
    a: "Anyone interested in building wealth through rental real estate in Dubai will benefit. It is ideal for investors, professionals, and NRIs seeking tax-free passive income or exploring Dubai's property market for the first time."
  },
  {
    q: "Do I need prior knowledge of real estate to understand the book?",
    a: "No prior experience is required. The book is written in simple language with step-by-step explanations and real-life examples, making it easy for beginners to start their Dubai real estate journey."
  },
  {
    q: "How is this book different from other real estate guides?",
    a: "It focuses exclusively on Dubai's unique rental market, simplifying concepts specific to the UAE and providing actionable insights—including regulations, rental yield optimisation, real case studies, and stepwise processes tailored for Dubai."
  },
  {
    q: "Will this book help me if I'm not living in Dubai?",
    a: "Absolutely, The book addresses how overseas investors—including NRIs—can remotely invest, manage rentals, and leverage Dubai's investor-friendly policies from anywhere in the world."
  },
  {
    q: "Can this book help me build a career in real estate?",
    a: "Yes, It covers not just rental investing but also career-building tips for aspiring agents, brokers, and those wanting to work in Dubai's real estate sector, including licensing and market strategies."
  },
  {
    q: "What format is the book available in?",
    a: "The book is available in both paperback and convenient digital (eBook) formats, so you can read it as you prefer."
  },
  {
    q: "Why should I trust this author?",
    a: "The author is a seasoned Dubai real estate expert, featured in major media and trusted by hundreds of successful clients and readers. Practical tips come from real experience, not just theory."
  }
];

const styles = `
.faq-section-bg {
  background: #F5F9FE;
  width: 100vw;
  // min-height: 100vh;
  padding-top: 32px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top:25px;
}
.faq-title {
  font-family: 'Georgia', 'serif';
  font-weight: bold;
  font-size: 53px;
  line-height: 1.11;
  color:#2e75c9;
  margin-top: 18px;
  margin-bottom: 54px;
  text-align: center;
  letter-spacing: -2px;
}
.faq-card-container {
  width: 100%;
  max-width: 1280px;
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin: 0 auto;
}
.faq-card {
  background: ${COLORS.white};
  border-radius: 14px;
  border: 2.5px solid ${COLORS.goldBorder};
  min-height: 80px;
  display: flex;
  flex-direction: column;
  box-shadow: ${COLORS.cardShadow};
  transition: box-shadow 0.13s;
  overflow: hidden;
}
.faq-card:hover {
  box-shadow: ${COLORS.cardShadowHover};
}
.faq-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  padding: 0 48px 0 42px;
  font-family: 'Inter', sans-serif;
  font-size: 23px;
  font-weight: 500;
  color: ${COLORS.textDark};
  min-height: 74px;
}
.faq-order-btn-block {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 44px 0 0 0;
  padding-bottom: 40px;
  gap: 18px; 
}
.faq-order-btn {
  font-family: 'Inter', sans-serif;
  font-size: 19px;
  font-weight: 500;
  border-radius: 8px;
  padding: 0 32px;
  height: 56px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  outline: none;
  box-shadow: 0 3px 8px rgba(29,26,11,0.13);
}
.faq-order-btn.filled {
  background:#3B7CC9;
  color: ${COLORS.white};
  border: none;
}

.faq-order-btn.outlined {
  background: ${COLORS.white};
  color: #406890;
  border: 1.5px solid #406890;
}

.faq-order-btn-book {
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
}
.faq-card .plus, .faq-card .close-x {
  color: ${COLORS.goldLight};
  font-size: 39px;
  font-weight: bold;
  margin-left: 38px;
  user-select: none;
  flex-shrink: 0;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
}
.faq-card .plus {
  transform: rotate(0deg);
}
.faq-card .close-x {
  transform: rotate(45deg);
}
.faq-card.open .faq-card-header {
  border-bottom: none;
}
.faq-answer-block {
  background: ${COLORS.white};
  border-top: 1.5px solid ${COLORS.goldBorder};
  border-radius: 0 0 14px 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: fadeInFaq 0.3s;
  padding: 18px 75px 32px 42px;
}
@keyframes fadeInFaq {
  from { opacity: 0; transform: translateY(-6px);}
  to { opacity: 1; transform: translateY(0);}
}
.faq-answer-content {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  color: ${COLORS.textDark};
  text-align: left;
  width: 100%;
  line-height: 1.53;

}
.faq-card.open {
  box-shadow: ${COLORS.cardShadowHover};
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .faq-section-bg {
    min-height: auto !important;
    padding-top: 25px !important;
    padding-bottom: 30px !important;
    margin-top: 20px !important;
  }
  .faq-title {
    font-size: 2rem !important;
    margin-top: 10px !important;
    margin-bottom: 30px !important;
    letter-spacing: 1px !important;
    padding: 0 15px !important;
    line-height: 1.2 !important;
  }
  .faq-card-container {
    gap: 16px !important;
    padding: 0 15px !important;
    width: 95vw !important;
  }
  .faq-card-header {
    font-size: 15px !important;
    min-height: 60px !important;
    padding: 0 20px 0 20px !important;
    border-radius: 10px !important;
  }
  .faq-card {
    min-height: 60px !important;
    border-width: 2px !important;
    border-radius: 10px !important;
  }
  .faq-card .plus, .faq-card .close-x {
    font-size: 28px !important;
    margin-left: 15px !important;
  }
  .faq-answer-block {
    border-radius: 0 0 10px 10px !important;
    padding: 13px 16px 20px 16px !important;
  }
  .faq-answer-content {
    font-size: 15px !important;
  }
  .faq-order-btn-block {
    flex-direction: column !important;
    width: 100% !important;
    padding: 0 16px !important;
    margin: 28px auto !important;
    gap: 14px !important;
    align-items: center !important;
  }

  .faq-order-btn {
    width: 100% !important;
    max-width: 330px !important;
    font-size: 17px !important;
    padding: 14px 12px !important;
    border-radius: 8px !important;
    height: auto !important;
    text-align: center !important;
    box-sizing: border-box !important;
  }

  .faq-order-btn-book {
    margin-right: 8px !important;
  }
}
`;


const FAQSection = () => {
          const ref = sessionStorage.getItem("reference") || "direct";

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <div id='faqs' className="faq-section-bg">
        <style>{styles}</style>
        <div className="faq-title">Frequently Asked&nbsp;&nbsp;Questions</div>
        <div className="faq-card-container">
          {faqs.map((item, idx) => (
            <div className={`faq-card${openIndex === idx ? ' open' : ''}`} key={idx}>
              <div
                className="faq-card-header"
                onClick={() => handleToggle(idx)}
                tabIndex={0}
                role="button"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                onKeyPress={e => {
                  if (e.key === 'Enter' || e.key === ' ') handleToggle(idx);
                }}
              >
                <span>{item.q}</span>
              <span className={openIndex === idx ? "plus" : "plus"}>
  {openIndex === idx ? "−" : "+"}
</span>

              </div>
              {openIndex === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="faq-answer-block"
                  aria-live="polite"
                >
                  <div className="faq-answer-content ">{item.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-order-btn-block">
        <button
onClick={() =>
              (window.location.href = `/books/tfrh/checkout?type=hardcopy&reference=${ref}`)
            }          className="faq-order-btn filled"
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
          <span className="faq-order-btn-book" role="img" aria-label="book">📙</span>
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
    </>
  );
};

export default FAQSection;