<script>
   import SudokuCell from "./SudokuCell.svelte";
   export let subTable;
</script>

<div class="sudokuSubTable">
   {#each subTable as cell (cell.pos)}
      <SudokuCell {cell} />
   {/each}
</div>

<style>
   .sudokuSubTable {
      border: 1px solid #000;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: min-content;
   }
</style>