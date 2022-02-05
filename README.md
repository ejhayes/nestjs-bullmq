<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://docs.bullmq.io/" target="blank"><img src="https://user-images.githubusercontent.com/95200/64285204-99c04900-cf5b-11e9-925c-4743006ce420.png" width="300" /></a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/@biosimulations/nestjs-bullmq" target="_blank"><img src="https://img.shields.io/npm/v/@biosimulations/nestjs-bullmq.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/@biosimulations/nestjs-bullmq" target="_blank"><img src="https://img.shields.io/npm/l/@biosimulations/nestjs-bullmq.svg" alt="Package License" /></a>
    <a href="https://www.npmjs.com/@biosimulations/nestjs-bullmq" target="_blank"><img src="https://img.shields.io/npm/dm/@biosimulations/nestjs-bullmq.svg" alt="NPM Downloads" /></a>
</p>

## Description

> This package is a fork of [@ejhayes/nestjs-bullmq](https://github.com/ejhayes/nestjs-bullmq) that is customized to work with the build of [BioSimulations](https://github.com/biosimulations/biosimulations). It also contains updates to some packages and dependencies to work with NestJS v8 without npm errors. While you are welcome to use this package, the original package may be better suited for your needs.

[BullMQ](https://github.com/taskforcesh/bullmq) module for [Nest](https://github.com/nestjs/nest). This should _hopefully_ be a drop-in replacement for [@nest/bull](https://www.npmjs.com/package/@nestjs/bull) package.

There is one caveat with this implementation: [Queue Schedulers](https://docs.bullmq.io/guide/queuescheduler). This library does not automatically create a queue scheduler because
of the potential drain on resources:

> It is ok to have as many QueueScheduler instances as you want, just keep in mind that every instance will perform some bookkeeping so it may create some noticeable CPU and IO usage in your Redis instances.

PRs welcome to fix this!

## Installation

```bash
$ npm i --save @biosimulations/nestjs-bullmq
```

## Quick Start

[Overview & Tutorial](https://docs.nestjs.com/techniques/queues)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
