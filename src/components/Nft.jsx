import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Nft = () => {
  const [nft, setNft] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNft = async () => {
      try {
        const { data } = await axios.get(`${server}/nfts/list`);
        setNft(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchNft();
  }, []);

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {nft.map((i) => (
              <NftCard
                key={i.id}
                name={i.name}
                asset_platform_id={i.asset_platform_id}
                contract_address={i.contract_address}
                symbol={i.symbol}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const NftCard = ({ name, contract_address, asset_platform_id,symbol }) => (
    <VStack
      w={"52"}
      bgColor={"purple.900"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Heading size={"md"} noOfLines={1}>
        {name + symbol}
      </Heading>
      <Text noOfLines={1}></Text>
      <Text noOfLines={1}>On {asset_platform_id}</Text>
    </VStack>

);

export default Nft;
