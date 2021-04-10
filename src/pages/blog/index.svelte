<script>
  import { layout, url, metatags } from "@roxi/routify";
  metatags.title = "haudraufhaun - Blog";

  let rawnodes = $layout.children;
  let posts = rawnodes.sort(
    (a, b) =>
      Date.parse(b.meta.frontmatter.published) -
      Date.parse(a.meta.frontmatter.published)
  );
</script>

{#each posts as node}
  {#if node.meta.frontmatter.isDraft != true}
    <div
      class="min-w-full p-8 mx-2 my-2 transition-shadow ease-in-out rounded-md shadow-lg md:py-10 md:my-6 hover:shadow-2xl hover:translate-y-2 duration-400 dark:text-white dark:bg-gray-900"
    >
      <h2 class="text-xl md:text-2xl lg:text-3xl font-ibm-plex-mono">
        <a
          class="p-2 border-b-2 border-transparent border-dashed rounded-md hover:border-green-400 hover:bg-green-200 hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-green-500"
          href={$url(node.path)}
        >
          {node.meta.frontmatter.title}
        </a>
      </h2>
      <br />
      <p class="text-gray-600 dark:text-gray-50 font-ibm-plex-mono">
        {node.meta.frontmatter.description}
      </p>
    </div>
  {:else}
    <div />
  {/if}
{/each}
