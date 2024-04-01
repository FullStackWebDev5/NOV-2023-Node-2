const express = require('express')
const ejs = require('ejs');

const app = express()

app.set('view engine', 'ejs')

const USERS = [
  {
    "id": 1,
    "username": "george",
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "username": "janet",
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "username": "emma",
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "username": "eve",
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "username": "charles",
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "username": "tracey",
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
]

app.get('/', (req, res) => {
  res.send('Our first Node Express Server :)')
})

app.get('/404', (req, res) => {
  res.sendFile(__dirname + '/404.html')
})

app.get('/test', (req, res) => {
  res.send(req.query)
})

app.get('/:username', (req, res) => {
  const { username } = req.params

  const userDetails = USERS.find(user => user.username === username)

  if(userDetails) {
    res.render('user', userDetails)
  } else {
    res.redirect('/404')
  }
})

app.listen(3000, () => {
  console.log('Server is up :)')
})














/*
  ## Template/View Engines
  - Embedded JavaScript templating (EJS)

  Examples:
    app.get('/mumbai', (req, res) => {
      res.render('example', { cityName: 'Mumbai' })
    })

    app.get('/bangalore', (req, res) => {
      res.render('example', { cityName: 'Bangalore' })
    })

    <!-- <% hobbies.forEach((hobby) => {%>
      <li><%=hobby%></li>
    <% }) %>
    </ul>
    <% if(isPremium){ %>
      <p class="premium-tag">Premium User 🌟</p>
    <% } %> -->

  ## Request Parameters: URL variables
  Examples:
    // app.get('/:cityName', (req, res) => {
    //   const { cityName } = req.params
    //   res.send(cityName.toUpperCase())
    // });

  ## Query Paramaters: Additional Values added in the URL after q and separated by &
*/