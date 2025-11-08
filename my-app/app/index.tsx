import { Text, View } from "react-native";
import App from "../app.js";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
		<App/>
    </View>
  );
}
