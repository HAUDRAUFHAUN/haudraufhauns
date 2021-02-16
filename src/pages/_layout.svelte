<script>
  import Nav from "@/components/Nav.svelte";
  import Footer from "@/components/Footer.svelte";
  import { darkTheme } from "@/store.js";
</script>

<div id="theme-controller" class:dark={$darkTheme === true}>
  <div class="dark:bg-gray-800">
    <Nav />
    <main
      class="dark:bg-gray-800 dark:text-white p-4 m-4 md:mx-11 md:px-11 box relative  max-w-full min-h-screen"
    >
      <slot />
    </main>
    <Footer />
  </div>
</div>
