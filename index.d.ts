import 'egg';
import PluginTest from './app/service/plugin-test';

declare module 'egg' {

  interface IService {
    pluginTest: PluginTest
  }
}