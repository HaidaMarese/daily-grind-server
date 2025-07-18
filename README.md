#  The Daily Grind - Express Server

This project is a basic Node.js + Express backend for a local coffee shop called **The Daily Grind**. It serves a simple homepage and contact page using static HTML files.

## Project Structure
```
daily-grind-server/
├── public/
│ ├── index.html # Homepage
│ └── contact.html # Contact Page
├── server.js # Express server setup
└── package.json # Project metadata and dependencies

```


##  Features

- Express.js server setup
- Serves static HTML pages using `res.sendFile()`
- Clean routing for `/` and `/contact`
- Uses Node.js `path` module for reliability

##  Tech Stack

- Node.js
- Express.js
- HTML5

## Installation

```bash
git clone https://github.com/HaidaMarese/daily-grind-server.git
cd daily-grind-server
npm install
```

## Test
- node server.js
- http://localhost:3000 
- http://localhost:3000/contact 

## Screenshot

![image] <img width="2858" height="1612" alt="image" src="https://github.com/user-attachments/assets/467b3f98-88fb-4ce1-9294-a0e2dc4f5d6a" />


## Reflection Questions :
1. What is the difference between res.send() and res.sendFile()?
res.send() sends text or JSON directly. res.sendFile() sends a complete file like an HTML page.

2. Why is the path module necessary when serving files?
It creates absolute paths to avoid errors across different operating systems or project locations.

3. How would you add a third page (e.g., a menu page)?
Create menu.html in the public folder, then add a route /menu in server.js using res.sendFile.
