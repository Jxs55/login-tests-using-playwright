# SDET Test Automation

## Description
This project automates the login functionality of:
https://the-internet.herokuapp.com/login

It includes:
- Positive test (successful login)
- Negative test (invalid username)
- Negative test (invalid password)

## Setup
npm install

## Run tests
npx playwright test

## Tech Stack
- Playwright
- JavaScript

## Project Structure

- /tests → test cases
- /pages → page objects (POM)

## Approach

Used Page Object Model (POM) to separate UI logic from test logic.