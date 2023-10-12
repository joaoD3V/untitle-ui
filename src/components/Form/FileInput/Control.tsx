import { ComponentProps } from 'react';

type ControlProps = ComponentProps<'input'>;

export function Control({ ...props }: ControlProps) {
  return <input id="photo" type="file" className="sr-only" {...props} />;
}
