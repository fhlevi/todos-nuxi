interface ToasterProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface ToasterWithDataSchema {
  open: () => void;
  close: () => void;
  props: ToasterProps;
  data: any;
}