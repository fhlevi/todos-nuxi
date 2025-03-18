<script>
import { defineComponent, h } from 'vue';
import { z } from 'zod';

const ContainerSchema = z.object({});

export default defineComponent({
  name: 'Container',
  props: ContainerSchema.shape,
});
</script>

<template>
  <div class="py-8 h-screen w-full">
    <div class="max-w-[421px] mx-auto h-full">
      <slot></slot>
    </div>
  </div>
</template>

<style>
/* Add your styles here if needed */
</style>