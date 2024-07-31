<template>
  <NuxtLayout @click="closeModal">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { clearCityList } = useSearch();
const closeModal = () => {
  clearCityList();
};
</script>
