const path = require('path')
const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
    localeSubpaths,
    otherLanguages : ['en', 'id'],
    localePath : path.resolve('./public/static/locales')
})