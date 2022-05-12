/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, ReactElement, useCallback } from 'react';

export interface ListBaseProps<T> {
  items: T[];
  children: (item: T, index: number) => React.ReactNode;
  getId?: (item: T) => string;
}

const BaseList = <TItem extends Record<string, any>>(props: ListBaseProps<TItem>): ReactElement => {
  const { items, getId, children } = props;

  const getListItemId = useCallback(
    (item: TItem) => getId?.(item) || JSON.stringify(item),
    [getId]
  );

  return (
    <>
      {items.map((item, index) => (
        <div key={`list-child-${getListItemId(item)}`} role="listitem">
          {children(item, index)}
        </div>
      ))}
    </>
  );
};

export default BaseList;
