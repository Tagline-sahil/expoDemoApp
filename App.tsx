import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import * as Updates from "expo-updates";

const App = () => {
  useEffect(() => {
    async function checkForUpdates() {
      try {
        // Skip OTA in development
        if (__DEV__) return;

        const update = await Updates.checkForUpdateAsync();

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();

          // 🔥 Reload app to apply update
          await Updates.reloadAsync();
        }
      } catch (error) {
        console.log("OTA update error:", error);
      }
    }

    checkForUpdates();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>Staging Build</Text>
      <View
        style={{
          backgroundColor: "rgba(100, 255, 200, 0.5)",
          width: 200,
          borderWidth: 1,
        }}
      />
      <Text style={{ color: "black" }}>Version: 1.1.4</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 100, 200, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
});
