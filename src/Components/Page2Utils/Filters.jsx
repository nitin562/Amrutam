import React from 'react'
import "./Filters.style.css"
import FilterTile from './FilterTile'
export default function Filters() {
  return (
    <div className='FilterArea'>
        <FilterTile title="Expertise"/>
        <FilterTile title="Gender"/>
        <FilterTile title="Fees"/>
        <FilterTile title="Languages"/>
        <FilterTile title="All filters" filter="true"/>

    </div>
  )
}
