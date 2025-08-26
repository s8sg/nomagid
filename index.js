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
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 16px;
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
          margin: 0 auto;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 21px;
        }
        .info-card {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          background-color: #FFFFFF;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .image-container {
          position: relative;
          height: 120px;
          overflow: hidden;
        }
        .bangkok-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .fade-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(transparent, white);
          pointer-events: none;
        }
        .card-content {
          padding: 16px;
        }
        .card-description {
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          line-height: 20px;
          text-align: center;
        }
        .cta-button {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 8px;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background-color: #4C3A8A;
          min-height: 44px;
          touch-action: manipulation;
        }
        .button-text {
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 20px;
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          body {
            padding: 20px;
          }
          .winter-card {
            width: 100%;
            max-width: 400px;
            height: auto;
            min-height: 700px;
          }
        }

        /* Small tablet styles */
        @media (max-width: 768px) {
          body {
            padding: 16px;
          }
          .winter-card {
            max-width: 100%;
            min-height: 600px;
            border-radius: 24px;
            border: 8px solid #FFF;
            box-shadow: 20px 20px 40px 10px rgba(0,0,0,0.08);
          }
          .hero-image {
            border-radius: 16px;
          }
          .info-card {
            width: 260px;
            bottom: 90px;
          }
          .image-container {
            height: 110px;
          }
          .card-description {
            font-size: 13px;
            line-height: 18px;
          }
          .cta-button {
            padding: 14px 28px;
            min-height: 48px;
          }
          .button-text {
            font-size: 17px;
          }
        }

        /* Mobile landscape */
        @media (max-width: 640px) and (orientation: landscape) {
          .winter-card {
            max-width: 90%;
            min-height: 500px;
          }
        }

        /* Mobile portrait */
        @media (max-width: 640px) {
          body {
            padding: 12px;
            align-items: flex-start;
            padding-top: 20px;
          }
          .winter-card {
            width: 100%;
            max-width: 100%;
            min-height: 80vh;
            border-radius: 20px;
            border: 6px solid #FFF;
            box-shadow: 15px 15px 30px 8px rgba(0,0,0,0.08);
          }
          .hero-image {
            border-radius: 14px;
          }
          .info-card {
            width: 240px;
            bottom: 80px;
          }
          .image-container {
            height: 100px;
          }
          .card-content {
            padding: 14px;
          }
          .card-description {
            font-size: 12px;
            line-height: 17px;
          }
          .cta-button {
            padding: 12px 24px;
            min-height: 44px;
          }
          .button-text {
            font-size: 16px;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          body {
            padding: 8px;
            padding-top: 16px;
          }
          .winter-card {
            border: 4px solid #FFF;
            border-radius: 16px;
            min-height: 85vh;
          }
          .hero-image {
            border-radius: 12px;
          }
          .info-card {
            width: 220px;
            bottom: 70px;
          }
          .image-container {
            height: 90px;
          }
          .card-content {
            padding: 12px;
          }
          .card-description {
            font-size: 11px;
            line-height: 16px;
          }
          .cta-button {
            padding: 10px 20px;
            min-height: 40px;
          }
          .button-text {
            font-size: 15px;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          .winter-card {
            min-height: 90vh;
          }
          .hero-image {
            border-radius: 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="winter-card">
        <div class="info-card">
          <div class="image-container">
            <img
              src="https://images.pexels.com/photos/11105012/pexels-photo-11105012.jpeg"
              alt="A scenic view of Wat Arun temple from a riverboat in Bangkok"
              class="bangkok-image"
            />
            <div class="fade-overlay"></div>
          </div>
          <div class="card-content">
            <div class="card-description">
              Welcome to Bangkok. Let's explore the city that never amaze to surprise with its magnificent temples, shopping mall and rooftop bars.
            </div>
          </div>
        </div>
        <div class="cta-button" onclick="alert('Let\\'s explore Bangkok adventures! 🏛️🇹🇭')">
          <div class="button-text">
            Let's Explore
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
