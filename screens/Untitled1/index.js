import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.ZVmzeSce}></TextInput><ActivityIndicator style={styles.BLqIGxMy}></ActivityIndicator><CheckBox style={styles.PnXhSCeq} title="Checkbox Title"></CheckBox><TextInput style={styles.UCRoSapg}></TextInput><TextInput style={styles.pUkfcHwG}></TextInput><TextInput style={styles.hImVUDLo}></TextInput><ActivityIndicator style={styles.DilIqbmq}></ActivityIndicator></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ZVmzeSce: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  BLqIGxMy: {
    width: 50,
    height: 50
  },
  PnXhSCeq: {
    width: 183,
    height: 69
  },
  UCRoSapg: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  pUkfcHwG: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  hImVUDLo: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  DilIqbmq: {
    width: 50,
    height: 50
  }
});
export default Untitled1;