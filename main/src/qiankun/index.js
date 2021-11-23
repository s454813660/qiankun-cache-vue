import { registerMicroApps, start } from 'qiankun';

export const apps = [
  {
    name: 'child0', // app name registered
    entry: '//localhost:10000/',
    container: '#vuechild0',
    activeRule: '#/child0',
  },
  {
    name: 'child1', // app name registered
    entry: '//localhost:20000/',
    container: '#vuechild1',
    activeRule: '#/child1',
  }
]

export const registerFn = (apps, lifeCycles = {}) => {
  registerMicroApps(apps, lifeCycles);
}

export const startFn = (options) => start(options);