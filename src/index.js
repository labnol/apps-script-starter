/* Written by Amit Agarwal */

import { getGmailAliases, getGmailLabels } from './gmail';
import { sendmail } from './server/mail';
import { doGet } from './server/webapp';

global.sendmail = sendmail;
global.doGet = doGet;

global.getGmailLabels = getGmailLabels;
global.getGmailAliases = getGmailAliases;
