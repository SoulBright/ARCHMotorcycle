import { TypeMenu } from "../../types"

const API_URL = process.env.REACT_APP_API_URL;

export const MenuItems: TypeMenu[] = [
    {
        id: 1,
        title: 'Home',
        serial_number: 1,
        url: `${API_URL}`
    },
    {
        id: 2,
        title: 'About',
        serial_number: 2,
        url: `${API_URL}/about`
    },
    {
        id: 3,
        title: 'Bespoke',
        serial_number: 3,
        url: `${API_URL}/bespoke`
    },
    {
        id: 4,
        title: 'Ownership',
        serial_number: 4,
        url: `${API_URL}/ownership`
    },
    {
        id: 5,
        title: 'krgt-1',
        serial_number: 5,
        url: `${API_URL}/arch-krgt-1/`
    },
    {
        id: 6,
        title: '1s',
        serial_number: 6,
        url: `${API_URL}/arch-1s`
    },
    {
        id: 7,
        title: 'method 143',
        serial_number: 7,
        url: `${API_URL}/arch-method143/`
    },
    {
        id: 8,
        title: 'apparel',
        serial_number: 8,
        url: 'https://apparel.archmotorcycle.com/'
    },
    {
        id: 9,
        title: 'news',
        serial_number: 9,
        url: `${API_URL}/news`
    },
    {
        id: 10,
        title: 'contact',
        serial_number: 10,
        url: 'https://archmotorcycle.com/contact/'
    }
]