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
      </div>
    </>
  );
}
