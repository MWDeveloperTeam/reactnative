import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  Alert
} from "react-native";

export default function App() {
  const onPressLearnMore = () => {
    Alert.alert('Buttun pressed')
  }
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="small" color="#000" animating={false}/>
      <ActivityIndicator size="large" color="#000" hidesWhenStopped={true}/> */}
      <Button
        onPress={onPressLearnMore}
        title="Learn More"      
       
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 25,
    fontWeight: "800",
  },
});
