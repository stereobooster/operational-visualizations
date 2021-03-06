import * as d3 from "d3-selection";
import Events from "../shared/event_catalog";
import * as styles from "../shared/styles";
import * as localStyles from "./styles";
import { Canvas, D3Selection, Dimensions, EventBus, State, StateWriter } from "./typings";

class SunburstCanvas implements Canvas {
  private breadcrumb: D3Selection;
  private chartContainer: D3Selection;
  private el: D3Selection;
  private elMap: { [key: string]: D3Selection } = {};
  private events: EventBus;
  private state: State;
  private stateWriter: StateWriter;

  constructor(state: State, stateWriter: StateWriter, events: EventBus, context: Element) {
    this.state = state;
    this.stateWriter = stateWriter;
    this.events = events;
    this.chartContainer = this.renderChartContainer(context);
    this.breadcrumb = this.renderBreadcrumb();
    this.el = this.renderEl();
    this.renderRootLabel();
    this.renderFocus();
  }

  // Chart container
  private renderChartContainer(context: Element) {
    const container = document.createElementNS(d3.namespaces.xhtml, "div");
    context.appendChild(container);
    return d3
      .select(container)
      .attr("class", styles.chartContainer)
      .style("background-color", this.state.current.getConfig().backgroundColor);
  }

  // Breadcrumb
  private renderBreadcrumb() {
    const el = document.createElementNS(d3.namespaces.xhtml, "div");
    this.chartContainer.node().appendChild(el);
    this.elMap.breadcrumb = d3.select(el).attr("class", localStyles.breadcrumb);
    return this.elMap.breadcrumb;
  }

  // El
  private renderEl() {
    const elNode = document.createElementNS(d3.namespaces.svg, "svg");
    elNode.addEventListener("mouseenter", this.onMouseEnter.bind(this));
    elNode.addEventListener("mouseleave", this.onMouseLeave.bind(this));
    elNode.addEventListener("click", this.onClick.bind(this));
    this.chartContainer.node().appendChild(elNode);

    const el = d3.select(elNode);
    el.append("svg:g").attr("class", "arcs");
    el.append("svg:g").attr("class", "arrows");
    el.append("circle").attr("class", localStyles.centerCircle);
    this.elMap.series = el;
    return el;
  }

  private onMouseEnter() {
    this.events.emit(Events.CHART.HOVER);
  }

  private onMouseLeave() {
    this.events.emit(Events.CHART.OUT);
  }

  private onClick() {
    this.events.emit(Events.CHART.CLICK);
  }

  // Root label
  private renderRootLabel() {
    const el = d3
      .select(document.createElementNS(d3.namespaces.xhtml, "div"))
      .attr("class", localStyles.rootLabel)
      .html("<span class='value'></span><br><span class='name'></span>");
    this.chartContainer.node().appendChild(el.node());
    this.elMap.rootLabel = el;
  }

  // FocusElement
  private renderFocus() {
    const focus = d3
      .select(document.createElementNS(d3.namespaces.xhtml, "div"))
      .attr("class", `${styles.focusLegend} ${styles.focusLegendAbove}`)
      .style("visibility", "hidden");
    this.chartContainer.node().appendChild(focus.node());
    this.elMap.focus = focus;
    return focus;
  }

  private drawingDims(): Dimensions {
    const config = this.state.current.getConfig();
    return {
      width: config.width,
      height: config.height - this.breadcrumb.node().getBoundingClientRect().height,
    };
  }

  // Lifecycle
  public draw() {
    const config = this.state.current.getConfig();
    const drawingDims = this.drawingDims();
    this.stateWriter("drawingDims", drawingDims);

    this.chartContainer
      .style("visibility", this.state.current.getConfig().hidden ? "hidden" : "visible")
      .style("width", config.width + "px")
      .style("height", config.height + "px");
    this.el.style("width", drawingDims.width + "px").style("height", drawingDims.height + "px");
    this.el
      .select(`circle.${localStyles.centerCircle}`)
      .attr("cx", drawingDims.width / 2)
      .attr("cy", drawingDims.height / 2);

    this.stateWriter(["containerRect"], this.chartContainer.node().getBoundingClientRect());
  }

  public remove() {
    this.el.node().removeEventListener("mouseenter", this.onMouseEnter.bind(this));
    this.el.node().removeEventListener("mouseleave", this.onMouseLeave.bind(this));
    this.el.node().removeEventListener("click", this.onClick.bind(this));
  }

  // Helper method
  public elementFor(component: string) {
    return this.elMap[component];
  }
}

export default SunburstCanvas;
