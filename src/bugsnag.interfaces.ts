import { Client, Config } from '@bugsnag/node';

export class BugsnagClient extends Client {}

export type BugsnagModuleOptions = string | Config;

export interface BugsnagModuleAsyncOptions {
  useFactory: (...args: any[]) => Promise<BugsnagModuleOptions> | BugsnagModuleOptions;
  inject?: any[];
}
