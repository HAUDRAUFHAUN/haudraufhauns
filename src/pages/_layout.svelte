<script>
  import Nav from "@/components/Nav.svelte";
  import Footer from "@/components/Footer.svelte";
</script>

<div class="dark:bg-gray-800">
  <Nav />
  <main
    class="relative max-w-full min-h-screen p-4 m-4 dark:bg-gray-800 dark:text-white md:mx-11 md:px-11 box"
  >
    <slot />
  </main>
  <Footer />
</div>
