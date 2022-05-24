import { Box, useColorModeValue, Center, Heading, Text, Icon, List, ListItem, ListIcon, UnorderedList, Link, LinkBox} from "@chakra-ui/react";
import React from 'react';
import Nav from '../components/Sidebar'
import Footer from "../components/Footer";
import {ChevronRightIcon,CheckIcon} from "@chakra-ui/icons"
import {FaEuroSign} from 'react-icons/fa'

export default function Contact(){
    const color=useColorModeValue('#9896d5', '#13547a')
    const reverse=useColorModeValue('#13547a','#9896d5')
    return (
        <Box position="relative" m='0' minH='100vh' _after={{content:'""', display:"block", height:"72px"}}>
            <Nav title="Aplicatii web">
                <Center>
                    <Box borderWidth="2px" borderColor={reverse} borderStyle="solid" borderRadius="5px" width="fit-content" mr={4}>
                        <Center>
                            <Heading fontSize="3xl" pt={4} pb={4}>Aplicații Web</Heading>
                        </Center>
                        <Center>
                            <List fontSize="lg" pr={4} pl={4} textAlign="justify" pb={4}>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} color={reverse}/>
                                    Prețurile vor începe de la 150 de <Icon as={FaEuroSign} />
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} color={reverse}/>
                                    Costurile pentru modificarea site-ului sunt între 4 <Icon as={FaEuroSign} /> și 20 de <Icon as={FaEuroSign} />
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} color={reverse}/>
                                    În plus, următoarele servicii vor fi oferite gratuit:
                                    <List pl={16} textAlign="left">
                                        <ListItem><ListIcon as={CheckIcon} color={reverse}/>Hosting, inclusiv backup în cloud</ListItem>
                                        <ListItem><ListIcon as={CheckIcon} color={reverse}/>Domeniul site-ului</ListItem>
                                        <ListItem><ListIcon as={CheckIcon} color={reverse}/>Optimizări SEO (Search Engine Optimizations)</ListItem>
                                    </List>
                                </ListItem>
                                <ListItem color="red" fontSize="2xl">
                                    <ListIcon as={ChevronRightIcon} color={reverse}/>
                                    Ofertă specială!!!
                                    <Text color={useColorModeValue('black', 'white')} pl={16} fontSize="lg">
                                        La achiziționarea unui site web, primești 15% reducere la o aplicație mobilă
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} color={reverse}/>
                                    Pentru a cere o ofertă, intra în secțiunea <Link href="/contact" color={reverse} textDecoration="underline">Contact</Link> pentru a ne timite un mesaj
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={ChevronRightIcon} color={reverse}/>
                                    Pentru a discuta despre o eventuală colaborare, putem aranja o întalnire online sau la sediul nostru, costând 10 <Icon as={FaEuroSign} />/ora
                                </ListItem>
                            </List>
                        </Center>
                    </Box>
                </Center>
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