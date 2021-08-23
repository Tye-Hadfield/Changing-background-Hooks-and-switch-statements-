import React from 'react'
import '../components/Textalign.css'

import { Image,Button, Box, SimpleGrid  } from "@chakra-ui/react"
import { FaFacebook,FaTwitter } from 'react-icons/fa'



export default function Home() {

    
    
    
    return (

      
    <Box style={{backgroundColor:"#F17300", height:"100%", display:"flex", flexDirection:"row"  }} >
        <Box style={{ height:"20vh", width:"100%", order:"2"}} >
            <Box className="headingimg">
                <img src="https://fontmeme.com/permalink/210823/abe525efa36224026403f69df3d0dc6c.png" ></img>
            </Box>
            <SimpleGrid minChildWidth="120px" spacing="40px" style={{padding:"20px"}} >
                <Box bg="#81A4CD" height="15rem"><img src="Naruto.png" style={{height:"80%"}} /></Box>
                <Box bg="#81A4CD" height="15rem"></Box>
                <Box bg="#81A4CD" height="15rem"></Box>
                <Box bg="#81A4CD" height="15rem"></Box>
                <Box bg="#81A4CD" height="15rem"></Box>
                <Box bg="#81A4CD" height="15rem"></Box>
            </SimpleGrid>
        </Box>
        <Box style={{backgroundColor:"#054A91", height:"100vh", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"space-between", order:"1"}} w={[150]}>
            <Image
                borderRadius="full"
                paddingTop="15%"
                src="Bowl-Ramen.svg"
                alt="Bowl Of Ramen"
            />
            <Box style={{textAlign:"center"}}>
                <Button variant="solid" size="md" style={{ backgroundColor:"#DBE4EE", color:"#81a4cd", width:"85%"}}  className="navbarbtns">
                    Menu
                </Button>
                <Button  variant="solid" size="md" style={{marginTop:"10%", backgroundColor:"#DBE4EE", color:"#81a4cd", width:"85%" }} className="navbarbtns">
                    Order Food
                </Button>
            </Box>
            <Box style={{textAlign:"center"}} >
                <Button  colorScheme="facebook" leftIcon={<FaFacebook />} style={{width:"75%"}}>
                    Facebook
                </Button>
                <Button  colorScheme="twitter" leftIcon={<FaTwitter />} style={{marginTop:"10%", marginBottom:"10%", width:"75%"}}>
                    Twitter
                </Button>
            </Box>
        </Box>
    </Box>
    )
}
