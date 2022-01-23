import { writable } from "svelte/store";

const generateTable = () => {

   let table = [];

   for (let i = 0; i < 9; i++) {
      let subTable = [];
      for (let j = 0; j < 9; j++) {
         const isStatic = Math.round(Math.random()) == 0;
         subTable.push({
            static: isStatic,
            value: isStatic ? Math.round(Math.random() * 8 + 1) : undefined
         });
      }
      table.push(subTable);
   }

   return table;
}

export const GamestateStore = writable({
   table: generateTable()
});