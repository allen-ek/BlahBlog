# BlogIt
Tech Blog Site
Allen Klein

- [Link to Heroku Site](https://intense-beyond-01848.herokuapp.com/)
- [Link to Github Repository](https://github.com/allen-ek/BlahBlog)

## Why?
I wanted to create a blog website that would allow for people to post and access other peoples post

## What I learned
I learned how to use Node.js, Express npm, mysql to serve client side data as well as how to incorparate a server to fetch and host the data for 
the bolg application. I also learned how to create html and api paths to handle requests and how to respond to these requests.
## Technologies Used
Bootstrap
Express
Node.js
CSS
HTML
Heroku
Github
Handlebars 
MySQL

## Code Snippet
```html
<div class="card">
    <div class="card-header">
       <h4><a class="link" href="/post/{{id}}">{{title}}</a></h4>
        <p>Posted by {{user.username}}</p>
    </div>
        <p class="card-body">{{text}}</p>
</div>
```
The code snippet above was the code in order for handlebars to generate content given a specific route.
