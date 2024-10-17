import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import robot from "../assets/images/robo.png";
import dotsquare from "../assets/images/dotsquare.png";
import chat from "../assets/images/chat.png";
import ring from "../assets/images/bluering.png";
import video from "../assets/video/video.mp4";
import Chatgif from "../assets/images/Chat.gif";
import airobo from "../assets/images/airobo.png";
import customersupport from "../assets/icons/customersupport.png";
import twentyfour from "../assets/icons/twentyfour.png";
import delivery from "../assets/icons/delivery-insurance.png";
import livechat from "../assets/icons/livechat.png";
import nointernet from "../assets/icons/no-internet.png";
import piggy from "../assets/icons/piggy-bank.png";
import hand1 from "../assets/images/hand1.png";
import chatbot from "../assets/images/chatbot.png";
import message1 from "../assets/images/message1.png";
import message2 from "../assets/images/message2.png";
import message3 from "../assets/images/message3.png";
import message4 from "../assets/images/message4.png";
import testimonial from "../assets/video/testimonial.mp4";
import teambg from "../assets/images/team-bg.png";
import { useEffect, useState } from "react";
import testimonial1 from "../assets/video/testimonail1.webm";

function Home() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showMessages, setShowMessages] = useState([
    false,
    false,
    false,
    false,
  ]);

  // Control the animation sequence using useEffect
  useEffect(() => {
    setTimeout(() => setShowChatbot(true), 500); // Show chatbot after 0.5s

    // Sequentially show messages with delays
    setTimeout(
      () => setShowMessages((prev) => [true, false, false, false]),
      1000
    );
    setTimeout(
      () => setShowMessages((prev) => [true, true, false, false]),
      1500
    );
    setTimeout(
      () => setShowMessages((prev) => [true, true, true, false]),
      2000
    );
    setTimeout(() => setShowMessages((prev) => [true, true, true, true]), 2500);
  }, []);

  return (
    <>
      <div className="home-section">
        <div className="overlay-background"></div>
        <Container fluid>
          <Row className="align-items-center vh-100">
            {/* Left Section - Text Content */}
            <Col
              xs={12}
              md={4}
              className="text-section text-center text-md-start position-relative p-4"
            >
              <h1 className="text-white1">
                ChatBot <br />{" "}
                <span className="highlight-text1 ">Auto Service</span>
              </h1>
              <p className="text-white">
                Nulla facilisi cras fermentum odio eu feugiat. Euismod elementum
                nisi quis eleifend quam adipiscing vitae proin sagittis.
                Pellentesque diam volutpat commodo sed egestas fringilla.
              </p>
              <ul className="feature-list">
                <li className="text-white">⚡ Automation up to 42%</li>
                <li className="text-white">
                  💼 Turn visitors into paying customers
                </li>
                <li className="text-white">
                  🚀 Supercharge your customer service team
                </li>
              </ul>
              <button className="started mt-4 text-white custom-button">
                Get Started
              </button>
            </Col>

            {/* Middle Section - Chat Interface */}
            <Col
              xs={12}
              md={4}
              className="d-none d-md-flex justify-content-center my-3 my-md-0"
            >
              <div className="chat-interface">
                <img src={chat} alt="chat interface" className="img-fluid" />
              </div>
            </Col>

            {/* Right Section - Robot Image and Dots */}
            <Col
              xs={12}
              md={4}
              className="d-none d-md-flex text-center position-relative mt-4 mt-md-0"
            >
              <img
                src={dotsquare}
                alt="dotsquare"
                className="dotsquare position-absolute"
              />
              <div className="robo">
                <img
                  src={ring}
                  alt="robot"
                  className="robot-image mt-5 rotating-ring img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Feature Section */}
      <Container fluid>
        <Row className="feature-section text-white justify-content-center g-4 py-5 d-flex justify-content-around px-5 px-md-0">
          <div className="px-4">
            <Button variant="btn" className="mt-4 features text-white px-4">
              Features
            </Button>
          </div>
          <h1 className="highlight-text custom-title">
            Accessible AI{" "}
            <span className="text-white">
              Features With <br /> Great Power
            </span>
          </h1>

          <Col
            xs={12}
            sm={6}
            md={2}
            className="feature-box hover-effect d-flex flex-column align-items-center firstbox text-center p-3"
          >
            <img src="" alt="Quantum Icon" className=" mb-3" />
            <h3>
              Quantum neural <br /> networks
            </h3>
            <p>
              Aid in providing precise responses for complex queries. Experience
              cutting-edge tech.
            </p>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={2}
            className="feature-box hover-effect d-flex flex-column align-items-center secondbox text-center p-3"
          >
            <img src="" alt="AI Icon" className=" mb-3" />
            <h3>Master intricate subjects</h3>
            <p>
              With advanced AI learning models, complex subjects are handled
              with ease.
            </p>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={2}
            className="feature-box hover-effect d-flex flex-column align-items-center thirdbox text-center p-3"
          >
            <img src="" alt="Machine Learning Icon" className=" mb-3" />
            <h3>ML framework for cloud</h3>
            <p>
              A robust machine learning framework for cloud-based data
              processing and services.
            </p>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={2}
            className="feature-box hover-effect d-flex flex-column align-items-center forthbox text-center p-3"
          >
            <img src="" alt="AI Icon" className=" mb-3" />
            <h3>AI for genetic diseases</h3>
            <p>
              AI cures complex genetic diseases with highly effective solutions.
            </p>
          </Col>
        </Row>
      </Container>
      <div className=" video-container-fluid">
        <video
          src={video}
          controls // Enables video controls (play, pause, volume, etc.)
          autoPlay // Optional: Automatically starts playing the video
          loop // Optional: Loops the video
          // Optional: Mutes the video (required for autoplay in some browsers)
          className="video-player"
        />
      </div>

      {/* --------problem solving------ */}

      <Container fluid className="text-white">
        <Row className="align-items-center problem">
          {/* second Section - Chat Interface */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center gap-5 order-1 order-md-2"
          >
            <div className="chat-bot-interface ">
              <img
                src={Chatgif}
                alt="Chat Interface"
                className="chatgif img-fluid"
              />
            </div>
            <div className="robot-container d-none d-md-flex ">
              <img src={airobo} alt="AI Robot" className="img-fluid" />
            </div>
          </Col>

          {/* first Section - Text Content */}
          <Col
            xs={12}
            md={6}
            className="text-section text-center text-md-start p-4 order-2 order-md-1"
          >
            <h1 className="display-4 highlight-text custom-title">
              AI Problem-Solving <br />
              <span className="text-white">Smart Designs.</span>
            </h1>
            <p>
              Egestas dui id ornare arcu odio. Euismod lacinia at quis risus sed
              vulputate odio. Vivamus eget malesuada lacus. Cras bibendum ligula
              at rutrum ornare. Donec malesuada eros et enim volutpat, id tempus
              nibh malesuada.
            </p>

            <Row className="feature-list mt-4">
              <Col xs={6} md={4} className="mb-2">
                <div className="feature-item">
                  <img src={customersupport} alt="" className="icon" />
                  <p>Hassle Free</p>
                </div>
              </Col>
              <Col xs={6} md={4} className="mb-2">
                <div className="">
                  <img src={twentyfour} alt="" className="icon" />
                  <p>24/7 Support</p>
                </div>
              </Col>
              <Col xs={6} md={4} className="mb-2">
                <div className="feature-item">
                  <img src={livechat} alt="" className="icon" />
                  <p>Live Chat</p>
                </div>
              </Col>
              <Col xs={6} md={4} className="mb-2">
                <div className="feature-item">
                  <img src={nointernet} alt="" className="icon" />
                  <p>International Shipping</p>
                </div>
              </Col>
              <Col xs={6} md={4} className="mb-2">
                <div className="feature-item">
                  <img src={piggy} alt="" className="icon" />
                  <p>Cost Saving</p>
                </div>
              </Col>
              <Col xs={6} md={4} className="mb-2">
                <div className="feature-item">
                  <img src={delivery} alt="" className="icon" />
                  <p>Frequent Delivery</p>
                </div>
              </Col>
            </Row>
            <button
              className="btn text-white mt-4 border py-2 px-3"
              style={{ borderRadius: "50px" }}
            >
              Know More Details
            </button>
          </Col>
        </Row>
      </Container>

      {/* ------------------our future---------------------- */}

      <Container fluid className="text-white">
        <Row className="align-items-center problem">
          {/* First Section - Text Content */}
          <Col
            xs={12}
            md={6}
            className="text-section text-center text-md-start p-4"
          >
            <div className="handmain position-relative">
              <img
                src={hand1}
                alt=""
                className="hand1 img-fluid" // Ensure hand image is responsive
              />

              {showChatbot && (
                <img
                  src={chatbot}
                  alt="Chatbot"
                  className="chatbot img-fluid position-absolute"
                  style={{
                    maxWidth: "100%",
                    bottom: "10%",
                    right: "5%",
                    width: "100%", // Ensure responsive sizing for mobile and desktop
                  }}
                />
              )}

              {showMessages[0] && (
                <img
                  src={message1}
                  alt="Message 1"
                  className="message message-left img-fluid position-absolute"
                  style={{
                    maxWidth: "100%",
                    top: "1%",
                    left: "1%",
                    width: "100%",
                  }}
                />
              )}
              {showMessages[1] && (
                <img
                  src={message2}
                  alt="Message 2"
                  className="message message-right img-fluid position-absolute"
                  style={{
                    maxWidth: "100%",
                    top: "1%",
                    // right: "45%",
                    width: "100%",
                    left: "10px",
                  }}
                />
              )}
              {showMessages[2] && (
                <img
                  src={message3}
                  alt="Message 3"
                  className="message message-left img-fluid position-absolute"
                  style={{
                    maxWidth: "90%",
                    bottom: "60%",
                    left: "8%",
                    width: "100%",
                  }}
                />
              )}
              {showMessages[3] && (
                <img
                  src={message4}
                  alt="Message 4"
                  className="message message-right img-fluid position-absolute"
                  style={{
                    maxWidth: "100%",
                    bottom: "60%",
                    right: "1%",
                    width: "100%",
                  }}
                />
              )}
            </div>
          </Col>

          {/* Second Section - Chat Interface */}
          <Col
            xs={12}
            md={6}
            className="text-section text-center text-md-start p-4"
          >
            <Button variant="btn" className="my-4 features text-white px-4">
              Our Future
            </Button>

            <h1 className="text-white">
              Mobile{" "}
              <span className="highlight-text custom-title">
                Applications{" "}
                <span className="text-white">
                  For the Intelligence Revolution
                </span>
              </span>
            </h1>
            <p>
              Phasellus a sollicitudin mauris, vel rhoncus nunc. Pellentesque
              gravida sem quis sem rhoncus, in gravida dui hendrerit. Duis vitae
              dui sollicitudin, posuere libero ac, ullamcorper velit. Integer in
              nisi eu enim interdum gravida vitae eu massa. Vivamus sit amet
              convallis quam, ac ultrices felis.
            </p>
          </Col>
        </Row>
      </Container>

      {/* ------------------------------ */}

      <Container
        fluid
        className="text-white p-0 overflow-hidden position-relative "
      >
        {/* Background Video */}
        <div className="team-video-container position-absolute top-0 start-0 w-100 h-100 ">
          <video
            src={testimonial1}
            autoPlay
            loop
            muted
            className="w-100 h-100 object-cover"
          />
        </div>

        {/* Overlay Content */}
        <Row className="py-5 position-relative text-white mx-0 ">
          {/* Left Section */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center p-4 p-md-5"
          >
            <div>
              <Button variant="btn" className="mb-4 features text-white px-4">
                Testimonial
              </Button>
            </div>

            <h1 className="mb-4 text-white">
              What <span className="highlight-text custom-title">They Say</span>
            </h1>
            <p className="mb-4">
              A iaculis at erat pellentesque adipiscing commodo elit.
              Condimentum vitae sapien pellentesque habitant morbi. Cras lacinia
              euismod urna, eget semper magna venenatis sed. Aenean et cursus
              nulla, id molestie quam. Phasellus a est ac lorem sollicitudin
              maximus. Aliquam laoreet ipsum at nulla fringilla, quis finibus
              felis viverra. In non magna vitae mi egestas ullamcorper.
            </p>
            <div className="d-flex align-items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Renza Eilionoir"
                className="rounded-circle me-3"
              />
              <div>
                <strong>Renza Eilionoir</strong>
                <p className="mb-0">Dancer</p>
              </div>
            </div>
          </Col>

          {/* Right Section */}
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div
              className="query rounded-3 p-4 w-100"
              style={{ maxWidth: "600px" }}
            >
              <div className="d-flex justify-content-start mb-4">
                <Button variant="btn" className="features text-white px-4">
                  Contact us
                </Button>
              </div>

              <h2 className="text-white mb-4">
                Do You Have{" "}
                <span className="highlight-text custom-title">
                  Any Queries?
                </span>
              </h2>
              <form>
                <Row>
                  {/* Left Fields */}
                  <Col xs={12} md={6} className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                    />
                    <input
                      type="email"
                      className="form-control my-3"
                      placeholder="Email ID*"
                    />
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Mobile*"
                    />
                    <select className="form-control mb-3">
                      <option>What you are interested in</option>
                    </select>
                  </Col>

                  {/* Message Field & Submit Button */}
                  <Col xs={12} md={6} className="d-flex flex-column">
                    <textarea
                      className="form-control mb-3"
                      placeholder="Message"
                      rows="6"
                    ></textarea>
                    <div className="submit">
                      <Button
                        variant=""
                        className="submit-btn text-white px-4 py-2 w-100"
                      >
                        Submit Query
                      </Button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* --------------------------------- */}
    </>
  );
}

export default Home;
