<script lang="ts">
  import config from '$lib';
  import { onMount, onDestroy } from 'svelte';

  let date = $state(getDate());
  let interval: number;

  onMount(() => {
    interval = setInterval(() => {
      date = getDate();
    }, 250);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  function getDate(): string {
    const date = new Date();
    let hours = date.getHours();
    let ampm: ' AM' | ' PM' | '' = '';

    // Handle 12-hour format if configured
    if (config.time.twelveHour) {
      ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12 || 12; // Convert 0 to 12 for midnight
    }

    // Pad numbers with leading zeros
    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = date.getMinutes().toString().padStart(2, '0');

    // Only include seconds if configured
    let timeString = `${paddedHours}:${paddedMinutes}`;
    if (config.time.seconds) {
      const paddedSeconds = date.getSeconds().toString().padStart(2, '0');
      timeString += `:${paddedSeconds}`;
    }

    return timeString + ampm;
  }
</script>

<span class="text-8xl font-bold">
  {date}
</span>
