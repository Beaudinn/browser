import 'regenerator-runtime/runtime';
import {Freeday} from './index';

const w = window as any;
const config = (w.Freeday && w.Freeday.config) || {};
const {
  accountId,
  customerId,
  baseUrl,
  greeting,
  awayMessage,
  customer,
  debug,
  setInitialMessage,
  onSetCustomerId,
  onSetConversationId,
  onSetWidgetSettings,
  onPresenceSync,
  onConversationCreated,
  onMessageCreated,
  onMessagesUpdated,
} = config;

if (!accountId) {
  throw new Error('An account token is required to start Freeday!');
}

Freeday.init({
  accountId,
  customerId,
  baseUrl,
  greeting,
  awayMessage,
  customer,
  debug,
  setInitialMessage,
  onSetCustomerId,
  onSetConversationId,
  onSetWidgetSettings,
  onPresenceSync,
  onConversationCreated,
  onMessageCreated,
  onMessagesUpdated,
});
