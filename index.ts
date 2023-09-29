import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';

const port = Bun.env.PORT;

const app = new Elysia()
	.use(staticPlugin<'/out'>({
        assets: 'out',
        prefix: '/out'
    }))
	.get('/', () => Bun.file('./out/index.html'))
	.listen({port})

console.log(`🦊 Server is listening on port ${app.server?.port}`)