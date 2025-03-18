import { ref } from 'vue';
import { useDialog } from './use-dialog';

interface FieldValues {
  [key: string]: any;
}

export const useDialogWithData = (initialData?: FieldValues) => {
  const modal = useDialog();
  const modalData = ref<FieldValues | undefined>(initialData);

  const open = (data: FieldValues | unknown) => {
    if (data) {
      modalData.value = data as FieldValues;
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
