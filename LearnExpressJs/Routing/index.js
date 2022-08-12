const express = require('express');
const app = express();
let birds = require('./birds');
const cookieParser = require('cookie-parser')
const fs = require('fs');
const router = express.Router(); //router

//apply middlewarereq;
router.use((req, res, next) =>{
    console.log("Its ", Date.now());
    next();
});


router.get('/myroute',(req, res, next) =>{
    res.send("Hello Router");
    next();
} );

//error middleware must take 4 parameters
app.use((err, req, res, next) =>{
   console.log(err.stack);
    res.status(500).send(err);
})

app.use(cookieParser());
// mount the route
app.use('/myrouter', router)
//understand how the routing works
// app.set('Content-Type', 'text/plain');
// app.set('Content-Type', 'application/json');
// app.set('Content-Type', 'text/html');


// async function cookieValidator (cookies) {
//     try {
//       await externallyValidateCookie(cookies.testCookie)
//     } catch {
//       throw new Error('Invalid cookies')
//     }
//   }
//   app.use(cookieParser())

// app.use(cookieValidator)

//middlewares

app.use((req, res, next) =>{
    console.log('middleware on action');
    next();
});

const getOrigin = (req, res, next) =>{
    console.log('requests from ',req.originalUrl);
    next();
};
const getMethod = (req, res, next) =>{
    console.log('the request method is ', req.method);
    next();
};

const middlewares = [getOrigin,getMethod];

app.get('/', middlewares, (req, res, next) =>{
    res.send('Hello World Welcome to Express Js');
    next()
});

app.use('/', (req, res, next) =>{
    console.log('middleware on the home page');
    next();
});


app.post('/hello', (req, res) =>{
    res.send('We are posting to you today!')
    });

app.put('/edit', (req, res) =>{
    res.send("heyy we edit here at http!!")
    });

app.all('/all', (req, res, next) =>{
    res.send("we are all here at http!!")
    next();
    });


app.delete('/delete', (req, res) =>{
    res.send("we are deleting here at http!!")
    });

app.get('/book/:bookId', (req, res) =>{
    console.log(req.params)
    res.send(`we are getting the book with id ${req.params.bookId}`)
    });

app.get('/users/:userId', (req, res, next) =>{
    console.log(req.params)
    res.json({
        message:"welcome Here",
        full_name : "Jane Kamau",
        location: 'Juja',
        age: 25,
        school:"JKUAT"
    })
    // res.send(`we are getting the user with id ${JSON.stringify(req.params)}`)
    });

app.get('/download', (req, res)=>{
    res.download('../views/test.txt', (err)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect(301,'/')
            res.send("Download Success")
            console.log("download success")

        }
    });
})

//chain the route
app.route('/payment',).get((req, res) =>{
   res.json({method: "M-Pesa", amount: "Ksh.500", status: "Pending", timestamp: Date(JSON.stringify(Date.now()))})
}).put((req, res) =>{
    res.json({client: "08345678", goods: "soap", quantity: 10})
}).post((req, res) =>{
    res.json({paybill: "245224", account_number: 34567890})
});

app.use('./birds', birds);



//middle ware functions
const logger = (req, res, next) =>{
    console.log("I AM LOGGER +++++++++++++");
    next(); //call the next function
}

app.use(logger); // using the middleware function

const requestTime = (req, res, next) =>{
    req.requestTime = Date.now();
    console.log(req.requestTime)
    next();
};

app.use(requestTime); // using the middleware function



//error handling

app.get('/file',(req, res, next)=>{
    fs.readFile("./no_file", (err)=>{
        if (err){
            next(err)
        }else{
            res.send("everithing is cool")
        }

    })
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000 visit http://localhost:3000');
})
