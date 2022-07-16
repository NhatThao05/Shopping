import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { BannerImageCover } from "../../styles/banner"

export default function Banner() {
 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down("md"));
 return (
  <BannerImageCover src="https://as2.ftcdn.net/v2/jpg/02/87/89/43/1000_F_287894324_6OjnlFy3k4P8o5YCN2bVBNgwSKfnVjTR.jpg" />
 )
}
