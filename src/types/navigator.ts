import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Character } from "./response";

export type StackParams = {
  Home: undefined;
  Details: Character;
};

export type HomeProps = NativeStackScreenProps<StackParams, "Home">;

export type DetailsProps = NativeStackScreenProps<StackParams, "Details">;
