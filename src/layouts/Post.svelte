<script>
  import { metatags } from "@roxi/routify";
  export let title,
    description = "";

  $: metatags.title = title;
  $: metatags.description = description;
</script>

  <h1
    class="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-6 pb-2 font-syne font-semibold"
  >
    {title}
  </h1>
  <div
    class="prose md:prose-lg lg:prose-xl dark:text-white max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
    id="post-content"
  >
    <slot />
  </div>
