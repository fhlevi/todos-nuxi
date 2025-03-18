<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface LabelProps {
    size?: string;
    class?: string;
    color?: 'primary' | 'default' | 'midnight';
}

const props = defineProps<LabelProps>();

const colors = computed(() => ({
    primary: 'text-primary-10',
    default: 'text-white',
    midnight: 'text-midnight',
}[props.color || 'default']));
</script>

<template>
  <div :class="[colors, props.class]" :style="{ fontSize: props.size }">
    <slot></slot>
  </div>
</template>
