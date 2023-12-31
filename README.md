﻿# LeaderBoard
## Hosted Link:[→ Click Me ←](https://mayankkatheriya.github.io/LeaderBoard/)

# UI:
![image](https://github.com/Mayankkatheriya/LeaderBoard/assets/128832286/f1e425ed-54c3-4a29-b34a-f5140fdc22c1)

---

## Explanation:

`HTML (index.html)`:

* This HTML file sets up a leaderboard web application.
* It includes meta tags for character set and viewport settings.
* The title is set to "LeaderBoard."
* External CSS styles are linked from "./styles.css."
* The main content includes a heading, a form for adding players, an error message for validation, and a container for player scoreboards.

`CSS (styles.css)`:

* The CSS file defines various styles for the webpage.
* It specifies the background color and styling for various elements, including the headings, form inputs, buttons, error message, and player scoreboards.

`JavaScript (script.js)`:

* The JavaScript code manages interactions with the leaderboard.
* It listens for form submissions and collects player data (first name, last name, country, and score).
* If any of the form fields are empty, an error message is displayed.
* If all fields are filled, a new player scoreboard element is created with player details and appended to the container.
* The script handles button interactions (+5, -5, and delete).
* Players' scores are updated accordingly, and the scoreboard is sorted based on scores.
* A date and time are generated for each player's entry.

`Summary`:

This code creates a leaderboard web application where you can add player entries with their first name, last name, country, and score. The entries are presented as scoreboards, and you can interact with them using buttons to update scores or delete entries. The leaderboard is sorted based on the player scores. The design is visually appealing with a stylish font and a beige background. Error messages are displayed for empty form fields to ensure data completeness.
