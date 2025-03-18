<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Flex',
    props: {
        direction: {
            type: String,
            default: 'row',
            validator: value => ['col', 'row'].includes(value),
        },
        class: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const directions = {
            col: 'flex-col',
            row: 'flex-row',
        }[props.direction];

        return {
            props,
            directions,
        };
    },
});
</script>

<template>
    <div :class="['flex', directions, props.class]">
        <slot></slot>
    </div>
</template>
