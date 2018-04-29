const app = require('./config/express');
const mongoose = require('./config/mongoose');
const personal = require('./app/Personal/personal.route');
const general = require('./app/General/general.route');
const physical = require('./app/Physical/physical.route');
const treatment  = require('./app/Treatment/treat.route');
const login = require('./app/Login/login.route');
const follow = require('./app/FollowUp/follow.route');
const medicine  = require('./app/Drug/drug.route');
const certificate = require('./app/Certificate/certificate.route');
<<<<<<< HEAD
const evalution  = require('./app/Evalution/evalution.route');
=======
const Summary = require('./app/Summary/sick.route');

>>>>>>> 9bc14f8b6a92e8e558ed9903101a3a7be4898a27

mongoose.connect(mongoose.url, { useMongoClient: true });
app.use(personal);
app.use(login);
app.use(general);
app.use(physical);
app.use(follow);
app.use(treatment);
app.use(medicine);
app.use(certificate);
<<<<<<< HEAD
app.use(evalution);
=======
app.use(Summary);

>>>>>>> 9bc14f8b6a92e8e558ed9903101a3a7be4898a27

app.listen(3000, () => console.log('Start server on port 3000!'))