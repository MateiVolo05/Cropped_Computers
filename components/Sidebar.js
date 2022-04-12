import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Icon,
    Box,
    Grid,
    VStack,
    HStack,
    DrawerHeader,
    Text,
    DrawerFooter,
    Switch,
  } from '@chakra-ui/react'
import { useDisclosure,useColorMode,useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon, MoonIcon, SunIcon,ChevronRightIcon} from '@chakra-ui/icons';
import logo from '../public/icon.png'
import darklogo from '../public/darkmode.png'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue('white', 'black')
    const reverse=useColorModeValue('#13547a','#9896d5')
    const bg=useColorModeValue('#11121a', '#f2f2f2')
    const MenuItem = ({ href, children, ...props }) => (
        <Link href={href} passHref>
          <Button as="a" variant="link" {...props}>
            {children}
          </Button>
        </Link>
    );
    return (
      <>
        <HStack bgGradient="linear(to-bl,#9896d5,#13547a)" justifyContent="space-between">
            <HStack justifyContent="flex-start">
                <Button ref={btnRef} ml="16px" colorScheme='#13547a' onClick={onOpen} borderStyle="outline" borderColor={bg} borderWidth="2px">
                    <HamburgerIcon color={bg}/>
                </Button>
                <MenuItem href="/">
                {colorMode === 'light' ? <Image src={logo} width="120vh" height="120vh" alt='Cropped Computers'/> : <Image src={darklogo} width="120vh" height="120vh" alt='Cropped Computers'/>}
                </MenuItem>
            </HStack>
            <Box pr={8}>
              <Link href="/contact">
                <Button bg={useColorModeValue('#9896d5', '#13547a')} _hover={{bg:useColorModeValue('#13547a', '#9896d5')}}>
                  <Text fontSize={['lg',,'2xl']} color={useColorModeValue('black', 'white')} textDecoration="none">
                    Contact
                  </Text>
                </Button>
              </Link>
            </Box>
        </HStack>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={reverse}/>
            <DrawerHeader fontSize={["3xl",,"4xl"]}>
              <Link href='/'>Cropped Computers</Link>
              <Text fontSize="sm" ml={8}>I see a Cropped Computer in your future</Text>
            </DrawerHeader>
            <DrawerBody pt={8}>
                <p>
                  <MenuItem href="/" color={reverse} fontSize={["3xl",,"3xl"]} pt="8px">
                    <Icon as={ChevronRightIcon} />Acasă
                  </MenuItem>
                </p>
                <p>
                  <MenuItem href="/web" color={reverse} fontSize={["3xl",,"3xl"]} pt="8px">
                    <Icon as={ChevronRightIcon} />Aplicații web
                  </MenuItem>
                </p>
                <p>
                  <MenuItem href="/mobile" color={reverse} fontSize={["3xl",,"3xl"]} pt="8px">
                  <Icon as={ChevronRightIcon} />Aplicații mobile
                  </MenuItem>
                </p>
            </DrawerBody>
            <DrawerFooter>
              <Text mr={2} fontSize="lg">Mod {colorMode === 'light' ? <Icon as={SunIcon}></Icon> : <Icon as={MoonIcon}></Icon>}</Text>
              <Switch onChange={toggleColorMode} colorScheme='black' size="lg" borderRadius={16} borderColor={reverse} borderWidth={3}/>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default function Nav({ title, children }) {
    return (
      <Box minH='50px'>
        <Head>
          {title && <title>{title}</title>}
          <link rel="icon" href="/logo.svg" />
        </Head>
        <VStack align="strech" justifyContent="space-between" spacing={8} >
            <Sidebar />
            <Box as="main" h="full" pl={4}>
              {children}
            </Box>
        </VStack>
      </Box>
    );
  }