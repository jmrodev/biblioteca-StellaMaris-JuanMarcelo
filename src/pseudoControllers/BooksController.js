import * as fs from 'node:fs';
let books = "../data/book.json"

import { unlink } from 'node:fs';

const post = () => {
    unlink('./hello', (err) => {
        if (err) throw err;
        console.log('successfully deleted ./hello');
    });
}
post()