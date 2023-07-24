import { Grid, Button, Typography, TextField, Stack } from "@mui/material";
import { useRef, useState } from "react";
import store from "../../store";
import { observer } from "mobx-react-lite";
import { GameGrid } from "../../components";

const initBoard = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = observer(() => {
	const [currPlayer, setcurrPlayer] = useState(1);
	const [turns, setTurns] = useState(1);
	const [currTurn, setcurrTurn] = useState(false);
	const [tie, setTie] = useState(true);
	const [win, setWin] = useState(true);
	const p1Moves = useRef<Array<number>>([]);
	const p2Moves = useRef<Array<number>>([]);
	const [gameEnd, setgameEnd] = useState(false);

	const playerMove = (index: number) => {
		if (currPlayer === 1) {
			store.board[index] = "O";
			p1Moves.current.push(Number(index + 1));
		} else if (currPlayer === 2) {
			store.board[index] = "X";
			p2Moves.current.push(Number(index + 1));
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
			if (winCon[i].every((val) => p1Moves.current.includes(val))) {
				store.players[0].score++;
				return true;
			} else if (winCon[i].every((val) => p2Moves.current.includes(val))) {
				store.players[1].score++;
				return true;
			}
		}

		return false;
	};

	const newGame = () => {
		store.board = initBoard;
		setcurrPlayer(1);
		setTurns(1);
		setcurrTurn(false);
		setTie(true);
		setWin(true);
		p1Moves.current = [];
		p2Moves.current = [];
		setgameEnd(false);
	};

	const resetGame = () => {
		store.players[0].score = 0;
		store.players[1].score = 0;
		newGame();
	};
	return (
		<>
			<Typography variant="h3" gutterBottom>
				React Tic Tac Toe
			</Typography>
			<Stack direction="row" spacing={2}>
				{store.players.map((player, index: number) => (
					<Grid item key={index} mb={2}>
						<TextField
							focused
							color="secondary"
							sx={{
								display: "inline",
								input: {
									color: "white",
								},
							}}
							size="small"
							label={"Player " + player.id}
							value={player.name}
							variant="outlined"
							onChange={(evt: any) => (player.name = evt.target.value)}
						/>
						<Typography sx={{ display: "inline" }} variant="h5">
							: {player.score}
						</Typography>
					</Grid>
				))}
			</Stack>

			<GameGrid gameEnd={gameEnd} playerMove={playerMove} />

			<Typography variant="h4" gutterBottom hidden={currTurn}>
				It is currently {store.players[currPlayer - 1].name}'s turn!
			</Typography>
			<Typography variant="h4" gutterBottom hidden={tie}>
				Game ended in a tie!
			</Typography>
			<Typography variant="h4" gutterBottom hidden={win}>
				{store.players[currPlayer - 1].name} has won the game!
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
					Reset Score
				</Button>
				<Button
					onClick={newGame}
					sx={{
						border: "1px solid black",
						color: "black",
						backgroundColor: "#fff",
						":hover": {
							backgroundColor: "#03fc49",
						},
						marginLeft: 2,
					}}
				>
					New Game
				</Button>
			</Typography>
		</>
	);
});
