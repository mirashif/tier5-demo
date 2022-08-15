import { Container, Heading, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const Home = () => {
  return (
    <Container>
      <Link as={ReactRouterLink} to="/facebook">
        <Heading>Facebook</Heading>
      </Link>
    </Container>
  );
};
