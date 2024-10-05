import React from 'react';

function Footers() {
  return (
    <div className="footer_container my-5">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#333333' }}>
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">VIVEK SHARMA</h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

             

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p><a href="https://github.com/VivekCodesCode" className="text-white">GITHUB</a></p>
                <p><a href="https://github.com/VivekCodesCode" className="text-white">LinkedIn</a></p>
                <p><a href="https://github.com/VivekCodesCode" className="text-white">Twitter</a></p>
                <p><a href="https://github.com/VivekCodesCode" className="text-white">Help</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i>207 Sanchar Nagar Extension , Indore</p>
                <p><i className="fas fa-envelope mr-3"></i>studyonlyvivek@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> +91 7898140646</p>
                <p><i className="fas fa-print mr-3"></i> +91 9300064255</p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2024 Copyright: <a href="https://vivek-portfolio-gamma.vercel.app/" className="text-white">VIvekSharmaVercel</a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a href="#!" className="btn btn-outline-light btn-floating m-1 text-white" role="button"><i className="fab fa-facebook-f"></i></a>
                <a href="#!" className="btn btn-outline-light btn-floating m-1 text-white" role="button"><i className="fab fa-twitter"></i></a>
                <a href="#!" className="btn btn-outline-light btn-floating m-1 text-white" role="button"><i className="fab fa-google"></i></a>
                <a href="#!" className="btn btn-outline-light btn-floating m-1 text-white" role="button"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footers;
