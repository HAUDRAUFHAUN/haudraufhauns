<!-- routify:options preload="proximity" -->
<script>
  import Nav from "@/components/Nav.svelte";
  import Footer from "@/components/Footer.svelte";
</script>

<Nav />
<main
  class="dark:bg-gray-800 dark:text-white p-4 m-4 md:mx-11 md:px-11 box relative  max-w-full min-h-screen"
>
  <slot />
</main>
<Footer />
