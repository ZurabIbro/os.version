import os, { hostname } from 'os'
import {User} from './welcome.js';


console.log(User(os.type()));