import React, { useRef, useState } from 'react';
import { Box, Center, VStack, HStack, Text, Icon, Button, Divider, AlertDialog } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../Components/CustomHeader';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);
  const navigation = useNavigation();

  const onClose = () => setIsOpen(false);

  const handleLogout = () => {
    setIsOpen(false);
    // Clear auth state if needed here
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };
  return (
    <>
      <Box flex={1} bg="gray.100" safeArea px={4} py={6}>
        <CustomHeader rightIcon="bell" onRightPress={() => console.log('Bell pressed')} />
        {/* Profile Icon */}
        <Center mb={6}>
          <Icon as={FontAwesome} name="user-circle" size="32" color="rgb(63 98 137)" />
          <Text mt={2} fontSize="xl" fontWeight="bold" color="gray.700">
            My Profile
          </Text>
        </Center>

        {/* Details Card */}
        <Box bg="white" p={5} borderRadius="xl" shadow={2}>
          <Text fontSize="md" fontWeight="bold" mb={3} color="gray.700">
            Details
          </Text>

          <VStack space={3}>
            <HStack justifyContent="space-between">
              <Text color="gray.500">Name</Text>
              <Text fontWeight="medium" color="gray.700">Anuja Barsing</Text>
            </HStack>

            <HStack justifyContent="space-between">
              <Text color="gray.500">User ID</Text>
              <Text fontWeight="medium" color="gray.700">U12345678</Text>
            </HStack>

            <HStack justifyContent="space-between">
              <Text color="gray.500">Email</Text>
              <Text fontWeight="medium" color="gray.700">anuja@example.com</Text>
            </HStack>

            <HStack justifyContent="space-between">
              <Text color="gray.500">Address</Text>
              <Text fontWeight="medium" color="gray.700" flexShrink={1} textAlign="right">
                123 Main Street, Pune
              </Text>
            </HStack>

            <HStack justifyContent="space-between">
              <Text color="gray.500">Mobile</Text>
              <Text fontWeight="medium" color="gray.700">+91 9876543210</Text>
            </HStack>
          </VStack>

          <Divider my={4} />

          {/* Logout Button */}
          <Button
            colorScheme="rgb(63 98 137)"
            borderRadius="md"
            onPress={() => setIsOpen(true)}
            leftIcon={<Icon as={FontAwesome} name="sign-out" size={5} color="white" />}>
            Logout
          </Button>
        </Box>
      </Box>

      {/* Logout Confirmation Dialog */}
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.Header>Logout</AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure you want to logout?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button ref={cancelRef} onPress={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onPress={handleLogout} ml={3}>
              Logout
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
}
