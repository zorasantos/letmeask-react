type buttonProps = {
  text?: string;
}
export function Button (props: buttonProps) {
  return (
    <button>{ props.text || 'Default' }</button>
  );
}