import { Dimensions, Platform } from "react-native";
import { colors } from "./colors";
import { image } from "./images";

const mHeight = Dimensions.get('window').width;
const mWidth = Dimensions.get('window').height;
const marginTop = Platform.OS == "android"?5:30
export {mHeight,mWidth,colors,image,marginTop}