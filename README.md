<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

[BullMQ](https://github.com/taskforcesh/bullmq) module for [Nest](https://github.com/nestjs/nest). This should *hopefully* be a drop-in replacement for [@nest/bull](https://www.npmjs.com/package/@nestjs/bull) package.

There is one caveat with this implementation: [Queue Schedulers](https://docs.bullmq.io/guide/queuescheduler). This library does not automatically create a queue scheduler because
of the potential drain on resources:

> It is ok to have as many QueueScheduler instances as you want, just keep in mind that every instance will perform some bookkeeping so it may create some noticeable CPU and IO usage in your Redis instances.

PRs welcome to fix this!

## Installation

```bash
$ npm i --save @ejhayes/nestjs-bullmq
```

## Quick Start

[Overview & Tutorial](https://docs.nestjs.com/techniques/queues)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
