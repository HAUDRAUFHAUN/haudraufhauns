<script>
  import { metatags } from "@roxi/routify";
  export let title,
    description = "";

  $: metatags.title = title;
  $: metatags.description = description;
</script>

<div id="content">
  <h1
    class="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-6 pb-2 font-syne font-semibold"
  >
    {title}
  </h1>
  <div
    class="prose-sm md:prose lg:prose-lg dark:text-white max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
    id="post-content"
  >
    <slot />
  </div>
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
