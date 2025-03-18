<script setup lang="ts">
    import Container from '@/components/container.vue';
    import Card from '@/components/card.vue';
    import Flex from '@/components/flex.vue';
    import Label from '@/components/label.vue';
    import Button from '@/components/button.vue';
</script>

<template>
    <Container>
        <Card class="rounded-2xl py-11 h-full px-6 text-white relative" variant="default">
            <Flex direction="col" class="h-full gap-7">
                <Flex class="justify-between items-center">
                    <Label size="28px" for="todo-input">To Do List</Label>
                    <Button
                        height="40px"
                        width="40px"
                        color="default"
                        class="rounded-lg items-center flex justify-center">
                        <em class="fa-solid fa-plus text-2xl"></em>
                    </Button>
                </Flex>
            </Flex>
        </Card>
    </Container>
</template>