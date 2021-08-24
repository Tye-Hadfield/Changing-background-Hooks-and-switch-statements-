import React, {useState} from 'react'
import '../components/Textalign.css'

import {
    useDisclosure,
    Input,
    Image,
    Button,
    Box,
    SimpleGrid,
    Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverArrow,PopoverCloseButton,PopoverBody,
    Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,
    Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,} from "@chakra-ui/react"
import { FaFacebook,FaTwitter,FaCartPlus } from 'react-icons/fa'

import Lottie from 'react-lottie';
import animationData from '../components/lotties/naruto-eating-ramen.json';



export default function Home() {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [orderButton, setorderbutton] = useState(false)
    const btnRef = React.useRef()

    const menuItems = [
        {
        item: "Ramen",
        cost: 7
        },
        {
        item: "Rice Bowl",
        cost: 4
        }
    ]
    
    
    
    return (

      
    <Box style={{backgroundColor:"#F17300", height:"100%", display:"flex", flexDirection:"row"  }} >
        <Box style={{ height:"20vh", width:"100%", order:"2"}} >
            <Box className="headingimg">
                <img src="https://fontmeme.com/permalink/210823/abe525efa36224026403f69df3d0dc6c.png" ></img>
            </Box>
            <Box>
                <div style={{fontFamily: 'Indie Flower', fontSize:"4rem"}} className="textshadow headingimg">Check out team 7s favourite dishes!</div>
            </Box>
            <SimpleGrid minChildWidth="120px" spacing="40px" style={{padding:"20px"}} className="headingimg">
                <Box bg="#81A4CD" height="15rem">
                    <img src="Naruto.png" style={{height:"80%", paddingBottom:"10px"}} />
                    <Popover placement="bottom-start" >
                    <PopoverTrigger >
                        <Button>Click me</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverHeader fontWeight="semibold" style={{backgroundColor:"#81A4CD", color:"white"}}>Naruto</PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody style={{backgroundColor:"#054A91", color:"white"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </Box>
                <Box bg="#81A4CD" height="15rem">
                    <img src="sasuke.png" style={{height:"80%", paddingBottom:"10px"}} />
                    <Popover placement="bottom-start" >
                    <PopoverTrigger >
                        <Button>Click me</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverHeader fontWeight="semibold"  style={{backgroundColor:"#81A4CD", color:"white"}}>Sasuke</PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody style={{backgroundColor:"#054A91", color:"white"}} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </Box>
                <Box bg="#81A4CD" height="15rem">
                    <img src="sakura.png" style={{height:"80%", paddingBottom:"10px"}} />
                    <Popover placement="bottom-start" >
                    <PopoverTrigger >
                        <Button>Click me</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverHeader fontWeight="semibold"  style={{backgroundColor:"#81A4CD", color:"white"}}>Sakura</PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody style={{backgroundColor:"#054A91", color:"white"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </Box>
                <Box bg="#81A4CD" height="15rem">
                    <img src="kakashi.png" style={{height:"80%", paddingBottom:"10px"}} />
                    <Popover placement="bottom-start"  >
                    <PopoverTrigger >
                        <Button>Click me</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverHeader fontWeight="semibold"  style={{backgroundColor:"#81A4CD", color:"white"}}>Kakashi</PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody style={{backgroundColor:"#054A91", color:"white"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </Box>             
            </SimpleGrid>
        <Box style={{display:"flex", padding:"1%", }}>
            <div style={{ order:1, fontFamily: 'Indie Flower', fontSize:"4rem", alignSelf:"center", flexGrow:"1", flexShrink:"1", flexBasis:"0", padding:"20px"}} className="headingimg textshadow" >Best Ramen in The Hidden leaf Village</div>
                <Lottie 
                style={{ order:2, flexGrow:"1", flexShrink:"1", flexBasis:"0" }}
                options={defaultOptions}
                height={350}
                width={400}
                />
            <div style={{ order:3, fontFamily: 'Indie Flower', fontSize:"5rem", alignSelf:"center", flexGrow:"1", flexShrink:"1", flexBasis:"0", padding:"20px"}} className="headingimg textshadow" >You better believe it!  </div>
        </Box>
        </Box>
        <Box style={{backgroundColor:"#054A91", height:"100vh", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"space-between", order:"1"}} w={[150]}>
            <Image
                borderRadius="full"
                paddingTop="15%"
                src="Bowl-Ramen.svg"
                alt="Bowl Of Ramen"
            />
            <Box style={{textAlign:"center"}}>

                <Button variant="solid" size="md" style={{ backgroundColor:"#DBE4EE", color:"#81a4cd", width:"85%"}}  className="navbarbtns" ref={btnRef} colorScheme="teal" onClick={onOpen}>
                    Menu
                </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader> Naruto Ramen Bar Menu</DrawerHeader>

                        <DrawerBody>
                            <Table variant="simple" size="sm">
                                <TableCaption>Best menu in the Hidden Leaf Village! You better believe it.</TableCaption>
                                <Thead>
                                    <Tr>
                                    <Th>Item</Th>
                                    <Th>Cost</Th>
                                    <Th>Add To Cart</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                
                                {menuItems.map((item) => (
                                    <Tr>
                                    <Td>{item.item}</Td>
                                    <Td>{item.cost}</Td>
                                    <Td> <Button leftIcon={<FaCartPlus />} variant="solid" style={{backgroundColor:"#3E7CB1"}} /> </Td>
                                    </Tr>                        
                                ))}

                                </Tbody>
                            </Table>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                            </Button>
                            <Button colorScheme="blue">Save</Button>
                        </DrawerFooter>
                        </DrawerContent>
                    </Drawer>


                <Button  variant="solid" size="md" style={{marginTop:"10%", backgroundColor:"#DBE4EE", color:"#81a4cd", width:"85%" }} className="navbarbtns" ref={btnRef} colorScheme="teal" onClick={() => setorderbutton(true)}>
                    Check-Out
                </Button>
                    <Drawer
                            isOpen={orderButton}
                            placement="top"
                            onClose={() => setorderbutton(false)}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Create your account</DrawerHeader>

                            <DrawerBody>
                                <Input placeholder="Type here..." />
                            </DrawerBody>

                            <DrawerFooter>
                                <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                                </Button>
                                <Button colorScheme="blue">Save</Button>
                            </DrawerFooter>
                            </DrawerContent>
                        </Drawer>

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
