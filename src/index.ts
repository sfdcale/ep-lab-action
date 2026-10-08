import * as core from '@actions/core';

const project = core.getInput('project') || 'base';

core.info(`Hello ${project} — lab v2`);
core.info(`Action runtime: ${process.version}`);
