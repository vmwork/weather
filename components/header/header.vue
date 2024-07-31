<template>
  <div class="header-wrapper">
    <div class="nav">
      <NuxtLink class="nav-link" to="/">Головна</NuxtLink>
      <NuxtLink class="nav-link" to="/favorites">Обране</NuxtLink>
    </div>
    <NuxtImg src="/logo.webp" sizes="sm:50px md:200px" />
  </div>
</template>
<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 10px;
  .nav {
    align-self: flex-end;
    padding: 10px 0px;
    margin-left: 10px;
    .nav-link {
      margin-right: 10px;
      padding: 10px;
      font-size: 20px;
      border: 1px solid #000000;
      border-radius: 6px;

      &:hover {
        color: #557fe8;
        border: 1px solid #557fe8;
      }
    }
  }
}
</style>
