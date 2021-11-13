import bodyParser from 'body-parser';
import express from 'express';
import data  from './db.js';
// import profiles  from './db2.js';

// import bodyParser from body-bodyParser;

// Set up the express app
const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
// get all persons

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)

  // Pass to next layer of middleware
  next();
});

app.get('/user', (req, res) => {
  res.status(200).send({
    data: data.user,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/examsInfo', (req, res) => {
  res.status(200).send({
    data: data.examsInfo,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/exams', (req, res) => {

  res.status(200).send({
    data: data.exams,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/testsInfo', (req, res) => {
  res.status(200).send({
    data: data.testsInfo,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/test', (req, res) => {
  res.status(200).send({
    data: data.exams,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/readingInfo', (req, res) => {
  res.status(200).send({
    data: data.readingInfo,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/reading', (req, res) => {
  res.status(200).send({
    data: data.reading,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/api/v1.0/merge/ronwellTraining1', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'waiting for status code 500',
  })
});



app.get('/api/v1.0/tested example', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'tested example returns success',
  })
});

app.get('/api/v1.0/test1', (req, res) => {
  res.status(201).send({
    success: 'true',
    message: 'tested successfully',
  })
});

app.get('/api/v1.0/configuration', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'configuration retrieved successfully',
  })
});

app.get('/acdb-sync/person/all', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'persons retrieved successfully',
    persons: persons
  })
});

app.get('/acdb-sync/languages', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'languagse retrieved successfully',
    persone: persons
    
  })
});


app.get('/acdb-sync/profiles', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'profiles retrieved successfully',
    profiles: profiles
  })
});

app.post('/acdb-sync/profiles', (req, res) => {

  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.descriptionn) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }
 const person = {
   id: db.length + 1,
   firstname: req.firstname,
   lastname: req.lastname,
   title: req.title,
   description: req.description
 }
 db.push(person);
 
 return res.status(201).send({
   success: 'true',
   message: 'profiles added successfully',
  // return message for person creation
 })
});

app.post('/acdb-sync/configuration', (req, res) => {

  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.descriptionn) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }
 const person = {
   id: db.length + 1,
   firstname: req.firstname,
   lastname: req.lastname,
   title: req.title,
   description: req.description
 }
 db.push(person);
 
 return res.status(201).send({
   success: 'true',
   message: 'person added successfully',
  // return message for person creation
 })
});

app.post('/acdb-sync/person/set', (req, res) => {
    console.log('Got body:', req.body);
    console.log('Got body:', res.body);
    console.log(req.headers.host)

    console.dir(req.body);

    if(res) {
        if(res.headers)
        console.log(res.headers.host)
    }

  //   console.log(res.IncomingMessage.headers.host)

  //  console.log(res)

  //  console.log(res)
    // console.log(res)
 //   console.log(`res str ${JSON.stringify(res)}`)

    if(!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    } /*else if(!req.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required'
      });
    }*/
   const person = {
     id: persons.length + 1,
     firstname: 'Alper', // req.firstname,
     lastname: 'Yilmaz', // req.lastname,
     title: 'Engineer', //req.title,
     description: 'User with kone profile' // req.description
   }

   // console.log("lastname " + res.lastname)
   persons.push(person);
   
   return res.status(201).send({
     success: 'true',
     message: 'person added successfully',
    // return message for person creation
   })
  });

  app.post('/acdb-sync/person/remove', (req, res) => {

    if(!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    } else if(!req.descriptionn) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required'
      });
    }
   const person = {
     id: db.length + 1,
     firstname: req.firstname,
     lastname: req.lastname,
     title: req.title,
     description: req.description
   }
   // remove 
   // db.push(person);
   
   return res.status(201).send({
     success: 'true',
     message: 'person added successfully',
    // return message for person creation
   })
  });

  app.post('/api/v1.0/badges/block', (req, res) => {

    if(!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    } else if(!req.descriptionn) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required'
      });
    }
   const person = {
     id: db.length + 1,
     firstname: req.firstname,
     lastname: req.lastname,
     title: req.title,
     description: req.description
   }
   db.push(person);
   
   return res.status(201).send({
     success: 'true',
     message: 'person added successfully',
    // return message for person creation
   })
  });

  app.post('/api/v1.0/persons/delete', (req, res) => {
    console.log('Got body:', req.body);
    console.log('Got body:', res.body);
    console.log(req.headers.host)

    console.dir(req.body);

    if(res) {
        if(res.headers)
        console.log(res.headers.host)
    }

  //   console.log(res.IncomingMessage.headers.host)

  //  console.log(res)

  //  console.log(res)
    // console.log(res)
 //   console.log(`res str ${JSON.stringify(res)}`)

    if(!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    } else if(!req.descriptionn) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required'
      });
    }
   const person = {
     id: db.length + 1,
     firstname: req.firstname,
     lastname: req.lastname,
     title: req.title,
     description: req.description
   }
   db.push(person);
   
   return res.status(201).send({
     success: 'true',
     message: 'person added successfully',
    // return message for person creation
   })
  });

function assignBadge() {

  }

function unassignBadge () {

}

function unassignTransitionalBadge () {

}
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

