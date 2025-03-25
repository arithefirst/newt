<script lang="ts">
  import '../app.css';
  import config from '$lib';
  import Clock from '$lib/components/Clock.svelte';
  import Weather from '$lib/components/Weather.svelte';
  import Buttons from '$lib/components/Buttons.svelte';

  const gradientBase: string = config.colors.baseBg + 'FF';
  const gradientEnd: string = config.colors.baseBg + '00';
  const src = config.image.src ?? '';
  const imageSrc = `url(${src.match(/^https?:\/\//) ? src : `${config.baseURL}/${src}`})`;
  const { data } = $props();

  function getGreeter() {
    const hour = new Date().getHours();
    if (hour >= 23 || hour < 6) {
      return `${config.greetings.late}, ${config.name}${config.greetings.punc}`;
    } else if (hour >= 6 && hour < 12) {
      return `${config.greetings.morning}, ${config.name}${config.greetings.punc}`;
    } else if (hour >= 12 && hour < 17) {
      return `${config.greetings.evening}, ${config.name}${config.greetings.punc}`;
    } else {
      return `${config.greetings.night}, ${config.name}${config.greetings.punc}`;
    }
  }
</script>

<svelte:head>
  <title>Newt</title>
  <link rel="icon" type="image/svg+xml" href={`${config.baseURL}/favicon.svg`} />
</svelte:head>

<main
  class="bg-base text-primarytext gap-config m-0 flex h-screen w-screen flex-col items-center justify-center
	{config.image.enabled ? 'bg-image' : ''}"
  style={config.image.enabled
    ? `--gb:${gradientBase};--ge:${gradientEnd};--i:${imageSrc};--gap:${config.midgap / 4}rem;`
    : `--gap:${config.midgap / 4}rem;`}
>
  <div class="flex gap-64">
    <div class="flex flex-col items-center justify-center gap-3">
      <Clock />
      <span class="text-3xl">{getGreeter()}</span>
    </div>
    <div>
      <span class="text-8xl font-bold">{new Date().toLocaleDateString(config.locale, config.dateFormat)}</span>
      <Weather {data} />
    </div>
  </div>
  <Buttons />
</main>

<style>
  .bg-image {
    background-image: linear-gradient(var(--gb), var(--ge)), var(--i);
    background-size: cover;
  }

  .gap-config {
    gap: calc(var(--gap));
  }
</style>
