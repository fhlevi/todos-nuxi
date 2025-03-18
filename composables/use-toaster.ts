import { ref } from 'vue';

export const useToaster = () => {
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

export const useToasterWithData = (initialData?: Record<string, any>) => {
  const modal = useToaster();
  const modalData = ref<Record<string, any> | undefined>(initialData);

  const open = (data: Record<string, any> | unknown) => {
    if (data) {
      modalData.value = data as Record<string, any>;
    }
    setTimeout(() => {
      modal.open();
    }, 1);
  };

  return {
    open,
    close: modal.close,
    props: modal.props,
    data: modalData,
  };
};
