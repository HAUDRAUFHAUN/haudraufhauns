<script>
  import { layout, url } from "@roxi/routify";

  let posts = $layout.children;
  console.log(posts);
</script>

{#each posts as node}
  <div
    class="p-8 min-w-full md:py-10 mx-2 my-2 md:my-6 shadow-lg rounded-md dark:text-white dark:bg-gray-900"
  >
    <h2 class="text-xl md:text-2xl lg:text-3xl ">
      <a
        class="rounded-md p-2 border-transparent border-dashed border-b-2 hover:border-green-400 hover:bg-green-200 hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-green-500"
        href={$url(node.path)}
      >
        {node.meta.frontmatter.title}
      </a>
    </h2>
    <br />
    <p class="text-gray-600 dark:text-gray-50">
      {node.meta.frontmatter.description}
    </p>
  </div>
{/each}
