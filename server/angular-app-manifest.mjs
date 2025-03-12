
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28883, hash: '21edc9c4228400be2888edf4c65c5ec21f233bbfb92e7ad8132b978670acf8e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 28984, hash: 'bb568485cec66186d979c132ec84cde12750dc66583144f84207f9e1a81dbd0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 70105, hash: 'd3771c521f1cf9e1d4f2110c1006836bf08b7820e97dbe77f558baa39e074bf1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5RP4JKK3.css': {size: 503, hash: 'BrDU8KbxQmo', text: () => import('./assets-chunks/styles-5RP4JKK3_css.mjs').then(m => m.default)}
  },
};
