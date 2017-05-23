import Vue from 'vue'

const state = {
  Languages: [
    {"code":"zh_Hant","name":"Chinese","nativeName":"中文 (繁體)"},
    {"code":"zh_Hans","name":"Chinese","nativeName":"中文 (简体)"},
    {"code":"en","name":"English","nativeName":"英文 (English)"},
    {"code":"ja","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},
    {"code":"ko","name":"Korean","nativeName":"韓國語 (한국어)"}
  ]
}

const getters = {
  getLanguages: state => state.Languages
}

export default {
  state,
  getters
}
