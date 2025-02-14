import { LineChartOutlined, EyeOutlined } from '@ant-design/icons';
import { HtmlIconProps } from '../icons/html-icon';
import {
  TooltipOperation,
  TooltipOperatorMenu,
  TooltipPosition,
} from '@/common/interface';
import { S2_PREFIX_CLS } from '@/common/constant/classnames';
import { i18n } from '@/common/i18n';

export const TOOLTIP_PREFIX_CLS = `${S2_PREFIX_CLS}-tooltip`;

export const TOOLTIP_CONTAINER_CLS = `${TOOLTIP_PREFIX_CLS}-container`;

export const TOOLTIP_OPERATION_PREFIX_CLS = `${TOOLTIP_PREFIX_CLS}-operation`;

export const TOOLTIP_DEFAULT_ICON_PROPS: Partial<HtmlIconProps> = {
  width: 14,
  height: 14,
  style: {
    verticalAlign: 'sub',
    marginRight: 4,
  },
};

export const TOOLTIP_POSITION_OFFSET: TooltipPosition = {
  x: 10,
  y: 10,
};

export const TOOLTIP_OPERATOR_MENUS: Record<
  Capitalize<keyof TooltipOperation>,
  TooltipOperatorMenu[]
> = {
  Trend: [
    {
      id: 'trend',
      text: i18n('趋势'),
      icon: LineChartOutlined,
    },
  ],
  HiddenColumns: [
    {
      id: 'hiddenColumns',
      text: i18n('隐藏'),
      icon: EyeOutlined,
    },
  ],

  Sort: [
    {
      id: 'asc',
      icon: 'groupAsc',
      text: i18n('组内升序'),
    },
    {
      id: 'desc',
      icon: 'groupDesc',
      text: i18n('组内降序'),
    },
    { id: 'none', text: i18n('不排序') },
  ],
};
