import type { DirectiveSpec, DirectiveData, GenericNode } from 'myst-common';
import { ParseTypesEnum } from 'myst-common';

export const outputDirective: DirectiveSpec = {
  name: 'output',
  options: {
    id: {
      type: ParseTypesEnum.string,
      required: true,
    },
  },
  run(data: DirectiveData): GenericNode[] {
    return [
      {
        type: 'output',
        id: data.options?.id as string,
      },
    ];
  },
};
