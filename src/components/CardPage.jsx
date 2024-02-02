import React from 'react';

// Añade props como argumento
export const CardPage = (props) => {
    // Utiliza las props en tu componente
    return (
        <article className='overflow-hidden rounded-lg shadow-lg  w-full bg-slate-300 '>
            <div className='h-30'>
                <h6 className='font-black m-4 text-center text-xl font-poppins'>{props.title}</h6>
                <img className='h-full w-full object-contain m-auto ' src={props.image} alt={props.title} />
            </div>
            <div className='space-y-3 p-5 mt-6'>
                <h2 className='text-lg font-bold text-slate-900 leading-tight font-poppins'>{props.descriptionTitle}</h2>
                <p>{props.description}</p>
            </div>
        </article>
    )
}