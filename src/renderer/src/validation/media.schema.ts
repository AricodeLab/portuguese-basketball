import {z} from 'zod';

export default z.array(z.object({
    file: z.object({
        name: z.string({required_error:'arquivo precisa de nome'}),
        type: z.string({required_error:'tipo de arquivo requerido'}),
        size: z.number({required_error:'tamanho requirido'}),
    }),
    timer:z.number({required_error:'timer requerido'}).min(5,'no minimo 5 segundos')
}))