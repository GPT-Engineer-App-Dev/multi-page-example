import { Container, Text, VStack } from '@chakra-ui/react';



const About = () => {
  return (
    <Container
      centerContent
      maxW="container.md"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={4}>
        <Text fontSize="2xl">About Us</Text>
        <Text>Welcome to our website where we showcase our multi-page application capabilities.</Text>
      </VStack>
    </Container>
  );
};

export default About;