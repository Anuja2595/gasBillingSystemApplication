import React from 'react';
import { FlatList } from 'react-native';
import { Box, Text, Image, Pressable, VStack, HStack, Icon } from 'native-base';
import CustomHeader from '../Components/CustomHeader';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const billsData = [
  { id: '1', title: 'June 2025 bill', time: '12:38 PM', date: '07/26/2018' },
  { id: '2', title: 'May 2025 bill', time: '12:38 PM' },
  { id: '3', title: 'April 2025 bill', time: '12:38 PM' },
  { id: '4', title: 'March 2025 bill', time: '12:38 PM', date: '07/01/2018' },
  { id: '5', title: 'Headlight', subtitle: '344 Lloyd Parkway', time: '12:38 PM' },
];

const BillsScreen = () => {
  const renderItem = ({ item }) => (
    <Pressable>
      <Box
        flexDirection="row"
        alignItems="center"
        bg="white"
        p="3"
        mb="3"
        borderRadius="lg"
        shadow="1"
      >
        <Image
          source={require('../../assets/pdf-icon.png')} // use your correct path
          alt="PDF Icon"
          size="8"
          mr="3"
        />

        <VStack flex={1}>
          <Text fontSize="md" bold color="coolGray.800">
            {item.title}
          </Text>
          {item.subtitle && (
            <Text fontSize="xs" color="coolGray.600">
              {item.subtitle}
            </Text>
          )}
          {item.date && (
            <Text fontSize="xs" color="coolGray.400" mt="1">
              {item.date}
            </Text>
          )}
        </VStack>

        <Text fontSize="xs" color="coolGray.500" ml="2">
          {item.time}
        </Text>
      </Box>
    </Pressable>
  );

  return (
    <>
      <CustomHeader rightIcon="bell" onRightPress={() => console.log('Bell pressed')} />
      <Box flex={1} bg="#f6f8fc" px="4" pt="4">
        {/* Title Bar */}
        <Box
          bg="rgb(63 98 137)"
          py="2.5"
          borderRadius="lg"
          alignItems="center"
        >
          <Text color="white" fontSize="lg" fontWeight="bold">
            All Reports
          </Text>
        </Box>

        {/* Bills List */}
        <FlatList
          data={billsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </>
  );
};

export default BillsScreen;
