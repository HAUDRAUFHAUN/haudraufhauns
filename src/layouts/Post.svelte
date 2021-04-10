<script>
  import { metatags } from "@roxi/routify";
  export let title,
    description = "";

  $: metatags.title = "haudraufhaun - Blog: " + title;
  $: metatags.description = description;
</script>

<div id="content" class="grid grid-cols-1 place-items-center">
  <article class="w-full md:w-5/6 lg:w-4/6 2xl:w-1/2">
    <h1
      class="pb-2 mb-6 text-xl font-semibold text-left text-gray-900 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-ibm-plex-mono"
    >
      {title}
    </h1>
    <div
      class="max-w-xs prose-sm md:prose lg:prose-lg dark:text-white sm:max-w-md md:max-w-3xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
      id="post-content"
    >
      <slot />
    </div>
  </article>
</div>

<style>
  @media print {
    @page {
      margin: 0.5cm;
    }
    #content {
      width: 100%;
      -webkit-print-color-adjust: exact !important;
    }
  }
</style>
