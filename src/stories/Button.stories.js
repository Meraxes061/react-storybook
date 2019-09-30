import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button/Button'

export default {
    title: 'Buttons'
}


export const button = () => <Button onClick={action('click')}>Default</Button>
export const primary = () => <Button primary onClick={action('click')}>Primary</Button>
export const secondary = () => <Button secondary onClick={action('click')}>Secondary</Button>
export const success = () => <Button success onClick={action('click')}>Success</Button>
export const danger = () => <Button danger onClick={action('click')}>Danger</Button>
export const warning = () => <Button warning onClick={action('click')}>Warning</Button>
export const info = () => <Button info onClick={action('click')}>Info</Button>
export const light = () => <Button light onClick={action('click')}>Light</Button>
export const dark = () => <Button dark onClick={action('click')}>Dark</Button>
export const link = () => <Button link onClick={action('click')}>Link</Button>
export const block = () => <Button block onClick={action('click')}>Block</Button>
export const disabled = () => <Button disabled onClick={action('click')}>Disabled</Button>
export const disabledPrimary = () => <Button disabled primary onClick={action('click')}>Disabled</Button>
export const disabledPrimaryBlock = () => <Button disabled primary block onClick={action('click')}>Disabled</Button>