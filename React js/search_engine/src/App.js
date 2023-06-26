import React from 'react'
import Newproject from './DemoProject/Newproject'
import Rolpercustomer from './DemoProject/Rolpercustomer'
import Spinalchart from './DemoProject/Spinalchart'
import Todaysmoney from './DemoProject/Todaysmoney'
import Card from './SearchBar/Card'

export default function App() {
  return (
    <div>
      <Spinalchart/>
      <Todaysmoney/>
      <Newproject/>
      <Rolpercustomer/>
      <Card/>
    </div>
  )
}
