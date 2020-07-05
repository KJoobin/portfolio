import React from 'react';
import Nav from '../Organisms/Navigation'
import { withKnobs } from '@storybook/addon-knobs'

export default {
    title: 'Title',
    parameters: {
        backgrounds: [
            { name: 'twitter', value: '#00aced', default: true },
            { name: 'facebook', value: '#3b5998' },
        ]
    },
    decorators: [withKnobs]
};

export const title = () => {
    return (<Nav />)
}