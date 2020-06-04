import { container } from 'tsyringe';

import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';
import IMailTemplateProvider from './models/IMailTemplateProvider';

const providers = {
  handlebars: new HandlebarsMailTemplateProvider(),
};

container.registerInstance<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
