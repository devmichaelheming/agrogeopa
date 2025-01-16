import { Dispatch, SetStateAction } from "react";

export interface BannerProps {
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}
