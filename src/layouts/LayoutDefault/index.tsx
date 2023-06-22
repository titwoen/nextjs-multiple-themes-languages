import Dev from '@/dev';
import type { TProps } from '@/types';

type IProps = {};
function LayoutDefault({ children, ...rest }: TProps<IProps, 'div'>) {
  return (
    <div {...rest}>
      <Dev />
      {children}
    </div>
  );
}

export default LayoutDefault;
