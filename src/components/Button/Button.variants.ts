export const buttonVariants = {
    'primitive' : {
        'default' : 'bg-gray6 text-white',
        'hover' : 'hover:bg-gray7'
    },
    'simple' : {
        'default' : 'bg-gray6 text-white rounded-md',
        'hover' : 'hover:bg-gray7'
    },
    'rounded' : {
        'default' : 'bg-gray6 text-white rounded-full',
        'hover' : 'hover:bg-gray7'
    },
    'outline' : {
        'default' : 'bg-none border border-gray6 rounded-md text-gray7',
        'hover' : 'hover:bg-gray7 hover:border-gray7 hover:text-white'
    },
    'bordered' : {
        'default' : 'bg-gray6 inset-ring inset-ring-gray7 rounded-md text-white',
        'hover' : 'hover:bg-gray7'
    },
    '3d' : {
        'default' : 'bg-gray6 text-white rounded-md shadow-[inset_0_-4px_0_0_var(--color-gray7)] transition-shadow',
        'hover' : 'hover:bg-gray5 hover:shadow-[inset_0_-2px_0_0_var(--color-gray6)]'
    },
    'elevated' : {
        'default' : 'inset-ring inset-ring-gray4 rounded-md shadow-md text-gray8',
        'hover' : 'hover:bg-gray1'
    },
    'groupPrev' : {
        'default' : 'bg-gray2 rounded-l-md text-gray8',
        'hover' : 'hover:bg-gray3'
    },
    'groupNext' : {
        'default' : 'bg-gray2 rounded-r-md text-gray8',
        'hover' : 'hover:bg-gray3'
    },
    'download' : {
        'default' : 'bg-gray2 rounded-md text-gray8',
        'hover' : 'hover:bg-gray3'
    },
    'sizes' : {
        'small' : 'text-sm px-2 py-1',
        'medium' : 'px-4 py-2',
        'large' : 'text-lg px-6 py-3',
    }
}