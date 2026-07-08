/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "brand-orange": "var(--color-brand-orange)",
                "brand-slate": "var(--color-brand-slate)",
                "brand-cream": "var(--color-brand-cream)",
            },
        },
    },
    plugins: [],
}
