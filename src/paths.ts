// BASE_URL comes without a trailing slash when `base` is set — normalize once here.
const raw = import.meta.env.BASE_URL;
export const BASE = raw.endsWith('/') ? raw : raw + '/';
