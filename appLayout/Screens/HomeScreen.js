import React, { useCallback, useState } from 'react';
import {
  Box,
  Text,
  ScrollView,
  Icon,
  VStack,
  HStack,
  Button,
  Pressable,
  Center,
  Divider,
  Image,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { launchDocumentScanner } from "react-native-document-scanner-plugin";
import CustomHeader from '../Components/CustomHeader';

export default function HomeScreen() {
  const [image, setImage] = useState('');

  const openCamera = async () => {
    try {
      const { scannedImages } = await launchDocumentScanner({
        letUserAdjustCrop: true,
        maxNumDocuments: 1,
        responseType: 'imageFilePath',
      });

      if (scannedImages && scannedImages.length > 0) {
        setImage(scannedImages[0]); // Set local image path
      }
    } catch (err) {
      console.warn('Scan cancelled or failed:', err);
    }
  };

  return (
    <>
      <CustomHeader rightIcon="bell" onRightPress={() => console.log('Bell pressed')} />
      <Box flex={1} bg="gray.100" safeArea>
        <ScrollView >
          {/* Header Section */}
          <Box bg="rgb(63 98 137)" borderRadius={'3xl'} p={4} mt={0.5}>
            <VStack>
              <Text fontSize="lg" color="gray.100">Welcome</Text>
              <Text fontSize="2xl" fontWeight="bold" color="white">ANUJA BARSING</Text>
            </VStack>

            {/* Stats Cards */}
            <HStack justifyContent="space-between" mt={6}>
              <VStack bg="white" p={3} borderRadius="lg" alignItems="center" flex={1} mr={2}>
                <Icon as={Ionicons} name="speedometer" size="md" color="#ff4d4d" />
                <Text color="gray.600" fontSize="xs">Last Reading</Text>
                <Text bold fontSize="md">1250 units</Text>
              </VStack>

              <VStack bg="white" p={3} borderRadius="lg" alignItems="center" flex={1} mx={1}>
                <Icon as={MaterialIcons} name="attach-money" size="md" color="#2ecc71" />
                <Text color="gray.600" fontSize="xs">Last Bill</Text>
                <Text bold fontSize="md">$45.20</Text>
              </VStack>

              <VStack bg="white" p={3} borderRadius="lg" alignItems="center" flex={1} ml={2}>
                <Icon as={Ionicons} name="alert-circle" size="md" color="#f1c40f" />
                <Text color="gray.600" fontSize="xs">Pending Bill</Text>
                <Text bold fontSize="md">$65.20</Text>
              </VStack>
            </HStack>

            <Center mt={8}>
              <Text mt={2} fontSize="md" color="white">Capture Meter Reading</Text>
              <Text fontSize="xs" color="gray.200">Upload your latest LPG reading</Text>
              <Pressable bg="white" borderRadius="full" p={4} mt={6} onPress={()=>openCamera()}>
                <Icon as={Ionicons} name="camera" size="xl" color="rgb(63 98 137)" />
              </Pressable>
            </Center>
            {image ? (
              <VStack mt={10} alignItems="center">
                <Text color="white">Preview:</Text>
                <Image
                  source={{ uri: image }}
                  alt="Scanned Image"
                  resizeMode="contain"
                  width="80%"
                  height={300}
                  borderRadius={10}
                  mt={3}
                />
              </VStack>
            ) : null}
          </Box>

          {/* Last Bill Section */}
          <Box mt={2.5} bg="white" p={4} borderRadius="2xl" shadow={3}>
            <HStack justifyContent="space-between" alignItems="center">
              <VStack>
                <Text fontSize="lg" bold>Last Bill</Text>
                <Text>$65.60 Amount</Text>
                <Text color="gray.500">Due Date: 15 Jan 2025</Text>
              </VStack>
              <VStack alignItems="flex-end">
                <Text color="red.500">Status : Pending</Text>
                <Button size="sm" mt={2} colorScheme="rgb(63 98 137)" borderRadius="lg">Pay Now</Button>
              </VStack>
            </HStack>
          </Box>

          {/* Bill Summary */}
          <Box mt={2.5} bg="white" p={4} borderRadius="2xl" shadow={4} mb={1}>
            <Text fontSize="lg" bold mb={2}>Bill Summary</Text>
            <Text>Units Consumed                <Text bold>250 units</Text></Text>
            <Text>Rate                                     <Text bold>$0.18/unit</Text></Text>
            <Text>Base Charge                       <Text bold>$5.00</Text></Text>
            <Text>Tax                                       <Text bold>$3.20</Text></Text>
            <Divider my={2} />
            <Text>Total Amount                      <Text bold color="red.600">$65.60</Text></Text>
          </Box>

        </ScrollView>
      </Box>
    </>
  );

  // return (
  //   <View style={styles.container}>
  //     <ScrollView>
  //       {/* Header Section */}
  //       <View style={styles.header}>
  //         <Text style={styles.welcomeText}>Welcome</Text>
  //         <Text style={styles.userName}>ANUJA BARSING</Text>

  //         <View style={styles.topIcons}>
  //           <Ionicons name="notifications" size={24} color="white" style={styles.icon} />
  //           <Ionicons name="settings" size={24} color="white" />
  //         </View>

  //         {/* Stats Cards */}
  //         <View style={styles.statsContainer}>
  //           <View style={styles.statCard}>
  //             <Ionicons name="speedometer" size={24} color="#ff4d4d" />
  //             <Text style={styles.statLabel}>Last Reading</Text>
  //             <Text style={styles.statValue}>1250 units</Text>
  //           </View>
  //           <View style={styles.statCard}>
  //             <MaterialIcons name="attach-money" size={24} color="#2ecc71" />
  //             <Text style={styles.statLabel}>Last Bill</Text>
  //             <Text style={styles.statValue}>$45.20 amount</Text>
  //           </View>
  //           <View style={styles.statCard}>
  //             <Ionicons name="alert-circle" size={24} color="#f1c40f" />
  //             <Text style={styles.statLabel}>Pending Bill</Text>
  //             <Text style={styles.statValue}>$65.20 due</Text>
  //           </View>
  //         </View>

  //         {/* Capture Button */}
  //         <TouchableOpacity style={styles.captureButton}>
  //           <Ionicons name="camera" size={28} color="white" />
  //         </TouchableOpacity>

  //         <Text style={styles.captureText}>Capture Meter Reading</Text>
  //         <Text style={styles.captureSubText}>Upload your latest LPG reading</Text>
  //       </View>

  //       {/* Bill Section */}
  //       <View style={styles.card}>
  //         <View style={styles.rowBetween}>
  //           <View>
  //             <Text style={styles.cardTitle}>Last Bill</Text>
  //             <Text style={styles.cardAmount}>$65.60 Amount</Text>
  //             <Text style={styles.cardSub}>Due Date: 15 Jan 2025</Text>
  //           </View>
  //           <View style={{ alignItems: 'flex-end' }}>
  //             <Text style={styles.pendingStatus}>Status : Pending</Text>
  //             <TouchableOpacity style={styles.payNowBtn}>
  //               <Text style={styles.payNowText}>Pay Now</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>

  //       {/* Bill Summary */}
  //       <View style={styles.card}>
  //         <Text style={styles.cardTitle}>Bill Summary</Text>
  //         <Text style={styles.summaryText}>Units Consumed      <Text style={styles.bold}>250 units</Text></Text>
  //         <Text style={styles.summaryText}>Rate                        <Text style={styles.bold}>$0.18/unit</Text></Text>
  //         <Text style={styles.summaryText}>Base Charge           <Text style={styles.bold}>$5.00</Text></Text>
  //         <Text style={styles.summaryText}>Tax                          <Text style={styles.bold}>$3.20</Text></Text>
  //         <View style={styles.separator} />
  //         <Text style={styles.summaryText}>Total Amount         <Text style={styles.total}>$65.60</Text></Text>
  //       </View>
  //     </ScrollView>
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f7f9fc', },
//   header: {
//     backgroundColor: '#0340c0', paddingTop: 50, paddingBottom: 80, paddingHorizontal: 20,
//     borderBottomLeftRadius: 40, borderBottomRightRadius: 40, position: 'relative',
//   },
//   welcomeText: { color: 'white', fontSize: 16, },
//   userName: {
//     color: 'white', fontSize: 22, fontWeight: 'bold',
//   },
//   topIcons: { position: 'absolute', right: 20, top: 50, flexDirection: 'row', gap: 15, },
//   statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, },
//   statCard: { backgroundColor: 'white', padding: 12, borderRadius: 10, alignItems: 'center', flex: 1, marginHorizontal: 4, },
//   statLabel: { fontSize: 12, color: '#777', marginTop: 4, },
//   statValue: { fontSize: 14, fontWeight: 'bold', color: '#333', },
//   captureButton: {
//     backgroundColor: '#ff4d4d', width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', position: 'absolute',
//     bottom: 10, left: '57%', transform: [{ translateX: -30 }], elevation: 5,
//   },
//   captureText: { marginTop: 40, color: '#fff', fontWeight: 'bold', textAlign: 'center', },
//   captureSubText: { color: '#ddd', textAlign: 'center', fontSize: 12, },
//   card: { backgroundColor: 'white', margin: 15, padding: 16, borderRadius: 15, elevation: 3, },
//   rowBetween: { flexDirection: 'row', justifyContent: 'space-between', },
//   cardTitle: { fontSize: 16, fontWeight: '600', color: '#333', },
//   cardAmount: { fontSize: 18, fontWeight: 'bold', color: '#0340c0', marginVertical: 4, },
//   cardSub: { fontSize: 12, color: '#555', },
//   pendingStatus: { fontSize: 12, color: '#e74c3c', marginBottom: 5, },
//   payNowBtn: { backgroundColor: '#3498db', paddingVertical: 6, paddingHorizontal: 14, borderRadius: 8, },
//   payNowText: { color: 'white', fontWeight: 'bold', fontSize: 13, },
//   summaryText: { fontSize: 13, marginVertical: 3 },
//   bold: { fontWeight: 'bold', color: '#333', },
//   total: { fontWeight: 'bold', fontSize: 16, color: '#0340c0', },
//   separator: { borderBottomWidth: 1, borderColor: '#eee', marginVertical: 8, },
// });
