import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const [universeActive, setUniverseActive] = useState(false);
  const [activePane, setActivePane] = useState(null); // 'video' | 'canva' | null

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  const launchUniverse = () => {
    setUniverseActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeUniverse = () => {
    resetPanes();
    setUniverseActive(false);
    document.body.style.overflow = 'auto';
  };

  const maximizePane = (pane) => {
    if (activePane) return;
    setActivePane(pane);
  };

  const resetPanes = (e) => {
    if (e) e.stopPropagation();
    setActivePane(null);
  };

  return (
    <>
      <div id="bg-canvas"></div>

      {/* Freelance Universe Overlay */}
      <div id="freelance-overlay" className={universeActive ? 'active' : ''} style={{ display: universeActive ? 'flex' : 'none' }}>
        <button className="close-universe" onClick={closeUniverse}><i className="bi bi-x-lg"></i></button>
        
        <div 
          className={`split-pane pane-video ${activePane === 'video' ? 'maximized' : activePane === 'canva' ? 'minimized' : ''}`} 
          onClick={() => maximizePane('video')}
        >
          <div className="back-arrow" style={{ display: activePane === 'video' ? 'flex' : 'none' }} onClick={resetPanes}><i className="bi bi-arrow-left"></i></div>
          <div className="pane-content">
            <i className="bi bi-film fs-1 accent mb-3 d-block"></i>
            <h2 className="text-white">Tamil Video Editing</h2>
            <p>Cinematic storytelling and high-impact visual narratives tailored for the Tamil audience.</p>
            <div className="pane-list mb-4">
              <span className="pane-tag">Short Films</span>
              <span className="pane-tag">Photography</span>
              <span className="pane-tag">Reel Trends</span>
            </div>
            <a href="mailto:michellesusan704@gmail.com?subject=Video%20Editing%20Project" className="btn-mail" style={{ display: activePane === 'video' ? 'inline-block' : 'none' }}>Get Started <i className="bi bi-envelope-fill ms-2"></i></a>
          </div>
        </div>

        <div 
          className={`split-pane pane-canva ${activePane === 'canva' ? 'maximized' : activePane === 'video' ? 'minimized' : ''}`} 
          onClick={() => maximizePane('canva')}
        >
          <div className="back-arrow" style={{ display: activePane === 'canva' ? 'flex' : 'none' }} onClick={resetPanes}><i className="bi bi-arrow-left"></i></div>
          <div className="pane-content">
            <i className="bi bi-palette fs-1 accent mb-3 d-block"></i>
            <h2 className="text-white">Canva Brand Design</h2>
            <p>Modern visual identity crafting, from professional logos to engaging social media presence.</p>
            <div className="pane-list mb-4">
              <span className="pane-tag">Logos</span>
              <span className="pane-tag">Figma Basics</span>
              <span className="pane-tag">Pitch Decks</span>
            </div>
            <a href="mailto:michellesusan704@gmail.com?subject=Brand%20Design%20Project" className="btn-mail" style={{ display: activePane === 'canva' ? 'inline-block' : 'none' }}>Get Started <i className="bi bi-envelope-fill ms-2"></i></a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10 reveal">
              <h1 className="display-1 fw-bold mb-4">
                Michelle Susan
                <br />
                <span className="text-gradient">Ezhilarasi</span>
              </h1>
              <p className="mb-5 lead hero-para">
                Computer Science student with a creative edge. I combine my B.E. technical
                foundation with a deep interest in UI/UX design to build digital experiences that
                actually feel good to use. Focused on creating high-impact projects that balance
                technical performance with aesthetic detail.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <button className="btn-primary-custom shadow-lg" onClick={launchUniverse}>
                  Open Freelance Studio <i className="bi bi-stars"></i>
                </button>

                <button
                  className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#connectModal"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 reveal">
              <h2 className="display-5 fw-bold mb-2 text-center">
                My <span className="accent">Toolkit</span>
              </h2>
              <p className="text-center text-muted mb-5" style={{ fontSize: '1.1rem' }}>
                Tools that I'm adaptive to...
              </p>
              <div className="row g-4">
                {/* Programming Languages */}
                <div className="col-md-6">
                  <div className="p-card">
                    <h5 className="mb-4 text-white">
                      <i className="bi bi-code-slash accent me-2"></i>Programming Languages
                    </h5>
                    <div className="skills-tags">
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">Java</span>
                      <span className="skill-tag">SQL</span>
                      <span className="skill-tag">C++</span>
                    </div>
                  </div>
                </div>

                {/* Data & Databases */}
                <div className="col-md-6">
                  <div className="p-card">
                    <h5 className="mb-4 text-white">
                      <i className="bi bi-database accent me-2"></i>Data & Databases
                    </h5>
                    <div className="skills-tags">
                      <span className="skill-tag">Neo4j</span>
                      <span className="skill-tag">MongoDB</span>
                      <span className="skill-tag">Apache Spark</span>
                      <span className="skill-tag">Hadoop</span>
                      <span className="skill-tag">Hive</span>
                      <span className="skill-tag">MySQL</span>
                    </div>
                  </div>
                </div>

                {/* Design & Creative */}
                <div className="col-md-6">
                  <div className="p-card">
                    <h5 className="mb-4 text-white">
                      <i className="bi bi-palette accent me-2"></i>Design & Creative
                    </h5>
                    <div className="skills-tags">
                      <span className="skill-tag">UI/UX Design</span>
                      <span className="skill-tag">Figma</span>
                      <span className="skill-tag">Canva</span>
                      <span className="skill-tag">Video Editing</span>
                      <span className="skill-tag">Graphic Design</span>
                    </div>
                  </div>
                </div>

                {/* Development Tools */}
                <div className="col-md-6">
                  <div className="p-card">
                    <h5 className="mb-4 text-white">
                      <i className="bi bi-tools accent me-2"></i>Development Tools
                    </h5>
                    <div className="skills-tags">
                      <span className="skill-tag">Git & GitHub</span>
                      <span className="skill-tag">VS Code</span>
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">Express</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 reveal">
              <h2 className="display-5 fw-bold mb-5 text-center">
                Professional <span className="accent">Credentials</span>
              </h2>
              <div className="row g-4">
                {/* Column 1: Data & Engineering */}
                <div className="col-lg-4">
                  <div className="p-card">
                    <h5 className="mb-4 text-white">
                      <i className="bi bi-database-fill-check accent me-2"></i>Data & Engineering
                    </h5>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Neo4j Certified Professional</h6>
                      <p className="small text-muted mb-0">Graph Database Specialist (2025)</p>
                    </div>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Graph Data Science</h6>
                      <p className="small text-muted mb-0">Neo4j Certification (2025)</p>
                    </div>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Apache Spark (PySpark)</h6>
                      <p className="small text-muted mb-0">Databricks Academy (2025)</p>
                    </div>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Hadoop 101 & Hive</h6>
                      <p className="small text-muted mb-0">Cognitive Class / IBM (2025)</p>
                    </div>
                  </div>
                </div>

                {/* Column 2: Design & Creative */}
                <div className="col-lg-4">
                  <div className="p-card">
                    <h5 className="mb-4 text-white">
                      <i className="bi bi-palette-fill accent me-2"></i>Design & Creative
                    </h5>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">UI/UX Design for Beginners</h6>
                      <p className="small text-muted mb-0">Great Learning Academy</p>
                    </div>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Modern Graphic Design</h6>
                      <p className="small text-muted mb-0">Introduction to Canva (Alison)</p>
                    </div>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Critical Thinking in AI Era</h6>
                      <p className="small text-muted mb-0">HP LIFE Certification (2026)</p>
                    </div>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Immersive Technology</h6>
                      <p className="small text-muted mb-0">Workshop by Monolith Labs (2024)</p>
                    </div>
                  </div>
                </div>

                {/* Column 3: Impact & Academic */}
                <div className="col-lg-4">
                  <div className="p-card">
                    <h5 className="mb-4 text-white">
                      <i className="bi bi-lightning-charge-fill accent me-2"></i>Impact & Academic
                    </h5>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Tata Crucible Quiz</h6>
                      <p className="small text-muted mb-0">Participation & Academic Excellence</p>
                    </div>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Freshworks Chennai Marathon</h6>
                      <p className="small text-muted mb-0">Volunteer Recognition (2025)</p>
                    </div>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">Unity Run Marathon</h6>
                      <p className="small text-muted mb-0">Active Participation (2025)</p>
                    </div>
                    <div className="cert-badge">
                      <h6 className="fw-bold mb-1">10th Hot Air Balloon Fest</h6>
                      <p className="small text-muted mb-0">Event Volunteer Coordination</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center reveal">
            Featured <span className="accent">Projects</span>
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 reveal">
              <div className="p-card h-100">
                <div className="project-img">
                  <i className="bi bi-droplet-fill fs-1"></i>
                </div>
                <h3 className="fw-bold mb-3">IV drips monitor</h3>
                <p className="text-white small mb-4">
                  "In high-pressure healthcare environments, monitoring IV fluids manually is a
                  critical challenge. Our solution focuses on automating this process to ensure
                  patient safety while significantly reducing the workload for healthcare
                  professionals"
                </p>
                <div className="tag-list justify-content-start">
                  <span className="badge rounded-pill border border-info text-info">IoT</span>
                  <span className="badge rounded-pill border border-info text-info">
                    Healthcare Tech
                  </span>
                  <span className="badge rounded-pill border border-info text-info">Website</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 reveal">
              <div className="d-flex flex-column gap-4 h-100">
                <div className="p-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <i className="bi bi-shield-check text-info fs-3"></i>
                    <h3 className="fw-bold mb-0">CertiHub</h3>
                  </div>
                  <p className="text-white small mb-4">
                    "A centralized ecosystem for academic validation and professional growth
                    tracking. Built to help students manage certifications and milestone
                    achievements with technical precision."
                  </p>
                  <div className="tag-list justify-content-start">
                    <span className="badge rounded-pill border border-info text-info">
                      Growth Hub
                    </span>
                    <span className="badge rounded-pill border border-info text-info">
                      Academic ecosystem
                    </span>
                  </div>
                </div>

                <div className="p-card mt-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <i className="bi bi-briefcase-fill text-info fs-3"></i>
                    <h3 className="fw-bold mb-0">CareerHome</h3>
                  </div>
                  <p className="text-white small mb-4">
                    "An integrated career development platform focused on streamlining professional
                    pathways and networking for emerging technical talent."
                  </p>
                  <div className="tag-list justify-content-start">
                    <span className="badge rounded-pill border border-info text-info">
                      Career Path
                    </span>
                    <span className="badge rounded-pill border border-info text-info">
                      Professional Development
                    </span>
                  </div>
                </div>

                <div className="p-card mt-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-check2-all text-info fs-3"></i>
                      <h3 className="fw-bold mb-0">Unfold</h3>
                    </div>
                    <a 
                      href="https://todo-sigma-self.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-sm btn-outline-info rounded-pill px-3"
                    >
                      Live Demo <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </a>
                  </div>
                  <p className="text-white small mb-4">
                    "A high-performance, cinematic task management application designed for 
                    focus and workflow clarity. Built with a focus on immersive user 
                    experience."
                  </p>
                  <div className="tag-list justify-content-start">
                    <span className="badge rounded-pill border border-info text-info">
                      Task Management
                    </span>
                    <span className="badge rounded-pill border border-info text-info">
                      Vercel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <div className="modal fade" id="connectModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0 d-flex justify-content-between align-items-center">
              <h2 className="fw-bold mb-0">Let's Connect</h2>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0 pt-2">
              <p className="mb-4 text-muted">Choose your preferred way to reach out.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center">
        <div className="container">
          <h4 className="fw-bold mb-4 text-white">
            Let's craft something <span className="accent">extraordinary.</span>
          </h4>
          <div className="mb-4">
            <a
              href="https://linkedin.com/in/susan0096"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              className="social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="mailto:michellesusan704@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
          <p className="text-muted small">&copy; 2026 Michelle Susan Ezhilarasi. Built with Precision.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
