import Koa from 'koa';
import connectorInit from './connectors';

connectorInit();

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = `<h1>Summary</h1>`
});

export default app;