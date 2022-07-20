import { Alert, Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ToastProvider, useToast } from "react-native-toast-notifications";

export default function App() {
  return (
    <ToastProvider>
      <View style={styles.container}>
        <Component />
        <TouchableOpacity onPress={() => Alert.alert("pressed")} style={[styles.touchable, { marginTop: 10 }]}>
          <Text style={{ color: "#fff", textAlign: "center" }}>Press me if you can</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("pressed")} style={styles.touchable}>
          <Text style={{ color: "#fff", textAlign: "center" }}>Press me if you can</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("pressed")} style={[styles.touchable, { marginBottom: 10 }]}>
          <Text style={{ color: "#fff", textAlign: "center" }}>Press me if you can</Text>
        </TouchableOpacity>
      </View>
    </ToastProvider>
  );
}

const Component = () => {
  const toast = useToast();

  return (
    <View style={[StyleSheet.absoluteFillObject, { top: 100 }]}>
      <Button title="bottom" onPress={() => toast.show("I hide touchables behind me", { placement: "bottom" })} />
      <Button title="center" onPress={() => toast.show("I hide touchables behind me", { placement: "center" })} />
      <Button title="top" onPress={() => toast.show("I hide touchables behind me", { placement: "top" })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  touchable: {
    backgroundColor: "tomato",
    padding: 10,
    width: "100%",
  },
});
