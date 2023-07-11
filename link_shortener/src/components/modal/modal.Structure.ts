export interface IModal {
  opened: boolean;
  setOpen: () => void;
  title: string;
  subtitle: string;
  buttonTitle: string;
  buttonFunction: () => void;
  secondButton?: boolean;
}
