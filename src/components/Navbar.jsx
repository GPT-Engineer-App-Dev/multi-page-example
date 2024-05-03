import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="brand.900" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Link as={RouterLink} to="/" px={2} py={1} color="white" fontSize="xl">
          <span style={{ marginRight: '8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 22V12h6v10" />
            </svg>
          </span>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2} py={1} color="white" fontSize="xl">
          <span style={{ marginRight: '8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h1m0 0h-1V9h1m0 13a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </span>
          About
        </Link>
        <Link as={RouterLink} to="/contact" px={2} py={1} color="white" fontSize="xl">
          <span style={{ marginRight: '8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 10l-6 6m0 0l-6-6m6 6V3" />
            </svg>
          </span>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;