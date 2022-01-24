<script>
   import { GamestateStore } from "../gamestate";

   export let cell;

   const logTableVals = (table) => {
      const valTable = table.map((subTable => subTable.map(curCell => curCell.value)));
      console.table(valTable);
   }

   const setValue = () => {
      GamestateStore.update((gamestate) => {
         
         let newGamestate = gamestate;
         newGamestate.table[cell.subTable][cell.pos].value = 'h';

         // logTableVals(newGamestate.table);
         return newGamestate;
      });
   }
</script>

<div class="sudokuCell" on:click={setValue}>
   {#if cell.static}
      <div class="valueWrapper static">
         {cell.value}
      </div>
   {:else}
      <div class="valueWrapper dymanic">
         {#if cell.value}
            {cell.value}
         {/if}
      </div>
   {/if}
</div>

<style>

   :root {
      --cell-size: 50px;
   }

   .sudokuCell {
      border: 1px solid #000;
      width: var(--cell-size);
      height: var(--cell-size);
      padding: 5px;
   }

   .valueWrapper {
      width: 100%;
      height: 100%;
      
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 28px;
   }

   .valueWrapper.static {
      border-radius: 50%;
      background-color: #777;
      color: #ccc;
   }

</style>