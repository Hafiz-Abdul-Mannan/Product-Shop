const path = require('path');
const express = require('express');
const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const app = express();
const parsebody = require('body-parser');
const rootDir = require('./util/path.js')

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(parsebody.urlencoded({ extended: false }));
app.use(adminData.routes);
app.use(shopRoutes);
app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
});


app.listen(1753);