import { z } from 'zod';

export default z.object({
    modo_de_jogo: z.string().superRefine((value, ctx) => {
        if (value != 'crescente' && value != 'decrescente') {
            ctx.addIssue({ code: 'custom', message: 'valor do modo de jogo inválido' })
        }
    }),
    tempo_de_jogo: z.number({ required_error: 'tempo de jogo requerido' }),
    desconto_de_tempo: z.number({ required_error: 'desconto de tempo requerido' }),
    tempo_de_ataque: z.number({ required_error: 'tempo de ataque requerido' }),
    toque_de_buzina_ao_iniciar: z.boolean({ required_error: 'tempo de ataque requerido' }),
    toque_de_buzina_ao_falar: z.boolean({ required_error: 'tempo de ataque requerido' }),
})