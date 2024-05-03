import { Box, Flex, Link } from '@chakra-ui/react';
import { FaHome, FaInfoCircle, FaPhone } from '@react-icons/fa';


import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="brand.900" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Link as={RouterLink} to="/" px={2} py={1} color="white" fontSize="xl"><FaHome style={{ marginRight: '8px' }} />Home</Link>
        <Link as={RouterLink} to="/about" px={2} py={1} color="white" fontSize="xl"><FaInfoCircle style={{ marginRight: '8px' }} />About</Link>
        <Link as={RouterLink} to="/contact" px={2} py={1} color="white" fontSize="xl"><FaPhone style={{ marginRight: '8px' }} />Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;