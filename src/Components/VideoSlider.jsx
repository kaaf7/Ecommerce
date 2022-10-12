import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: yellow;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoWrapper = styled.section`
  height: 90%;
  width: 90%;
`;
const NewVideo = styled.video``;

const VideoSlider = () => {
  return (
    <Container>
      <video width="640" height="480" controls="none" id="video" autoPlay muted loop>
        <source src="C:/Users/A/Desktop/ecomm/ecommerce/src/videos/video1.mp4" type="video/mp4" alt="video" />
      </video>
    </Container>
  );
};

export default VideoSlider;
