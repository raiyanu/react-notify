import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: 'src/index.ts',
    output: [
        { file: 'dist/notifymate.cjs.js', format: 'cjs' },
        { file: 'dist/notifymate.es.js', format: 'es' }
    ],
    plugins: [peerDepsExternal()],
    external: ['react', 'react-dom']
};
