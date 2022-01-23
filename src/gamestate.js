import { writable } from "svelte/store";

const generateTable = () => {
   return Array(9).fill(Array(9).fill(null));
}

export const GamestateStore = writable({
   table: generateTable()
});