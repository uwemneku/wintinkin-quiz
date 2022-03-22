interface Props {
  textColor: string;
  text: string;
}

interface Filled extends Props {
  variant: 'filled';
  backgroundColor: string;
  textColor: string;
  text: string;
}

interface Outline extends Props {
  variant: 'outline';
  outlineColor: string;
  lineWidth: number;
}
export type ThemedButtonProps = Filled | Outline;
