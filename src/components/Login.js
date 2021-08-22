import React, { useState, useEffect } from 'react';
import '../components/Placeholder.css'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Radio,
    RadioGroup,
    HStack
  } from "@chakra-ui/react"
  
export default function Login() {

const [animeChoice, setanimeChoice] = useState("Naruto")

const [backgroundUrl, setbackgroundUrl] = useState("Naruto")


useEffect(() => {
    switch(animeChoice) {
        case 'Naruto':
          return setbackgroundUrl("https://media.giphy.com/media/lds79WZpA3SN2/giphy.gif")
        case 'One-Piece' : 
          return setbackgroundUrl("https://media.giphy.com/media/YWB6Hi29vA3jG/giphy.gif")
        case 'My-Hero-Academia' : 
          return setbackgroundUrl("https://media.giphy.com/media/qzROOBciDBK36/giphy.gif")
        case 'Death-Note' : 
          return setbackgroundUrl("https://media.giphy.com/media/xT1XH3NIegS0FBc1K8/giphy.gif")
        default:
          return setbackgroundUrl('No results')
      }
},[animeChoice])


    return (
<div style={{
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: "cover",
    height: "100vh",
    padding:"0",
    margin:"0"
    }}>

    <div style={{
    textAlign:"-webkit-center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh"
    }}>
        
                
<FormControl id="Email_Address" style={{width:"400px", textAlignLast: "center",bottom:"30px", backgroundColor:"rgba(195, 192, 192, 0.5)", borderRadius:"20px", padding:"30px", color:"white"}} isRequired>
    <FormLabel>Email Address</FormLabel>
    <Input placeholder="Naruto@email.com" />
    <FormLabel>Username</FormLabel>
    <Input placeholder="Naruto Uzumaki" />

    <FormLabel as="legend">Favourite Anime</FormLabel>
    <RadioGroup defaultValue="Naruto" onChange={(value) => setanimeChoice(value)}>
        <HStack spacing="24px">
        <Radio value="Naruto" >Naruto</Radio>
        <Radio value="One-Piece">One Piece</Radio>
        <Radio value="My-Hero-Academia">My Hero Academia</Radio>
        <Radio value="Death-Note">Death Note</Radio>
        </HStack>
    </RadioGroup>
</FormControl>


    </div>
</div>
    
    )
}
