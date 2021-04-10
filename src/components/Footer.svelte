<script>
  var date = new Date();
  var year = date.getFullYear();
</script>

<br />

<footer
  class="relative bottom-0 left-0 right-0 flex flex-col content-center justify-center min-w-full p-4 font-sans text-xs text-center text-green-700 bg-transparent justify-items-center sm:text-base md:text-lg md:font-medium dark:bg-gray-800"
>
  <div
    class="justify-center text-xs justify-items-center sm:text-base md:text-lg xl:text-xl font-ibm-plex-mono"
  >
    Copyright &copy;{year}<br /><a href="/legal" class="underline">Imprint</a>
  </div>
</footer>

<style>
  @media print {
    footer {
      display: none;
    }
  }
</style>
