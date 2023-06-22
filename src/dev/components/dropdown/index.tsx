import { useState } from 'react';

import { Dropdown } from '@/components/common';
import type { ICommon } from '@/interfaces';

const DropdownDev = () => {
  const options: ICommon.IOption[] = [
    { id: 1, label: 'lb1', value: 'vl 1' },
    { id: 2, label: 'lb2', value: 'vl 2' },
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <Dropdown
      options={options}
      selected={selected}
      onChange={(option) => setSelected(option)}
      labelE="Select option"
      classList="left-0"
      classOption="p-2"
      classActiveOption="text-red-500"
    />
  );
};

const renderSource = `import { useState } from 'react';

import { Dropdown } from '@/components/common';
import type { ICommon } from '@/interfaces';

const DropdownDev = () => {
  const options: ICommon.IOption[] = [
    { id: 1, label: 'lb1', value: 'vl 1' },
    { id: 2, label: 'lb2', value: 'vl 2' },
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <Dropdown
      options={options}
      selected={selected}
      onChange={(option) => setSelected(option)}
      labelE="Select option"
      classList="left-0"
      classOption="p-2"
      classActiveOption="text-red-500"
    />
  );
};`;

const iProps = `interface IProps {
  labelE?: React.ReactNode;
  options?: ICommon.IOption[];
  classOption?: string;
  classActiveOption?: string;
  onChange: (ot: ICommon.IOption) => void;
  selected?: ICommon.IOption;
  classList?: string;
}`;

const dropdown = { ui: <DropdownDev />, renderSource, iProps };
export default dropdown;
