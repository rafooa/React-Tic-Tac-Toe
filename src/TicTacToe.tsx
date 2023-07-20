import { Grid, Box, Button, Typography, ButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRef, useState } from "react";

const Item = styled(Button)(({ theme }) => ({
	backgroundColor: "#1A2027",
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
		backgroundColor: "#fff",
	},
	":disabled": {
		backgroundColor: "#fff",
		pointerEvents: "none",
	},
}));

export const TicTacToe = () => {
	const [currPlayer, setcurrPlayer] = useState(1);
	const [turns, setTurns] = useState(1);
	const [currTurn, setcurrTurn] = useState(false);
	const [tie, setTie] = useState(true);
	const [win, setWin] = useState(true);
	const p1Moves = useRef<Array<number>>([]);
	const p2Moves = useRef<Array<number>>([]);
	const [gameEnd, setgameEnd] = useState(false);

	const playerMove = (e: any) => {
		if (currPlayer === 1) {
			e.target.innerText = "O";
			e.target.disabled = true;
			p1Moves.current.push(Number(e.target.value));
		} else if (currPlayer === 2) {
			e.target.innerText = "X";
			e.target.disabled = true;
			p2Moves.current.push(Number(e.target.value));
		}
		setTurns(turns + 1);
		if (gameWon()) {
			setWin(false);
			setcurrTurn(true);
			setgameEnd(true);
		} else if (turns === 9) {
			setTie(false);
			setcurrTurn(true);
		} else {
			currPlayer === 1 ? setcurrPlayer(2) : setcurrPlayer(1);
		}
	};

	const gameWon = () => {
		const winCon = [
			[1, 2, 3],
			[1, 4, 7],
			[1, 5, 9],
			[2, 5, 8],
			[3, 6, 9],
			[3, 5, 7],
			[4, 5, 6],
			[7, 8, 9],
		];

		for (let i = 0; i < 8; i++) {
			if (
				winCon[i].every((val) => p1Moves.current.includes(val)) ||
				winCon[i].every((val) => p2Moves.current.includes(val))
			) {
				return true;
			}
		}

		return false;
	};

	const resetGame = () => {
		window.location.reload();
	};
	return (
		<>
			<Typography variant="h3" gutterBottom>
				React Tic Tac Toe
			</Typography>
			<Box sx={{ flexGrow: 1, width: 300, maxHeight: 350 }}>
				<Grid container spacing={{ xs: 0 }}>
					{Array.from(Array(9)).map((_, index) => (
						<Grid item xs={4} key={index}>
							<Item
								value={index + 1}
								onClick={playerMove}
								sx={
									gameEnd
										? { pointerEvents: "none" }
										: { pointerEvents: "auto" }
								}
							></Item>
						</Grid>
					))}
				</Grid>
			</Box>
			<Typography variant="h4" gutterBottom hidden={currTurn}>
				It is currently Player: {currPlayer}'s turn!
			</Typography>
			<Typography variant="h4" gutterBottom hidden={tie}>
				Game ended in a tie!
			</Typography>
			<Typography variant="h4" gutterBottom hidden={win}>
				Player {currPlayer} has won the game!
			</Typography>
			<Typography variant="h5">
				<Button
					onClick={resetGame}
					sx={{
						border: "1px solid black",
						color: "black",
						backgroundColor: "#fff",
						":hover": {
							backgroundColor: "#cf1515",
						},
					}}
				>
					Reset Game
				</Button>
			</Typography>
		</>
	);
};
