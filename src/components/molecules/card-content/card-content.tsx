import { ContentWrapper, Image } from "./styled";

import Logo from "../../../assets/icons/logo.svg";
import { Typography } from "../../atoms/typography/typography";

interface ContentProps {
  title: string;
  subTitle: string;
  description: string;
  children?: React.ReactNode;
}

export const CardContent = ({
  title,
  subTitle,
  description,
  children,
}: ContentProps) => {
  return (
    <ContentWrapper>
      <Image src={Logo} title="logo" alt="logo" />
      <Typography
        variant="h4"
        sx={{
          color: "#353535",
          marginBottom: { mobile: "20px", tablet: "20px" },
          fontSize: { mobile: "28px", tablet: "40px" },
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#64748B",
          marginBottom: { mobile: "8px", tablet: "8px" },
          fontSize: { mobile: "16px", tablet: "20px" },
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        {subTitle}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#64748B",
          marginBottom: { mobile: "64px", tablet: "40px" },
          fontSize: { mobile: "16px", tablet: "20px" },
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
      {children}
    </ContentWrapper>
  );
};
