(this['webpackJsonpfrontend-track-app'] = this['webpackJsonpfrontend-track-app'] || []).push([[0], {
  65(e, t, s) {},
  66(e, t, s) {
    s.r(t); s(1); const a = s(19); const c = s.n(a); const n = s(6); const i = s(9); const l = s(13); const r = s(33); const o = s(3); const d = s(11); const u = s.n(d); const m = s(16); const j = s(17); const g = s.n(j); const h = 'ALL_ELEMENTS'; const p = 'LOGIN'; const v = 'LOGOUT'; const f = 'ADD_RECORD'; const b = 'ERROR_RECORD'; const A = 'ALL_RECORDS'; const O = 'ERROR_RECORDS'; const C = 'FORM_FALSE'; const x = 'FORM_TRUE'; const w = function (e) { return { type: p, payload: e }; }; const N = s(0); const B = {
      getUser(e, t) {
        return (function () {
          const s = Object(m.a)(u.a.mark((function s(a) {
            return u.a.wrap(((s) => {
              for (;;) {
                switch (s.prev = s.next) {
                  case 0: 'https://stormy-headland-20983.herokuapp.com/api/v1/login', g.a.post('https://stormy-headland-20983.herokuapp.com/api/v1/login', { username: e, password: t }).then(((e) => { a(w(e.data)); })).catch((() => {
                    a(w({
                      id: 0, username: 'error', token: '', status: !1,
                    }));
                  })); case 2: case 'end': return s.stop();
                }
              }
            }), s);
          }))); return function (e) { return s.apply(this, arguments); };
        }());
      },
    }; const y = Object(i.b)(((e) => ({ user: e.user })), B)(((e) => {
      const t = e.getUser; const s = e.user; const a = Object(o.f)(); localStorage.getItem('token') && a.push('/list'), !0 === s.status && s.id !== 0 && a.push('/list'); !0 === s.status && s.id === 0 && (document.getElementById('login-button').innerHTML = 'Login', document.getElementById('login-notification-bad').style.display = 'block', setTimeout((() => { document.getElementById('login-notification-bad').style.display = 'none'; }), 3e3)); return Object(N.jsx)(N.Fragment, {
        children: Object(N.jsxs)('div', {
          className: 'rows login',
          children: [Object(N.jsxs)('div', { className: 'row', children: [Object(N.jsxs)('div', { className: 'notification is-danger', id: 'login-notification-bad', children: ["It looks like you've a trouble with your credentials,", Object(N.jsx)('strong', { children: 'would you try again?' })] }), Object(N.jsx)('div', { className: 'notification is-success', id: 'login-notification-good', children: Object(N.jsx)('strong', { children: 'Done!' }) })] }), Object(N.jsx)('div', {
            className: 'row',
            children: Object(N.jsx)('div', {
              className: 'column is-flex is-justify-content-center',
              children: Object(N.jsxs)('section', {
                className: 'section',
                children: [Object(N.jsx)('img', { src: 'data:image/png;base64,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', alt: 'logo', className: 'login-logo' }), Object(N.jsx)('h1', { className: 'title login-title', children: 'Track water' }), Object(N.jsx)('div', {
                  className: 'container',
                  children: Object(N.jsxs)('form', {
                    onSubmit(e) { const s = document.createElement('i'); s.classList.add('fas'), s.classList.add('fa-spinner'), s.classList.add('fa-pulse'); const a = document.getElementById('login-button'); a.innerHTML = '', a.appendChild(s), e.preventDefault(), t(e.target.email.value, e.target.password.value); },
                    children: [Object(N.jsx)('div', {
                      className: 'field',
                      children: Object(N.jsxs)('p', {
                        className: 'control has-icons-left has-icons-right',
                        children: [Object(N.jsx)('input', {
                          onChange(e) { const t = document.getElementById('email'); const s = document.getElementById('email-icon'); !(function (e) { return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()); }(e.target.value)) ? (t.className = 'input is-danger', s.className = 'fas fa-exclamation-triangle red-validation') : (t.className = 'input is-success', s.className = 'fas fa-check green-validation'), e.target.value === '' && (t.className = 'input', s.className = ''); }, className: 'input', type: 'email', id: 'email', placeholder: 'Email', required: !0,
                        }), Object(N.jsx)('span', { className: 'icon is-small is-left', children: Object(N.jsx)('i', { className: 'fas fa-envelope' }) }), Object(N.jsx)('span', { className: 'icon is-small is-right', children: Object(N.jsx)('i', { className: '', id: 'email-icon' }) })],
                      }),
                    }), Object(N.jsx)('div', {
                      className: 'field',
                      children: Object(N.jsxs)('p', {
                        className: 'control has-icons-left has-icons-right',
                        children: [Object(N.jsx)('input', {
                          onChange(e) { const t = document.getElementById('password'); const s = document.getElementById('password-icon'); e.target.value.length >= 3 ? (t.className = 'input is-success', s.className = 'fas fa-check green-validation') : (t.className = 'input is-danger', s.className = 'fas fa-exclamation-triangle red-validation'), e.target.value === '' && (t.className = 'input', s.className = ''); }, className: 'input', type: 'password', id: 'password', placeholder: 'Password', required: !0, minLength: '3',
                        }), Object(N.jsx)('span', { className: 'icon is-small is-left', children: Object(N.jsx)('i', { className: 'fas fa-lock' }) }), Object(N.jsx)('span', { className: 'icon is-small is-right', children: Object(N.jsx)('i', { className: '', id: 'password-icon' }) })],
                      }),
                    }), Object(N.jsx)('div', {
                      className: 'field',
                      children: Object(N.jsx)('p', {
                        className: 'control',
                        children: Object(N.jsx)('button', {
                          type: 'submit', className: 'button is-success', id: 'login-button', children: 'Login',
                        }),
                      }),
                    })],
                  }),
                }), Object(N.jsxs)('div', { className: 'container home-info', children: [Object(N.jsx)('p', { children: 'Credentials:' }), Object(N.jsx)('p', { children: 'vichuge@mail.com' }), Object(N.jsx)('p', { children: 'admin1234' })] })],
              }),
            }),
          })],
        }),
      });
    })); const L = function (e) {
      const t = e.isSelect; return Object(N.jsx)('footer', {
        children: Object(N.jsx)('div', {
          className: 'columns is-mobile',
          children: [{
            id: 'list', to: '/list', className: 'column is-one-third footer-column', iClassName: 'fas fa-cocktail fa-2x footer-icon',
          }, {
            id: 'records', to: '/records', className: 'column is-one-third footer-column', iClassName: 'fas fa-list-alt fa-2x footer-icon',
          }, {
            id: 'logout', to: '/logout', className: 'column is-one-third footer-column', iClassName: 'fas fa-door-open fa-2x footer-icon',
          }].map(((e) => (t === e.id ? Object(N.jsxs)(n.b, { to: e.to, className: ''.concat(e.className, ' selected-footer'), children: [Object(N.jsx)('i', { className: ''.concat(e.iClassName, ' selected-footer') }), Object(N.jsx)('br', {}), e.id] }, e.to) : Object(N.jsxs)(n.b, { to: e.to, className: e.className, children: [Object(N.jsx)('i', { className: e.iClassName }), Object(N.jsx)('br', {}), e.id] }, e.to)))),
        }),
      });
    }; const X = function (e) { const t = e.title; return Object(N.jsx)('nav', { className: 'navbar', children: Object(N.jsxs)('h1', { className: 'title', children: [Object(N.jsx)('i', { className: 'fas fa-tint' }), '\xa0', t] }) }); }; const S = { getList(e) { return (function () { const t = Object(m.a)(u.a.mark((function t(s) { return u.a.wrap(((t) => { for (;;) switch (t.prev = t.next) { case 0: 'https://stormy-headland-20983.herokuapp.com/api/v1/lists', g.a.get('https://stormy-headland-20983.herokuapp.com/api/v1/lists', { headers: { Authorization: e } }).then(((e) => { let t; s((t = e.data, { type: h, payload: t })); })).catch((() => { localStorage.clear(), s(w({ elements: {}, status: !1 })); })); case 2: case 'end': return t.stop(); } }), t); }))); return function (e) { return t.apply(this, arguments); }; }()); } }; const E = Object(i.b)(((e) => ({ list: e.list })), S)(((e) => { const t = e.getList; const s = e.list; const a = Object(o.f)(); return localStorage.length === 0 && a.push('/logout'), !1 === s.status && t(localStorage.getItem('token')), Object(N.jsxs)(N.Fragment, { children: [Object(N.jsxs)('div', { className: 'wrap', children: [Object(N.jsx)(X, { title: 'List' }), Object(N.jsx)('div', { className: 'columns is-mobile is-multiline list-columns', children: s.elements.map(((e) => Object(N.jsx)('div', { className: 'column is-half', children: Object(N.jsx)('div', { className: 'card', children: Object(N.jsx)(n.b, { to: '/form/'.concat(e.id), className: 'list-option', children: Object(N.jsx)('div', { className: 'card-content', children: Object(N.jsx)('div', { className: 'content', children: Object(N.jsxs)('div', { className: 'columns is-mobile is-justify-content-space-around', children: [Object(N.jsx)('div', { className: 'column', children: Object(N.jsx)('i', { className: ''.concat(e.icon, ' fa-2x') }) }), Object(N.jsx)('div', { className: 'column is-half', children: e.title })] }) }) }) }) }) }, e.id))) })] }), Object(N.jsx)(L, { isSelect: 'list' })] }); })); const k = { logout() { return { type: v }; } }; const F = Object(i.b)(null, k)(((e) => ((0, e.logout)(), Object(o.f)().push('/'), Object(N.jsx)('p', { children: 'Log out!' })))); const R = {
      addRecord(e, t) {
        return (function () {
          const s = Object(m.a)(u.a.mark((function s(a) {
            let c; let n; return u.a.wrap(((s) => {
              for (;;) {
                switch (s.prev = s.next) {
                  case 0: 'https://stormy-headland-20983.herokuapp.com/api/v1/records', c = { Authorization: localStorage.getItem('token') }, n = { times: t, list_id: e, user_id: localStorage.getItem('id') }, g.a.post('https://stormy-headland-20983.herokuapp.com/api/v1/records', n, { headers: c }).then(((e) => { let t; a((t = e.data, { type: f, payload: t })), a({ type: x }); })).catch((() => {
                    a({
                      type: b,
                      payload: {
                        id: 0, times: 0, list: 'error', date_added: '0000-00-00T00:00:00.0000', status: !1,
                      },
                    });
                  })); case 4: case 'end': return s.stop();
                }
              }
            }), s);
          }))); return function (e) { return s.apply(this, arguments); };
        }());
      },
    }; const I = Object(i.b)(((e) => ({ form: e.form })), R)(((e) => {
      const t = e.addRecord; const s = e.form; const a = Object(o.f)(); const c = Object(o.g)().id; !0 === s.status && (document.getElementById('form-notification-good').style.display = 'block', a.push('/records')), s.list === 'error' && (document.getElementById('form-notification-bad').style.display = 'block', setTimeout((() => { document.getElementById('form-notification-bad').style.display = 'none'; }), 3e3)), localStorage.length === 0 && Object(o.f)().push('/logout'); return Object(N.jsxs)(N.Fragment, {
        children: [Object(N.jsxs)('div', {
          className: 'wrap',
          children: [Object(N.jsx)(X, { title: 'Add record' }), Object(N.jsx)('nav', { className: 'navbar nav-form', children: Object(N.jsx)('h1', { className: 'subtitle', children: 'How many cups did you drink?' }) }), Object(N.jsxs)('div', { className: 'notification is-danger', id: 'form-notification-bad', children: ["It looks like we've a problem with the API service\xa0", Object(N.jsx)('strong', { children: 'would you try again?' })] }), Object(N.jsx)('div', { className: 'notification is-success', id: 'form-notification-good', children: Object(N.jsx)('strong', { children: 'Successful!' }) }), Object(N.jsx)('div', {
            className: 'columns is-mobile columns-form is-justify-content-center content-form',
            children: Object(N.jsxs)('div', {
              className: 'column is-half',
              children: [Object(N.jsxs)('form', {
                onSubmit(e) { e.preventDefault(); const s = e.target.times.value; t(c, s); },
                children: [Object(N.jsx)('div', {
                  className: 'field',
                  children: Object(N.jsxs)('p', {
                    className: 'control has-icons-left has-icons-right',
                    children: [Object(N.jsx)('input', {
                      onChange(e) { const t = document.getElementById('times'); const s = document.getElementById('times-icon'); !(function (e) { return /^[1-9][0-9]?$/.test(e); }(e.target.value)) ? (t.className = 'input is-danger', s.className = 'fas fa-exclamation-triangle red-validation') : (t.className = 'input is-success', s.className = 'fas fa-check green-validation'), e.target.value === '' && (t.className = 'input', s.className = ''), document.getElementById('title').innerHTML = 'Hello '.concat(e.target.value); }, className: 'input', type: 'number', id: 'times', placeholder: '2', required: !0, min: '1', max: '99',
                    }), Object(N.jsx)('span', { className: 'icon is-small is-left', children: Object(N.jsx)('i', { className: 'fas fa-glass-whiskey' }) }), Object(N.jsx)('span', { className: 'icon is-small is-right', children: Object(N.jsx)('i', { className: '', id: 'times-icon' }) })],
                  }),
                }), Object(N.jsx)('div', { className: 'field', children: Object(N.jsx)('p', { className: 'control', children: Object(N.jsx)('button', { type: 'submit', className: 'button is-success', children: 'Create record' }) }) })],
              }), Object(N.jsxs)(n.b, { to: '/list', children: [Object(N.jsx)('i', { className: 'fas fa-arrow-left fa-3x back-form' }), Object(N.jsx)('p', { className: 'back-form', children: 'back' })] })],
            }),
          })],
        }), Object(N.jsx)(L, {})],
      });
    })); const U = s(18); const V = s.n(U); const M = { getRecords() { return (function () { const e = Object(m.a)(u.a.mark((function e(t) { let s; return u.a.wrap(((e) => { for (;;) switch (e.prev = e.next) { case 0: 'https://stormy-headland-20983.herokuapp.com/api/v1/records', s = localStorage.getItem('token'), g.a.get('https://stormy-headland-20983.herokuapp.com/api/v1/records', { headers: { Authorization: s } }).then(((e) => { let s; t((s = e.data, { type: A, payload: s })), t({ type: C }); })).catch((() => { localStorage.clear(); t({ type: O, payload: { elements: [], status: !1 } }); })); case 3: case 'end': return e.stop(); } }), e); }))); return function (t) { return e.apply(this, arguments); }; }()); } }; const J = Object(i.b)(((e) => ({ record: e.record })), M)(((e) => { const t = e.getRecords; const s = e.record; const a = Object(o.f)(); localStorage.length === 0 && a.push('/logout'), !1 === s.status && t(); let c = 0; return Object(N.jsx)(N.Fragment, { children: Object(N.jsxs)('div', { className: 'wrap', children: [Object(N.jsx)(X, { title: 'Records' }), Object(N.jsx)('div', { className: 'columns is-mobile is-multiline list-columns', children: s.elements.slice(0).reverse().map(((e) => (c !== V()(e.date_added).fromNow() ? (c = V()(e.date_added).fromNow(), Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)('p', { className: 'text-record', children: c }), Object(N.jsx)('div', { className: 'column is-full column-record', children: Object(N.jsx)('div', { className: 'card', children: Object(N.jsx)('div', { className: 'card-content', children: Object(N.jsx)('div', { className: 'content', children: Object(N.jsxs)('div', { className: 'columns is-mobile is-justify-content-space-around record-card-text', children: [Object(N.jsx)('div', { className: 'column', children: Object(N.jsx)('p', { children: V()(e.date_added).format('MMM DD HH:mm') }) }), Object(N.jsx)('div', { className: 'column is-half', children: Object(N.jsxs)('p', { className: 'times-record', children: [e.times, '\xa0', Object(N.jsx)('i', { className: e.icon })] }) })] }) }) }) }) }, e.id)] })) : Object(N.jsx)('div', { className: 'column is-full', children: Object(N.jsx)('div', { className: 'card', children: Object(N.jsx)('div', { className: 'card-content', children: Object(N.jsx)('div', { className: 'content', children: Object(N.jsxs)('div', { className: 'columns is-mobile is-justify-content-space-around record-card-text', children: [Object(N.jsx)('div', { className: 'column', children: Object(N.jsx)('p', { children: V()(e.date_added).format('MMM DD HH:mm') }) }), Object(N.jsx)('div', { className: 'column is-half', children: Object(N.jsxs)('p', { className: 'times-record', children: [e.times, '\xa0', Object(N.jsx)('i', { className: e.icon })] }) })] }) }) }) }) }, e.id)))) }), Object(N.jsx)(L, { isSelect: 'records' })] }) }); })); const D = function () { return Object(N.jsx)(N.Fragment, { children: Object(N.jsx)('main', { children: Object(N.jsxs)(o.c, { children: [Object(N.jsx)(o.a, { path: '/', component: y, exact: !0 }), Object(N.jsx)(o.a, { path: '/list', component: E }), Object(N.jsx)(o.a, { path: '/logout', component: F }), Object(N.jsx)(o.a, { path: '/form/:id', component: I }), Object(N.jsx)(o.a, { path: '/records', component: J })] }) }) }); }; const Q = { elements: [], status: !1 }; const Y = function () { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q; const t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case h: return { elements: t.payload, status: !0 }; default: return e; } }; const Z = s(14); const G = {
      id: 0, username: '', token: '', status: !1,
    }; const K = function (e) { return Object(Z.a)(Object(Z.a)({}, e), {}, { status: !0 }); }; const H = function () { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G; const t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case p: return t.payload.id !== 0 && (localStorage.setItem('id', t.payload.id), localStorage.setItem('token', t.payload.token)), K(t.payload); case v: return localStorage.clear(), G; default: return e; } }; const T = {
      id: 0, times: 0, list: '', date_added: '0000-00-00T00:00:00.0000', status: !1,
    }; const q = function (e) { return Object(Z.a)(Object(Z.a)({}, e), {}, { status: !0 }); }; const z = function () { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T; const t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case C: return T; case b: return t.payload; case x: return q(T); default: return e; } }; const P = s(34); const W = { elements: [], status: !1 }; let _ = ''; const $ = function () { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W; const t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case A: return { elements: t.payload, status: !0 }; case f: return _ = t.payload, { elements: [].concat(Object(P.a)(e.elements), [_]), status: !1 }; case O: default: return e; } }; const ee = Object(l.b)({
      list: Y, user: H, form: z, record: $,
    }); const te = (s(65), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || l.c); const se = Object(l.d)(ee, te(Object(l.a)(r.a))); const ae = document.getElementById('root'); c.a.render(Object(N.jsx)(i.a, { store: se, children: Object(N.jsx)(n.a, { basename: '/frontend-track-app', children: Object(N.jsx)(D, {}) }) }), ae);
  },
}, [[66, 1, 2]]]);
// # sourceMappingURL=main.c6cfbe5b.chunk.js.map
