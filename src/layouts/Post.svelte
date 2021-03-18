<script>
  import { metatags } from "@roxi/routify";
  export let title,
    description = "";

  $: metatags.title = title + " Post";
  $: metatags.description = description;
</script>

<h1 class="text-xl md:text-2xl lg:text-4xl xl:text-5xl mb-6 pb-2 font-syne">
  {title}
</h1>
<div
  class="prose md:prose-lg lg:prose-xl dark:text-white  max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl"
  id="post-content"
>
  <slot />
</div>

