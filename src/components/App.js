import React, { Component } from 'react';
import { Menu, Header, Grid, Button } from 'semantic-ui-react';
import ImageUpload from './ImageUpload';

import './common.css';

const Navbar = () => {
    return (
        <Menu borderless size='massive' inverted>
            <Menu.Item>
                Seefood - Silicon Valley
          </Menu.Item>
        </Menu>
    );
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Grid centered className='content-grid'>
                    <Grid.Row centered>
                        <Grid.Column textAlign='center'>
                            <ImageUpload />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <h2>Made with React, Flask &amp; PyTorch</h2>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}