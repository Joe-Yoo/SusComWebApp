# SusComWebApp

CS 3300 Project 1

Team Members: Arjun Mannan, Eric Ming, Joe Yoo, Kendall Taylor, Kotoe Takeda, Smaran Mishra

---

## Links

Website: https://6640a0b1.suscomwebapp.pages.dev/

Backend: https://cs3300-project1-401807.ue.r.appspot.com/

Example backend call: https://cs3300-project1-401807.ue.r.appspot.com/carbon/2/1300

---

## Release Notes

New software features for this release: This is the first release of the web application. With that, it includes the following software features:

- Sign Up
- Login
- Map that displays the following functionality:
  -- three different transportation options (walking, public transport, and driving)
  -- different route options for each transportation type as applicable
  -- carbon footprint savings based on current transportation type taking into account number of passengers and fuel efficiency
  -- environmental impact detailing impact in understandable way to the number of trees saved.

Bug fixes made since the last release: This is not applicable as this is the first release.

Known bugs and defects:

- Multiple routes are displayed for each mode of transit, but users are unable to click between the different routes.
- when hitting the submit button, it requires two clicks of the submit button to correctly populate the carbon footprint and environmental impact due to the delay of the asynchronouse api call.

---

## Install Guide

Pre-requisites: Java JDK 17, Node.js, IntelliJ IDEA

Dependent libraries that must be installed:

- npm:
  - Open a terminal window
  - change directory into frontend
  - execute the following command: npm install
- maven dependencies
  - Open a terminal window
  - change directory into backend
  - execute the following command: ./mvnw install

Build/Install/Run instructions:

- Springboot server
  - Open a terminal window
  - change directory into backend
  - execute the following command: ./mvnw spring-boot:run
  - localhost:8080 should be running
- React.js web applciation (Springboot server should be running for full functionality)
  - Open a new terminal window
  - change directory into frontend
  - execute the following command: npm run dev
  - localhost:5173 should be running

Troubleshooting:

- JAVA_HOME is not defined (windows)
  - Go to settings
  - Search up "environment variables" and choose the option that says "Edit the system environment variables"
  - In the window that popped up, click on Environment Variables button
  - In the new window that popped up, click the new button under "User variables for **{computer username}**"
  - In the new window that popped up, Set the variable name to JAVA_HOME
  - In variable value, select "Browse Directory" and then choose the java version that's installed
    - Normally java is installed in C://Program Files, however if installed somewhere else, you have to find it and select that directory.
