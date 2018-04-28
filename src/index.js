const app = require('./config/express');
const mongoose = require('./config/mongoose');
const personal = require('./app/Personal/personal.route');
const general = require('./app/General/general.route');
const physical = require('./app/Physical/physical.route');
const treatment  = require('./app/Treatment/treat.route');
const login = require('./app/Login/login.route');
const medicine  = require('./app/Drug/drug.route');
const certificate = require('./app/Certificate/certificate.route');

mongoose.connect(mongoose.url, { useMongoClient: true });
app.use(personal);
app.use(login);
app.use(general);
app.use(physical);
app.use(treatment);
app.use(medicine);
app.use(certificate);

app.listen(3000, () => console.log('Start server on port 3000!'))