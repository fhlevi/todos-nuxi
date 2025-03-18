<script>
import { defineComponent } from "vue";
import { z } from "zod";

const CardSchema = z.object({
  class: z.string().optional(),
  width: z.string().optional().default("100%"),
  height: z.string().optional().default("100%"),
  variant: z.enum(["default", "primary"]).optional().default("default"),
});

export default defineComponent({
  name: "Card",
  props: CardSchema.shape,
  setup(props) {
    const variants = {
      default: "bg-card",
      primary: "bg-primary-20",
    }[props.variant];

    return {
      props,
      variants,
    };
  },
});

</script>

<template>
  <div :class="[variants, props.class]" :style="{ height: props.height, width: props.width }">
    <slot></slot>
  </div>
</template>