import Image from "next/image";
import ContactForm from "./components/ContactForm";
import SiteNav from "./components/SiteNav";
import SkillIcons from "./components/SkillIcons";
import Reveal from "./components/Reveal";
import SignalNetwork from "./components/SignalNetwork";

const experience = [
  { company: "Volkswagen AG", role: "Master Thesis Researcher", period: "Feb–Aug 2026", description: "Developed a compact multimodal GUI agent for automotive infotainment. Curated a leakage-safe dataset of 248 task trajectories and 1,026 UI steps. LoRA fine-tuning raised held-out action accuracy from 38.3% to 73.9%; GRPO refinement reached 80.0% action accuracy.", tags: ["Qwen3-VL", "LoRA", "GRPO", "PyTorch"] },
  { company: "Volkswagen AG", role: "Applied AI Engineer Intern", period: "Sep 2025–Feb 2026", description: "Built a seven-agent system and custom MCP servers for automotive personalization workflows. Reduced latency by 20% and reached 90% accuracy in personalized theme generation through human evaluation and LLM-as-a-judge validation.", tags: ["LangGraph", "MCP", "FastAPI", "Redis"] },
  { company: "IPEK, KIT", role: "AI Research Assistant", period: "Feb–Jul 2025", description: "Developed conversational AI and RAG workflows for generating logical, abstract, and concrete autonomous-driving scenarios for simulation.", tags: ["LLMs", "RAG", "LangChain"] },
  { company: "IPEM, Universität Siegen", role: "AI Research Assistant", period: "Aug 2024–Sep 2025", description: "Developed reinforcement-learning and digital-twin pipelines for industrial manufacturing process control and analysis.", tags: ["RL", "Unity", "MQTT"] },
];

const projects = [
  { number: "01", title: "Automotive GUI Agent", description: "A compact vision-language agent that understands infotainment interfaces and predicts structured actions. Evaluated across six interaction classes, with 80.0% action accuracy after reward-guided refinement.", tags: ["Vision-language models", "UI grounding", "GRPO"] },
  { number: "02", title: "Enterprise Financial Analyst Agent", description: "An agentic RAG system for multilingual financial reports, combining query planning, ticker-filtered hybrid search, document parsing, context validation, and observability.", tags: ["Agentic RAG", "OpenSearch", "PostgreSQL"] },
  {
  number: "03",
  title: "Multi-Agent Automotive Personalization",
  description:
    "Built a seven-agent system and custom MCP servers for multi-turn automotive personalization workflows. Integrated FastAPI services, user feedback, and evaluation; reduced latency by 20% and achieved 90% accuracy in personalized theme generation.",
  tags: ["LangGraph", "MCP", "FastAPI", "Langfuse", "Redis", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      <main id="main">
        <section className="hero shell" id="top" aria-labelledby="hero-title">
          <SignalNetwork />
          <div className="hero-copy hero-foreground">
            <p className="eyebrow"><span className="status-dot" /> Open to full-time AI engineering opportunities</p>
            <h1 id="hero-title">Hi, I&apos;m <span>Chinnaswamy Purra.</span></h1>
            <p className="hero-role">Applied AI Engineer <span aria-hidden="true">/</span> Multimodal AI & Agentic Systems</p>
            <p className="lead">I turn advances in AI into practical, well-engineered systems. My work spans machine learning, intelligent agents, and software development, with a focus on building solutions that are reliable, measurable, and useful beyond a demo.</p>
            <div className="actions">
              <a className="button button-primary" href="#projects">View my work <span aria-hidden="true">↗</span></a>
              <a className="button button-outline" href="/CV_Chinnaswamy_P_STD4_EN_pic_28sept.pdf" target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-visual hero-foreground"><div className="portrait-frame"><Image src="/profile.png" alt="Portrait of Chinnaswamy Purra" width={520} height={600} priority className="portrait" /></div><div
  className="signal-flow"
  aria-label="Approach: explore, engineer, evaluate"
>
  <span>EXPLORE</span>
  <span aria-hidden="true">→</span>
  <span>ENGINEER</span>
  <span aria-hidden="true">→</span>
  <span>EVALUATE</span>
</div></div>
        </section>

        <section className="section shell" id="about" aria-labelledby="about-title"><Reveal><p className="section-index">01 / ABOUT</p><h2 id="about-title">Engineering AI for the real world.</h2><div className="intro-grid"><p>I’m an applied AI engineer with an M.Sc. in Mechatronics and experience across industry and academic research. I work at the intersection of machine learning and software engineering, developing AI systems from early experimentation through evaluation and implementation.</p><p>My background helps me approach AI as part of a larger system—not just a model in isolation. I care about clear problem definition, rigorous testing, efficient use of resources, and dependable behaviour when real-world conditions are less predictable than a benchmark.</p></div></Reveal></section>

        <section className="section shell" id="experience" aria-labelledby="experience-title"><Reveal><p className="section-index">02 / EXPERIENCE</p><h2 id="experience-title">Where I&apos;ve worked.</h2></Reveal><div className="experience-list">{experience.map((item) => <Reveal key={`${item.company}-${item.role}`}><article className="experience-item"><div className="experience-meta"><span>{item.period}</span><span>{item.company}</span></div><div><h3>{item.role}</h3><p>{item.description}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article></Reveal>)}</div></section>

        <section className="section shell" id="projects" aria-labelledby="projects-title"><Reveal><p className="section-index">03 / SELECTED WORK</p><h2 id="projects-title">Projects with a purpose.</h2></Reveal><div className="project-grid">{projects.map((project) => <Reveal key={project.number}><article className="project-card"><span className="project-number">PROJECT / {project.number}</span><div className="project-orbit" aria-hidden="true"><span /><span /><span /></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article></Reveal>)}</div><p className="section-note">Research details may be limited by project confidentiality. Public case studies can be added when available.</p></section>

        <section
  className="section shell"
  id="skills"
  aria-labelledby="skills-title"
>
  <Reveal>
    <p className="section-index">04 / EXPERTISE</p>
    <h2 id="skills-title">Skills across the AI lifecycle.</h2>
    <p className="skills-intro">
      From preparing data and adapting models to evaluating results and
      building the systems that make AI usable.
    </p>

    <div className="skill-grid">
      <div>
        <h3>Machine learning & multimodal AI</h3>
        <p>
          Vision-language models · Computer vision · GUI agents · UI grounding
          · PyTorch · Hugging Face Transformers · Scikit-learn
        </p>
      </div>

      <div>
        <h3>Model adaptation & reinforcement learning</h3>
        <p>
          Supervised fine-tuning · LoRA/PEFT · GRPO · Reward design ·
          Quantization · Stable-Baselines3 · Optuna
        </p>
      </div>

      <div>
        <h3>Agentic AI & retrieval</h3>
        <p>
          LangGraph · LangChain · MCP · Tool orchestration · Multi-agent
          workflows · RAG · Hybrid search · Vector databases
        </p>
      </div>

      <div>
        <h3>Evaluation & observability</h3>
        <p>
          Experiment design · Model evaluation · Human evaluation ·
          LLM-as-a-judge · RAGAS · Langfuse · MLflow · Grafana
        </p>
      </div>

      <div>
        <h3>Software & data engineering</h3>
        <p>
          Python · SQL · FastAPI · REST APIs · Asyncio · PostgreSQL ·
          OpenSearch · Redis · Docker
        </p>
      </div>

      <div>
        <h3>Deployment & workflows</h3>
        <p>
          Git · CI/CD · AWS · Azure · HPC training · Distributed training
          (DDP) · Streamlit · Chainlit
        </p>
      </div>
    </div>

    <SkillIcons />
  </Reveal>
</section>
        <section className="section shell contact" id="contact" aria-labelledby="contact-title"><Reveal><p className="section-index">05 / CONTACT</p><h2 id="contact-title">Let&apos;s build reliable AI.</h2><p>I&apos;m interested in full-time applied AI, multimodal ML, and AI research engineering roles. Let&apos;s connect.</p><div className="contact-layout"><div className="contact-links"><a className="social-link" href="mailto:chinnaswamy.cspurra@gmail.com" aria-label="Email Chinnaswamy"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a><a className="social-link" href="https://github.com/chinnaswamy-P" target="_blank" rel="noopener noreferrer" aria-label="Chinnaswamy's GitHub"><img src="https://img.shields.io/badge/GitHub-24292F?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a><a
  className="social-link"
  href="https://www.linkedin.com/in/chinnaswamy-purra/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chinnaswamy Purra on LinkedIn"
>
  <img
    src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
    alt="LinkedIn"
  />
</a><p className="contact-email">chinnaswamy.cspurra@gmail.com<br />Wolfsburg, Germany</p></div><ContactForm /></div></Reveal></section>
      </main>
      <footer className="footer shell"><span>© {new Date().getFullYear()} Chinnaswamy Purra</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
