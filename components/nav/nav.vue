<template>
  <div>
    <div class="search-city-block">
      <UIInput />
      <div class="">
        <button class="add-favorites">До обранного</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-city-block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .add-favorites,
  .add-card {
    border-radius: 10px;
    background: none;
    height: 40px;
    margin: 20px 0px;
    margin-left: 10px;
  }
  .add-card {
    margin-right: 10px;
  }
}
</style>
