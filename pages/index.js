import React, { useRef } from "react";
import Nav from '../components/Sidebar'
import Footer from "../components/Footer";
import { Badge, Box, Heading, HStack, List, ListIcon, ListItem, Image, Center, Icon, useColorModeValue, Link, Stack, VStack, Button, color } from "@chakra-ui/react";
import {ChevronRightIcon, ArrowForwardIcon, ChevronLeftIcon, ArrowUpIcon} from "@chakra-ui/icons"
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {BsDot} from 'react-icons/bs'

const images = [
  {
  url: "https://raw.githubusercontent.com/MateiVolo05/Basketball-Nation/main/Screenshoots/HomePage.png",
  caption: 'Blog despre baschet',
  site: "https://basketballnation.herokuapp.com/",
  },
  {
  url:   "https://raw.githubusercontent.com/MateiVolo05/Movie-Db/main/ss/home.png",
  caption: 'Bază de date cu filme',
  site: 'https://mavo-moviedb.vercel.app/',
  },
  {
  url: "https://raw.githubusercontent.com/MateiVolo05/Bio/main/bio.jpg",
  caption: 'Boli ale sistemului circulator',
  site: 'https://mavo-boli.herokuapp.com/',
  },
  {
    url: "https://raw.githubusercontent.com/MateiVolo05/YT2MP3/main/yt.jpg",
    caption: 'YouTube to MP3 converter',
    site:'https://mavo-yt2mp3.herokuapp.com/',
  },
];

function App(){
  const color=useColorModeValue('#13547a','#9896d5')
  const Props = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    indicators: i => (<Icon w={6} h={8} color={color} as={BsDot}/>)
  };
  return(
    <Box position="relative" m='0' minH='100vh' _after={{content:'""', display:"block", height:"72px"}}>
      <Nav title="Cropped Computers">
        <Center>
          <Box className="slide-container" width={["100%",,"75%"]}>
            <Fade {...Props} nextArrow={<Icon as={ChevronRightIcon} w={10} h={10} color={color}/>} prevArrow={<Icon as={ChevronLeftIcon} w={10} h={10} color={color}/>}>
              {images.map((image, index) => (
                <Box className="each-fade" key={index}>
                  <Box className="image-container">
                    <Link href={image.site} target="_blank"><Image src={image.url} borderWidth="5px" borderColor={color} borderStyle="solid" borderRadius="5px"/></Link>
                  </Box>
                  <Center><Heading fontSize={["lg",,"2xl"]} mt={4}>{image.caption}</Heading></Center>
                </Box>
              ))}
            </Fade>
          </Box>
        </Center>
        <Stack direction={['column',, 'row']} mt={20} justifyContent="space-around" mb={4} mr={4}>
          <Box borderWidth="2px" borderColor={color} borderStyle="solid" borderRadius="5px">
            <Heading fontSize="2xl" pt={4} pl={4}>Program:</Heading>
            <HStack>
              <List pl={8}>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#13547a'/>
                    Luni
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#13547a'/>
                    Marți
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#13547a'/>
                    Miercuri
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#13547a'/>
                    Joi
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#13547a'/>
                    Vineri
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#13547a'/>
                    Sâmbată
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='#13547a'/>
                    Duminică
                </ListItem>
              </List>
              <List>
                <ListItem pr={4}>
                  <ListIcon as={ArrowForwardIcon} color='#13547a'/>
                    <Badge bg='#381178' color="white">8:00-17:00</Badge>
                </ListItem>
                <ListItem pr={4}>
                  <ListIcon as={ArrowForwardIcon} color='#13547a'/>
                  <Badge bg='#381178' color="white">8:00-17:00</Badge>
                </ListItem>
                <ListItem pr={4}>
                  <ListIcon as={ArrowForwardIcon} color='#13547a'/>
                  <Badge bg='#381178' color="white">8:00-17:00</Badge>
                </ListItem>
                <ListItem pr={4}>
                  <ListIcon as={ArrowForwardIcon} color='#13547a'/>
                  <Badge bg='#381178' color="white">8:00-17:00</Badge>
                </ListItem>
                <ListItem pr={4}>
                  <ListIcon as={ArrowForwardIcon} color='#13547a'/>
                  <Badge bg='#381178' color="white">8:00-17:00</Badge>
                </ListItem>
                <ListItem pr={4}>
                  <ListIcon as={ArrowForwardIcon} color='#13547a'/>
                  <Badge bg='#381178' color="white">8:30-15:30</Badge>
                </ListItem>
                <ListItem pr={4}>
                  <ListIcon as={ArrowForwardIcon} color='#13547a'/>
                  <Badge bg='#381178' color="white">Închis</Badge>
                </ListItem>
              </List>
            </HStack>
          </Box>
          <Box borderWidth="2px" borderColor={color} borderStyle="solid" borderRadius="5px">
            <Heading fontSize="2xl" pt={4} pl={4}>Adresă:</Heading>
            <Link target="_blank" href="https://www.google.com/maps/place/Strada+Muzeelor+5,+Piatra+Neam%C8%9B+617185/@46.9179486,26.3926775,17.86z/data=!4m13!1m7!3m6!1s0x47355449968fa865:0x52d3dedb49e2d0b8!2sPiatra+Neam%C8%9B!3b1!8m2!3d46.9299616!4d26.3779793!3m4!1s0x47355509d74369e3:0xb32425af38943446!8m2!3d46.9180982!4d26.3917811"><Image src="https://raw.githubusercontent.com/MateiVolo05/Cropped_Computers/main/public/location.jpg" width="70vh" height="50vh" pt="2px" pr={4} pl={4} pb={4}/></Link>
          </Box>
          <Box borderWidth="2px" borderColor={color} borderStyle="solid" borderRadius="5px">
            <Heading fontSize="2xl" pt={4} pl={4}>Date de contact:</Heading>
            <VStack>
              <Heading fontSize="lg" pt="2px">telefon: 0769420420</Heading>
              <Heading fontSize="lg" pt="2px" pl="4px" pr="2px">gmail: croppedcomputers@gmail.com</Heading>
            </VStack>
          </Box>
        </Stack>
      </Nav>
      <Box style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '72px',
        }}
      >
        <Footer/>
      </Box>
    </Box>
  )
}

export default App;
