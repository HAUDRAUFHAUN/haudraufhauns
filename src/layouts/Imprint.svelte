<script>
  import { metatags } from "@roxi/routify";
  export let title = "";

  $: metatags.title = "haudraufhaun - Impressum: " + title;
</script>

<h1
  class="pb-2 mb-6 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-ibm-plex-mono"
>
  {title}
</h1>
<div
  class="max-w-xs prose md:prose-lg lg:prose-xl dark:text-white sm:max-w-md md:max-w-3xl lg:max-w-5xl"
>
  <slot />
</div>
