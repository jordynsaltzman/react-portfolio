import React, { useEffect } from "react";
import "./pages.css";
import Container from "../building_components/Container";
import { useDencrypt } from "use-dencrypt-effect";

const Home = () => {
  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    const values = ["Jordyn Saltzman."];
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 500);

    return () => clearInterval(action);
  }, [dencrypt]);

  return (
    <Container>
      <div className="titleDiv">
        <h1 className="title">
          Hello, my name is <span className="titleName">{result}</span>
        </h1>
        <br />
        <h1 className="title">I'm a full-stack engineer.</h1>
        <a className="learnMore" href="/about">
          <h3>
            More about me <i className="fa fa-arrow-left"></i>
          </h3>
        </a>
      </div>
    </Container>
  );
};

export default Home;
