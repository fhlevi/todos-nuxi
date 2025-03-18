<script setup lang="ts">
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from 'radix-vue';
import { defineProps } from 'vue';
import Icon from '@/ui/icon.vue';

interface DialogProps {
    class?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

const props = defineProps<DialogProps>();
</script>

<template>
    <DialogRoot :open="props.open" @open-change="props.onOpenChange">
        <DialogPortal>
            <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
            <DialogContent
                class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]">
                <header class="flex justify-between items-center mb-4">
                    <DialogTitle class="m-0 text-[17px] font-semibold">
                        <slot name="title"></slot>
                    </DialogTitle>
                    <slot name="close"></slot>
                </header>
                <slot></slot>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>

<style lang="">

</style>