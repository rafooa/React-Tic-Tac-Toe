import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Item = styled(Button)(({ theme }) => ({
	backgroundColor: "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
	height: 100,
	width: 100,
	borderRadius: 0,
	fontSize: 70,
	border: "1px solid black",
	":hover": {
		backgroundColor: "#87f583",
	},
}));
