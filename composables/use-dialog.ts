import { ref } from 'vue';

export const useDialog = () => {
  const isOpen = ref<boolean>(false);

  const open = () => {
    if (isOpen.value) {
      setTimeout(() => {
        isOpen.value = true;
      }, 200);
      isOpen.value = false;
    } else {
      isOpen.value = true;
    }
  };

  const close = () => {
    isOpen.value = false;
  };

  const props = {
    isOpen,
    onRequestClose: close,
  };

  return {
    open,
    close,
    props,
  };
};
