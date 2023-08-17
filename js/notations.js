import { annotate } from 'https://unpkg.com/rough-notation?module';

const n1 = document.querySelector('#stack');
const a1 = annotate(n1, { type: 'highlight', color: '#ffd42aff', iterations: 1, multiline: true });

a1.show();