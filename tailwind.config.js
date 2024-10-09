/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                body: "url('/public/img/bg-body.jpg')",
                purchase: "url('/public/img/orange.png')",
                take: "url('/public/img/black.png')",
                arrows: "url('/public/img/arrows.png')",
                "bottom-frame": "url('/public/img/bottom-frame.png')",
            },
        },
    },
    plugins: [],
};
