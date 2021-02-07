<script>
  import { layout, url } from "@roxi/routify";

  let posts = $layout.children;
  console.log(posts);
</script>

{#each posts as node}
  <div
    class="p-8 min-w-full md:py-10 mx-2 my-2 md:my-6 shadow-lg rounded-md prose dark:text-white"
  >
    <h2>
      <a
        class="p-2 rounded-md dark:text-white hover:bg-green-200 hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-green-500"
        href={$url(node.path)}
      >
        {node.title.toUpperCase()}
      </a>
    </h2>
    <p class="text-gray-600 dark:text-gray-50">Some description</p>
  </div>
{/each}
