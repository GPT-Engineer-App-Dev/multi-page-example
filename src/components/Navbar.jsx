import { Box, Flex, Link } from '@chakra-ui/react';


import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="brand.900" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Link as={RouterLink} to="/" px={2} py={1} color="white" fontSize="xl">Home</Link>
        <Link as={RouterLink} to="/about" px={2} py={1} color="white" fontSize="xl">About</Link>
        <Link as={RouterLink} to="/contact" px={2} py={1} color="white" fontSize="xl">Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;