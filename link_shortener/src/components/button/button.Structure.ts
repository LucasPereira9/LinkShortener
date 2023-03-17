export interface IButton {
  Press: () => void;
  Title: string;
  Colored?: boolean;
  Loading?: boolean;
}
