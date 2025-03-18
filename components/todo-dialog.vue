<script setup lang="ts">
import { ref, watch, defineProps } from 'vue';
import Button from '@/ui/button.vue';
import Dialog from '@/ui/dialog.vue';
import Flex from '@/ui/flex.vue';
import Label from '@/ui/label.vue';
import Icon from '@/ui/icon.vue';

interface DialogWithData {
  props: {
    isOpen: boolean;
    onRequestClose: () => void;
  };
  data?: Record<string, any>;
}

interface TodoDialogProps {
  dialog: DialogWithData;
  onTodoSubmit: (data: any) => void;
}

const props = defineProps<TodoDialogProps>();

const { dialog, onTodoSubmit } = props;
const { props: dialogProps, data = {} } = dialog;

const todoValue = ref(data.todo || '');

const isDisabled = ref(!todoValue.value);
const isEdit = ref(!!data.id);

watch(() => dialogProps.isOpen, (newVal) => {
  if (newVal) {
    todoValue.value = data.todo || '';
    isDisabled.value = !todoValue.value;
  }
});

const handleSubmit = () => {
  if (todoValue?.value?.trim() === '') {
    return;
  }
  onTodoSubmit({ todo: todoValue.value });
};
</script>

<template>
    <Dialog
    class="w-[421px] rounded-lg p-4"
    :open="dialogProps.isOpen"
    @open-change="dialogProps.onRequestClose"
    >
        <template #title>
            <span class="font-bold text-black">{{ isEdit.value ? 'Edit Todo' : 'Tambah Todo' }}</span>
        </template>
        <template #close>
            <button @click="dialogProps.onRequestClose" class="text-grass11 hover:bg-green4 focus:shadow-green7 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none">
                <Icon icon="fa-solid fa-xmark" variant="black" />
            </button>
        </template>

        <form @submit.prevent="handleSubmit">
            <Flex direction="col" class="gap-2">
                <Label color="midnight" class="font-semibold" for="todo">
                    Todo
                </Label>
                <input
                id="todo"
                class="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-midnight shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-midnight hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                v-model="todoValue"
                @input="isDisabled = !todoValue.value?.trim()"
                />
            </Flex>

            <Flex class="mt-8 justify-end">
                <Button
                class="p-2 text-sm rounded-md text-white"
                :disabled="isDisabled.value"
                >
                    Simpan
                </Button>
            </Flex>
        </form>
    </Dialog>
</template>
