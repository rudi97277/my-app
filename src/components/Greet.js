import React from 'react'


const Greet = (props) => {
    const {name,heroName} = props
    return (
        <>
            <h1>Hallo {name} a.k.a {heroName}</h1>
        </>
    )
}

export default Greet