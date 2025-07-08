import { ActionConfig } from 'custom-card-helpers';

export interface BarCardConfig {
  entity_config: boolean;
  animation: any;
  attribute: any;
  color: string;
  columns: number;
  complementary: boolean;
  decimal: any;
  direction: string;
  double_tap_action?: ActionConfig;
  entities: any;
  entity_row: boolean;
  entity: string;
  height: string | number;
  hold_action?: ActionConfig;
  icon: any;
  value_as_thumb: boolean;
  limit_value: boolean;
  max: number | string;
  min: number | string;
  limit_valuetorange: boolean;
  rangemax: number | string;
  rangemin: number | string;
  name: string;
  positions: any;
  severity: any;
  stack: string;
  tap_action?: ActionConfig;
  target: undefined | number | string;
  title: string;
  type: string;
  unit_of_measurement: string;
  width: string;
}
