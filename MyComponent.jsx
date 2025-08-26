import { RawImg } from "./components";

export default function MyComponent(props) {
  return (
    <>
      <div
        style={{
          pointerEvents: "auto",
          color: "rgb(0, 0, 0)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          font: "400 16px Times ",
        }}
      />
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
        }}
        className="winter-card"
      >
        <RawImg
          $name="hero-image"
          image="https://api.builder.io/api/v1/image/assets/TEMP/9706a6de3c412244383430df8e8c63eca70bab85?width=648"
          altText="Winter mountain landscape with explorer"
          css={{
            width: "100%",
            height: "693px",
            objectFit: "cover",
          }}
          className="hero-image"
        />
        <div
          style={{
            padding: "40px 32px 48px 32px",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="content-container"
        >
          <div
            style={{
              fontSize: "48px",
              fontWeight: "600",
              lineHeight: "56px",
              color: "#FFFFFF",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
            className="title"
          >
            Winter
            <br />
            Vacation Trips
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#FFFFFF",
              opacity: "0.9",
              marginBottom: "40px",
            }}
            className="description"
          >
            Enjoy your winter vacations with warmth and amazing sightseeing on
            the mountains. Enjoy the best experience with us!
          </div>
          <div
            style={{
              borderRadius: "25px",
              padding: "16px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              backgroundColor: "#4C3A8A",
            }}
            className="cta-button"
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#FFFFFF",
                lineHeight: "24px",
              }}
              className="button-text"
            >
              Let's Go!
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="arrow-icon"
            >
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
