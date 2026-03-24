import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const Home = () => {
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

  return (
    <>
      <div id="bg-canvas"></div>

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
                <button className="btn-primary-custom shadow-lg">
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

      {/* Projects Section */}
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

                <div className="p-card">
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
