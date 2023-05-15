const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://'+process.env.DB_User_PASS +"@cluster0.abhs2to.mongodb.net/mern-project1",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )

    .then(() => console.log('Connected to mongodb'))
    .catch((err) => console.log('Failed to connect to mongodb', err));