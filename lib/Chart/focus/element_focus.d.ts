import { D3Selection, EventBus, State } from "../typings";
declare class ElementFocus {
    private el;
    private els;
    private events;
    private state;
    constructor(state: State, els: {
        [key: string]: D3Selection;
    }, events: EventBus);
    private onMouseOver;
    private renderFocusLabel;
    private getDrawingPosition;
    remove(): void;
}
export default ElementFocus;
//# sourceMappingURL=element_focus.d.ts.map