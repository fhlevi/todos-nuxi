<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from 'radix-vue';
import { defineProps } from 'vue';

interface ScrollAreaProps {
  class?: string;
  orientation?: 'vertical' | 'horizontal';
}

const props = defineProps<ScrollAreaProps>();

const orientation = props.orientation || 'vertical';
</script>

<template>
  <ScrollAreaRoot :class="['relative overflow-hidden', props.class]">
    <ScrollAreaViewport :class="['h-full w-full rounded-[inherit]', orientation === 'vertical' ? 'px-1' : 'py-2']">
      <slot></slot>
    </ScrollAreaViewport>

    <ScrollAreaScrollbar :orientation="orientation" class="flex touch-none select-none transition-colors" :class="orientation === 'vertical' ? 'h-full w-2 border-l border-l-[transparent] p-[1px]' : 'h-2 flex-col border-t border-t-transparent p-[1px]'">
      <ScrollAreaThumb class="relative flex-1 rounded-full bg-textfield-border opacity-15" />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
