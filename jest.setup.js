// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;