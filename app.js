import bodyParser from 'body-parser';
import express from 'express';
import data  from './db.js';
// import profiles  from './db2.js';

// import bodyParser from body-bodyParser;

// Set up the express app
const app = express();
var readId = 9;
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
// get all persons

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

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

app.get('/study-plan', (req, res) => {
  res.status(200).send({
    data: data.studyplan,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/apps', (req, res) => {
  res.status(200).send({
    data: data.apps,
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

app.get('/exams/:group', (req, res) => {

  if(req.params.group == 'test') {
    res.status(200).send({
      data: data.examsTest,
      success: 'true',
      message: 'waiting for status code 200',
    })

  } else if(req.params.group == 'devops'){
    res.status(200).send({
      data: data.examsDevops,
      success: 'true',
      message: 'waiting for status code 200',
    })
  } else if(req.params.group == 'agile'){
    res.status(200).send({
      data: data.examsAgile,
      success: 'true',
      message: 'waiting for status code 200',
    })
  }  
  else {
    res.status(200).send({
      data: data.exams,
      success: 'true',
      message: 'waiting for status code 200',
    })
  }


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
    data: data.tests,
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

app.get('/reading/:id', (req, res) => {
  res.status(200).send({
    data: data.reading[req.params.id],
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/documentsInfo', (req, res) => {
  res.status(200).send({
    data: data.documentsInfo,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/documents', (req, res) => {
  res.status(200).send({
    data: data.documentsDevelopment,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/documents/:group', (req, res) => {

  if(req.params.group == 'test') {
    res.status(200).send({
      data: data.documentsTest,
      success: 'true',
      message: 'waiting for status code 200',
    })

  } else if(req.params.group == 'devops'){
    res.status(200).send({
      data: data.documentsDevops,
      success: 'true',
      message: 'waiting for status code 200',
    })
  }  
  else {
    res.status(200).send({
      data: data.documents,
      success: 'true',
      message: 'waiting for status code 200',
    })
  }


});





app.get('/lessonsInfo', (req, res) => {
  res.status(200).send({
    data: data.lessonsInfo,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/courses/:group', (req, res) => {

  if(req.params.group == 'test') {
    res.status(200).send({
      data: data.coursesAutomation,
      success: 'true',
      message: 'waiting for status code 200',
    })

  } else if(req.params.group == 'devops'){
    res.status(200).send({
      data: data.coursesDevops,
      success: 'true',
      message: 'waiting for status code 200',
    })
  } else if(req.params.group == 'cloud'){
    res.status(200).send({
      data: data.coursesCloud,
      success: 'true',
      message: 'waiting for status code 200',
    })
  } else if(req.params.group == 'sap'){
    res.status(200).send({
      data: data.coursesSAP,
      success: 'true',
      message: 'waiting for status code 200',
    })
  } else if(req.params.group == 'data'){
  res.status(200).send({
    data: data.coursesData,
    success: 'true',
    message: 'waiting for status code 200',
  })
}  
  else {
    res.status(200).send({
      data: data.courses,
      success: 'true',
      message: 'waiting for status code 200',
    })
  }


});

app.get('/courses', (req, res) => {
  res.status(200).send({
    data: data.lessons,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/course/0', (req, res) => {
  res.status(200).send({
    data: data.lessons0,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/course/1', (req, res) => {
  res.status(200).send({
    data: data.lessons1,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/course/2', (req, res) => {
  res.status(200).send({
    data: data.lessons2,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/course/3', (req, res) => {
  res.status(200).send({
    data: data.lessons3,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/course/4', (req, res) => {
  res.status(200).send({
    data: data.lessons4,
    success: 'true',
    message: 'waiting for status code 200',
  })
});
app.get('/course/5', (req, res) => {
  res.status(200).send({
    data: data.lessons5,
    success: 'true',
    message: 'waiting for status code 200',
  })
});
app.get('/course/6', (req, res) => {
  res.status(200).send({
    data: data.lessons6,
    success: 'true',
    message: 'waiting for status code 200',
  })
});
app.get('/digibooksInfo', (req, res) => {
  res.status(200).send({
    data: data.digibooksInfo,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/digibooks', (req, res) => {
  res.status(200).send({
    data: data.digibooks,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/cluebanks', (req, res) => {
  res.status(200).send({
    data: data.cluebank,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/cluebankQuestions', (req, res) => {
  res.status(200).send({
    data: data.cluebankQuestions,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/cluebanksInfo', (req, res) => {
  res.status(200).send({
    data: data.cluebanksInfo,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/cluebankQuestions', (req, res) => {
  res.status(200).send({
    data: data.cluebankQuestions,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/cluebankGrammars', (req, res) => {
  res.status(200).send({
    data: data.cluebankGrammars,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/cluebankStrategies', (req, res) => {
  res.status(200).send({
    data: data.cluebankStrategies,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/cluebankWords', (req, res) => {
  res.status(200).send({
    data: data.cluebankWords,
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/cluebank/1', (req, res) => {
  res.status(200).send({
    data: data.cluebank[0],
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/notifications', (req, res) => {
  res.status(200).send({
    data: data.notifications,
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

app.get('/document/1', (req, res) => {
  res.status(200).send({
    data: data.documents[1],
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/document/3', (req, res) => {
  res.status(200).send({
    data: data.documents[3],
    success: 'true',
    message: 'waiting for status code 200',
  })
});

app.get('/document/7', (req, res) => {
  res.status(200).send({
    data: data.documents[7],
    success: 'true',
    message: 'waiting for status code 200',
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

