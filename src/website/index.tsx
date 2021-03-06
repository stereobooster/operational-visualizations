import { OperationalUI } from "@operational/components";
import * as React from "react";
import { render } from "react-dom";

import LandingPage from "./LandingPage";
import VisualTests from "./VisualTests";

export interface State {
  /** Pathname, not including `basePath` */
  pathname: string;
}

// Allow the app to work on GitHub pages without hash URL's
const basePath = "/operational-visualizations";

// Extract the path from window location
const getPathname = () => {
  return window.location.pathname.replace(basePath, "");
};

class Website extends React.Component<{}, { pathname: string }> {
  public state = { pathname: getPathname() };

  public pushState = (newUrl: string) => {
    this.setState(() => ({ pathname: newUrl }));
    window.history.pushState({}, "", `${basePath}${newUrl}`);
  };

  public handlePopState = () => {
    this.setState(() => ({
      pathname: getPathname(),
    }));
  };

  public componentDidMount() {
    window.addEventListener("popstate", this.handlePopState);
  }

  public componentWillUnmount() {
    window.removeEventListener("popstate", this.handlePopState);
  }

  public render() {
    return (
      <OperationalUI pushState={this.pushState}>
        {this.state.pathname === "/" ? (
          <LandingPage />
        ) : (
          <VisualTests pathname={this.state.pathname} pushState={this.pushState} />
        )}
      </OperationalUI>
    );
  }
}

render(<Website />, document.querySelector("#app"));
