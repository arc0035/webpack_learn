import path from 'path';

const PROJECT_ROOT = path.resolve(__dirname, '..'); 

const PROJECT_DIST = path.resolve(PROJECT_ROOT, 'dist');

const APP_ROOT = path.resolve(PROJECT_ROOT, 'app');

const DEFAULT_PORT = 3600;

export {
    PROJECT_ROOT,
    PROJECT_DIST,
    APP_ROOT, 
    DEFAULT_PORT
}