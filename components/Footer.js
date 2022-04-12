import {
    Button,
    Stack,
    Link,
  } from '@chakra-ui/react'
import {useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon} from '@chakra-ui/icons';
import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'

export default function Footer(){
    const bg=useColorModeValue('#11121a', '#a0b5b8')
    const color=useColorModeValue('#9896d5', '#13547a')
    return(
      <Stack alignContent="stretch">
        <Stack bg={bg} pt="8px" pb="8px" pl="4px" pr="4px" justifyContent="center">
          <Stack pt="8px" pb="8px" pl="4px" pr="4px" justifyContent="center" direction={['column', , 'row']}>
            <Button rightIcon={<PhoneIcon />} bg={color}><Link href='tel:+40769420420'>Telefon</Link></Button>
            <Button bg={color} rightIcon={<FaFacebook />}>
              <Link isExternal="true" href='https://www.facebook.com/profile.php?id=100079297600848'>
                  Facebook
              </Link>
            </Button>
            <Button bg={color} rightIcon={<FaInstagram />}>
              <Link isExternal="true" href="https://www.instagram.com/cropped_computers/">
                    Instagram
              </Link>
            </Button>
            <Button bg={color} rightIcon={<FaGithub />}>
              <Link isExternal="true" href="https://github.com/MateiVolo05">
                  Mai multe proiecte
              </Link>
            </Button>
          </Stack>
        </Stack>
        </Stack>
    )
}