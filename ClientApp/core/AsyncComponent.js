import * as React from 'react';

export function AsyncComponentLoader(ComponentLoader){
    class AsyncComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                Component: null
            };
        }

        async componentDidMount(){
            var Component = await ComponentLoader();

            this.setState({
                Component: Component.default
            });
        }

        render(){
            var Component = this.state.Component;

            return <div className='import-container'>
                {
                    (Component && <Component {...this.props} />) || <p>Loading...</p>
                }
            </div>
        }
    }

    return AsyncComponent;
}
