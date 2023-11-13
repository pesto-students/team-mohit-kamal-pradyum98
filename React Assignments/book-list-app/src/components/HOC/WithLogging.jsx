import React from 'react';

const WithLogging = (WrappedComponent) => {
    return class extends React.Component {
        componentDidMount() {
            console.log(`The component ${WrappedComponent.name} is now mounted.`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default WithLogging;
