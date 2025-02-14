import { SimpleBBox } from '@antv/g-canvas';
import { InteractionStateName, CellTypes, InterceptType } from '../constant';
import { ViewMeta } from './basic';
import { BaseCell, ColCell, CornerCell, DataCell, RowCell } from '@/cell';
import { HeaderCell } from '@/cell/header-cell';
import { Node } from '@/index';
import { BaseEvent } from '@/interaction/base-event';
import { SpreadSheet } from '@/sheet-type';
import { RootInteraction } from '@/interaction/root';

export type S2CellType<T extends SimpleBBox = ViewMeta> =
  | DataCell
  | HeaderCell
  | ColCell
  | CornerCell
  | RowCell
  | BaseCell<T>;

export interface CellMeta {
  id: string;
  colIndex: number;
  rowIndex: number;
  type: CellTypes;
}

export interface InteractionStateInfo {
  // current state name
  stateName?: InteractionStateName;
  // all the active cells for this interaction (save meta data for recording offscreen cells)
  cells?: CellMeta[];
  // all the cells changed the state style
  interactedCells?: S2CellType[];
  // all the active nodes, including rendered and not rendered cells
  nodes?: Node[];
  // for empty cells, updates are ignored, use `force` to skip ignore
  force?: boolean;
}

export type InteractionConstructor = new (
  spreadsheet: SpreadSheet,
) => BaseEvent;

export interface CustomInteraction {
  key: string;
  interaction: InteractionConstructor;
}

export interface BrushPoint {
  rowIndex: number;
  colIndex: number;
  x: number;
  y: number;
}

export interface BrushRange {
  start: BrushPoint;
  end: BrushPoint;
  width: number;
  height: number;
}

export type StateShapeLayer = 'interactiveBgShape' | 'interactiveBorderShape';

export type Intercept =
  | InterceptType.HOVER
  | InterceptType.CLICK
  | InterceptType.BRUSH_SELECTION
  | InterceptType.MULTI_SELECTION
  | InterceptType.RESIZE;
