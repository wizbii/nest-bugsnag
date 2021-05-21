import { DynamicModule, Global, Module } from '@nestjs/common';
import { BugsnagModuleAsyncOptions, BugsnagModuleOptions } from './bugsnag.interfaces';
import { createBugsnagAsyncProviders, createBugsnagProviders } from './bugsnag.providers';
import { BugsnagLogger } from './bugsnag.logger';

@Global()
@Module({})
export class BugsnagModule {
  static forRoot(options: BugsnagModuleOptions): DynamicModule {
    const providers = [BugsnagLogger, ...createBugsnagProviders(options)];

    return {
      module: BugsnagModule,
      providers: providers,
      exports: providers,
    };
  }

  static forRootAsync(options: BugsnagModuleAsyncOptions): DynamicModule {
    const providers = [BugsnagLogger, ...createBugsnagAsyncProviders(options)];

    return {
      module: BugsnagModule,
      providers: providers,
      exports: providers,
    };
  }
}
