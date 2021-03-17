<script>
    import { metatags } from "@roxi/routify";
    export let title = "";
  
    $: metatags.title = title;
  </script>
  
  <h1 class="text-xl md:text-2xl lg:text-4xl mb-6 pb-2">{title}</h1>
  <div
    class="prose md:prose-lg lg:prose-xl dark:text-white  max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl"
  >
    <slot />
  </div>