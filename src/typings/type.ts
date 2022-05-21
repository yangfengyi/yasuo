// Yasuo 的参数类型
export interface YasuoOptions {

  // 指标
  captureError?: boolean;
  resourceTiming?: boolean;
  elementTiming?: boolean;

  // TODO: 资源上报的选项类型
  analyticsTracker?: (options: any) => void

  // logging
  maxMeasureTime?: number;
  logUrl?: string;
}