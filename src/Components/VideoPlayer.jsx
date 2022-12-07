
/* *👇
 *This is Video Player Component
 *cretaed and styled with Styled Component
 *It will show random fashion videos 
 *it also directs user to all products when clicked
 */

// import React
import React from "react";

// import Styled Components
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Video1 from "../videos/Video_1.mp4";

import Video2 from "../videos/Video_2.mp4";
import Video3 from "../videos/Video_3.mp4";
import Video4 from "../videos/Video_4.mp4";

import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";

const Container = styled.div`
  margin-top: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110vh;
  border-bottom: 1px solid lightgray;
`;
const Wrapper = styled.div`
  height: 100%;
  cursor: pointer;
`;
const Video = styled.video`
  height: 90%;
  // cursor: pointer;
`;
const VideosArray = [Video1, Video2, Video3, Video4];
const randomVideo = Math.floor(Math.random() * 4);

const AudioController = styled.div`
  position: absolute;
  left: 8%;
  background-color: none;
  opacity: 1;
  display: flex;

  border-radius: 50%;
  //background-color: #414141;
  align-items: center;
  justify-content: center;
  top: 12%;
  width: 20px;
  height: 20px;
  z-index: 1;
  cursor: pointer;
`;

const VideoPlayer = () => {
  const navigate = useNavigate();
  const [muted, setMuted] = useState(true);

  const handleMuted = () => {
    muted ? setMuted(false) : setMuted(true);
    console.log(muted);
  };
  return (
    <Container>
      <Wrapper>
        <AudioController onClick={handleMuted}>
          {muted ? (
            <VolumeOffRoundedIcon sx={{ color: "white" }} />
          ) : (
            <VolumeUpRoundedIcon sx={{ color: "white" }} />
          )}
        </AudioController>
        <Video
          onClick={() => {
            navigate("/products");
          }}
          src={VideosArray[randomVideo]}
          autoPlay
          muted={muted}
          loop={true}
          playsinline
        />
      </Wrapper>
    </Container>
  );
};

export default VideoPlayer;
