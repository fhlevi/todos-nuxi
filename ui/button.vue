<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface ButtonProps {
    color?: string;
    position?: 'absolute' | 'relative' | 'fixed' | 'sticky';
    height?: string;
    width?: string;
    class?: string;
    onClick?: () => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
    color: 'default',
    position: 'relative',
    height: 'auto',
    width: 'auto',
    class: '',
    onClick: () => {},
});

const colors: Record<string, string> = {
    default: 'bg-primary-10',
};

const handleClick = (e: Event) => {
    e.stopPropagation();
    if (props.onClick) {
        props.onClick();
    }
};
</script>

<template>
    <button :class="[colors[props.color], props.position, props.class, 'disabled:bg-slate-300 disabled:text-gray-400']"
        :style="{ width: props.width, height: props.height }" @click="handleClick">
        <slot></slot>
    </button>
</template>
