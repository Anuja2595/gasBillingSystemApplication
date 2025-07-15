import React from 'react';
import { HStack, Text, Icon, Box, StatusBar, IconButton, Center, Image } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AziziLogo from '../../assets/Svg/AziziLogo';

export default function CustomHeader({ rightIcon = 'user-circle', onRightPress }) {
  return (
    <>
      {/* Ensures correct bar color on Android */}
      <StatusBar barStyle="light-content" backgroundColor="#3F6289" />
      <Box safeAreaTop bg="blue.800">
        <HStack
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={3}
          bg="#3F6289"
        >
          {/* Empty Box = left spacer (or you can add a back button here) */}
          <Box w={6} />

          {/* Centered PNG Logo */}
          <Center position="absolute" left={0} right={0}>
            <Image
              source={require('../../assets/aziziLogo.png')} // update the path as needed
              alt="aziziLogo"
              resizeMode="contain"
              width={100}
              height={35}
            />
          </Center>

          {/* Right‑side Icon */}
          <IconButton
            icon={<FontAwesome name={rightIcon} size={22} color="#fff" />}
            _pressed={{ opacity: 0.7 }}
            onPress={onRightPress}
          />
        </HStack>
      </Box >
    </>
  );
}
