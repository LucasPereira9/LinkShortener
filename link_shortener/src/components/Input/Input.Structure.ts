export default interface IInput {
  placeHolderText: string;
  enable?: boolean;
  value: string;
  setValue: (string: string) => void;
  error?: boolean;
  icon?: string;
  iconPressed?: () => void;
  enableIcon?: boolean;
}
