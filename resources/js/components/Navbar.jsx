import React from 'react'

import Logo from '../../../public/icons/bruja-demi-ex.svg'

export default function Navbar() {

    const Buttons = [{
        "Tittle":"Inicio",
        "Link":"/",
    },{
        "Tittle":"El Libro",
        "Link":"/",
    },{
        "Tittle":"El Cortometraje",
        "Link":"/",
    },{
        "Tittle":"Reseñas",
        "Link":"/",
    },{
        "Tittle":"Compra El Libro!",
        "Link":"/",
    }];

    return (
        <nav className='w-full h-auto flex flex-row justify-around items-center bg-[#FFFFFF] py-8'>
            <div className='h-[60px] w-auto '>
                <img src={Logo} alt="LogoLaBrujaDeLaEx" className='w-full h-full object-cover'/>
            </div>
            <div className='w-auto h-full flex flex-row justify-center items-center gap-3'>
                {
                    Buttons ? Buttons.map((button, index) => {
                        return (
                            <a key={index} href={button.Link} className='w-auto h-auto px-8 py-2 text-sm text-black border border-black  rounded-full hover:bg-[#310C73]'>
                                { button.Tittle }
                            </a>
                        );
                    }) : null
                }
            </div>
        </nav>
    )
}
