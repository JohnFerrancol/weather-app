# Weather App

[Live Demo](https://johnferrancol.github.io/weather-app/)<br/><br/>
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-A9792B?logo=theodinproject&logoColor=fff)](#)

## Overview

This is a project from [The Odin Project](https://theodinproject.com): [Project: Weather App](https://www.theodinproject.com/lessons/node-path-javascript-weather-app). This project had us create a Weather App, allowing the users to toggle between Fahrenheit and Celsius Temperatures. This project uses [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api/)

## Learning Points

- Learning how to use JavaScript asynchronously in various applications, through async and await keyword
- Learning how to extract data from APIs using the fetch() function

## Tech Stack

- [![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
- [![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)](#)
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
- [![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)](#)
- [![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?&logo=webpack&logoColor=black)](#)

## Getting Started

### Prerequisites

You will need to install the latest version of npm to get started on using this project

- npm

```sh
npm install npm@latest -g
```

### Installation

Getting started on running the webpack server to your localhost, localhost:8080

1. Running the webpack server

```sh
git clone git@github.com:JohnFerrancol/weather-app.git
```

2. Installing npm packages

```sh
npm install
```

3. Running the webpack server

```sh
npm run serve
```

## Roadmap

- [x] Extracting data from the Visual Crossing Weather API and processing the JSON data obtained from the API to only the data we want
- [x] Setting up a form to take in User Input on the location they want to see
- [x] Display the weather information on the webpage
- [x] Adding a function for the user the toggle between Imperials and Metric units
- [x] Changing a adding icons to change when the weather condition changes
- [x] Adding Hourly and Weekly Forecast
- [x] Adding Geolocation to show local weather on load
- [x] Adding loading component while waiting for the API calls
