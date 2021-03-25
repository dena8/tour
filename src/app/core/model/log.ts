import { IBase } from './base';
import {IUser} from './user';

export interface ILog extends IBase {
    customer: string;
    error: string;
    stacktrace: string;
    date: string;
}