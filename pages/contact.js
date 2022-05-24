import { Box, Button, Stack, Input, Textarea, useColorModeValue } from "@chakra-ui/react";
import emailjs  from "emailjs-com";
import React from 'react';
import Nav from '../components/Sidebar'
import Footer from "../components/Footer";

export default function Contact(){
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_l2yrrw9', 'template_5l6urod', e.target, 'lBGiE0Qm5VxkzdSQt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
            });
        e.target.reset()
    }
    const color=useColorModeValue('#9896d5', '#13547a')
    const reverse=useColorModeValue('#13547a','#9896d5')
    return (
        <Box position="relative" m='0' minH='100vh' _after={{content:'""', display:"block", height:"72px"}}>
            <Nav title="Contact">
                <Stack justifyContent="center" w="70%">
                    <form onSubmit={sendEmail}>
                        <Input fontSize={['lg',, "3xl"]} p={[4,, 8]} mb={4} required type="text" placeholder="Numele tău..." name="name" borderWidth="2px" borderColor={color} focusBorderColor={reverse}/>
                        <Input fontSize={['lg',, "3xl"]} p={[4,, 8]} mb={4} required type="email" placeholder="Emailul tău..." name="email" mt={4} borderWidth="2px" borderColor={color} focusBorderColor={reverse}/>
                        <Input fontSize={['lg',, "3xl"]} p={[4,, 8]} mb={4} type="tel" placeholder="Numărul tău de telefon..." name="number" mt={4} borderWidth="2px" borderColor={color} focusBorderColor={reverse}/>
                        <Textarea fontSize={['lg',, "3xl"]} p={4} mb={4} required resize="vertical" maxH="200px" placeholder="Mesajul tău..." name="message" mt={4} borderWidth="2px" borderColor={color} focusBorderColor={reverse}/>
                        <Button fontSize={['lg',, "3xl"]} p={[4,, 8]} mb={4} required type="submit" mt={4} bg={color}>Trimite</Button>
                    </form>
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
      );
}