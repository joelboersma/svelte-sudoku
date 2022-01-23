<script>
   export let val;
</script>

<div class="sudokuCell">

</div>

<style>

   :root {
      --cell-size: 60px;
   }

   .sudokuCell {
      border: 1px solid #000;
      width: var(--cell-size);
      height: var(--cell-size);
   }
</style>