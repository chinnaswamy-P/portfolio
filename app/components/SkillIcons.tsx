const tools = [
  { name: "Python", badge: "Python-3776AB", logo: "python", ink: "white" },
  { name: "PyTorch", badge: "PyTorch-EE4C2C", logo: "pytorch", ink: "white" },
  { name: "Hugging Face", badge: "Hugging%20Face-FFD21E", logo: "huggingface", ink: "black" },
  { name: "FastAPI", badge: "FastAPI-009688", logo: "fastapi", ink: "white" },
  { name: "Docker", badge: "Docker-2496ED", logo: "docker", ink: "white" },
  { name: "PostgreSQL", badge: "PostgreSQL-4169E1", logo: "postgresql", ink: "white" },
  { name: "OpenSearch", badge: "OpenSearch-005EB8", logo: "opensearch", ink: "white" },
];

export default function SkillIcons() {
  return (
    <div className="badge-row" aria-label="Key technologies">
      {tools.map(({ name, badge, logo, ink }) => (
        <img
          key={name}
          src={`https://img.shields.io/badge/${badge}?style=for-the-badge&logo=${logo}&logoColor=${ink}`}
          alt={name}
          height="28"
          loading="lazy"
        />
      ))}
    </div>
  );
}
