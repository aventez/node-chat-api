export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    version: process.env.VERSION || '1.0',
});