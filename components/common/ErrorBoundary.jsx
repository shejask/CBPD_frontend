/**
 * Error Boundary Component
 * Catches and handles React errors gracefully
 */

import React from 'react';
import { Result, Button } from 'antd';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Result
            status="500"
            title="Something went wrong"
            subTitle="We're sorry, but something unexpected happened. Please try refreshing the page."
            extra={
              <div className="space-x-2">
                <Button type="primary" onClick={this.handleReset}>
                  Try Again
                </Button>
                <Button onClick={() => window.location.reload()}>
                  Refresh Page
                </Button>
              </div>
            }
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;