import darkColors from "@/redux/slices/themeSlice/colors/darkColors";
import { render } from "@testing-library/react-native";
jest.mock("@/redux/slices/themeSlice/colorsHooks");
import * as colorsHooks from "@/redux/slices/themeSlice/colorsHooks";
import ErrorScreen from "./ErrorScreen";

const mockColors = darkColors;

describe("ErrorScreen", () => {
  beforeEach(() => {
    jest.spyOn(colorsHooks, "useColors").mockReturnValue(mockColors);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders - isFetching", () => {
    const { toJSON } = render(
      <ErrorScreen
        refetch={() => {}}
        isFetching={true}
        error="This is the error"
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
