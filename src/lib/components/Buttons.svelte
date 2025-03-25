<script lang="ts">
  import { onMount } from 'svelte';
  import { createIcons, icons } from 'lucide';
  import config from '$lib';

  const bconfig = config.buttons;

  onMount(() => {
    createIcons({ icons });
  });
</script>

<div class="gap-config flex flex-col" style="--gap:{config.buttons.gap / 4}rem;">
  <div class="gap-config flex justify-center">
    {#each bconfig.buttons.slice(0, 6) as button}
      <a
        class="bg-dark hover:bg-accent flex h-35 w-45 items-center justify-center rounded-md p-4 shadow-xl transition-all duration-200 ease-in-out hover:-translate-y-[3px] hover:text-base"
        href={button.href}
        title={button.name}
        target="_top"
        aria-label={button.name}
      >
        <i data-lucide={button.icon} class="size-8"></i>
      </a>
    {/each}
  </div>

  {#if bconfig.buttons[6]}
    <div class="gap-config flex justify-center">
      {#each bconfig.buttons.slice(6, 12) as button}
        <a
          class="bg-dark hover:bg-accent flex h-35 w-45 items-center justify-center rounded-md p-4 shadow-xl transition-all duration-200 ease-in-out hover:-translate-y-[3px] hover:text-base"
          href={button.href}
          title={button.name}
          target="_top"
          aria-label={button.name}
        >
          <i data-lucide={button.icon} class="size-8"></i>
        </a>
      {/each}
    </div>
  {/if}
</div>

<style>
  .gap-config {
    gap: calc(var(--gap));
  }
</style>
