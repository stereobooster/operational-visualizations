import { PieChart } from "../../../";
import { Data, RendererOptions } from "../../../PieChart/typings";
import { MarathonEnvironment } from "../../Marathon";

const GaugeRenderer: RendererOptions = {
  type: "gauge",
  extent: "semi",
  comparison: { key: "Last month", value: 29 },
  target: 50,
};

const data: Data = {
  data: [{ key: "Berlin", value: 35 }],
  renderAs: [GaugeRenderer],
};

const data1: Data = {
  data: [{ key: "Berlin", value: 14 }],
  renderAs: [GaugeRenderer],
};

export const marathon = ({ test, afterAll, container }: MarathonEnvironment): void => {
  const viz = new PieChart(container);

  test("Renders the chart", () => {
    viz.data(data);
    viz.draw();
  });

  test("Updates the data", () => {
    viz.data(data1);
    viz.draw();
  });

  afterAll(() => {
    viz.close();
  });
};

export const title = "Comparison (semi)";

// Must match the file name so we can link to the code on GitHub
export const slug = "gauge-3";
