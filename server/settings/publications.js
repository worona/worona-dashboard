import { Meteor } from 'meteor/meteor';
import { settingsLive, packages } from './collections';
import sites from '../sites/collections';

Meteor.publish('settings-live', function settingsPublish() {
  this.autorun(() => {
    const userSites = sites.find(
      { userIds: { $in: [this.userId] } },
      { fields: { _id: 1 } }
    );
    const siteIds = userSites.map(site => site._id);
    return settingsLive.find({ 'woronaInfo.siteId': { $in: siteIds } });
  });
});

Meteor.publish('packages', function settingsPublish(env = 'prod') {
  this.autorun(() => {
    const userSites = sites.find(
      { userIds: { $in: [this.userId] } },
      { fields: { _id: 1 } }
    );
    const siteIds = userSites.map(site => site._id);
    const settings = settingsLive.find({ 'woronaInfo.siteId': { $in: siteIds } });
    const packageNames = settings.map(setting => setting.woronaInfo.name);
    return packages.find(
      { name: { $in: packageNames } },
      { fields: {
        name: 1,
        [`cdn.dashboard.${env}.main.file`]: 1,
        namespace: 1,
        niceName: 1,
        menu: 1,
        type: 1,
        services: 1,
      } },
    );
  });
});