import { chartsCustomizations } from "./charts";
import { dataGridCustomizations } from "./dataGrid";
import { datePickersCustomizations } from "./datePickers";
import { treeViewCustomizations } from "./treeView";

export const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};
