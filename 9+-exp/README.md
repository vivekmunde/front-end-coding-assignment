# The Cricketers App

## What are the requirements?

- Theme: Should support light and dark theme
- Error handling: The API randomly throws error, so the app needs to handle the API error

#### Screen: Cricketers

- Display the list of cricketers.
- The list should have pagination with page size of 10.
- Each item in the list should display below details
	- Name
	- Type
	- Points
	- Rank
	- Age
- The list should support sorted by
	- Name
	- Rank
	- Age
- The list should support filter by
	- Type
- The list should support search by Name
- Screen should have a Refresh button, on click the screen should refetch the data
- Screen should retain the sort, filter & search criteria on browser refresh
- Cricketer Name should be a link which should open a drawer/popup displaying the cricketer details
- Screen should retain the opened drawer on browser refresh

#### Screen: Cricketer Details

- The details screen should display below details
	- Name
	- Description
	- Type
	- Points
	- Rank
	- Date of Birth
	- Age
- Optional, but have bonus points:
	- Display similar players matching the `Type` of the player. Like, if a Batsman details are displayed then display other Batsman
	- Maximum 5 similar players to be displayed
	- Similar players details to display
		- Name
 		- Points
  		- Rank

## How to get the list of players?

The API methods are available in the files:
- get-players.ts
- get-player.ts

## What tech stack to be used?

- React JS 16+
- Typescript
- The app can be setup using tools like CreateReactApp, Vite etc
- Bootstrap/AntD/MaterialUI or any other UI library

This is a minimum tech stack. You are free to add other stacks, like Icons, Styling etc.

## What gives bonus points?

- Unit tests

## What is assessed?

- Complete implementation of the requirements, ideally 100%
- Application structure/architecture
- Software design principals/patterns used
- Cleanliness of the code
- Testability of the code
- Appearance & aesthetics
- The commit messages: We believe in reading git commit messages first before reviewing the code. This helps us understand how the code got matured and your thought process behind it.

## Submission timeline

- There are no time limits defined to complete the exercise. But you must note how much time you spent on it to complete it and mention that time when you submit it.
- Usually, we expect to receive the solution `within 7 days`, once you receive the assignment.

## Remember

- The exercise is expected to be a Web Application
- The exercise needs to be done on ReactJS stack
- The web application must run without any errors
- Provide clear instructions to run the web application

## Use your own imagination to design the screens as you would like to.

**!! Happy Coding !!**