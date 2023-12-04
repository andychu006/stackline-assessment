# Stackline Frontend Assessment

This project provides a foundation for the Stackline Frontend Assessment, utilizing React for the view and Redux for state management. The project structure, features, and dependencies are outlined below.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/andychu006/stackline-assessment.git

2. Navigate to the project directory:

   ```bash
   cd stackline-assessment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Project Structure

- **src**: Contains the source code for the project.
- **public**: Static assets, including the wire mockup and Stackline logo SVG.

## Usage

1. Run the project locally: `npm start`
2. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Features

- Implement either a graph or a table (or both) based on the provided wire mockup.
- Fetch and display data from the provided JSON file through a mock API call.
- Utilize React and Redux best practices and patterns for state management.
- Maintain a codebase that is clean and easy to follow.

## Nice-to-Haves

- Consider using TypeScript for enhanced type safety.
- Explore the use of functional components for improved code readability.
- Optionally add extra functionality to the graph or table, such as sorting and overlays.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature-name'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request.

## Scripts

- **build**: Build the project using `react-scripts`.
- **eject**: Eject from `react-scripts`.
- **format**: Run Prettier to format the code.
- **lint**: Run ESLint to check for linting issues.
- **lint:fix**: Run ESLint with the `--fix` option to fix auto-fixable issues.
- **start**: Start the development server using `react-scripts`.
- **test**: Run tests using `react-scripts test`.

## Husky and Lint-Staged

This project uses Husky and lint-staged to enforce pre-commit hooks for code formatting and linting. Commits will be rejected if they do not adhere to the defined standards.

## Browserslist

Defines the list of supported browsers for development and production builds.

## Dependencies

- `@testing-library`: Testing utilities.
- `chart.js`, `chartjs-adapter-date-fns`, `date-fns`: Chart visualization dependencies.
- `react`, `react-dom`, `react-scripts`: React and Create React App dependencies.
- `react-chartjs-2`, `react-redux`, `redux`, `redux-thunk`: Additional React and Redux libraries.
- `react-table`: Library for creating tables.

## Dev Dependencies

- `@typescript-eslint`: ESLint plugin for TypeScript.
- `eslint`, `eslint-config-prettier`, `eslint-plugin-prettier`: ESLint and Prettier for code linting.
- `husky`, `lint-staged`: Git hooks and pre-commit hook configuration.
- `prettier`: Code formatter.
- `typescript`: TypeScript for enhanced type checking.

## License

This project is licensed under the [ISC License](https://opensource.org/license/isc-license-txt/).

## Contact

For any questions or issues, feel free to reach out via email at [andychu006@gmail.com](mailto:andychu006@gmail.com).