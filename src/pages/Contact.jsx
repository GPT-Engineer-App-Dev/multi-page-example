import { Container, Text, VStack } from '@chakra-ui/react';
import { FaEnvelopeOpenText } from '@react-icons/fa';

const Contact = () => {
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
        <Text fontSize="2xl"><FaEnvelopeOpenText style={{ fontSize: '24px', marginRight: '10px' }} />Contact Us</Text>
        <Text>Feel free to reach out through our contact form.</Text>
      </VStack>
    </Container>
  );
};

export default Contact;