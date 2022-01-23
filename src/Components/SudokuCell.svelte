<script>
   export let cell;

   // console.log(cell)
</script>

<div class="sudokuCell">
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