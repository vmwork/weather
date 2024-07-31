<template>
  <div class="search">
    <input
      v-model="searchData"
      class="input"
      type="text"
      placeholder="Введіть місто"
      @keyup.enter="getCity(searchData)"
    />

    <button @click="getCity(searchData)">Знайти та додати картку погоди</button>

    <UIListCityList></UIListCityList>
  </div>
</template>

<script lang="ts" setup>
const searchData = ref('Odessa');
const { getCity, getWeather, cityList } = useSearch();
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  margin-left: 10px;

  button {
    border-radius: 10px;
    background: none;
    height: 40px;
    cursor: pointer;
  }
}
.input {
  margin: 20px 0px;
  margin-right: 10px;

  width: 300px;
  padding: 10px;
  border-radius: 10px;
}
</style>
