console.log('Hello World! App is running...');

// Basic HTTP server serving React component
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Winter Vacation App</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #f5f5f5;
          font-family: 'Inter', sans-serif;
        }
        .winter-card {
          width: 324px;
          height: 699px;
          background: linear-gradient(180deg,#8B7ED8 0%,#C9A9DD 100%);
          border-radius: 31px;
          border: 10px solid #FFF;
          box-shadow: 39.023px 39.023px 39.023px 15.609px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          font-family: 'Inter',sans-serif;
        }
        .hero-image {
          width: 100%;
          height: 693px;
          object-fit: cover;
        }
        .content-container {
          padding: 40px 32px 48px 32px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .title {
          font-size: 48px;
          font-weight: 600;
          line-height: 56px;
          color: #FFFFFF;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .description {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          color: #FFFFFF;
          opacity: 0.9;
          margin-bottom: 40px;
        }
        .cta-button {
          border-radius: 25px;
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          background-color: #4C3A8A;
        }
        .button-text {
          font-size: 18px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 24px;
        }
        .arrow-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .winter-card {
            width: 100%;
            max-width: 400px;
            height: auto;
            min-height: 699px;
            margin: 0 auto;
          }
          .hero-image {
            height: 450px;
          }
          .content-container {
            padding: 48px 40px 56px 40px;
          }
          .title {
            font-size: 52px;
            line-height: 60px;
          }
          .description {
            font-size: 17px;
            line-height: 26px;
          }
          .cta-button {
            padding: 18px 36px;
          }
          .button-text {
            font-size: 19px;
          }
        }
        @media (max-width: 640px) {
          .winter-card {
            width: 100%;
            max-width: 324px;
            margin: 0 auto;
          }
          .content-container {
            padding: 32px 24px 40px 24px;
          }
          .title {
            font-size: 40px;
            line-height: 48px;
          }
          .description {
            font-size: 15px;
            line-height: 22px;
          }
          .cta-button {
            padding: 14px 28px;
          }
          .button-text {
            font-size: 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="winter-card">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/9706a6de3c412244383430df8e8c63eca70bab85?width=648"
          alt="Winter mountain landscape with explorer"
          class="hero-image"
        />
        <div class="content-container">
          <div class="title">
            Winter<br>
            Vacation Trips
          </div>
          <div class="description">
            Enjoy your winter vacations with warmth and amazing sightseeing on
            the mountains. Enjoy the best experience with us!
          </div>
          <div class="cta-button">
            <div class="button-text">
              Let's Go!
            </div>
            <div class="arrow-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
