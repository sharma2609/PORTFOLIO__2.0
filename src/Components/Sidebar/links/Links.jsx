import React from 'react'

const Links = () => {

    const items = [
        "Homepage",
        "Services",
        "Projects",
        "Contacts"
    ]

  return (
    <div className='links'>
        {items.map((item) => (
            <a href={`#${item}`} key={item}>
                {item}
            </a>
        ))}
    </div>
  )
}

export default Links