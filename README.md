# SusComWebApp
CS 3300 Project 1

Team Members: Arjun Mannan, Eric Ming, Joe Yoo, Kendall Taylor, Kotoe Takeda, Smaran Mishra

--------------------------------------------------------------------------------------------------------------------------

Release Notes

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

--------------------------------------------------------------------------------------------------------------------------

Install Guide  

Pre-requisites: Java JDK 17

Dependent libraries that must be installed: npm

Download instructions: 
- change directory to backend
- ./mvn build
- 

Build instructions (if needed): if you are providing the raw source code rather than a binary build, how will the customer and users create the required executable application?

Installation of actual application: what steps have to be taken after the software is built? What directories are required for installation?

Run instructions:  what does the user/customer have to do to get the software to execute?

Troubleshooting:  what are common errors that occur during installation and what is the corrective action?