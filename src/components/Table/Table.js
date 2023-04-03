import React from 'react'
import info from "./../../data/data"
import { useEffect, useState } from "react";
import "./Table.css"

function Table() {

    const [fullData, setFullData] = useState([])
    const [currentData, setCurrentData] = useState([])
    const [currentRegion, setCurrentRegion] = useState("all")
    const [currentModel, setCurrentModel] = useState("all")

    useEffect(() => {
        setFullData(info)
        setCurrentData(info)
    }, [])

    const handleRegionChange = (e) => {
        const selection = e.target.value;
        setCurrentRegion(selection)
        let filterByModel = modelFilter(fullData, currentModel)
        let filterByRegion = regionFilter(filterByModel, selection)
        setCurrentData(filterByRegion)
    }

    const handleModelChange = (e) => {
        const selection = e.target.value;
        setCurrentModel(selection)
        let filterByRegion = regionFilter(fullData, currentRegion)
        let filterByModel = modelFilter(filterByRegion, selection)
        setCurrentData(filterByModel)

    }

    const regionFilter = (theData, currentRegion) => {
        if (currentRegion === "all") {
            return [...theData];
        } else {
            return theData.filter((datum) => {
                return datum.region === currentRegion
            })
        }
    }

    const modelFilter = (theData, currentModel) => {
        if (currentModel === "all") {
            return [...theData];
        } else {
            return theData.filter((datum) => {
                return datum.model === currentModel
            })
        }
    }

    return (
        <React.Fragment>
            <div className="filters">

                <label>region filter</label>
                <select onChange={handleRegionChange}>
                    {['all', 'US', 'EU', 'CA'].map((region) => {
                        return (<option>
                            {region}
                        </option>)
                    })}
                </select>
                <label>model filter</label>
                <select onChange={handleModelChange}>
                    {['all', 'A', 'B', 'C', 'D'].map((region) => {
                        return (<option>
                            {region}
                        </option>)
                    })}
                </select>
            </div>
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

                {currentData.map((car) => {
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
        </React.Fragment >
    )
}

export default Table
