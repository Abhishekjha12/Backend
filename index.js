require('dotenv').config();
const express = require('express');

const app = express();


const PORT = process.env.PORT || 4000;

const githubDATA=[
  {
    "id": 123456,
    "name": "Backend",
    "full_name": "Abhishekjha12/Backend",
    "owner": {
      "login": "Abhishekjha12",
      "id": 78910,
      "avatar_url": "https://avatars.githubusercontent.com/u/78910?v=4",
      "html_url": "https://github.com/Abhishekjha12"
    },
    "private": false,
    "html_url": "https://github.com/Abhishekjha12/Backend",
    "description": "Sample backend repository",
    "fork": false,
    "created_at": "2025-08-16T05:00:00Z",
    "updated_at": "2025-08-16T08:00:00Z",
    "pushed_at": "2025-08-16T09:30:00Z",
    "git_url": "git://github.com/Abhishekjha12/Backend.git",
    "ssh_url": "git@github.com:Abhishekjha12/Backend.git",
    "clone_url": "https://github.com/Abhishekjha12/Backend.git",
    "size": 1024,
    "stargazers_count": 10,
    "watchers_count": 10,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 2,
    "archived": false,
    "disabled": false,
    "open_issues_count": 1,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "default_branch": "main"
  }
]


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('abhishek jha');
});

app.get('/login', (req, res) => {
  res.send('<h1>login here for twitter</h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h2>welcome to youtube</h2>');
});

app.get('/github',(req,res)=>{
    res.json(githubDATA)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
