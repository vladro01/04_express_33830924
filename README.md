# 04_express_33830924


This project is a simple **Node.js** and **Express.js** web application created as part of coursework **(04_express_33830924)**.  
It demonstrates the use of Express routing, modular structure, and dynamic responses for webb apps.

## Features
- Basic Express server setup  
- Custom routes (`/`, `/about`, `/welcome/:name`, `contact`, `date`, `chain`)  
- Parameterized routing examples 
- Modular router structure  
- Clean, commented JavaScript code

##  Technologies Used
- Node.js – runtime environment  
- Express.js – lightweight web framework  
- npm – package manager  
- VS Code – development environment  
- Git & GitHub – version control

## Installation & Setup

## Cloning the repository
```bash
git clone https://github.com/vladro01/04_express_33830924.git
cd 04_express_33830924
 ```

# How do you install the needed dependecies?
```bash
npm install
```
# How do you run the app?
```bash
node index.js
```

# Project Structure
```bash
/ 04_express_33830924
/ index.js             # Main file to run the app
/ routes/
    / main.js          # Express router module showing the routes
/ package.json         # Project metadata and dependencies
/ .gitignore           # Ignored files and folders
/ README.md            # Documentation
```
# Example route  usage
| Route        | Symbol           | Example Output             |
|---------------|------------------|-----------------------------|
| Homepage      | `/`              | Hello World!               |
| About         | `/about`         | This is the about page     |
| Welcome:name  | `/welcome/:name` | Welcome, Vlad              |
| Contact       | `/contact`       | Contact me at vrota001@campus.goldsmiths.ac.uk |
| Date          | `/date`          | Today's date is: 21/10/2025 |
| Chain         | `/chain`         | This is part 1 , This is part 2 |
| File          | `/file`          | Displaying contents of sample.txt |

