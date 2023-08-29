import {   shieldTick, support, booking } from "../assets/icons";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];



export const statistics = [
    { value: '1k+', label: 'Flats' },
    { value: '500+', label: 'Homes' },
    { value: '250k+', label: 'Customers' },
];
export const products = [
    {
        imgURL: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "snow house ",
        price: "$200.20",
    },
    {
        imgURL: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
        name: "Urban house",
        price: "$210.20",
    },
    {
        imgURL: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Ranch house",
        price: "$220.20",
    },
    {
        imgURL: "https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Vacation house",
        price: "$230.20",
    },
];
export const services = [
    {
        imgURL: booking,
        label: "Free booking ",
        subtext: "Experience effortless booking with our complimentary reservation service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "vacation homes", link: "/" },
            { name: "Urban homes", link: "/" },
            { name: "Farm/Ranch homes", link: "/" },
            
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "Email Rentify ", link: "mailto:codedblood22@gmail.com" },
            { name: "Rentify", link: "tel:+254703198968" },
        ],
    },
];
