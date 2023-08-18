<template>
  <div class="alert">
    <slot />
  </div>
</template>

<style scoped>
.alert {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fafafa;
  color: #333;
}
</style>
