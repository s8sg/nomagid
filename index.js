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
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9706a6de3c412244383430df8e8c63eca70bab85?width=648"
          alt="Winter mountain landscape with explorer"
          class="hero-image"
        />
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
