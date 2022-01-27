<script>
   import { GamestateStore } from "../gamestate";
   import SudokuSubTable from "./SudokuSubTable.svelte";

   console.table($GamestateStore.table)
</script>

<div id="SudokuTable">
   {#each $GamestateStore.table as subTable (subTable[0].subTable)}
      <SudokuSubTable {subTable} />
   {/each}
</div>

<style>
   #SudokuTable {
      border: 1px solid #000;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: min-content;
   }
</style>