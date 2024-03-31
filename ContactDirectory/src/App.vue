<script setup lang="ts">
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
import { useThemeHandler} from 'maz-ui'
polyfillCountryFlagEmojis();
useThemeHandler({storageThemeKey: 'system'});
</script>

<template>
  <h1>Contact.me</h1>
  <div>
  </div>
  <router-view/>
</template>
