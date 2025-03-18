<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Label",
  props: {
    size: {
      type: String,
      default: "16px",
    },
    class: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "default",
      validator: (value) => ["primary", "default", "midnight"].includes(value),
    },
  },
  setup(props) {
    const colors = computed(
      () =>
        ({
          primary: "text-primary-10",
          default: "text-white",
          midnight: "text-midnight",
        }[props.color])
    );

    return {
      props,
      colors,
    };
  },
});
</script>

<template>
  <div :class="[colors, props.class]" :style="{ fontSize: props.size }">
    <slot></slot>
  </div>
</template>
