# Coding Interview Playground

## Overview
This repository serves as a playground for coding interview preparation.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Challenges](#challenges)
- [Running Tests](#running-tests)

## Features
- A variety of coding challenges across different topics
- Solutions and explanations for each challenge
- Resources for interview preparation

## Getting Started
To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/coding-interview-playground.git
   ```
2. Navigate to the project directory:
   ```bash
   cd coding-interview-playground
   ```
3. Install dependencies (ensure you have the most recent LTS version of Node.js):
   ```bash
   npm install
   ```
4. Explore the challenges and solutions.

## Challenges
- **FizzBuzz**: Implement the classic FizzBuzz problem
- **Promise and Event Loop**: Understand JavaScript Promise and Event Loop execution order
- **Balanced Brackets**: Check if a string of brackets is balanced
- **Valid Palindrome**: Determine if a given string is a palindrome
- **Longest Substring Without Repeating Characters**: Find the length of the longest substring without repeating characters

## Running Tests

To run tests for individual tasks, you can use the following commands:

1. To run tests for a specific task:
   ```
   npm test -- tasks/01/task.test.js
   ```
   Replace `01` with the number of the task you want to test.

2. To run tests for all tasks:
   ```
   npm test
   ```

3. To run tests in watch mode (tests will re-run automatically when files change):
   ```
   npm test -- --watch
   ```

4. To run tests for a specific task in watch mode:
   ```
   npm test -- tasks/01/task.test.js --watch
   ```

Make sure you installed dependencies in before running these commands (see [Getting started](#getting-started) section).


## Kudos
This project was inspired by [Anna Harbour's JavaScript Coding Interview Exercises](https://github.com/annaharbour/js-coding-interview-exercises). Please check out her repository for more challenges and resources.

