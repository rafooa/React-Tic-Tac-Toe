import { makeAutoObservable } from "mobx";

const initBoard = ["", "", "", "", "", "", "", "", ""];

const initPlayers = [
	{
		id: 1,
		name: "Player 1",
		score: 0,
	},
	{
		id: 2,
		name: "Player 2",
		score: 0,
	},
];

interface Player {
	id: number;
	name: string;
	score: number;
}

class Players {
	players: Player[] = initPlayers;
	newPlayer: string = "";
	board: string[] = initBoard;

	constructor() {
		makeAutoObservable(this);
	}
}

const store = new Players();
export default store;
