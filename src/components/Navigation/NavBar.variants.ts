export const NavBarVariants = {
    'default' : {
        'navContainer' : 'bg-green5 max-w-[850px] h-[72px] ',
        'title' : 'text-white text-xl font-bold',
        'logo' : 'w-[32px] h-[19.2] text-white',
        'linkText' : 'text-green2 font-light py-2 px-4 hover:text-blue5 transition-all duration-100 active:bg-blue5 active:text-white active:px-4',
        'button' : 'text-white border-white',
    },
    'collapsed' : {
        'navContainer' : 'bg-green5 max-w-[375px] h-[72px]',
        'title' : 'text-white text-xl font-bold',
        'logo' : 'w-[32px] h-[19.2] text-white',
        'linkText' : '',
        'button' : 'text-white border-white px-[12px] py-[8px]',
    },
    'expanded' : {
        'navContainer' : 'bg-green5 max-w-[375px] flex-col',
        'title' : 'text-white text-xl font-bold',
        'logo' : 'w-[32px] h-[19.2] text-white',
        'linkText' : 'text-green2 font-light py-2 px-4 hover:text-blue5 transition-all duration-100 active:bg-blue5 active:text-white active:px-4',
        'button' : 'text-white border-white',
    }
}