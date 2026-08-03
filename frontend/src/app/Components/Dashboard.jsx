import React from 'react'
import Header from './Header'
import WeatherCard from './WeatherCard'
import Forecast from './Forecast'
import SearchBar from './SearchBar'

export default function Dashboard() {
  return (
    <main className="flex-1 p-8 ">
      Dashboard
      <Header />
      <SearchBar />
      <WeatherCard />
      <Forecast />
    </main>
  )
}