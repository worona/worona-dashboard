import { find } from 'lodash';
import { mock, isTest } from 'worona-deps';
import { createSelector } from 'reselect';
import * as deps from '../deps';

if (isTest) mock(deps);

export const getIsCreatingSite = state => state.sites.isCreatingSite;
export const getCreateSiteStatus = state => state.sites.createSiteStatus;
export const getCreateSiteError = state => state.sites.createSiteError;

export const getIsEditingSite = state => state.sites.isEditingSite;
export const getEditSiteStatus = state => state.sites.editSiteStatus;
export const getEditSiteError = state => state.sites.editSiteError;

export const getAllSites = state => state.sites.collection;
export const getIsReadySites = state => state.sites.isReady;

export const getSelectedSite = createSelector(
  deps.selectors.getSelectedSiteId,
  getAllSites,
  (id, sites) => id ? find(sites, site => site.id === id) : {},
);

export const getNewSiteInfo = state => state.sites.newSiteInfo;

export const getCheckSiteObj = state => state.sites.checkSite;

export const getIsReadySelectedSite = createSelector(getSelectedSite, site => !!site);
