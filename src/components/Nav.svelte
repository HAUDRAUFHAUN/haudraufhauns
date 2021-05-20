<script>
  import { draw } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import nightwind from "nightwind/helper";
  import { darkTheme } from "@/store.js";
  let hide = "true";

  function setTheme() {
    try {
      darkTheme.update((n) => !n);
      if (document.documentElement.classList.contains("dark")) {
        // console.log($darkTheme);
        nightwind.toggle();
      } else {
        // console.log($darkTheme);
        nightwind.toggle();
      }
    } catch (error) {
      console.log(error);
    }
  }

  let menuItems = [
    { link: "/", name: "Home" },
    { link: "/blog", name: "Blog" },
  ];
</script>

<div class="max-w-full mx-auto" id="nav">
  <div
    class="relative z-10 pb-2 bg-white dark:bg-gray-800 sm:pb-8 md:pb-10 lg:max-w-full lg:w-full lg:pb-14 xl:pb-16"
  >
    <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
      <nav
        class="relative flex items-center justify-between sm:h-10 lg:justify-start lg:w-full"
        aria-label="Global"
      >
        <div
          class="flex-row items-center justify-between hidden md:w-full md:flex"
        >
          <div
            class="hidden md:block lg:block xl:block md:ml-10 md:pr-4 md:space-x-8"
          >
            <a
              href="/"
              class="text-xl tracking-wide font-ibm-plex-mono xl:text-2xl 2xl:text-3xl dark:text-white"
              >haudraufhaun</a
            >
            {#each menuItems as item}
              <a
                href={item.link}
                class="p-3 font-medium text-green-500 rounded-md font-ibm-plex-mono hover:text-green-800 hover:bg-green-300 dark:text-white dark:hover:text-green-800 dark:hover:bg-green-300"
                >{item.name}</a
              >
            {/each}
          </div>
          <div class="items-center justify-center justify-self-end">
            <button
              class="right-0 flex items-center p-1 text-gray-600 rounded-lg fill-current focus:outline-none place-self-end dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600"
              on:click={() => setTheme()}
              aria-label="Change theme"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="self-center text-yellow-400 stroke-current w-7 h-7 dark:text-blue-300"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                {#if $darkTheme}
                  <path d="M0 0h24v24H0z" stroke="none" /><path
                    in:draw={{ easing: sineIn }}
                    d="M12 3h.393a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992zM17 4a2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2 2 2 0 002-2M19 11h2m-1-1v2"
                  />
                {:else}
                  <path d="M0 0h24v24H0z" stroke="none" /><circle
                    in:draw={{ easing: sineIn }}
                    cx="12"
                    cy="12"
                    r="3"
                  /><path
                    in:draw={{ easing: sineIn }}
                    d="M6 6h3.5L12 3.5 14.5 6H18v3.5l2.5 2.5-2.5 2.5V18h-3.5L12 20.5 9.5 18H6v-3.5L3.5 12 6 9.5z"
                  />
                {/if}
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>

    <!--
		  Mobile menu, show/hide based on menu open state.
  
		  Entering: "duration-150 ease-out"
			From: "opacity-0 scale-95"
			To: "opacity-100 scale-100"
		  Leaving: "duration-100 ease-in"
			From: "opacity-100 scale-100"
			To: "opacity-0 scale-95"
		-->
    <div class="right-0 md:hidden">
      <div class:hidden={hide === "false"}>
        <div class="flex items-center justify-between px-4">
          <div>
            <button
              on:click={() => (hide = "false")}
              aria-label="Toggle mobile menu"
              class="inline-flex items-center p-2 text-gray-400 bg-white rounded-md dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                /></svg
              >
            </button>
          </div>
          <a href="/" class="p-1 text-xl font-ibm-plex-mono dark:text-white"
            >haudraufhaun</a
          >
          <button
            class="right-0 grid p-1 text-gray-600 rounded-full fill-current place-items-center dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
            on:click={() => nightwind.toggle()}
            aria-label="Change theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-black dark:text-white"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
              ><path d="M0 0h24v24H0z" stroke="none" /><path
                d="M6.8 11a6 6 0 1010.396 0l-5.197-8-5.2 8zM12 3v17M12 12l3.544-3.544M12 17.3l5.558-5.558"
              /></svg
            >
          </button>
        </div>
      </div>
    </div>
    <div class:hidden={hide === "true"}>
      <div
        class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
      >
        <div
          class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
        >
          <div class="flex items-center justify-between px-5 pt-4">
            <div class="-mr-2">
              <button
                type="button"
                on:click={() => (hide = "true")}
                aria-label="Toggle mobile menu"
                class="inline-flex items-center justify-center p-2 text-red-500 bg-white rounded-md dark:bg-gray-800 dark:text-red-300 hover:text-red-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close main menu</span>
                <!-- Heroicon name: x -->
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  /></svg
                >
              </button>
            </div>
          </div>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-2 pt-2 pb-3 space-y-1" role="none">
              {#each menuItems as item}
                <a
                  href={item.link}
                  class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-green-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600"
                  role="menuitem"
                  on:click={() => (hide = "true")}>{item.name}</a
                >
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @media print {
    #nav {
      display: none;
    }
  }
</style>
