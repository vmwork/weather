<template>
  <div class="schedule">
    <div class="schedule-header">
      <span>{{ weather.name }}</span>
    </div>
    <div class="schedule-country">Держава: {{ weather.sys.country }}</div>

    <div class="schedule-description">
      <div class="coord">
        <span>Координати:</span>
        <span> довгота: {{ weather.coord.lon }}</span>
        <span> широта: {{ weather.coord.lat }}</span>
      </div>
      <div v-if="weather.main">
        <div>
          <span>Температура: {{ weather.main.temp }}C</span>
        </div>
        <div>
          <span>Відчувається як: {{ weather.main.feels_like }}C</span>
        </div>
        <div>
          <span>Видимість: {{ weather.visibility }} м.</span>
        </div>
        <div>
          <span>Швидкість вітру: {{ weather.wind.speed }} м.с.</span>
        </div>
      </div>
    </div>
    <div v-if="weather.list" class="schedule-description">
      <div v-for="day in weather.list" :key="day.dt">
        <div class="border">
          <div>
            <span>Дата: {{ day.day }}</span>
          </div>
          <div>
            <span>Средня температура: {{ day.temp }}C</span>
          </div>
          <div>
            <span>Средня швидкість вітру: {{ day.wind }} м.с.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  weather: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.schedule {
  padding: 10px;
  div {
    margin-bottom: 10px;
  }
  .schedule-header {
    display: flex;
    padding: 10px;
    font-size: 16px;
    span {
      padding: 10px;
      font-weight: 600;
    }
  }
  .schedule-description,
  .schedule-country {
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .border {
    border: 1px solid green;
    padding: 10px;
  }
}
</style>
