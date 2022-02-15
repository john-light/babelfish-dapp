import { ToggleButtonProps } from '@mui/material/ToggleButton';
import { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup';

export type DatesFilterConfig = {
  kickoffTs: number;
  stakes: number[];
  value: number | undefined;
  onChange: (timestamp: number | undefined) => void;
};

export type UseDateSelectorConfig = Pick<
  DatesFilterConfig,
  'kickoffTs' | 'stakes'
>;

export type GetAvailableDatesConfig = Pick<
  DatesFilterConfig,
  'kickoffTs' | 'stakes'
>;

export type CheckpointInfo = {
  month: number;
  timestamp: number;
  date: Date;
  isAlreadyUsed: boolean;
  isPast: boolean;
};

export type GroupedDates = {
  [monthName: string]: CheckpointInfo[];
};

export type DateSelectorProps = DatesFilterConfig;

export type DatesInMonthProps = {
  dates: CheckpointInfo[];
  handleSelectDate: ToggleButtonGroupProps['onChange'];
  monthName: string;
  selectedDate?: number;
};

export type ToggleButtonWithTooltipProps = ToggleButtonProps & {
  dateInfo: CheckpointInfo;
};
