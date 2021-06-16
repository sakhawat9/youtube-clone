import React, { useState } from 'react'
import './_categoriesBar.scss'

const keywords = [
   'All',
   'React js',
   'Angular',
   'React Native',
   'use of API',
   'Redux',
   'Music',
   'Algorithm Art',
   'Guitar',
   'Bengali Songs',
   'Coding',
   'Cricket',
   'Football',
   'Real Madrid',
   'Gatsby',
   'Poor Coder',
   'Shwetabh'
]

const CatagoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All')

    const handleClick = (value) => {
        setActiveElement(value)
    }

    return (
        <div className="catagoriesBar">
            {
                keywords.map((value, i)=>(
                <span
                    onClick={() =>handleClick(value)} key={i}
                    className={activeElement === value? 'active' : ''}    
                >
                    {value}
                </span>
                ))}
        </div>
    )
}

export default CatagoriesBar