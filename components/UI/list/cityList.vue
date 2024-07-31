<template>
  <div v-if="cityList.list && cityList.list.length > 0" class="cityList">
    <ul class="cityListItems">
      <li v-for="city in cityList.list" :key="city.id" class="items">
        <button @click="getWeather(city.id)">
          <span class="item">{{ city.name }}</span>
          <span class="item">{{ city.sys.country }}</span>
          <span class="item">{{ city.weather[0].main }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const { cityList, getWeather } = useSearch();
</script>

<style lang="scss" scoped>
.cityList {
  position: absolute;
  top: 58px;
  left: 0px;
  width: 60%;
  padding: 10px 0px;
  z-index: 10;
  background-color: #ffffff;
  .cityListItems {
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #a8a8bb;
    border-radius: 10px;

    .items {
      border-bottom: 1px solid #a8a8bb;
      padding: 10px;
    }
    button {
      width: 100%;
    }
    .item {
      margin-right: 6px;
      padding: 10px;
    }
  }
}
</style>
