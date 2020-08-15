import React from "react";
import aboutPuppy from '../img/about-puppy.jpg'
import Container from '../components/Container'

function About() {
  return (
    <div>
      <Container>
        <img src={aboutPuppy} alt="Logo" />;
        <h1>About Puppy Love</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
          mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
          porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
          semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
          rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </Container>
    </div>
  );
}

export default About;
