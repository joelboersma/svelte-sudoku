import { writable } from "svelte/store";

const EMPTY_TABLE = (() => {
   let table = [];
   for (let i = 0; i < 9; i++) {
      let subTable = [];
      for (let j = 0; j < 9; j++) {
         subTable.push({
            static: false,
            subTable: i,
            pos: j,
            value: 0
         });
      }
      table.push(subTable);
   }
   return table;
})();

const generateTable = () => {
   
   let table = [];

   for (let i = 0; i < 9; i++) {
      let subTable = [];
      for (let j = 0; j < 9; j++) {
         const isStatic = Math.round(Math.random()) == 0;
         subTable.push({
            static: isStatic,
            subTable: i,
            pos: j,
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