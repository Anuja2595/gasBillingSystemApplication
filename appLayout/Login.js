import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput
} from 'react-native';
import {
  Box,
  Center,
  Text,
  VStack,
  Input,
  Button,
  Image,
  Pressable,
  Icon,
  ScrollView
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import logo from "../assets/aziziLogo.png";

export default function LoginScreen({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box flex={1} bg="white">
          <Center mt={16}>
            <Image
              source={logo}
              alt="aziziLogo"
              resizeMode="contain"
              width={100}
              height={100}
            />
          </Center>

          <Box flex={1} mt={12} px={10} pt={10}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <VStack space={4} mt={12}>
                <Box bg="gray.50" borderColor="gray.400" rounded="md" p={1}>
                  {/* <FontAwesome name="user-circle" size={5} color="gray.700" ml={3} /> */}
                  <TextInput
                    style={{ height: 50, fontSize: 16, paddingLeft: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 7 }}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Email Address"
                    placeholderTextColor="#01284294"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="email"
                    textContentType="emailAddress"
                    importantForAutofill="yes" // Helps autofill on iOS
                    name="email" // Explicit hint for iOS autofill
                  />
                </Box>
                {/* Password Input */} 
                <Box position="relative" bg="gray.50" borderColor="gray.400" rounded="md" p={1}>
                  <TextInput
                    style={{ height: 50, fontSize: 16, paddingLeft: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 7 }}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor="#01284294"
                    secureTextEntry={!showPassword}
                  />
                  <Pressable onPress={() => setShowPassword(!showPassword)}
                    position="absolute"
                    right={4}
                    top="50%">
                    <Icon
                      as={FontAwesome}
                      name={showPassword ? "eye" : "eye-slash"}
                      size={5}
                      mr={3}
                      color="gray.700"
                    />
                  </Pressable>
                </Box>

                {/* <Input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChangeText={setPassword}
                  bg="#f1f1f1"
                  borderRadius={10}
                  fontSize={16}
                  h={44}
                  InputLeftElement={
                    <Icon as={FontAwesome} name="lock" size={6} ml={3} color="gray.700" />
                  }
                  InputRightElement={
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                      <Icon
                        as={FontAwesome}
                        name={showPassword ? "eye" : "eye-slash"}
                        size={5}
                        mr={3}
                        color="gray.700"
                      />
                    </Pressable>
                  }
                /> */}

                <Button
                  mt={4}
                  borderRadius={10}
                  bg="rgb(63 98 137)"
                  _text={{ fontWeight: 'bold', fontSize: 16 }}
                  onPress={() => setIsLoggedIn(true)}
                >
                  Login
                </Button>
              </VStack>
            </ScrollView>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
