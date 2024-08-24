
import {StyleSheet, View, SafeAreaView, StatusBar,Platform} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
export default function App() {
  console.log(useDeviceOrientation());
  return (
    <SafeAreaView style={[styles.container]}>
<View style={{
backgroundColor: "dodgerblue",
height: '30%',
width: '100%',

}}>


</View>

      {/* <Button 
      color="black"
      title='Click me' onPress={() => 
         console.log("Hello world")
      }
      /> */}
        </SafeAreaView>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

   
  },
});
