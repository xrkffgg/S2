import { SpreadSheet } from '@/index';

export interface FrameConfig {
  position: {
    x: number;
    y: number;
  };
  scrollX?: number;
  width: number;
  height: number;
  viewportWidth: number;
  viewportHeight: number;
  showCornerRightShadow: boolean;
  showViewPortRightShadow: boolean;
  scrollContainsRowHeader: boolean;
  isPivotMode: boolean;
  spreadsheet: SpreadSheet;
}
