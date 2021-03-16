import * as React from 'react';

interface IErrorProps {
}

interface IState {
  hasError:boolean
}

class ErrorBoundary extends React.Component<IErrorProps, IState> {
    constructor(props: IErrorProps) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // 에러가 일어났을 때 실행됨.
    componentDidCatch(error: any, info: any) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
          return <h1>Error occured</h1>
        }
        return this.props.children
    }
};

export default ErrorBoundary;