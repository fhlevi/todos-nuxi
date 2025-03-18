<script setup lang="ts">
import { defineProps } from 'vue';
import Flex from '@/ui/flex.vue';
import Label from '@/ui/label.vue';

interface TodoContentProps {
  text: string;
  date: string;
}

const props = defineProps<TodoContentProps>();
</script>

<template>
  <Flex direction="col" class="w-full">
    <Label size="18px" color="primary" class="mb-1" for="todo-text">
      {{ props.text }}
    </Label>
    <Label size="11px" for="todo-date">
      {{ props.date }}
    </Label>
  </Flex>
</template>
