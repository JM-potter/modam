export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#f9fcf8", textAlign: "center", padding: "3rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2e7d32", marginBottom: "1rem" }}>
        모담 - 과일 키트
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        당신을 위한 신선한 하루 한 상자 🍓
      </p>
      <img
        src="/images/hero-fruits.jpg"
        alt="과일 키트"
        style={{ maxWidth: "800px", width: "100%", borderRadius: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      />
    </div>
  );
}
