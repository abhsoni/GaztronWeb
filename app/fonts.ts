import { Roboto, DM_Sans , Poppins} from 'next/font/google';
 
export const roboto = Roboto({
    weight: ['400','500' ,'700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})
 
export const dm_sans = DM_Sans({
    weight: ['400','500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm_sans',
})

export const poppins = Poppins({
    weight: ['400','500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
})