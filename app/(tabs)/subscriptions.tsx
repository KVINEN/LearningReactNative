import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-5">
        <Text>Subscriptions</Text>
      </View>
    </SafeAreaView>
  );
};

export default Subscriptions;
