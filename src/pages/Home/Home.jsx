import FeatureCard from "../../components/FeatureCard/FeatureCard";

function Home() {
  return (
    <>
      <section style={{ textAlign: "center" }}>
        <div className="container fade-in">
          <h2 style={{ fontSize: "42px" }}>
            We Build High-Performance Digital Solutions
          </h2>
          <p>Modern websites designed for growth and scalability.</p>
        </div>
      </section>

      <section>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}
        >
          <FeatureCard
            title="Responsive Design"
            description="Optimized for all devices."
          />
          <FeatureCard
            title="Fast Performance"
            description="Optimized bundle size and lazy loading."
          />
          <FeatureCard
            title="SEO Friendly"
            description="Semantic structure and accessibility compliant."
          />
        </div>
      </section>
    </>
  );
}

export default Home;