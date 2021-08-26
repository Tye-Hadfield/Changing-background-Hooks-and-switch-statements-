import React, {useState} from 'react'
import '../components/Textalign.css'

import {
    useToast,
    useDisclosure,
    Image,
    Button,
    Box,
    SimpleGrid,
    Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverArrow,PopoverCloseButton,PopoverBody,
    Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,
    Table,Thead,Tbody,Tr,Th,Td,TableCaption,
    Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,
    } from "@chakra-ui/react"
import { FaFacebook,FaTwitter,FaCartPlus,FaWindowClose } from 'react-icons/fa'

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
    const [checkoutButton, setcheckoutbutton] = useState(false)
    const [checkScreen, setcheckScreen] = useState(false)
    const btnRef = React.useRef()

    const [cart, setCart] = useState([])

 
    const handleRemove = (item, index) => {
        setCart(cart.filter(cart => cart !== index ))
    }

    const toast = useToast()


    const menuItems = [
        {
        name: "Ramen",
        cost: 7
        },
        {
        name: "Rice Bowl",
        cost: 5
        },
        {
        name: "Bao Bun",
        cost: 3
        },
        {
        name: "Dumpling",
        cost: 3
        },
        {
        name: "BBQ Pork",
        cost: 3
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
                        <DrawerCloseButton style={{color:"white"}} />
                        <DrawerHeader style={{backgroundColor:"#054A91", color:"white"}}> Naruto Ramen Bar Menu</DrawerHeader>

                        <DrawerBody style={{backgroundColor:"#054A91", color:"white"}}>
                            <Table variant="simple" size="sm" >
                                <TableCaption style={{color:"white"}}>Best menu in the Hidden Leaf Village! You better believe it.</TableCaption>
                                <Thead>
                                    <Tr>
                                    <Th style={{color:"white"}}>Item</Th>
                                    <Th style={{color:"white"}}>Cost</Th>
                                    <Th style={{color:"white"}}>Add To Cart</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                
                                {menuItems.map((item) => (
                                    <Tr>
                                    <Td>{item.name}</Td>
                                    <Td>{item.cost}</Td>
                                    <Td> <Button variant="solid" style={{backgroundColor:"#F17300"}} className="drawerbtns" onClick={() => {
                                        setCart([...cart, item])
                                        toast({
                                            title: "Item Added.",
                                            description: "We've added " + `${item.name}` + " to your cart",
                                            status: "success",
                                            duration: 2000,
                                            isClosable: true,
                                          })
                                    }}> <FaCartPlus  /> </Button> </Td>
                                    </Tr>                        
                                ))}

                                </Tbody>
                            </Table>
                            <div style={{textAlign:"center"}}>
                                <Button variant="solid" style={{backgroundColor:"#F17300"}} onClick={() => setcheckoutbutton(true)} className="drawerbtns">Check-Out</Button>
                            </div>
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>


                <Button  variant="solid" size="md" style={{marginTop:"10%", backgroundColor:"#DBE4EE", color:"#81a4cd", width:"85%" }} className="navbarbtns" ref={btnRef} colorScheme="teal" onClick={() => setcheckoutbutton(true)}>
                    Check-Out
                </Button>
                    <Drawer
                            isOpen={checkoutButton}
                            placement="top"
                            onClose={() => setcheckoutbutton(false)}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent style={{backgroundColor:"#054A91"}} >
                                <Table variant="simple" size="sm" style={{textAlignLast:"center"}} >
                                    <TableCaption style={{color:"white"}}>Best menu in the Hidden Leaf Village! You better believe it.</TableCaption>
                                    <Thead >
                                        <Tr>
                                        <Th style={{color:"white"}}>Item</Th>
                                        <Th style={{color:"white"}}>Cost</Th>
                                        <Th style={{color:"white"}}>Remove From Cart</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                    
                                    {cart.map((item, index) => (
                                        <Tr>
                                        <Td style={{color:"white"}}>{item.name}</Td>
                                        <Td style={{color:"white"}}>{item.cost}</Td>
                                        <Td> <Button  variant="solid" className="drawerbtns" style={{backgroundColor:"#F17300"}} onClick={() => {
                                            handleRemove(index, item)
                                            toast({
                                                title: "Item Removed.",
                                                description: "We've removed " + `${item.name}` + " from your cart",
                                                status: "warning",
                                                duration: 2000,
                                                isClosable: true,
                                              })
                                        }}  
                                            
                                        > <FaWindowClose/> </Button> </Td>
                                        </Tr>                        
                                    ))}

                                    </Tbody>
                                </Table>

                                <Button onClick={() => setcheckScreen(true)} style={{backgroundColor:"#F17300"}} className="drawerbtns">Pay-Now</Button>

                                    <Modal isOpen={checkScreen} isCentered motionPreset="slideInBottom">
                                    <ModalOverlay />
                                    <ModalContent style={{textAlign:"center", backgroundColor:"#054A91"}}>
                                        <ModalHeader style={{color:"white"}}>Check-Out</ModalHeader>
                                        <ModalBody>
                                        <Table variant="simple" size="sm" style={{color:"white"}}>
                                    <TableCaption style={{color:"white"}}>Remember to come back for some more of the best Ramen in town!</TableCaption>
                                    <Thead>
                                        <Tr>
                                        <Th style={{color:"white"}}>Item</Th>
                                        <Th style={{color:"white"}}>Cost</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                    {cart.map((item, index) => (
                                        <Tr>
                                        <Td>{item.name}</Td>
                                        <Td>{item.cost}</Td>
                                        </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                                        </ModalBody>
                                        <ModalFooter style={{justifyContent:"center"}}>
                                        <Button style={{backgroundColor:"#81A4CD"}} mr={3} className="drawerbtns">Pay-Now</Button>
                                        
                                        <Button style={{backgroundColor:"#F17300"}} mr={3} onClick={() => setcheckScreen(false)} className="drawerbtns">
                                            Close
                                        </Button>
                                        </ModalFooter>
                                    </ModalContent>
                                    </Modal>
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
