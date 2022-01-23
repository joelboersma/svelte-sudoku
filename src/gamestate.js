import { writable } from "svelte/store";

const generateTable = () => {
   let table = Array(9).fill(Array(9));

   for (let i = 0; i < table.length; i++) {
      for (let j = 0; j < table[i].length; j++) {
         const isStatic = Math.round(Math.random()) == 0;
         table[i][j] = {
            static: isStatic,
            value: isStatic ? Math.round(Math.random() * 8 + 1) : undefined
         }
      }
   }

   return table;
}

export const GamestateStore = writable({
   table: generateTable()
});