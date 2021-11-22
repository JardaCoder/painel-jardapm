import { transparentize } from "polished";
import { Component } from "react";
import { color } from "../../core/colors";
import ErrorDisplay from "./ErrorDisplay";

interface Props {}
interface State {
  hasError: boolean;
  error?: {
    message?: string;
  };
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error: {
        message: error.message,
      },
    };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: 24,
            border: "1px solid " + transparentize(0.9, color.secondary),
          }}
        >
          <ErrorDisplay message={this.state.error?.message} />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
