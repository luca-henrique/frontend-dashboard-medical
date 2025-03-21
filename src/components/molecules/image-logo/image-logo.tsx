import Logo from "~/assets/icons/logo.svg";
import { Image } from "./styled";

type ImageLogoProps = React.ComponentProps<typeof Image>

export const ImageLogo = ({ ...props }: ImageLogoProps) => <Image src={Logo}  {...props} />