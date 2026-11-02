import { greet } from 'greet';

/** What the app says to a visitor called `name`, in French. */
export const welcome = (name) => greet(name, 'fr');
