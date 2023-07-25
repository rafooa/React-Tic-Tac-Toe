import { makeObservable, observable, action } from "mobx";
import { initBoard, initPlayers } from "../data";

interface Player {
	id: number;
	name: string;
	score: number;
}

class Players {
	players: Player[] = initPlayers;
	board: string[] = initBoard;

	constructor() {
		makeObservable(this, {
			players: observable,
			board: observable,
			changeSquare: action,
			addScore: action,
			resetBoard: action,
			resetScore: action,
		});
	}

	changeSquare(index: number, move: string) {
		this.board[index] = move;
	}

	addScore(index: number) {
		this.players[index].score++;
	}

	resetScore() {
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].score = 0;
		}
	}

	resetBoard() {
		this.board = initBoard;
	}
}

export const store = new Players();
