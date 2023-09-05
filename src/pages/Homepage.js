import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import QrCodeIcon from '@mui/icons-material/QrCode';
import ImageIcon from '@mui/icons-material/Image';
import Image from "../images/ai.png";

const Homepage = () => {

  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  return (

    <>
      {loggedIn ? (
        <>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "6rem" }}>
            <Box p={2}>

              <Card
                onClick={() => navigate("/summary")}
                sx={{
                  boxShadow: 2,
                  borderRadius: 5,
                  height: 190,
                  width: 240,
                  transition: 'transform 0.2s ease-in-out', // Transition properties
                  '&:hover': {
                    transform: 'scale(1.15)',
                  },
                }}
              >
                <DescriptionRounded
                  sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 10 }}
                />
                <Stack textAlign="center" p={3} pt={0}>
                  <Typography fontFamily="poppins" textAlign="center" fontWeight="bold" variant="h5">
                    Text Summary
                  </Typography>
                  <Typography marginTop="6px" variant="h6">
                    Summarize long text into short sentences
                  </Typography>
                </Stack>
              </Card>
            </Box>
            <Box p={2}>

              <Card
                onClick={() => navigate("/paragraph")}
                sx={{
                  boxShadow: 2,
                  borderRadius: 5,
                  height: 190,
                  width: 240,
                  transition: 'transform 0.2s ease-in-out', // Transition properties
                  '&:hover': {
                    transform: 'scale(1.15)',
                  },
                }}
              >
                <FormatAlignLeftOutlined
                  sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 10 }}
                />
                <Stack textAlign="center" p={3} pt={0}>
                  <Typography fontFamily="poppins" textAlign="center" fontWeight="bold" variant="h5">
                    Essay
                  </Typography>
                  <Typography marginTop="6px" variant="h6">
                    Generate paragraphs on a particular topic
                  </Typography>
                </Stack>
              </Card>
            </Box>
            <Box p={2}>

              <Card
                onClick={() => navigate("/chatbot")}
                sx={{
                  boxShadow: 2,
                  borderRadius: 5,
                  height: 190,
                  width: 240,
                  transition: 'transform 0.2s ease-in-out', // Transition properties
                  '&:hover': {
                    transform: 'scale(1.15)',
                  },
                }}
              >
                <ChatRounded
                  sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 10 }}
                />
                <Stack textAlign="center" p={3} pt={0}>
                  <Typography fontFamily="poppins" textAlign="center" fontWeight="bold" variant="h5">
                    Chatbot
                  </Typography>
                  <Typography marginTop="6px" variant="h6">Chat with our witty and humorous Alphonic Chatbot</Typography>
                </Stack>
              </Card>
            </Box>
            <Box p={2}>

              <Card
                onClick={() => navigate("/js-converter")}

                sx={{
                  boxShadow: 2,
                  borderRadius: 5,
                  height: 190,
                  width: 240,
                  transition: 'transform 0.2s ease-in-out', // Transition properties
                  '&:hover': {
                    transform: 'scale(1.15)',
                  },
                }}
                
              >
                <QrCodeIcon
                  sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 10 }}
                />
                <Stack textAlign="center" p={3} pt={0}>
                  <Typography fontFamily="poppins" textAlign="center" fontWeight="bold" variant="h5">
                    C++ Converter
                  </Typography>
                  <Typography marginTop="6px" variant="h6">
                    Translate English into C++ programming language
                  </Typography>
                </Stack>
              </Card>
            </Box>
            <Box p={2}>

              <Card
                onClick={() => navigate("/scifi-image")}
                sx={{
                  boxShadow: 2,
                  borderRadius: 5,
                  height: 190,
                  width: 240,
                  transition: 'transform 0.2s ease-in-out', // Transition properties
                  '&:hover': {
                    transform: 'scale(1.15)',
                  },
                }}
              >
                <ImageIcon
                  sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 10 }}
                />
                <Stack p={3} pt={0}>
                  <Typography fontFamily="poppins" textAlign="center" fontWeight="bold" variant="h5">
                    Image Generator
                  </Typography>
                  <Typography textAlign="center" marginTop="6px" variant="h6">Generate a cool image of a given object</Typography>
                </Stack>
              </Card>
            </Box>
          </Box>
        </>)
        :
        (
          <>
            <div className="hero">
              <img src={Image} height={550} className="image" />
              <div><p className="para">Alphonic is an advanced AI system that operates, showcasing remarkable capabilities in natural language processing and understanding. Leveraging cutting-edge technologies, Alphonic engages in human-like conversations, offering insightful and contextually relevant responses to a wide array of queries and prompts. Alphonic harnesses the power of deep learning and large-scale neural networks to comprehend user input and generate coherent and meaningful output.</p>

                <p className="para">Alphonic stands as a testament to the evolution of AI-driven conversational models, illustrating its potential in fields like customer support, content creation, and information dissemination. Its capacity to understand context, provide accurate information, and even emulate specific tones or styles makes it a versatile tool for businesses and individuals alike. Alphonic's existence underscores the rapid progress in AI research and its tangible impact on enhancing human-AI interactions across various domains.</p></div>
            </div>
          </>)}
    </>
  );
};

export default Homepage;