import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Container } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="4"
    >
      <Button
        onClick={() => navigate("/facebook")}
        leftIcon={<FaFacebook />}
        colorScheme="blue"
        rightIcon={<ArrowForwardIcon />}
        size="lg"
        w="full"
      >
        Facebook
      </Button>
      <Button
        onClick={() => navigate("/instagram")}
        leftIcon={<FaInstagram />}
        colorScheme="purple"
        rightIcon={<ArrowForwardIcon />}
        size="lg"
        w="full"
      >
        Instagram
      </Button>
    </Container>
  );
};
