function FeatureCard({ title, description }) {
  return (
    <div
      className="fade-in"
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)"
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;