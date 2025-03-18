<script setup lang="ts">
import { defineProps } from 'vue';
import Flex from '@/ui/flex.vue';
import TodoCard from '@/components/todo-card.vue';
import TodoContent from '@/components/todo-content.vue';
import TodoAction from '@/components/todo-action.vue';

interface TodoItem {
  id: string;
  todo: string;
  date: string;
}

interface TodoListProps {
  items: TodoItem[];
  onDelete: (id: string) => void;
  onUpdate: (item: TodoItem) => void;
}

const props = defineProps<TodoListProps>();
</script>

<template>
  <Flex direction="col" class="gap-4 h-full">
    <TodoCard v-for="item in props.items" :key="item.id">
      <TodoContent :text="item.todo" :date="item.date" />
      <TodoAction
        :onUpdate="() => props.onUpdate(item)"
        :onDelete="() => props.onDelete(item.id)"
      />
    </TodoCard>
  </Flex>
</template>

<style lang="">
    
</style>