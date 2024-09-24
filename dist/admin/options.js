import componentLoader from './component-loader.js';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/mongoose';
import Admin from './admin-model.js'; 
import App from './app-model.js'; 
import Channels from './channels-model.js'; 
import Platforms from './platform-model.js'; 
import Archs from './arch-model.js'; 
import AppsNames from './apps-name-model.js'
AdminJS.registerAdapter({ Database, Resource });

const options = {
    componentLoader,
    rootPath: '/admin',
    resources: [
        {
            resource: Admin,
            options: {
               
            },
        },
        {
          resource: App,
          options: {
            properties: {
              'app_id': {
                isVisible: {
                  list: true,
                  filter: true,
                  show: true,
                  edit: true,
                },
              },
              'channel_id': {
                isVisible: {
                  list: true,
                  filter: true,
                  show: true,
                  edit: true,
                },
              },
              'artifacts.platform': {
                isVisible: {
                  list: true,
                  filter: true,
                  show: true,
                  edit: true,
                },
              },
              'artifacts.arch': {
                isVisible: {
                  list: true,
                  filter: true,
                  show: true,
                  edit: true,
                },
              },
            },
            actions: {
              list: {
                before: async (request, context) => {
                  request.query.populate = [
                    { path: 'app_id', select: 'app_name' },
                    { path: 'channel_id', select: 'channel_name' },
                    { path: 'artifacts.platform', select: 'platform_name' },
                    { path: 'artifacts.arch', select: 'arch_id' },
                  ];
                  return request;
                },
              },
            },
          },
        },
        {
            resource: Channels,
            options: {
              actions: {
                list: {
                  after: async (response) => {
                    response.records = response.records.filter(record => record.params.channel_name);
                    return response;
                  },

                },
              },
            },
          },

        {
            resource: AppsNames,
            options: {
              actions: {
                list: {
                  after: async (response) => {
                    response.records = response.records.filter(record => record.params.app_name);
                    return response;
                  },

                },
              },
            },
        },
        {
            resource: Platforms,
            options: {
              actions: {
                list: {
                  after: async (response) => {
                    response.records = response.records.filter(record => record.params.platform_name);
                    return response;
                  },

                },
              },
            },
        },
        {
            resource: Archs,
            options: {
              actions: {
                list: {
                  after: async (response) => {
                    response.records = response.records.filter(record => record.params.arch_id);
                    return response;
                  },

                },
              },
            },
        },
    ],
    databases: [],
};

export default options;

