# Friend Finder Application

## Description

Friend Finder is basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

The survey have 10 questions and each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

To determine the user's most compatible friend, the app compares the difference between current user's scores against those from other users, question by question. Then use the absolute value of the differences and the closest match will be the user with the least amount of difference.

The application is implemented using a [Node.js](https://nodejs.org/en/), npm packages [body-parser](https://www.npmjs.com/package/body-parser) [path](https://www.npmjs.com/package/path) [Express](https://expressjs.com/) server on the back end and the [Bootstrap](https://getbootstrap.com/) CSS framework on the front end.

## Demo
	
Friend Finder App is hosted on Heroku. Please check it out [here]().

## Getting Started

To run the application follow the instructions below:

	git clone git@github.com:ekhin/Friend-Finder.git
	cd friend-finder-master
	npm install
    node server.js
	
Once the application is running locally on `PORT`, go to your browser at the URL `localhost:8080`or on [Heroku]().