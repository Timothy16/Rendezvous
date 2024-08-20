<template>
    <button :disabled="disabled" class="btn-component" >
      <slot />
    </button>
  </template>
  
<script setup >
    const props = defineProps({
        disabled: {
            type: Boolean,
            default: false,
        },
    });
</script>
  
<style scoped>

</style>
  