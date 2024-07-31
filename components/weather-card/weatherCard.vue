<template>
  <div>
    <div v-if="cityList.count === 0" class="message-warning">
      Нічаго не знайдено
    </div>
    <div class="message">Не більше 5-ти карток</div>
    <div class="weather-card-wrapper">
      <div
        v-for="(weather, i) in weathers"
        :key="weather.id"
        class="weather-card"
      >
        <button class="weather-card-button" @click="getWeather(weather.id, i)">
          День
        </button>
        <button class="weather-card-button" @click="getWeatherDays(weather, i)">
          5 Днів
        </button>
        <button @click="deleteCard(i)">X</button>
        <Schedule :weather="weather" :index="i" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { getWeather, getWeatherDays, weathers, deleteCard, cityList } =
  useSearch();
</script>

<style lang="scss" scoped>
.weather-card-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
}
.weather-card {
  border: 1px solid #000000;
  width: 360px;
  border-radius: 6px;
  min-height: 100px;
  margin: 10px 0px;
  margin-right: 10px;

  .weather-card-button {
    margin: 4px;
    cursor: pointer;
  }
}
.message {
  margin-left: 10px;
  margin-top: 20px;
}
.message-warning {
  position: absolute;
  margin-left: 10px;
  margin-bottom: 10px;
  color: red;
}
</style>
