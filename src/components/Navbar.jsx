import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="brand.900" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Link as={RouterLink} to="/" px={2} py={1} color="white" fontSize="xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16"><path d="M336 463.1h-96c-8.8 0-16-7.2-16-16V336c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v111.1c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V239.1c0-6.3 3.8-12 9.6-14.4l240-144c5.7-3.4 13.3-3.4 19.1 0l240 144c5.8 2.4 9.6 8.1 9.6 14.4V463.1c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V336c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v111.1C352 455.9 344.8 463.1 336 463.1z"/></svg>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2} py={1} color="white" fontSize="xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-28.1 0-53.5 11.1-72.9 29.5V416H224v-96.5c-19.4-18.4-44.8-29.5-72.9-29.5H134.4C60.2 290.1 0 350.3 0 424.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-39.6c0-74.1-60.2-134.4-134.4-134.4zM224 96c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32z"/></svg>
          About
        </Link>
        <Link as={RouterLink} to="/contact" px={2} py={1} color="white" fontSize="xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path d="M502.6 70.6l-61.2-61.2c-18.7-18.7-49.1-18.7-67.9 0L5.4 377c-4.7 4.7-7 11-7 17.5V464c0 26.5 21.5 48 48 48h69.5c6.5 0 12.8-2.3 17.5-7l368.1-368.1c18.8-18.8 18.8-49.2 0-67.8zM49.4 439.4V402l178.7-178.7 69.5 69.5L118.9 471.6H49.4zm288.1-288.1l-69.5-69.5L402 49.4l69.5 69.5-134 134z"/></svg>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;