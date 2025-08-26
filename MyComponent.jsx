import { RawImg } from "./components";

export default function MyComponent(props) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          width: "324px",
          height: "699px",
          background: "linear-gradient(180deg,#8B7ED8 0%,#C9A9DD 100%)",
          borderRadius: "31px",
          border: "10px solid #FFF",
          boxShadow: "39.023px 39.023px 39.023px 15.609px rgba(0,0,0,0.08)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Inter',sans-serif",
          margin: "0 auto",
        }}
        className="winter-card"
      >
        <RawImg
          $name="hero-image"
          image="https://api.builder.io/api/v1/image/assets/TEMP/9706a6de3c412244383430df8e8c63eca70bab85?width=648"
          altText="Winter mountain landscape with explorer"
          css={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "21px",
          }}
          className="hero-image"
        />
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "280px",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
          className="info-card"
        >
          <div
            style={{
              position: "relative",
              height: "120px",
              overflow: "hidden",
            }}
            className="image-container"
          >
            <RawImg
              $name="bangkok-image"
              image="https://images.pexels.com/photos/11105012/pexels-photo-11105012.jpeg"
              altText="A scenic view of Wat Arun temple from a riverboat in Bangkok"
              css={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="bangkok-image"
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                height: "40px",
                background: "linear-gradient(transparent, white)",
                pointerEvents: "none",
              }}
              className="fade-overlay"
            />
          </div>
          <div
            style={{
              padding: "16px",
            }}
            className="card-content"
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#333333",
                lineHeight: "20px",
                textAlign: "center",
              }}
              className="card-description"
            >
              Welcome to Bangkok. Let's explore the city that never amaze to surprise with its magnificent temples, shopping mall and rooftop bars.
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "8px",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backgroundColor: "#4C3A8A",
            minHeight: "44px",
            touchAction: "manipulation",
          }}
          className="cta-button"
          onClick={() => {
            alert("Let's explore Bangkok adventures! 🏛️🇹🇭");
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#FFFFFF",
              lineHeight: "20px",
            }}
            className="button-text"
          >
            Let's Explore
          </div>
        </div>
      </div>
    </>
  );
}
