# Project Overview

## Project Name

SteelChat

## Project Description

There's never been a better time to develop a message board quite like now. With a pandemic altering daily life as we know it, everyone is looking for some platform to make communication easy and accessible. SteelChat looks to offer users a communication experience via a message board layout, with minimal barriers to entry. All you need to do is create a username, set a password, and you're ready to go!

The landing page will contain the relevant components needed for a user to quickly set up their username, check out the last few messages posted, and get right to communicating with other users!

## Wireframes

[Landing Page WF](https://i.imgur.com/2iD6cut.png)

## Component Hierarchy

[SteelChat Component Hierarchy](https://i.imgur.com/pkohfFM.png)

## API and Data Sample

First API Snippet - SteelChat API, hosted by Airtable.

```
    "records": [
        {
            "id": "recXLcX0sJqeN7jsa",
            "fields": {
                "password": "GronkIsCool2929_",
                "name": "Gronk the Barbarian",
                "username": "GronkMan02"
            },
            "createdTime": "2021-03-26T14:01:07.000Z"
        },
```

## MVP

#### Planning

- Have a thoroughly developed README.md file. (Refer below to "Step 5: Pitch Your Project Idea" for more.)

#### React

- Be a working, interactive React app, built using create react app.
- Utilize React Router, installed via NPM.
- Have at least 6 separate, rendered components.
- Implement an organized and understandable React file structure.
- Utilize functional and class React components appropriately.
- Use Axios to consume data from Airtable, and GET/render that data in your components.
- Use Axios to POST/create new data on Airtable.
- Use only React for DOM Manipulation.

#### Styling

- Be styled, use any combination of CSS, Styled Components, CSS-in-JS, or a component library to style your React project.
- Use flexbox (display: flex) or CSS Grid (N/A if using a component library that handles this).
- Implement responsive design on 2 screen sizes, using a media query (desktop and mobile and N/A if using a component library that handles this).

#### Linting

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow camelCase, kebab-case and PascalCase conventions.
- Remove unnecessary boilerplate React files and code.
- Remove all console.log()s and commented out code (functional notes and comments are acceptable).

#### Deployment

- Deployed via Netlify.

#### Procedural

- Commit early and often! Have GitHub commits (documenting substantial progress) every day. You should have a minimum of 20 commits total.

### PostMVP

- Implement pseudo-user-authentication (perhaps with the use of local storage)
- ~~Implement advanced message functions (colored text, emotes, etc.)~~
- ~~Create dynamic, user-editable profiles (more than just a username)~~
- Implement search component.

---

## Project Schedule

| Day      | Deliverable                                                                 | Status     |
| -------- | --------------------------------------------------------------------------- | ---------- |
| March 25 | Prompt / Wireframes / Component Hierarchy / Timeframes / Readme             | Complete   |
| March 26 | Project Approval / Initial app setup / Research / Basic Render Capabilities | Complete   |
| March 29 | Pseudocode / Base Component Implementation Core Styling                     | Complete   |
| March 30 | Base MVP completed / Transition to PostMVP                                  | Complete   |
| March 31 | Continuation of PostMVP / Polish                                            | Complete   |
| April 1  | Polish / Final debug / Final PostMVP / Deployment                           | Complete   |
| April 2  | Presentations                                                               | Incomplete |

---

## Timeframes

| Component                     | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Concept Research              |    M     |     1.5hrs     |    1.5hrs     |   1.5hrs    |
| Basic App Hierarchy           |    H     |     1.5hrs     |    1.5hrs     |   1.5hrs    |
| Addressing API                |    M     |      3hrs      |     2hrs      |    2hrs     |
| Building Navbar/Footer        |    M     |     1.5hr      |    1.5hrs     |   1.5hrs    |
| Building User Profile & Forms |    H     |      2hrs      |     4hrs      |    4hrs     |
| Building Message Interface    |    H     |      6hrs      |     6hrs      |    6hrs     |
| Adding Styling                |    H     |      6hrs      |     8hrs      |    8hrs     |
| PostMVP Goals                 |    M     |     12hrs      |     10hrs     |    10hrs    |
| Total                         |          |    33.5hrs     |               |   34.5hrs   |

---

## SWOT Analysis

### Strengths:

- Ambition. This will drive me to pursue each goal I set out and reach for the stars. That's partially why I chose this as my project; I want an opportunity to take what I've learned and put it towards something complex and involved.
- Creativity. I can use my out-of-the-box thinking to address problems as they come up.
- ADHD. Even with its shortcomings, it has granted me the gift of hyperfocus when it comes to projects I'm interested in. I can get a lot done in a short span of time if I get into a groove.
- Determination/Grit. If I'm setting a goal for myself, I'm going to fight to achieve it. I'll fight to hit that goal and even go above and beyond.

### Weaknesses:

- Ambition. As with project one, it's possible that I'll set goals that are a little too lofty and find myself scrambling to finish certain things at the last moment.
- ADHD. While it allows me to hyperfocus on things I'm interested in, there's always the lingering threat of getting super distracted and losing track of time. I have strategies set up to mitigate this as much as possible, but it still bears mentioning.
- Stubbornness. I've bashed my head against problems that felt like they took hours to finish. I've sat in frustration over trying to get certain aspects of an app to function how I want them to. This can certainly get in the way of further progress.
- Overthinking. This is something I'm working on breaking, but its a difficult road to travel. I can definitely find myself stumbling over myself when trying to implement certain components or when trying to get different elements of an app to interact with each other.

### Opportunities:

- Securing a concrete understanding of the concepts and practices I've learned throughout the course.
- Gaining the ability to strike out and experiment.
- Build a project I can show off proudly in its "course-finished" state, then show off post-course in its "use-ready" state.

### Threats:

- The world could end.
- I can try using something like bootstrap and end up completely wrecking my application.
- I might just break my application in general because of human error.
- My goals might be too unrealistic at this time.

---

## Changelog

### (April 1st) v1.0, "Presentation Build"

- Added basic 'like' system. Proof of concept.
- Removed userprofile legacy component.
- Completed search component.
- Removed comments and unneeded logs.
- Implemented flexible styling for four different screen sizes.
- Linked with netlify and deployed.
- Various minor tweaks and bugfixes.

### (March 31st) v0.9, "Smithy"

- Added pseudo-password-validation.
- Improved baseline styling for cards and forms.
- Fully fleshed out appearance of message cards.
- Created boilerplate for, then began to flesh out, search function.
- Added comment button. Proof of concept.
- Various minor tweaks and bugfixes.

### (March 30th) v0.8, "Extract"

- Linked components together.
- Modified and refined function operation.
- Baseline Styling added.
- Finished second API.
- Various minor tweaks and bugfixes.

### (March 29th) v0.5, "Mineral"

- Established message board, forms, and initial user profile.
- Connected API with forms and page render.
- Began second API.
- Created Navbar and footer components.
- Various minor tweaks.

### (March 26th) v0.2.1, "Second Pitch"

- Modified readme elements to reflect new project direction.
- Adjusted wireframes, api, and component hierarchy.

### (March 26th) v0.2, "Pitch"

- Finished the Readme.

### (March 25th) v0.1, "Initial Concept"

- Began readme and gathered relevant resources for pitch.
- Created boilerplate app.
