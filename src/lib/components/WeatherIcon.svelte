<script lang="ts">
  import { createIcons, icons } from 'lucide';
  import { onMount } from 'svelte';
  const { weatherCode }: { weatherCode?: string } = $props();

  function getIcon(): string {
    switch (weatherCode) {
      case '01d':
        return 'sun';
      case '01n':
        return 'moon';
      case '02d':
      case '03d':
        return 'cloud-sun';
      case '02n':
      case '03n':
        return 'cloud-moon';
      case '04d':
      case '04n':
        return 'cloudy';
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        return 'cloud-rain';
      case '11d':
      case '11n':
        return 'cloud-lightning';
      case '13d':
      case '13n':
        return 'cloud-snow';
      case '50d':
      case '50n':
        return 'wind';
      default:
        return 'hexagon';
    }
  }

  onMount(() => {
    createIcons({ icons });
  });
</script>

{#key weatherCode}
  <i data-lucide={getIcon()} class="size-8"></i>
{/key}
