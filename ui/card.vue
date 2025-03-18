<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface CardProps {
  class?: string;
  width?: string;
  height?: string;
  variant?: "default" | "primary";
}

const props = withDefaults(defineProps<CardProps>(), {
  width: "100%",
  height: "100%",
  variant: "default",
});

const variants: Record<string, string> = {
  default: "bg-card",
  primary: "bg-primary-20",
};

</script>

<template>
  <div 
  :class="[variants[props.variant], props.class]" 
  :style="{ height: props.height, width: props.width }">
    <slot></slot>
  </div>
</template>