<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface IconProps {
  variant?: 'default' | 'primary' | 'black';
  icon: string;
}

const props = defineProps<IconProps>();

const variants = computed(() => ({
  default: 'text-white',
  primary: 'text-primary-10',
  black: 'text-black'
}[props.variant || 'default']));
</script>

<template>
  <em :class="[variants, props.icon]" v-bind="$attrs"></em>
</template>
