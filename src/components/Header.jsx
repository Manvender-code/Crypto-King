import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
   
    <HStack pl={"6"} pr={'6'} pb={"5"} shadow={"base"} bgColor={"blackAlpha.500"}>
      <Button p={"4"} variant={"unstyled"}  color={"purple.500"} 
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}>
        <Link to="/">Home</Link>
      </Button>
      <Button  p={"4"} variant={"unstyled"} color={"purple.500"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button  p={"4"} variant={"unstyled"} color={"purple.500"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}>
        <Link to="/nfts">NFT's</Link>
      </Button>
      <Button p={"4"} variant={"unstyled"} color={"purple.500"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
