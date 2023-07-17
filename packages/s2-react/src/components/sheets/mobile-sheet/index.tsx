import React from 'react';
import type { SpreadSheet } from '@antv/s2';
import { getMobileSheetComponentOptions } from '@antv/s2-shared';
import { SheetComponent } from '../index';
import type { SheetComponentsProps } from '../interface';

export const MobileSheet = React.forwardRef<SpreadSheet, SheetComponentsProps>(
  (props, ref) => (
    <>
      <SheetComponent
        {...props}
        options={getMobileSheetComponentOptions(props.options!)}
        ref={ref}
      />
    </>
  ),
);

export const MobileSheetComponent = React.memo(MobileSheet);

MobileSheetComponent.displayName = 'MobileSheetComponent';