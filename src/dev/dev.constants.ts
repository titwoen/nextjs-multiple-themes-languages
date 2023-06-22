import { dropdown } from './components';

export interface IComponent {
  name: string;
  data: {
    ui: JSX.Element;
    renderSource: string;
    iProps: string;
  };
}

export const COMPONENTS: IComponent[] = [
  {
    name: 'dropdown',
    data: dropdown,
  },
];
