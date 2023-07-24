import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
	palette: {
		primary: {
			light: "#77bbec",
			main: "#3a7ec5",
			dark: "#275093",
		},
		secondary: {
			light: "#87f583",
			main: "#2aed40",
			dark: "#00b021",
		},
	},
	typography: {
		h5: {
			fontWeight: 600,
		},
		h4: {
			color: "#87f583",
			":hover": {
				color: "#fff",
			},
		},
		h3: {
			color: "#60f162",
			fontStyle: "italic",
		},
	},
});
