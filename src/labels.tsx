
import * as React from 'react'
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import { Audience } from 'helpers/graphql-types'

setAnalyticsOptions({
  language: 'Urdu',
  languageService: 'VOA Urdu',
  propertyName: 'Urdu App',
  propertyId: 'something',
  rsidAccount: 'bbgvoa.urdu.streaming.app',
  reportSuite: 'bbgvoa.urdu.streaming.app',
})
setDirection('rtl')

export const graphqlAudience = Audience.ur

moment.locale('ur')

export const articleLabels = {
  updatedOn: (date: string) => `Updated on ${date}`,
  relatedContent: 'اسی بارے میں',
  shareMessage: 'یہ بھی دیکھیں',
  galleryLoading: 'لوڈ ہو رہا ہے',
}

export const categorySettingsLabels = {
  header: 'کیٹگریز کی ترتیب بدلیں',
  myCategories: 'میری کیٹگریز',
  allCategories: 'تمام کیٹگریز',
  dragAndDrop: 'اپنی کیٹگیز کو یہاں لائیں',
  headlinesFirst: 'ہیڈلائنز پہلے لسٹ کی گئی ہیں',
  cancel: 'Cancel',
}

export const editorsChoiceLabels = {
  header: 'ایڈیٹر کا انتخاب',
  empty: 'اس صفحے پر آپ کو وہ خبریں ملیں گی جنہیں ایڈیٹر نے موضوع یا اہمیت کے اعتبار سے منتخب کیا ہے۔',
}

export const errorBoundaryLabels = {
  error: 'کچھ غلط ہو گیا۔ ری لوڈ کریں',
  retry: 'پھر کوشش کریں',
}

export const favoritesSettingsLabels = {
  header: 'پسندیدہ',
  removeAll: 'سب ڈیلیٹ کریں',
}

export const homeLabels = {
  headlines: 'اہم خبریں',
  search: 'سرچ',
  manage: '+',
}

export const introLabels = {
  content: 'وی او اے اردو کی ایپ پر خوش آمدید۔ یہاں آپ کو ملیں گی دنیا بھر کی تازہ تریں خبریں۔ اہم واقعات پر رپورٹس اور ساتھ ہی ہمارے ٹی وی اور ریڈیو پروگرام۔',
  continue: 'آگے جائیں',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        ویڈیو یا آڈیو لوڈ کرنے کے لیے نیچے دی گئی لسٹ سے منتخب کریں
      </p>
    </div>
  ),
  loading: 'لوڈ ہو رہا ہے',
}

export const mediaSettingsLabels = {
  normalSpeed: 'نارمل',
  halfAgainSpeed: '1.5',
  doubleSpeed: '2',
  chooseSpeed: 'پلے بیک سپیڈ',
}

export const programsScreenLabels = {
  videos: 'آن ڈیمانڈ آڈیو',
  audio: 'آن ڈیمانڈ ویڈیو',
  empty: 'کوئی پروگرام موجود نہیں',
}

export const pullToRefreshLabels = {
  pull: 'ریفریش کے لیے نیچے سوائپ کریں',
  release: 'ریفریش کے لیے ریلیز کریں',
}

export const searchLabels = {
  header: 'سرچ',
  back: 'پیچھے',
  all: 'تمام',
  query: 'سرچ',
  empty: 'آپ کی سرچ سے ملتا جلتا کوئی صفحہ موجود نہیں',
}

export const settingsLabels = {
  header: 'میری سیٹنگز',
  panic: 'ختم کریں',
  sendToFriends: 'یہ ایپ اپنے دوستوں کو بھیجیں',
  sendFeedback: 'وی او اے کو اپنی رائے بھیجیں',
  aboutVoa: 'وائس آف امریکہ اردو اپنے بین القوامی ناظرین کےلیے ویب، سوشل میڈیا، ٹی وی،اور ریڈیو کے ذریعے درست، متوازن اور جامع خبریں کرتا ہے۔',
  feedbackEmail: 'uwe@voanews.com',
  feedbackSubject: encodeURIComponent('عنوان'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: 'یہ ایپ دیکھیں',
}

export const textSettingsLabels = {
  textSize: 'فانٹ سائز منتخب کریں',
  normalSize: 'چھوٹا',
  largeSize: 'درمیانہ',
  hugeSize: 'بڑا',
}
