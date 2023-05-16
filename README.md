# Team Profile Generator --- Module 12 Challenge

## Description

The Team Profile Generator is a Node.js command-line application that enables users to create professional team profile webpages. Using the Inquirer package, the application prompts users to input information about their team members, including managers, engineers, and interns. Once all team members have been added, the application generates an HTML page with a clean layout, showcasing the team's structure and individual details. The generated webpage is saved as team.html using the file system module. This application simplifies the process of creating and sharing team profiles, providing a convenient and efficient solution for generating comprehensive team profiles.

## User Story

As a manager a user want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Mock-up](#mock-up)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Make sure that you have VS Code, terminal/gitbash, and Node.js installed on your computer before using this project. Follow these steps:

1. Click the "Code" button in the GitHub repository and copy the link.
2. In GitBash or terminal, run the command "git clone [paste link here]".
3. Run the command "npm init -y" to install the Node Package Manager.
4. Run the command "npm install inquirer" to install the npm package for inquirer.

## Usage

To create a team profile using the Team Profile Generator, follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the root directory of the Team Profile Generator project in VS Code.

3. Install the necessary dependencies by running the command npm install in the integrated terminal of VS Code. This will ensure that all required packages are installed.

4. Open the index.js file in VS Code. This is where you will customize the prompts for each team member.

5. Inside the index.js file, you will find three arrays: managerQuestions, engineerQuestions, and internQuestions. These arrays contain the prompts for the manager, engineer, and intern respectively. Customize the questions to gather the specific information you need for your team members.

6. Save your changes to the index.js file.

7. In the terminal or command prompt, run the command node index.js to start the application.

8. Follow the prompts displayed in the terminal. Start by entering the details for the team manager, such as their name, employee ID, email, and office number. Once you have provided the information, press Enter.

9. Continue adding team members by selecting the employee type (Manager, Engineer, or Intern) and entering their respective details. Repeat this step until you have added all the desired team members.

10. After adding all team members, select the option "I'm done adding employees" from the prompt to generate the team profile.

11. The Team Profile Generator will automatically generate an HTML file named team.html in the output directory.

By following these instructions, you can easily use the Team Profile Generator to create a team profile with custom prompts and quickly generate a professional-looking webpage to showcase your team's information.

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![Alt text](assets/Screenshot%202023-05-16%20at%2015.48.07.png)

Here is the link to the html output file in my repository:

https://github.com/SophieEmsi/Team-Profile-Generator---Module-12-Challenge/blob/main/Output/team.html

## License

This project does not require a license.

## Contributing

If you would like to contribute to this project please follow the steps below:

1. Fork the repo
2. Create a new branch (git checkout -b new-feature)
3. Make your changes and commit them (git commit -am 'Add new feature')
4. Push your changes to your fork (git push origin new-feature)
5. Create a new pull request

## Tests

To run the tests for this project, you can follow these steps:

1. Ensure you have Node.js installed on your machine. You can check if Node.js is installed by opening your terminal or command prompt and running the command node -v. If Node.js is not installed, you can download and install it from the official Node.js website (https://nodejs.org).

2. Open the integrated terminal in VS code from the directory you would like to run the tests.

3. Once you are in the correct directory, run the test.js file by using the command node test.js. This will execute the JavaScript code in the file.

4. The output of the test.js file will be displayed in the terminal or command prompt.

5. Review the output in the terminal to see the result of running the test.js file to make sure the code is running correctly.

By following these instructions, you can execute the test.js file and view its output directly in the command line.

## Questions

GitHub profile: https://github.com/SophieEmsi

If you have any questions, please contact me at sophie@sophie.com.
