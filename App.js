
// import {StyleSheet, View, SafeAreaView, StatusBar,Platform} from 'react-native';
import {View} from 'react-native';
import React from 'react';
import WelcomeScreen from './app/screen/WelcomeScreen';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
export default function App() {
return <WelcomeScreen />;
}

/* <View style={{
backgroundColor: "#fff",
flex: 1,
flexDirection: 'row', //horizonatal
justifyContent: 'center', //main 
alignItems: 'center', //secondary
alignContent: 'center',
// flexWrap: 'wrap',
}}>
<View  style={{
  backgroundColor: "dodgerblue",
  // flexBasis: 100, // width pr height
  // flex: 1,
 width: 100,
  height: 100,
  // flex: -1,

}}/>
<View  style={{
  backgroundColor: "gold",
  width: 100, 
  height: 100,
  // top:20,
  // left:20, 
  // position: 'absolute',
}}/>
<View  style={{
  backgroundColor: "tomato",
  width: 100, height: 100,
}}/>


</View> */




// //     <SafeAreaView style={[styles.container]}>
// // <View style={{
// // backgroundColor: "dodgerblue",
// // height: '30%',
// // width: '100%',

// }}>




      {/* <Button 
      color="black"
      title='Click me' onPress={() => 
         console.log("Hello world")
      }
      /> */}
//         </SafeAreaView>
        
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

   
//   },
// });
