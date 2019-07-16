Friend Finder - Node and Express Servers

FriendFinder is a basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

In this app we have a survey with 10 questions on preferences. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question. Based on that they will have a result with the best match for a friend.

1. npm installations in our server.js:

express and path.

2. HtmlRoutes.js file includes two routes:

GET Route to /home & /survey.

image---

3. ApiRoutes.js file contains two routes:

GET route with the url /api/friends. This displays a JSON of all possible friends.
A POST routes /api/friends. This handles incoming survey results and the compatibility logic to get the best match.

image------

We created our own API database (app/data/friends.js) as an array of objects to get the best match as a result on the survey.

image---------

