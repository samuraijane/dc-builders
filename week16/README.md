# Phase 2 - Full Stack Project Requirements (TENTATIVE as of 10/16/20)

## Description

1. Your task is to form into teams and build a full-stack application that utilizes Express and Postgres
1. This project will focus more on the back-end content we've been covering, so having a simple user interface is totally fine! (In fact, it's encouraged...)
1. Each team will present their project on XXXXX
    1. Presentations should be no longer than 10 minutes

## Technical Requirements 

1. Use  Express for your backend routes
1. Use a Postgres database to persist your application data
1. Use sequelize for ORM.
1. All database changes have to be schema migrations with Sequelieze.
1. Your server should serve a website that users can interact with (user actions should trigger CRUD operations)
1. Must have PassportJS Local Strategy for authentication OR Incorporate ONE the following into your backend:
    1. Twitter
    1. Facebook
    1. Google
    1. GitHub
    1. or any other OAuth Provider
1. Include a descriptive README with the following:
    1. Project purpose (sales pitch)
    1. Hosted Location
    1. Technical Details
        1. How to build/run/test project
        1. Technologies used
    1. Team information
1. Optionally, incorporate one of the following too:
    1. Socket.io
    1. EJS
    1. A node module of your choice (run it by your instructor first though...)
1. Format code use a code linter/formating tool.
1. Break different parts of the code into different files / modules.
1. Deploy your project to Heroku, Glitch + ElephantSQL (easy mode) or Amazon AWS (hard mode)


### OPTIONAL BUT ENCOURAGED:

1. Your repo must be connected to Travis CI or GitHub Actions:
    1. You must have at least one test of an API endpoint that touches the database
    1. This tutorial might be helpful: Test Driven Development with Node
    1. Put a build status badge in your README.md that links to your latest build
    1. You can even test for code style.
1. You must use some form of HTML templating
    1. Pure JavaScript functions that return strings, or use template literals 
    1. mustache, handlebars, ejs, pug, etc

## Workflow Requirements

1. Create one github repo (add all group members as collaborators)
1. Collaborate using PRs (Pull Requests), making sure to tag a reviewer for approval
    1. Don't commit anything directly to the `develop` branch (remote or local); *you should explicitly disallow this for all team members*
    1. Instead, work on a branch of `develop` and merge your work in through Github Pull Requests
    1. Have other teammates be Reviewers for you pull requests
    1. See the suggested PR rejection criteria below
1. Use a feature tracking system for SCRUM, such as GitHub Project Boards
    1. We will meet with each team for "stand up meetings" during classtime


## Suggested PR rejection criteria

1. Does not fulfill feature
1. Breaks other feature
1. Does not follow team's coding style/standards
1. Too many commits in a single PR (meaning too much to review)
1. Code in a commit does not match commit message
1. Commit message is vague


## Rubric

Though the project is pass fail, the following rubric will be used to provide feedback to each project team:

|   | Overall Requirements                                                                                                     | Score  (1-5, 5  is excellent) | Instructor Comments |
|---|--------------------------------------------------------------------------------------------------------------------------|-------------------------------|---------------------|
| 1 | Project README is thoroughly documents with project information (both technical and persuasive).                         |                               |                     |
| 2 | Presentation: Each team member has presented. Teams delivers both an effective and professional sales + technical pitch. |                               |                     |
| 3 | Hosted project is complete (as-advertised) and bug-free.                                                                 |                               |                     |
| 4 | Projects meets technical requirements laid out in the requirements README                                                |                               |                     |
| 5 | Project Team met Workflow requirements laid out in the requirements README                                               |                               |                     |

