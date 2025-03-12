
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PortfolioWebsite/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PortfolioWebsite"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28890, hash: '48e4bf8a0a384f8570ee13d374814c6362b6676806ce4148f65c463c86151fc6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 28991, hash: '953a97aa84586fe0c4b23a3dde7c149f54bfd1c850a4871fa3ad43f5abbf36a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 70112, hash: 'f3763429d4a97b1ac076c7a4a14d9ce055d57069596603f610fe9f3558a0334a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5RP4JKK3.css': {size: 503, hash: 'BrDU8KbxQmo', text: () => import('./assets-chunks/styles-5RP4JKK3_css.mjs').then(m => m.default)}
  },
};
