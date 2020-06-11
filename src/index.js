import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';
// import router from './config/router'
// import router from './routes/index'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);
// app.router(router);

// 5. Start
app.start('#root');
