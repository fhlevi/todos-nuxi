<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',
    props: {
        color: {
            type: String,
            default: 'default',
            validator: (value) => ['default'].includes(value),
        },
        position: {
            type: String,
            default: '',
        },
        height: {
            type: String,
            default: 'auto',
        },
        width: {
            type: String,
            default: 'auto',
        },
        class: {
            type: String,
            default: '',
        },
        onClick: {
            type: Function,
            default: () => {},
        },
    },
    setup(props) {
        const colors = {
            default: 'bg-primary-10',
        }[props.color];

        const handleClick = (e) => {
            e.stopPropagation();
            if (props.onClick) {
                props.onClick();
            }
        };

        return {
            props,
            colors,
            handleClick,
        };
    },
});
</script>

<template>
    <button :class="[colors, props.position, props.class, 'disabled:bg-slate-300 disabled:text-gray-400']"
        :style="{ width: props.width, height: props.height }" @click="handleClick">
        <slot></slot>
    </button>
</template>
