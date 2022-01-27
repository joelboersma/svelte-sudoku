import { writable } from "svelte/store";

const randomArrayElem = (arr) => {
   return arr[Math.floor(Math.random() * arr.length)];
}

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

const fillDiagonals = (table) => {
   const SUB_TABLES_TO_FILL = [0, 4, 8];
   for (let subTableIndex of SUB_TABLES_TO_FILL) {
      let subTable = table[subTableIndex];
      let vals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let i = 0; i < subTable.length; i++) {
         const val = randomArrayElem(vals);
         subTable[i].value = val;
         vals = vals.filter(n => n != val);
      }
      table[subTableIndex] = subTable;
   }
   return table;
}

// const fillDiagonals = (table) => {
//    return table;
// }

const generateTable = () => {
   let diagonalFilledTable = fillDiagonals(EMPTY_TABLE);
   return diagonalFilledTable;
}

export const GamestateStore = writable({
   table: generateTable()
});