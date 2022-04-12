**BlablaCar Web - Assignment:**

A simple web application that renders a basic Blablacar search result page.

The hosted application can be accessed from the below URL:

https://ramkrivas.github.io/blablacar.assignment/

![ezgif com-gif-maker](https://user-images.githubusercontent.com/71707/162988640-5e2b8fe0-f3af-49c3-ba66-df514aae5a08.gif)

Steps to Install and start the application locally

  > npm install
  
  > npm run start
  
  
 To run test cases locally
 
  > npm run test
  
  > npm run storybook
  
  
  **Thought process during development**
  
  Initially when I started this assignment, I didn't decide the final application will be in angular or react. Hence I wanted to be framework agnostic with UI developmnent.
  so, I decided to build the "search control", "overlay controls" as a web component with **ShadowDOM** which provides better encapsulation also can be resued in any of the SPA framework. 
  
  The final application is now in react which integrates both the react webcomponents and also custom web components. 
  
 I mostly used the react functional components and custom hooks.
  
  
  **Open issues and Areas for improvement**
  
  I didn't send much time in CSS formatting. Though I used SCSS preprocessors, for better encapsulation the scss can be enabled at indidivual component level.
  
  Search we do from the search control is not completely integrated with search result. Currently, it will always show the for hardcoded search parameter.
  
  The code must be enchanced for error handling. Currently error handling is not done for most of the scenarios.
  
  The UT test coverage, I did only for few components to give insights on what on the approach. I didn't get time to complete the UT coverages for some of the components
  and also for the service codes.
  
  There is a open bug, first time it brings the duplcicate results. The possible cause is the trip card component is getting re-rendered. This has to be fixed.
  
  
  
  
  
  
