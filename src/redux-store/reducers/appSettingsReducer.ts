
import {
  type as setCategoryOrderType,
  SetCategoryAction,
} from '../actions/setCategoryOrder'

import {
  type as setMediaPlaybackRateType,
  SetMediaPlaybackRateAction,
} from '../actions/setMediaPlaybackRate'

import {
  type as toggleDailyNotificationType,
  ToggleDailyNotificationAction,
} from '../actions/toggleDailyNotification'

import {
  type as setTextSizeType,
  SetTextSizeAction,
} from '../actions/setTextSize'

import { ActorMap, buildReducer } from '../actorMap'
import AppSettings from 'types/AppSettings'

const actors: ActorMap<AppSettings> = {
  [setCategoryOrderType]: (prev, { categories }: SetCategoryAction) => ({
    ...prev,
    categories,
  }),
  [setMediaPlaybackRateType]: (prev, { mediaPlaybackRate }: SetMediaPlaybackRateAction) => ({
    ...prev,
    mediaPlaybackRate,
  }),
  [toggleDailyNotificationType]: (prev, { on: dailyNotificationOn = !prev.dailyNotificationOn }: ToggleDailyNotificationAction) => ({
    ...prev,
    dailyNotificationOn,
  }),
  [setTextSizeType]: (prev, { textSize }: SetTextSizeAction) => ({
    ...prev,
    textSize,
  }),
}

export const INITIAL_STATE: AppSettings = {
  categories: [
    {
      id: 2269,
      name: 'پاکستان',
    },
    {
      id: 2186,
      name: 'امریکہ',
    },
    {
      id: 2259,
      name: 'جنوبی ایشیا',
    },
    {
      id: 2268,
      name: 'مشرقِ وسطیٰ',
    },
    {
      id: 2683,
      name: 'ویڈیو',
    },
    {
      id: 2185,
      name: 'دنیا',
    },
    {
      id: 2272,
      name: 'کھیل',
    },
    {
      id: 2258,
      name: 'آرٹ',
    },
  ],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)
