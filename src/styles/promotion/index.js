import {Box, styled} from "@mui/system"
import { Colors } from "../theme"

export const PromotionContainer = styled(Box)(() => ({
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 padding: '10px 5px 10px 5px',
 background: Colors.primary,
 color: Colors.light_gray
}))