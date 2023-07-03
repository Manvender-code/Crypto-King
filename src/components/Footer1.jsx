import React from 'react'
import { Box, Heading,Stack,  VStack,  Button, Avatar, Text} from '@chakra-ui/react';
import avtr from "../assets/avtr.png";


const Footer1 = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'30vh'} pt={'8'} pr={'2'}color={'white'}> 
   

        <Stack pt={'8'} p={'8'} justifyContent={"space-evenly"} direction={['column','row']}>
             <VStack>
                   <Heading size={'sm'}>Contact Me</Heading>
                   <Button><a href='https://www.instagram.com/manvender_024/'>Instagram</a></Button>
                   <Button><a href='https://www.linkedin.com/in/manvender-meena-24548b277/'>LinkedIn</a></Button>
                   <Button><a href='https://github.com/Manvender-code'>GitHub</a></Button>
              </VStack>
              <VStack p={['0','2']}>
              <Text
            fontSize={"small"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto and exchanges information app in India, we provide our guidance
            at a very cheap price  i.e. free 😉
          </Text>
          <Text
            fontSize={"medium"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           So u can reach me out , i am waiting for you ........
          </Text>
          </VStack>
              <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avtr} />
          <Text>Our Creator</Text>
        </VStack>
        </Stack>
    </Box>
  )
}

export default Footer1;