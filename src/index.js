const app = require('./config/express');
const mongoose = require('./config/mongoose');
const personal = require('./app/Personal/personal.route');
const general = require('./app/General/general.route');
const physical = require('./app/Physical/physical.route');
const Disease  = require('./app/Disease/disease.route');
const Treatment  = require('./app/Treatment/treatment.route');
const follow = require('./app/FollowUp/follow.route');
const medicine  = require('./app/Drug/drug.route');
const certificate = require('./app/Certificate/certificate.route');
const summary = require('./app/Summary/summary.route');
const treater = require('./app/Treater/treater.route');
const officer = require('./app/Officer/officer.route');
const  user = require('./app/User/user.router');
 
mongoose.connect(mongoose.url, { useMongoClient: true });
app.use(personal);
app.use(general);
app.use(physical);
app.use(follow);
app.use(Treatment);
app.use(Disease);
app.use(medicine);
app.use(certificate);
app.use(summary);
app.use(treater);
app.use(officer);
app.use(user);

app.listen(3000, () => console.log('Start server on port 3000!'))