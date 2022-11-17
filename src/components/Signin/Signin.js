import React from "react";

const Signin = () => {
  return (
    <div
      className="modal fade"
      id="signinModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="signinModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{ borderRadius: "12px" }}>
          <div className="modal-header border-0 p-0">
            <button
              type="button"
              className="close text-black"
              data-dismiss="modal"
              aria-label="Close"
              style={{ padding: "1rem 1rem", margin: "0rem 0rem -1rem auto" }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body pt-0 border-0 px-5">
            <h4
              style={{ fontWeight: 600 }}
              className="modal-title text-center my-2"
              id="signinModalLabel"
            >
              Signin
            </h4>
            <p
              className="lead text-center my-4 p-2"
              style={{ color: "#7D7D7d", fontSize: "12px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <form>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control my-3"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Mobile Number"
                  style={{ borderRadius: "10px" }}
                />
                <div className="form-check ml-3">
                  <input
                    type="checkbox"
                    className="form-check-input mt-3 "
                    id="signedCheckBox"
                    style={{ marginTop: "25px !important" }}
                  />
                  <label
                    className="form-check-label my-3"
                    htmlFor="signedCheckBox"
                  >
                    Keep me signed in
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-block my-3"
                  style={{
                    backgroundColor: "#FBB03B",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  Sign in
                </button>
              </div>
            </form>

            <div
              className="signup-prompt my-3 text-center"
              style={{ fontSize: "12px" }}
            >
              Not a member yet?{" "}
              <span style={{ fontWeight: "600" }} type="btn" className="ml-2">
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
