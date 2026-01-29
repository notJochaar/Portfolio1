function Footer() {
  return (
    <footer className="mt-auto">
      <div
        className="container-fluid"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(2px)",
          borderTop: "2px solid rgba(0,0,0,0.08)",
        }}
      >
        <div className="container py-5">
          <div className="row text-center text-md-start">
            {/* Column 1 */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="fw-bold mb-3">Saeed Alsuwaidi</h5>
              <p className="text-muted">
                <b>Application Developer</b> with experience in web, Android, game development, and IT support. Passionate about building interactive solutions and using technology to create meaningful impact. Always learning, always improving.
              </p>
            </div>

            {/* Column 2 */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h6 className="fw-semibold mb-3">Navigation</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted text-decoration-none">Home</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Projects</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-md-4">
              <h6 className="fw-semibold mb-3">Connect</h6>
              <p className="text-muted mb-1">saod.alsuwaidi@gmail.com</p>
              <p className="text-muted">Dubai, UAE</p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="text-center text-muted small">
            &copy; {new Date().getFullYear()} Saeed Alsuwaidi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
