
//defino variables globales para toda la app
// al desplegar a produccion (xeroku) me da el puerto (process.env.PORT)
export const SERVER_PORT: number = Number( process.env.PORT ) || 5000;