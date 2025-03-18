<script setup lang="ts">
import { defineProps } from 'vue';
import Flex from '@/ui/flex.vue';
import Icon from '@/ui/icon.vue';

interface TodoActionProps {
  onDelete: () => void;
  onUpdate: () => void;
}

const props = defineProps<TodoActionProps>();
</script>

<template>
  <Flex direction="row" class="w-14 gap-4 items-center">
    <button type="button" @click="props.onUpdate">
      <Icon icon="fa-solid fa-pen" variant="primary" />
    </button>

    <button type="button" @click="props.onDelete">
      <Icon icon="fa-solid fa-trash" variant="primary" />
    </button>
  </Flex>
</template>
