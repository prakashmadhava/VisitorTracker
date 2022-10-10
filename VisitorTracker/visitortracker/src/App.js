import React, { Component } from 'react';
import Layout from '../src/components/Layout/Layout';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <Layout/>
            </div>
        );
    }
}
