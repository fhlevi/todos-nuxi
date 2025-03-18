<script setup lang="ts">
import { ref } from 'vue';
import Container from '@/ui/container.vue';
import Card from '@/ui/card.vue';
import Flex from '@/ui/flex.vue';
import Label from '@/ui/label.vue';
import Button from '@/ui/button.vue';
import Dialog from '@/ui/dialog.vue';
import ScrollArea from '@/ui/scroll-area.vue';
import Toaster from '@/components/toaster.vue';
import TodoDialog from '@/components/todo-dialog.vue';
import TodoList from '@/components/todo-list.vue';
import { useDialogWithData } from '@/composables/use-dialog-with-data';
import { useToasterWithData } from '@/composables/use-toaster';
import { useTodo } from '@/composables/use-todo';

const { createTodo, todoList, deleteTodo, updateTodo } = useTodo();

const addDialog = useDialogWithData();
const updateDialog = useDialogWithData();
const toaster = useToasterWithData();

const onTodoSubmit = (formVal: Record<string, any>) => {
  createTodo(formVal, (dates: string) => {
    toaster.open({
      title: 'Todo: was submitted',
      description: dates,
    });

    addDialog.close();
  });
};

const onTodoUpdate = (formVal: Record<string, any>) => {
  updateTodo({
      ...updateDialog.data,
      todo: formVal.todo,
    }, (dates: string) => {
      toaster.open({
        title: 'Todo: was updated',
        description: dates,
      });

      updateDialog.close();
    },
  );
};

const onTodoDelete = (id: string) => {
  deleteTodo(id, (dates) => {
    toaster.open({
      title: 'Todo: was deleted',
      description: dates,
    });
  });
};
</script>

<template>
  <Container>
    <Card class="rounded-2xl py-11 h-full px-6 text-white relative">
      <Flex direction="col" class="h-full gap-7">
        <Flex class="justify-between items-center">
          <Label size="28px">Todos</Label>
          <Button
            height="40px"
            width="40px"
            class="rounded-lg items-center flex justify-center"
            @click="addDialog.open">
            <em class="fa-solid fa-plus text-2xl"></em>
          </Button>
        </Flex>

        <ScrollArea class="h-full overflow-y-auto">
          <TodoList
            :items="todoList"
            @update="updateDialog.open"
            @delete="onTodoDelete"
          />
        </ScrollArea>
      </Flex>
    </Card>

    <TodoDialog :dialog="addDialog" @todo-submit="onTodoSubmit" />

    <TodoDialog :dialog="updateDialog" @todo-submit="onTodoUpdate" />

    <!-- <Toaster v-bind="toaster" /> -->
  </Container>
</template>