<template>
    <h6>Azure Application:{{ applicationName }}</h6>
    <h6>Azure Web API Url:{{ webAPIUrl }}</h6>
</template>


<script lang="ts" setup>
import { toRefs, computed } from "vue";

let applicationName = computed(() => {
    console.log('import.meta.env',import.meta.env)
  return import.meta.env.VITE_Display_Application
});

let webAPIUrl = computed(() => {
  return import.meta.env.VITE_WebApi_RouteURI
});

</script>