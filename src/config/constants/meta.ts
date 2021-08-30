import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'FIRMoon Swap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by FIRMoon Swap), NFTs, and more, on a platform you can trust.',
  image: 'https://firmoon.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('FIRMoon Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('FIRMoon Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('FIRMoon Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('FIRMoon Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('FIRMoon Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('FIRMoon Swap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('FIRMoon Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('FIRMoon Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('FIRMoon Swap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('FIRMoon Swap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('FIRMoon Swap')}`,
      }
    default:
      return null
  }
}
