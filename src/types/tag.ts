export type TechTag = {
    id: string;
    name: string;
    color: string;
    icon: string;
}


export const techTags = {
    react: {
        id: 'react',
        name: 'React',
        color: '#61DAFB',
        icon: 'react',
    },
    tailwind: {
        id: 'tailwind',
        name: 'Tailwind',
        color: '#38B2AC',
        icon: 'tailwind',
    },
    framerMotion: {
        id: 'framer-motion',
        name: 'Framer Motion',
        color: '#FF4081',
        icon: 'framer-motion',
    },
    next: {
        id: 'next',
        name: 'Next',
        color: '#000000',
        icon: 'next',
    },
    typescript: {
        id: 'typescript',
        name: 'Typescript',
        color: '#007ACC',
        icon: 'typescript',
    },
    astro: {
        id: 'astro',
        name: 'Astro',
        color: '#FF4081',
        icon: 'astro',
    },
    vercel: {
        id: 'vercel',
        name: 'Vercel',
        color: '#000000',
        icon: 'vercel',
    },
}