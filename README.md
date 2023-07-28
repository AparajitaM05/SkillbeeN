# Skillbee
# Dynamic Page Generator

This is a Node.js application that generates dynamic HTML pages by fetching data from an external API and rendering it in an HTML template. Each page is customized with unique content from the API response.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches data from an external API using Axios.
- Generates multiple dynamic pages using Express routes and an HTML template.
- Serves static files from the `public` directory.
- Customizes each page with data obtained from the API response.
- Provides an easy-to-use structure for adding new dynamic elements to the template.

## Installation

1. Ensure you have [Node.js](https://nodejs.org) installed on your system.
2. Clone this repository to your local machine using the following command:
   ```sh
   git clone https://github.com/your-username/dynamic-page-generator.git


Change into the project directory:
cd dynamic-page-generator


Install the required dependencies:
npm install


Usage
Start the server:

npm start
Open your web browser and visit http://localhost:3000/ to access the dynamically generated pages.
API Endpoint
The application fetches data from an external API to customize each page. The API endpoint used in the code can be found at the following URL:

Tests
The application includes tests to ensure its functionality is correct. To run the tests, use the following command:

npm test

https://www.boredapi.com/api/activity
Please note that the actual API endpoint may change or you may choose to use a different API. If you decide to use a different API, make sure to update the apiUrl variable in the getApiData function in app.js.

Contributing
Contributions are welcome! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request.

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/your-feature-name.
Open a pull request.
License
This project is licensed under the MIT License.


Replace `your-username` in the installation section with your GitHub username, and make sure to include any specific instructions or details that are relevant to your application.



