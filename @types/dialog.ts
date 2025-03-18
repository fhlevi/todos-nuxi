interface DialogProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface OriginDialogSchema {
  open: () => void;
  close: () => void;
  props: DialogProps;
}

export interface WithDataDialogSchema extends OriginDialogSchema {
  data: any;
}