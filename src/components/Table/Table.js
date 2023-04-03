import React from 'react'
import info from "./../../data/data"
import { useEffect, useState } from "react";
import "./Table.css"

function Table(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(info)
    }, [])

    console.log(data)
    return (
        <table>
            <tr>
                <th>
                    region
                </th>
                <th>
                    model
                </th>
                <th>
                    sales
                </th>
            </tr>

            {data.map((car) => {
                return (
                    <tr>
                        <td>
                            {car.region}
                        </td>
                        <td>
                            {car.model}
                        </td>
                        <td>
                            {car.sales}
                        </td>
                    </tr>
                )
            })}

        </table>
    )
}

export default Table
