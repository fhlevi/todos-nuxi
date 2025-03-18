<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

interface FlexProps {
    direction?: 'col' | 'row';
    class?: string;
};

const props = withDefaults(defineProps<FlexProps>(), {
    direction: 'row',
    class: '',
});

const directions: Record<string, string> = {
    col: 'flex-col',
    row: 'flex-row',
};
</script>

<template>
    <div :class="['flex', directions[props.direction], props.class]">
        <slot></slot>
    </div>
</template>
