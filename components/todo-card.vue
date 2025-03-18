<script setup lang="ts">
import { defineProps } from 'vue';
import Card from '@/ui/card.vue';
import Flex from '@/ui/flex.vue';

const props = defineProps();
</script>

<template>
  <Card height="94px" variant="primary" class="rounded-lg p-4">
    <Flex direction="row" class="gap-4 justify-between h-full">
      <slot></slot>
    </Flex>
  </Card>
</template>
