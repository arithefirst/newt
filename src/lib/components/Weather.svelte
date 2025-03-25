<script lang="ts">
  import config from '$lib';
  import WeatherIcon from './WeatherIcon.svelte';

  type TWeatherData = {
    error: Error | null;
    noConfig: boolean;
    data: {
      weatherCode: string;
      temperature: number;
      weather: string;
    } | null;
  };

  export let data: TWeatherData;
</script>

<div class="weather-container flex items-center justify-center gap-2 rounded-md p-3">
  {#if data.noConfig}
    <div class="text-center text-amber-400">Weather API key not configured</div>
  {:else if data.error}
    <div class="text-red-400">{data.error}</div>
  {:else}
    <WeatherIcon weatherCode={data.data?.weatherCode} />
    <div class="weather-info">
      <span class="temperature text-4xl font-bold">
        {`${data.data?.temperature}${config.weather.units === 'imperial' ? '°F' : config.weather.units === 'metric' ? '°C' : 'K'}`}
      </span>
      <span class="weather-description ml-1 text-4xl">{data.data?.weather}</span>
    </div>
  {/if}
</div>
