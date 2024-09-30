import { defaultStyles } from "@/styles";
import CustomHeader from "components/CustomHeader";
import { Stack } from "expo-router";
import { View } from "react-native";

const SongsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }}
        />
      </Stack>
    </View>
  );
};

export default SongsScreenLayout;
