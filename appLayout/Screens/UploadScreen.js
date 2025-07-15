import React from 'react';
import { Box, Center, VStack, Text, Icon, Button } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../Components/CustomHeader';

export default function UploadScreen() {
  return (
    <Box flex={1} bg="white">
      <CustomHeader rightIcon="bell" onRightPress={() => console.log('Bell pressed')} />
      {/* Top colored half */}
      <Box flex={1.5} bg="rgb(63 98 137)" justifyContent="center" alignItems="center">
        <Icon as={FontAwesome} name="file-text" size={24} color="white" />
      </Box>

      {/* Bottom half - white */}
      <Box flex={1} bg="white" justifyContent="center" alignItems="center">
        <VStack space={4} alignItems="center">
          {/* Camera Button */}
          <Button
            bg="rgb(63 98 137)"
            p={3}
            _pressed={{ bg: 'rgb(63 98 137)' }}
            leftIcon={<Icon as={Ionicons} name="camera" size="lg" color="white" />}
            _text={{ fontSize: 14 }}
          >
            Use Camera
          </Button>

          {/* Instructional Text */}
          <Text fontSize="lg" textAlign="center" color="black" fontWeight={"bold"}>
            Upload your latest{'\n'}Bill Meter Reading
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
