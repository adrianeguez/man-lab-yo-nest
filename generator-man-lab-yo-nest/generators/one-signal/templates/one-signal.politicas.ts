import {FuncionesSeguridadOneSignal} from '@manticore-labs/nest';
import {CREATE_NOTIFICATION_POLITICAS} from './create-notification.politicas';
import {CANCEL_NOTIFICATION_POLITICAS} from './cancel-notification.politicas';
import {VIEW_DEVICES_POLITICAS} from './view-devices.politicas';
import {VIEW_DEVICE_POLITICAS} from './view-device.politicas';
import {VIEW_NOTIFICATIONS_POLITICAS} from './view-notifications.politicas';
import {VIEW_NOTIFICATION_POLITICAS} from './view-notification.politicas';
import {EDIT_DEVICE_POLITICAS} from './edit-device.politicas';

export const politicasOneSignal: FuncionesSeguridadOneSignal = {
    createNotification: CREATE_NOTIFICATION_POLITICAS,
    cancelNotification: CANCEL_NOTIFICATION_POLITICAS,
    viewDevices: VIEW_DEVICES_POLITICAS,
    viewDevice: VIEW_DEVICE_POLITICAS,
    editDevice: EDIT_DEVICE_POLITICAS,
    viewNotifications: VIEW_NOTIFICATIONS_POLITICAS,
    viewNotification: VIEW_NOTIFICATION_POLITICAS,
};
