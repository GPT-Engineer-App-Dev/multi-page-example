import { Container, Text, VStack } from "@chakra-ui/react";




const Index = () => {
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
        <Text fontSize="2xl"><span style={{ marginRight: '8px' }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>Welcome to Our Website</Text>
        <Text>Explore the different pages using the navigation bar above.</Text>
      </VStack>
    </Container>
  );
};

export default Index;