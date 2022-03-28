import React from 'react'
import { CoinRow } from '..'
import './table.css'

const Table = ({titles=[], coins=[], children }) => {
    return (
        <>
            <table className="app__table">
                <thead className="app__table-head">
                    <tr> 
                        {
                            titles.map(title => (
                                <td>{title}</td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </>
    )
}

export default Table

