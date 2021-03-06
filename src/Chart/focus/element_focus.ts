import { forEach } from "lodash/fp";
import Events from "../../shared/event_catalog";
import * as globalStyles from "../../shared/styles";
import { drawHidden, labelDimensions, positionLabel } from "../../utils/focus_utils";
import { D3Selection, EventBus, HoverPayload, State } from "../typings";
import * as styles from "./styles";

class ElementFocus {
  private el: D3Selection;
  private els: { [key: string]: D3Selection };
  private events: EventBus;
  private state: State;

  constructor(state: State, els: { [key: string]: D3Selection }, events: EventBus) {
    this.state = state;
    this.el = els.main;
    this.els = els;
    this.events = events;
    this.events.on(Events.FOCUS.ELEMENT.HOVER, this.onMouseOver.bind(this));
    this.events.on(Events.FOCUS.ELEMENT.OUT, this.remove.bind(this));
  }

  private onMouseOver(payload: HoverPayload) {
    const computedAxes = this.state.current.getComputed().axes;
    // Only render a date focus if there isn't a time axis
    const timeAxis = computedAxes.priorityTimeAxis;
    if (timeAxis) {
      return;
    }

    // If a component focus or flag focus is being displayed, do not render a date focus
    if (
      this.els.component.select(`div.${globalStyles.componentFocus}`).style("visibility") === "visible" ||
      this.el.classed("focus-legend-flag")
    ) {
      return;
    }

    this.renderFocusLabel(payload);
  }

  private renderFocusLabel(payload: HoverPayload) {
    // Remove old focus (may also be a different type of focus)
    this.events.emit(Events.FOCUS.CLEAR);

    drawHidden(this.el, "element");

    const label = this.el.append("xhtml:ul").attr("class", styles.elementFocus);

    forEach((item: { name: string; value: number | string }) => {
      const formatter = (value: number | string) =>
        typeof value === "number" ? this.state.current.getConfig().numberFormatter(value) : value;
      const listItem = label.append("xhtml:li");

      listItem
        .append("span")
        .attr("class", "name")
        .text(item.name);

      listItem
        .append("span")
        .attr("class", "value")
        .text(formatter(item.value));
    })(payload.content);

    // Get label dimensions
    const labelDims = labelDimensions(this.el);
    const offset = this.state.current.getConfig().focusOffset + payload.offset;

    positionLabel(this.el, payload.focus, labelDims, this.getDrawingPosition(), offset, payload.position, true);
  }

  private getDrawingPosition() {
    const computed = this.state.current.getComputed();
    const margins = computed.axes.margins;
    return {
      xMin: margins.y1,
      xMax: margins.y1 + computed.canvas.drawingDims.width,
      yMin: margins.x2,
      yMax: margins.x2 + computed.canvas.drawingDims.height,
    };
  }

  public remove() {
    this.el.node().innerHTML = "";
    this.el.style("visibility", "hidden");
  }
}

export default ElementFocus;
