import { getGoldPriceQueryFn } from "@/api/GoldPriceApi";
import ErrorScreen from "@/components/ErrorScreen";
import { useColors } from "@/redux/slices/themeSlice/colorsHooks";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text, View } from "react-native";

function Index() {
  const colors = useColors();

  const { data, status, refetch, isFetching, error } = useQuery({
    queryKey: ["goldPrice"],
    queryFn: getGoldPriceQueryFn,
  });

  if (status === "error") {
    <ErrorScreen
      refetch={refetch}
      isFetching={isFetching}
      error={String(error)}
    />;
  } else if (status == "pending") {
    return (
      <View
        className=" self-stretch flex-1 justify-center items-center"
        style={{ backgroundColor: colors.background }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      style={{ backgroundColor: colors.background }}
      className=" self-stretch flex-1 justify-center items-center"
    >
      <Text style={{ color: colors.text, fontSize: 40 }}>${data?.price}</Text>
    </View>
  );
}

export default Index;
