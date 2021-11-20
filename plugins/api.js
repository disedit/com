import axios from 'axios'

class API {
  constructor() {
    this.apiUrl = process.env.NUXT_ENV_API_BASE
  }

  menu() {
    const menuId = process.env.NUXT_ENV_MENU_ID
    return this._call('get', 'menus/' + menuId, null, 'wp-api-menus')
  }

  banners() {
    return this._call('get', 'banner', {
      _fields: 'id,acf,_links.wp:featuredmedia,_embedded',
      _embed: 'wp:featuredmedia',
    })
  }

  artists() {
    return this._call('get', 'pages', {
      parent: process.env.NUXT_ENV_ARTISTS_PAGE_ID,
      _fields: 'id,title,slug,_links.wp:featuredmedia,_embedded',
      _embed: 'wp:featuredmedia',
    })
  }

  page(slug) {
    return this._call('get', 'pages', { slug, _embed: 'wp:featuredmedia' })
  }

  posts(params) {
    return this._call('get', 'posts', {
      _embed: 'wp:featuredmedia',
      _fields: 'id,date,title,slug,excerpt,_links.wp:featuredmedia,_embedded',
      ...params,
    })
  }

  post(slug) {
    return this._call('get', 'posts', { slug, _embed: 'wp:featuredmedia' })
  }

  categories() {
    return this._call('get', 'categories')
  }

  _call(method, url, params, prefix = 'wp') {
    const baseURL = this.apiUrl + prefix + '/v2/'
    return new Promise((resolve, reject) => {
      axios({
        baseURL,
        method,
        url,
        data: method === 'post' ? params : null,
        params: method === 'get' ? params : null,
      })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default ({ app }, inject) => {
  const api = new API()
  inject('api', api)
}
