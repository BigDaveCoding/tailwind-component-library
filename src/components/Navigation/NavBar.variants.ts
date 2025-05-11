export const NavBarVariants = {
    'default' : {
        'navContainer' : 'bg-green5 max-w-[850px] h-[72px] ',
        'title' : 'text-white text-xl font-bold',
        'logo' : 'w-[32px] h-[19.2] text-white',
        'linkContainer' : 'px-6 gap-6',
        'linkText' : '',
        'button' : 'text-white border-white',
    },
    'collapsed' : {
        'navContainer' : 'bg-green5 max-w-[375px] h-[72px]',
        'title' : 'text-white text-xl font-bold',
        'logo' : 'w-[32px] h-[19.2] text-white',
        'linkContainer' : '',
        'linkText' : '',
        'button' : 'text-white border-white px-[12px] py-[8px]',
    },
    'expanded' : {
        'navContainer' : 'bg-gray4',
        'title' : '',
        'logo' : '',
        'linkContainer' : '',
        'linkText' : '',
        'button' : '',
    }
}