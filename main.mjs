import { ICON_MAP } from "./iconMap";
import "./style.css"
<<<<<<< HEAD:main.mjs
import { getWeather } from "./weather.mjs";
=======
import { getWeather } from "./weather";
import { ICON_MAP } from "./iconMap";
>>>>>>> 5d0176bc28d5fdcdf146712a325f8016e31fe9f1:main.js

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(renderWeather).catch(e => {
  console.error(e)
  alert("Error fetching weather data")
});

function renderWeather({ current, daily, hourly }) {
  renderCurrentWeather(current)
  renderDailyWeather(daily)
  renderHourlyWeather(hourly)
  document.body.classList.remove("blurred")
}

function setValue(selector, value, { parent = document} = {}) {
  parent.querySelector(`[data-${selector}`).textContent = value
}

function getIconUIrl(iconCode) {
  return `/icons/${ICON_MAP.get(iconCode)}.svg`
}

const currentIcon = document.querySelector("[data-current-icon]")
function renderCurrentWeather(current) {

  currentIcon.src = getIconUIrl(current.iconCode)
  setValue("current-temp", current.currentTemp)
  setValue("current-high", current.highTemp)
  setValue("current-low", current.lowTemp)
  setValue("current-fl-high", current.highFeelsLike)
  setValue("current-fl-low", current.lowFeelsLike)
  setValue("current-wind", current.windSpeed)
  setValue("current-precip", current.precip)
}

const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: "long" })
const dailySection = document.querySelector("[data-day-section]")
const dayCardTemplate = document.querySelector("day-card-template")
function renderDailyWeather(daily) {
  dailySection.innwertHTML = ""
  daily.forEach(day => {
    const element = dayCardTemplate.content.cloneNode(true)
    setValue("temp", day.maxTemp, { parent: element })
    setValue("date", DAY_FORMATTER.format(day.timestamp), { parent: element })
    element.querySelector("[data-icon]").src = getIconUIrl(day.iconCode)
    dailySection.append(element)
  })
}