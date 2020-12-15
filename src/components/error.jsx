import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Catching Error: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Have an Error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
