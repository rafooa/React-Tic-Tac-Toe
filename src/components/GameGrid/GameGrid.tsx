import { Grid, Box } from "@mui/material";
import { Item } from "../Item";
import store from "../../store";

interface IProps {
	gameEnd: boolean;
	playerMove(index: number): void;
}

export const GameGrid = (props: IProps) => {
	return (
		<Box sx={{ flexGrow: 1, width: 300, maxHeight: 310, mt: 4, mb: 4 }}>
			<Grid container spacing={{ xs: 0 }}>
				{Array.from(Array(9)).map((_, index) => (
					<Grid item xs={4} key={index}>
						<Item
							value={index + 1}
							onClick={() => props.playerMove(index)}
							sx={
								store.board[index] !== ""
									? {
											pointerEvents: "none",
											backgroundColor: "#87f583",
									  }
									: props.gameEnd
									? { pointerEvents: "none" }
									: { pointerEvents: "auto" }
							}
						>
							{store.board[index]}
						</Item>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
