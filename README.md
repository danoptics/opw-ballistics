# Ballistics Calculator Web Application

## Overview
The Ballistics Calculator is a web application designed to help users calculate bullet drop, time of flight, and wind drift based on various input parameters. It provides a user-friendly interface for inputting data and visualizes the results through a trajectory chart.

## Project Structure
```
ballistics-calculator-app
├── src
│   ├── index.html        # HTML structure for the application
│   ├── ballistics.js     # JavaScript code for calculations and charting
│   └── styles
│       └── style.css     # CSS styles for the application
├── package.json          # npm configuration file
└── README.md             # Documentation for the project
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ballistics-calculator-app
   ```
3. Install dependencies (if any):
   ```
   npm install
   ```

## Usage
1. Open `src/index.html` in a web browser.
2. Enter the following parameters:
   - Muzzle Velocity (fps)
   - Ballistic Coefficient (G1)
   - Zero Range (yards)
   - Target Range (yards)
   - Wind Speed (mph)
   - Wind Angle (degrees)
3. Click the "CALCULATE" button to compute the results.
4. The results will display bullet drop, time of flight, and wind drift.
5. A trajectory chart will visualize the bullet drop over the specified range.

## Dependencies
- Chart.js: A JavaScript library for creating charts.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.