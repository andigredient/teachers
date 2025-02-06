import { TImageLink } from "src/utils/type";

export type SliderUIProps = {
    imageLink: TImageLink[];
}

export type TPhoto = {
    photo: string;
    onState: React.Dispatch<React.SetStateAction<string>>
}

export type TSlider = {
    photo: string;
    onState: React.Dispatch<React.SetStateAction<string>>
}