import React from 'react'
import { fname, lname } from '../App'

const ComC = () => {
    return (
        <div>

            <fname.Consumer>
                {(fname) => {
                    return (
                        <lname.Consumer>
                            {(lname) => {
                                return (
                                    < h1 > my name is {fname} {lname}</h1>
                                )

                            }}
                        </lname.Consumer>
                    );

                }}
            </fname.Consumer>


        </div>
    )
}

export default ComC
