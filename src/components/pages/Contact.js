import React from "react";
import "./pages.css";
import Container from "../building_components/Container";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Container>
        <div className="row">
          <div className="col-md-12">
            <h1 className="listTitle getInTouch">Reach Out</h1>
            <p className="contactSubtitle">
              If you are interested in working together or have feedback about
              this website, give me a shout!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/xdozyypq"
              method="POST"
            >
              <label className="formLabel" htmlFor="name">
                name
              </label>
              <br />
              <input
                className="formInput"
                name="name"
                type="text"
                id="name"
                required
              ></input>
              <br />
              <label className="formLabel" htmlFor="email">
                email
              </label>
              <br />
              <input
                className="formInput"
                name="email"
                type="email"
                id="email"
                required
              ></input>
              <br />
              <label className="formLabel" htmlFor="message">
                Message
              </label>
              <br />
              <textarea
                className="formTextarea"
                name="message"
                type="text"
                id="message"
                required
              ></textarea>
              <br />
              <div className="submitBtnDiv">
              {status === "SUCCESS" ? (
                <p style={{ color: "#55ae95" }}>
                  Thanks, I will be in touch shortly!
                </p>
              ) : (
                <button className="learnMore formBtn">Submit</button>
              )}
              {status === "ERROR" && <p>Oops! There was an error.</p>}
              </div>
            </form>
          </div>
          <div className="col-md-6 contactLinks">
            <p>Hate contact forms? Find me here:</p>{" "}
            <a
              href="https://github.com/jordynsaltzman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github contactIcon floating1"></i>
            </a>
            <a href="mailto:jordyn.saltzman@gmail.com">
              <i className="fas fa-envelope contactIcon floating2"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jordynsaltzman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin contactIcon floating3"></i>
            </a>
          </div>
        </div>
      </Container>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
