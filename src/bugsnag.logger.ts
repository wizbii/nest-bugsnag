import { Injectable, Logger, LoggerService } from '@nestjs/common';
import { BugsnagService } from './bugsnag.service';

@Injectable()
export class BugsnagLogger extends Logger implements LoggerService {
  constructor(private bugsnagService: BugsnagService) {
    super();
  }

  log(message: string, context?: string) {
    super.log(message, context);
  }

  error(message: string, trace?: string, context?: string) {
    if (!this.bugsnagService.instance) {
      return;
    }

    this.bugsnagService.instance.notify(new Error(message), function (event) {
      event.addMetadata('instance', { level: 'error', trace: trace, context: context });
    });
    super.error(message, trace, context);
  }

  debug(message: string, context?: string) {
    super.debug(message, context);
  }

  verbose(message: string, context?: string) {
    super.verbose(message, context);
  }
}
