import hehe from './app/extend/context';

declare module 'egg' {

  interface Context {
    hehe: hehe
  }
}