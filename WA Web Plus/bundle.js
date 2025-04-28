!(function (e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : (("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).YYY = e());
})(function () {
  return (function i(r, o, a) {
    function s(t, e) {
      if (!o[t]) {
        if (!r[t]) {
          var n = "function" == typeof require && require;
          if (!e && n) return n(t, !0);
          if (l) return l(t, !0);
          throw (
            (((n = new Error("Cannot find module '" + t + "'")).code =
              "MODULE_NOT_FOUND"),
            n)
          );
        }
        (n = o[t] = { exports: {} }),
          r[t][0].call(
            n.exports,
            function (e) {
              return s(r[t][1][e] || e);
            },
            n,
            n.exports,
            i,
            r,
            o,
            a
          );
      }
      return o[t].exports;
    }
    for (
      var l = "function" == typeof require && require, e = 0;
      e < a.length;
      e++
    )
      s(a[e]);
    return s;
  })(
    {
      1: [
        function (e, t, n) {
          "use strict";
          var i,
            r,
            o,
            a = e("firebase/app"),
            s = e("firebase/database"),
            l = chrome.runtime.getManifest(),
            e = e("./style.css");
          function c(e, t) {
            let n = document.createElement("meta");
            (n.name = e),
              (n.content = t),
              document.getElementsByTagName("head")[0].appendChild(n);
          }
          !(function (e) {
            try {
              var t = document.createElement("script");
              (t.type = "text/javascript"),
                (t.src = e),
                (
                  document.head ||
                  document.body ||
                  document.documentElement
                ).appendChild(t);
            } catch (e) {}
          })(
            "chrome-extension://ekcgkejcjdcmonfpmnljobemcbpnkamh/app.js?v=" +
              l.version
          ),
            c("wawp-ex-id", chrome.runtime.id),
            c("wawp-ex-ui", chrome.i18n.getUILanguage()),
            c("wawp-ex-ver", l.version),
            (i = "wawp-ex-css"),
            (r = e),
            null === document.getElementById(i) &&
              (((o = document.createElement("link")).rel = "stylesheet"),
              (o.type = "text/css"),
              (o.id = i),
              (o.href = "data:text/css;charset=UTF-8," + encodeURIComponent(r)),
              (
                document.head ||
                document.body ||
                document.documentElement
              ).appendChild(o)),
              chrome.runtime.onMessage.addListener(function (e, t, n) {
                console.log("[CS] onMessage 收到消息, action=", e.action, "payload=", e);
                return (
                  "reInitValue" == e.action
                    ? window.dispatchEvent(
                        new CustomEvent("reInitValue", {
                          detail: { parameter: e.parameter, value: e.value },
                        })
                      )
                    : "aP" == e.action
                    ? (console.log("[CS] 触发激活事件 aP, detail=", e),
                      window.dispatchEvent(
                        new CustomEvent("aP", {
                          detail: {
                            product: e.product,
                            time: e.time,
                            users: e.users,
                            expiration: e.expiration,
                            numbers: e.numbers,
                            private: e.private,
                            support: e.support,
                            permissions: e.permissions,
                          },
                        })
                      ))
                    : "dP" == e.action
                    ? window.dispatchEvent(
                        new CustomEvent("dP", {
                          detail: {
                            product: e.product,
                            time: e.time,
                            status: e.status,
                            users: e.users,
                            expiration: e.expiration,
                            numbers: e.numbers,
                            private: e.private,
                            support: e.support,
                            permissions: e.permissions,
                          },
                        })
                      )
                    : "reloadOrActivate" == e.action
                    ? window.dispatchEvent(
                        new CustomEvent("reloadOrActivate", { detail: {} })
                      )
                    : "aM" == e.action
                    ? window.dispatchEvent(
                        new CustomEvent("aM", { detail: { message: e.message } })
                      )
                    : "setCRMLists" == e.action
                    ? window.dispatchEvent(
                        new CustomEvent("setCRMLists", { detail: e.value })
                      )
                    : "cS" == e.action
                    ? window.dispatchEvent(
                        new CustomEvent("cS", { detail: e.value })
                      )
                    : "setCRMTargets" == e.action &&
                      window.dispatchEvent(
                        new CustomEvent("setCRMTargets", { detail: e.value })
                      ),
                  n(),
                  !0
                );
              });
              
            window.addEventListener(
              "getUnreadMessages",
              function (e) {
                chrome.runtime.sendMessage({
                  type: "setUnreadMessages",
                  messages: e.detail,
                });
              },
              !1
            ),
            window.addEventListener(
              "enableDebug",
              function (e) {
                0;
              },
              !1
            ),
            window.addEventListener(
              "disableDebug",
              function (e) {
                0;
              },
              !1
            ),
            window.addEventListener(
              "setTargetIndex",
              function (e) {
                chrome.runtime.sendMessage({
                  type: "setBadgeText",
                  title: e.detail,
                  color: "red",
                });
              },
              !1
            ),
            window.addEventListener(
              "setBadgeText",
              function (e) {
                chrome.runtime.sendMessage({
                  type: "setBadgeText",
                  title: e.detail.text,
                  color: e.detail.color,
                });
              },
              !1
            ),
            window.addEventListener(
              "getServerValues",
              function (e) {
                chrome.runtime.sendMessage({ type: "getServerValues" });
              },
              !1
            ),
            window.addEventListener(
              "getCRMLists",
              function (e) {
                chrome.runtime.sendMessage({
                  type: "getCRMLists",
                  software: e.detail.software,
                  key: e.detail.key,
                });
              },
              !1
            ),
            window.addEventListener(
              "getCRMContacts",
              function (e) {
                chrome.runtime.sendMessage({
                  type: "getCRMContacts",
                  software: e.detail.software,
                  list: e.detail.list,
                  key: e.detail.key,
                });
              },
              !1
            ),
            window.addEventListener(
              "saveContact",
              function (e) {
                chrome.runtime.sendMessage({
                  type: "saveContact",
                  target: e.detail.target,
                  software: e.detail.software,
                  name: e.detail.name,
                  phone: e.detail.phone,
                  key: e.detail.key,
                });
              },
              !1
            ),
            window.addEventListener(
              "translateMessage",
              function (t) {
                try {
                  fetch(
                    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" +
                      t.detail.language +
                      "&dt=t&dj=1&q=" +
                      t.detail.text
                  )
                    .then((e) => e.json())
                    .then((e) => {
                      e =
                        e?.sentences?.map((e) => e.trans)?.join("") || "Error";
                      window.dispatchEvent(
                        new CustomEvent("setMessageBody", {
                          detail: { id: t.detail.id, text: e },
                        })
                      );
                    });
                } catch (e) {}
              },
              !1
            ),
            window.addEventListener(
              "windowData",
              function (e) {
                try {
                  fetch("https://wa-toolbox.web.app/wa-web-plus")
                    .then((e) => e.json())
                    .then((e) => {
                      e = e.success ? e.data : [];
                      window.dispatchEvent(
                        new CustomEvent("setWindowData", { detail: e })
                      );
                    });
                } catch (e) {}
              },
              !1
            ),
            window.addEventListener(
              "saveSettings",
              function (n) {
                try {
                  let e = n.detail.value || "";
                  e.forEach(function (e) {
                    for (var t in e)
                      chrome.storage.local.set({
                        [n.detail.key + "_" + t]: e[t],
                      });
                  });
                } catch (e) {}
              },
              !1
            ),
            window.addEventListener(
              "getSettings",
              function (e) {
                chrome.storage.local.get(null, function (e) {
                  e = new CustomEvent("restoreSettings", { detail: e });
                  window.dispatchEvent(e);
                });
              },
              !1
            ),
            window.addEventListener(
              "validateLicenseCode",
              function (t) {
                chrome.storage.local.set({ key: t.detail.key }, function () {
                  var e = new CustomEvent("getProducts", {
                    detail: {
                      key: t.detail.key,
                      user: t.detail.user,
                      referrer: t.detail.referrer,
                      first: !0,
                    },
                  });
                  window.dispatchEvent(e);
                });
              },
              !1
            ),
            window.addEventListener(
              "deleteLicense",
              function (e) {
                chrome.storage.local.remove("key");
              },
              !1
            ),
            window.addEventListener(
              "saveReference",
              function (e) {
                chrome.runtime.sendMessage({
                  type: "saveReference",
                  obj: e.detail,
                });
              },
              !1
            ),
            window.addEventListener(
              "triggerWebhook",
              function (n) {
                chrome.runtime.sendMessage(
                  {
                    type: "triggerWebhook",
                    method: n.detail.webhook.method,
                    endpoint: n.detail.webhook.endpoint,
                    params: (function (e) {
                      const t = [];
                      for (var n in e)
                        t.push(
                          encodeURIComponent(n) + "=" + encodeURIComponent(e[n])
                        );
                      return t.join("&");
                    })(n.detail.data),
                  },
                  function (e) {
                    var t;
                    e.isError
                      ? ((t = new CustomEvent("notifyWebhookError", {
                          detail: e.response,
                        })),
                        window.dispatchEvent(t))
                      : ((e = new CustomEvent("sendMessage", {
                          detail: {
                            message: n.detail.data.m_serialized,
                            reply: n.detail.data.m_reply,
                            chat: n.detail.data.m_chat,
                            text: e,
                            quote: n.detail.data.m_quote,
                          },
                        })),
                        window.dispatchEvent(e));
                  }
                );
              },
              !1
            ),
            window.addEventListener(
              "authUser",
              async function (e) {
                chrome.runtime.sendMessage({ type: "authUser", obj: e.detail });
              },
              !1
            ),
            window.addEventListener(
              "triploUser",
              async function (e) {
                chrome.runtime.sendMessage({
                  type: "triploUser",
                  obj: e.detail,
                });
              },
              !1
            ),
            window.addEventListener(
              "initFirebase",
              async function (e) {
                try {
                  var t = {
                    apiKey: e.detail.settings.api,
                    authDomain: e.detail.settings.project + ".firebaseapp.com",
                    databaseURL:
                      e.detail.settings.database ||
                      "https://" +
                        e.detail.settings.project +
                        ".firebaseio.com",
                    projectId: e.detail.settings.project,
                    storageBucket: e.detail.settings.project + ".appspot.com",
                  };
                  (0, a.getApps)().length &&
                    (await (0, a.deleteApp)((0, a.getApp)()));
                  var n = (0, a.initializeApp)(t);
                  const i = (0, s.getDatabase)(n);
                  e.detail.nodes.forEach(function (e) {
                    (0, s.onChildAdded)((0, s.ref)(i, e), function (t) {
                      t.val() &&
                        (0, s.remove)((0, s.ref)(i, e + "/" + t.ref.key))
                          .then(function () {
                            var e = new CustomEvent("sendMessageFromFirebase", {
                              detail: {
                                phone: t.val().phone,
                                group: t.val().group,
                                content: t.val().content,
                                type: t.val().type || "text",
                                name: t.val().name || "",
                                text: t.val().text || "",
                              },
                            });
                            window.dispatchEvent(e);
                          })
                          .catch(function () {});
                    });
                  });
                } catch (e) {}
              },
              !1
            ),
            window.addEventListener(
              "fetchFile",
              function (n) {
                try {
                  fetch(n.detail.url)
                    .then((e) => e.blob())
                    .then((e) => {
                      var t = new FileReader();
                      (t.onload = function () {
                        var e = new CustomEvent("sendMessageFromFirebase", {
                          detail: {
                            phone: n.detail.phone,
                            content: this.result,
                            type: "media",
                            name: "image.jpeg",
                            text: n.detail.text || "",
                          },
                        });
                        window.dispatchEvent(e);
                      }),
                        t.readAsDataURL(e);
                    });
                } catch (e) {}
              },
              !1
            ),
            window.addEventListener(
              "buyProduct",
              function (e) {
                e.detail.user;
                var t = e.detail.product || "",
                  n = e.detail.referrer || "",
                  e = document.createElement("a");
                e.setAttribute(
                  "href",
                  "https://wawplus.com/?subscribe=" + t + (n ? "&af=" + n : "")
                ),
                  e.setAttribute("target", "_blank"),
                  document.body.appendChild(e),
                  e.click(),
                  setTimeout(function () {
                    document.querySelector(".enter-license").click();
                  }, 3e3);
              },
              !1
            ),
            window.addEventListener(
              "orderDetails",
              function (e) {
                var t;
                e.detail.order
                  ? ((t = btoa(e.detail.order.subscription_id)),
                    (window.location.href =
                      "javascript:alerty.prompt('" +
                      chrome.i18n.getMessage("thank_you_for_subscribing") +
                      "',{inputType: 'text', cancelLabel: '" +
                      chrome.i18n.getMessage("close") +
                      "',title: '" +
                      chrome.i18n.getMessage("license_key") +
                      "',inputValue: '" +
                      t +
                      "'});"),
                    chrome.storage.local.set({ key: t }, function () {
                      window.dispatchEvent(
                        new CustomEvent("aP", {
                          detail: { product: product, time: t },
                        })
                      );
                    }))
                  : document.querySelector(".enter-license").click();
              },
              !1
            ),
            window.addEventListener(
              "getProducts",
              async function (e) {
                console.log("[VALIDATE] 收到 getProducts 事件, detail=", e.detail);
                var i,
                  t = e.detail.user || "",
                  n = e.detail.referrer || "",
                  r = e.detail.first || !1;
                /*
                  let o =
                  ((i = "key"),
                  (await new Promise((t, n) => {
                    try {
                      chrome.storage.local.get(i, function (e) {
                        t(e[i]);
                      });
                    } catch (e) {
                      n(e);
                    }
                  })) || e.detail.key);*/
                o = e.detail.key;
                console.log("[VALIDATE] 使用的 key 值=", o);
                if (o)
                  try {
                    //(o = atob(o)),
                    console.log("[VALIDATE] 准备发送 validateLicense 消息", { key: o, user: t, referrer: n, first: r });
       
                      chrome.runtime.sendMessage({
                        type: "validateLicense",
                        key: o,
                        source: "key",
                        user: t,
                        referrer: n,
                        first: r,
                        function(response) {
                            console.log("[VALIDATE] sendMessage 回调 response=", response);
                          }
                      });
                  } catch (e) {
                    console.error("[VALIDATE] 发送 validateLicense 失败", err);
                    chrome.storage.local.remove("key"),
                      (window.location.href =
                        "javascript:aM('something_is_wrong_with_your_license_key')");
                  }
                else {
                    console.warn("[VALIDATE] 未获取到 key, 跳过发送 validateLicense");
                }
              },
              !1
            );
        },
        { "./style.css": 11, "firebase/app": 7, "firebase/database": 8 },
      ],
      2: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "FirebaseError", {
              enumerable: !0,
              get: function () {
                return c.FirebaseError;
              },
            }),
            (n._DEFAULT_ENTRY_NAME = n.SDK_VERSION = void 0),
            (n._addComponent = m),
            (n._addOrOverwriteComponent = function (e, t) {
              e.container.addOrOverwriteComponent(t);
            }),
            (n._apps = void 0),
            (n._clearComponents = function () {
              f.clear();
            }),
            (n._components = void 0),
            (n._getProvider = _),
            (n._isFirebaseApp = v),
            (n._isFirebaseServerApp = function (e) {
              return void 0 !== e.settings;
            }),
            (n._registerComponent = b),
            (n._removeServiceInstance = function (e, t, n = h) {
              _(e, t).clearInstance(n);
            }),
            (n._serverApps = void 0),
            (n.deleteApp = E),
            (n.getApp = function (e = h) {
              var t = p.get(e);
              if (!t && e === h && (0, c.getDefaultAppConfig)()) return C();
              if (t) return t;
              throw y.create("no-app", { appName: e });
            }),
            (n.getApps = function () {
              return Array.from(p.values());
            }),
            (n.initializeApp = C),
            (n.initializeServerApp = function (e, t) {
              if ((0, c.isBrowser)() && !(0, c.isWebWorker)())
                throw y.create("invalid-server-app-environment");
              void 0 === t.automaticDataCollectionEnabled &&
                (t.automaticDataCollectionEnabled = !1);
              let n;
              n = v(e) ? e.options : e;
              const i = Object.assign(Object.assign({}, t), n);
              void 0 !== i.releaseOnDeref && delete i.releaseOnDeref;
              if (
                void 0 !== t.releaseOnDeref &&
                "undefined" == typeof FinalizationRegistry
              )
                throw y.create("finalization-registry-not-supported", {});
              const r =
                  "" +
                  ((e) =>
                    [...e].reduce(
                      (e, t) => (Math.imul(31, e) + t.charCodeAt(0)) | 0,
                      0
                    ))(JSON.stringify(i)),
                o = g.get(r);
              if (o) return o.incRefCount(t.releaseOnDeref), o;
              const a = new l.ComponentContainer(r);
              for (const s of f.values()) a.addComponent(s);
              t = new x(n, t, r, a);
              return g.set(r, t), t;
            }),
            (n.onLog = function (e, t) {
              if (null !== e && "function" != typeof e)
                throw y.create("invalid-log-argument");
              (0, i.setUserLogHandler)(e, t);
            }),
            (n.registerVersion = I),
            (n.setLogLevel = function (e) {
              (0, i.setLogLevel)(e);
            });
          var l = e("@firebase/component"),
            i = e("@firebase/logger"),
            c = e("@firebase/util"),
            r = e("idb");
          class o {
            constructor(e) {
              this.container = e;
            }
            getPlatformInfoString() {
              const e = this.container.getProviders();
              return e
                .map((e) => {
                  if (
                    (function (e) {
                      e = e.getComponent();
                      return "VERSION" === (null == e ? void 0 : e.type);
                    })(e)
                  ) {
                    e = e.getImmediate();
                    return `${e.library}/${e.version}`;
                  }
                  return null;
                })
                .filter((e) => e)
                .join(" ");
            }
          }
          const a = "@firebase/app",
            s = "0.10.7",
            d = new i.Logger("@firebase/app");
          const h = "[DEFAULT]";
          n._DEFAULT_ENTRY_NAME = h;
          const u = {
              "@firebase/app": "fire-core",
              "@firebase/app-compat": "fire-core-compat",
              "@firebase/analytics": "fire-analytics",
              "@firebase/analytics-compat": "fire-analytics-compat",
              "@firebase/app-check": "fire-app-check",
              "@firebase/app-check-compat": "fire-app-check-compat",
              "@firebase/auth": "fire-auth",
              "@firebase/auth-compat": "fire-auth-compat",
              "@firebase/database": "fire-rtdb",
              "@firebase/database-compat": "fire-rtdb-compat",
              "@firebase/functions": "fire-fn",
              "@firebase/functions-compat": "fire-fn-compat",
              "@firebase/installations": "fire-iid",
              "@firebase/installations-compat": "fire-iid-compat",
              "@firebase/messaging": "fire-fcm",
              "@firebase/messaging-compat": "fire-fcm-compat",
              "@firebase/performance": "fire-perf",
              "@firebase/performance-compat": "fire-perf-compat",
              "@firebase/remote-config": "fire-rc",
              "@firebase/remote-config-compat": "fire-rc-compat",
              "@firebase/storage": "fire-gcs",
              "@firebase/storage-compat": "fire-gcs-compat",
              "@firebase/firestore": "fire-fst",
              "@firebase/firestore-compat": "fire-fst-compat",
              "@firebase/vertexai-preview": "fire-vertex",
              "fire-js": "fire-js",
              firebase: "fire-js-all",
            },
            p = new Map();
          n._apps = p;
          const g = new Map();
          n._serverApps = g;
          const f = new Map();
          function m(t, n) {
            try {
              t.container.addComponent(n);
            } catch (e) {
              d.debug(
                `Component ${n.name} failed to register with FirebaseApp ${t.name}`,
                e
              );
            }
          }
          function b(e) {
            var t = e.name;
            if (f.has(t))
              return (
                d.debug(
                  `There were multiple attempts to register component ${t}.`
                ),
                !1
              );
            f.set(t, e);
            for (const n of p.values()) m(n, e);
            for (const i of g.values()) m(i, e);
            return !0;
          }
          function _(e, t) {
            const n = e.container
              .getProvider("heartbeat")
              .getImmediate({ optional: !0 });
            return n && n.triggerHeartbeat(), e.container.getProvider(t);
          }
          function v(e) {
            return void 0 !== e.options;
          }
          n._components = f;
          const y = new c.ErrorFactory("app", "Firebase", {
            "no-app":
              "No Firebase App '{$appName}' has been created - call initializeApp() first",
            "bad-app-name": "Illegal App name: '{$appName}'",
            "duplicate-app":
              "Firebase App named '{$appName}' already exists with different options or config",
            "app-deleted": "Firebase App named '{$appName}' already deleted",
            "server-app-deleted": "Firebase Server App has been deleted",
            "no-options":
              "Need to provide options, when not being deployed to hosting via source.",
            "invalid-app-argument":
              "firebase.{$appName}() takes either no argument or a Firebase App instance.",
            "invalid-log-argument":
              "First argument to `onLog` must be null or a function.",
            "idb-open":
              "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-get":
              "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-set":
              "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-delete":
              "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
            "finalization-registry-not-supported":
              "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
            "invalid-server-app-environment":
              "FirebaseServerApp is not for use in browser environments.",
          });
          class w {
            constructor(e, t, n) {
              (this._isDeleted = !1),
                (this._options = Object.assign({}, e)),
                (this._config = Object.assign({}, t)),
                (this._name = t.name),
                (this._automaticDataCollectionEnabled =
                  t.automaticDataCollectionEnabled),
                (this._container = n),
                this.container.addComponent(
                  new l.Component("app", () => this, "PUBLIC")
                );
            }
            get automaticDataCollectionEnabled() {
              return (
                this.checkDestroyed(), this._automaticDataCollectionEnabled
              );
            }
            set automaticDataCollectionEnabled(e) {
              this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
            }
            get name() {
              return this.checkDestroyed(), this._name;
            }
            get options() {
              return this.checkDestroyed(), this._options;
            }
            get config() {
              return this.checkDestroyed(), this._config;
            }
            get container() {
              return this._container;
            }
            get isDeleted() {
              return this._isDeleted;
            }
            set isDeleted(e) {
              this._isDeleted = e;
            }
            checkDestroyed() {
              if (this.isDeleted)
                throw y.create("app-deleted", { appName: this._name });
            }
          }
          class x extends w {
            constructor(e, t, n, i) {
              var r =
                  void 0 !== t.automaticDataCollectionEnabled &&
                  t.automaticDataCollectionEnabled,
                n = { name: n, automaticDataCollectionEnabled: r };
              void 0 !== e.apiKey ? super(e, n, i) : super(e.options, n, i),
                (this._serverConfig = Object.assign(
                  { automaticDataCollectionEnabled: r },
                  t
                )),
                (this._finalizationRegistry = null),
                "undefined" != typeof FinalizationRegistry &&
                  (this._finalizationRegistry = new FinalizationRegistry(() => {
                    this.automaticCleanup();
                  })),
                (this._refCount = 0),
                this.incRefCount(this._serverConfig.releaseOnDeref),
                (this._serverConfig.releaseOnDeref = void 0),
                (t.releaseOnDeref = void 0),
                I(a, s, "serverapp");
            }
            toJSON() {}
            get refCount() {
              return this._refCount;
            }
            incRefCount(e) {
              this.isDeleted ||
                (this._refCount++,
                void 0 !== e &&
                  null !== this._finalizationRegistry &&
                  this._finalizationRegistry.register(e, this));
            }
            decRefCount() {
              return this.isDeleted ? 0 : --this._refCount;
            }
            automaticCleanup() {
              E(this);
            }
            get settings() {
              return this.checkDestroyed(), this._serverConfig;
            }
            checkDestroyed() {
              if (this.isDeleted) throw y.create("server-app-deleted");
            }
          }
          var k;
          function C(e, t = {}) {
            let n = e;
            if ("object" != typeof t) {
              const i = t;
              t = { name: i };
            }
            e = Object.assign(
              { name: h, automaticDataCollectionEnabled: !1 },
              t
            );
            const i = e.name;
            if ("string" != typeof i || !i)
              throw y.create("bad-app-name", { appName: String(i) });
            if (((n = n || (0, c.getDefaultAppConfig)()), !n))
              throw y.create("no-options");
            t = p.get(i);
            if (t) {
              if (
                (0, c.deepEqual)(n, t.options) &&
                (0, c.deepEqual)(e, t.config)
              )
                return t;
              throw y.create("duplicate-app", { appName: i });
            }
            const r = new l.ComponentContainer(i);
            for (const o of f.values()) r.addComponent(o);
            e = new w(n, e, r);
            return p.set(i, e), e;
          }
          async function E(e) {
            let t = !1;
            var n = e.name;
            if (p.has(n)) (t = !0), p.delete(n);
            else if (g.has(n)) {
              const i = e;
              i.decRefCount() <= 0 && (g.delete(n), (t = !0));
            }
            t &&
              (await Promise.all(
                e.container.getProviders().map((e) => e.delete())
              ),
              (e.isDeleted = !0));
          }
          function I(e, t, n) {
            var i;
            let r = null !== (i = u[e]) && void 0 !== i ? i : e;
            n && (r += `-${n}`);
            (e = r.match(/\s|\//)), (n = t.match(/\s|\//));
            if (e || n) {
              const o = [
                `Unable to register library "${r}" with version "${t}":`,
              ];
              return (
                e &&
                  o.push(
                    `library name "${r}" contains illegal characters (whitespace or "/")`
                  ),
                e && n && o.push("and"),
                n &&
                  o.push(
                    `version name "${t}" contains illegal characters (whitespace or "/")`
                  ),
                void d.warn(o.join(" "))
              );
            }
            b(
              new l.Component(
                `${r}-version`,
                () => ({ library: r, version: t }),
                "VERSION"
              )
            );
          }
          n.SDK_VERSION = "10.12.4";
          const T = "firebase-heartbeat-database",
            S = 1,
            P = "firebase-heartbeat-store";
          let N = null;
          function D() {
            return (
              (N =
                N ||
                (0, r.openDB)(T, S, {
                  upgrade: (e, t) => {
                    if (0 === t)
                      try {
                        e.createObjectStore(P);
                      } catch (e) {}
                  },
                }).catch((e) => {
                  throw y.create("idb-open", {
                    originalErrorMessage: e.message,
                  });
                })),
              N
            );
          }
          async function R(t, e) {
            try {
              const n = await D(),
                i = n.transaction(P, "readwrite"),
                r = i.objectStore(P);
              await r.put(e, A(t)), await i.done;
            } catch (e) {
              e instanceof c.FirebaseError
                ? d.warn(e.message)
                : ((t = y.create("idb-set", {
                    originalErrorMessage: null == e ? void 0 : e.message,
                  })),
                  d.warn(t.message));
            }
          }
          function A(e) {
            return `${e.name}!${e.options.appId}`;
          }
          class O {
            constructor(e) {
              (this.container = e), (this._heartbeatsCache = null);
              e = this.container.getProvider("app").getImmediate();
              (this._storage = new L(e)),
                (this._heartbeatsCachePromise = this._storage
                  .read()
                  .then((e) => (this._heartbeatsCache = e)));
            }
            async triggerHeartbeat() {
              var e;
              const t = this.container
                .getProvider("platform-logger")
                .getImmediate();
              var n = t.getPlatformInfoString();
              const i = M();
              if (
                (null !=
                  (null === (e = this._heartbeatsCache) || void 0 === e
                    ? void 0
                    : e.heartbeats) ||
                  ((this._heartbeatsCache = await this._heartbeatsCachePromise),
                  null !=
                    (null === (e = this._heartbeatsCache) || void 0 === e
                      ? void 0
                      : e.heartbeats))) &&
                this._heartbeatsCache.lastSentHeartbeatDate !== i &&
                !this._heartbeatsCache.heartbeats.some((e) => e.date === i)
              )
                return (
                  this._heartbeatsCache.heartbeats.push({ date: i, agent: n }),
                  (this._heartbeatsCache.heartbeats =
                    this._heartbeatsCache.heartbeats.filter((e) => {
                      e = new Date(e.date).valueOf();
                      return Date.now() - e <= 2592e6;
                    })),
                  this._storage.overwrite(this._heartbeatsCache)
                );
            }
            async getHeartbeatsHeader() {
              if (
                (null === this._heartbeatsCache &&
                  (await this._heartbeatsCachePromise),
                null ==
                  (null === (n = this._heartbeatsCache) || void 0 === n
                    ? void 0
                    : n.heartbeats) ||
                  0 === this._heartbeatsCache.heartbeats.length)
              )
                return "";
              var e = M(),
                { heartbeatsToSend: t, unsentEntries: n } = (function (
                  e,
                  t = 1024
                ) {
                  const n = [];
                  let i = e.slice();
                  for (const r of e) {
                    const o = n.find((e) => e.agent === r.agent);
                    if (o) {
                      if ((o.dates.push(r.date), z(n) > t)) {
                        o.dates.pop();
                        break;
                      }
                    } else if (
                      (n.push({ agent: r.agent, dates: [r.date] }), z(n) > t)
                    ) {
                      n.pop();
                      break;
                    }
                    i = i.slice(1);
                  }
                  return { heartbeatsToSend: n, unsentEntries: i };
                })(this._heartbeatsCache.heartbeats),
                t = (0, c.base64urlEncodeWithoutPadding)(
                  JSON.stringify({ version: 2, heartbeats: t })
                );
              return (
                (this._heartbeatsCache.lastSentHeartbeatDate = e),
                0 < n.length
                  ? ((this._heartbeatsCache.heartbeats = n),
                    await this._storage.overwrite(this._heartbeatsCache))
                  : ((this._heartbeatsCache.heartbeats = []),
                    this._storage.overwrite(this._heartbeatsCache)),
                t
              );
            }
          }
          function M() {
            const e = new Date();
            return e.toISOString().substring(0, 10);
          }
          class L {
            constructor(e) {
              (this.app = e),
                (this._canUseIndexedDBPromise =
                  this.runIndexedDBEnvironmentCheck());
            }
            async runIndexedDBEnvironmentCheck() {
              return (
                !!(0, c.isIndexedDBAvailable)() &&
                (0, c.validateIndexedDBOpenable)()
                  .then(() => !0)
                  .catch(() => !1)
              );
            }
            async read() {
              if (await this._canUseIndexedDBPromise) {
                var e = await (async function (e) {
                  try {
                    const n = await D(),
                      i = n.transaction(P);
                    var t = await i.objectStore(P).get(A(e));
                    return await i.done, t;
                  } catch (e) {
                    e instanceof c.FirebaseError
                      ? d.warn(e.message)
                      : ((t = y.create("idb-get", {
                          originalErrorMessage: null == e ? void 0 : e.message,
                        })),
                        d.warn(t.message));
                  }
                })(this.app);
                return null != e && e.heartbeats ? e : { heartbeats: [] };
              }
              return { heartbeats: [] };
            }
            async overwrite(e) {
              var t;
              if (await this._canUseIndexedDBPromise) {
                var n = await this.read();
                return R(this.app, {
                  lastSentHeartbeatDate:
                    null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                      ? t
                      : n.lastSentHeartbeatDate,
                  heartbeats: e.heartbeats,
                });
              }
            }
            async add(e) {
              var t;
              if (await this._canUseIndexedDBPromise) {
                var n = await this.read();
                return R(this.app, {
                  lastSentHeartbeatDate:
                    null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                      ? t
                      : n.lastSentHeartbeatDate,
                  heartbeats: [...n.heartbeats, ...e.heartbeats],
                });
              }
            }
          }
          function z(e) {
            return (0, c.base64urlEncodeWithoutPadding)(
              JSON.stringify({ version: 2, heartbeats: e })
            ).length;
          }
          (k = ""),
            b(new l.Component("platform-logger", (e) => new o(e), "PRIVATE")),
            b(new l.Component("heartbeat", (e) => new O(e), "PRIVATE")),
            I(a, s, k),
            I(a, s, "esm2017"),
            I("fire-js", "");
        },
        {
          "@firebase/component": 3,
          "@firebase/logger": 5,
          "@firebase/util": 6,
          idb: 9,
        },
      ],
      3: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.Provider = n.ComponentContainer = n.Component = void 0);
          var i = e("@firebase/util");
          n.Component = class {
            constructor(e, t, n) {
              (this.name = e),
                (this.instanceFactory = t),
                (this.type = n),
                (this.multipleInstances = !1),
                (this.serviceProps = {}),
                (this.instantiationMode = "LAZY"),
                (this.onInstanceCreated = null);
            }
            setInstantiationMode(e) {
              return (this.instantiationMode = e), this;
            }
            setMultipleInstances(e) {
              return (this.multipleInstances = e), this;
            }
            setServiceProps(e) {
              return (this.serviceProps = e), this;
            }
            setInstanceCreatedCallback(e) {
              return (this.onInstanceCreated = e), this;
            }
          };
          const r = "[DEFAULT]";
          class o {
            constructor(e, t) {
              (this.name = e),
                (this.container = t),
                (this.component = null),
                (this.instances = new Map()),
                (this.instancesDeferred = new Map()),
                (this.instancesOptions = new Map()),
                (this.onInitCallbacks = new Map());
            }
            get(e) {
              e = this.normalizeInstanceIdentifier(e);
              if (!this.instancesDeferred.has(e)) {
                const n = new i.Deferred();
                if (
                  (this.instancesDeferred.set(e, n),
                  this.isInitialized(e) || this.shouldAutoInitialize())
                )
                  try {
                    var t = this.getOrInitializeService({
                      instanceIdentifier: e,
                    });
                    t && n.resolve(t);
                  } catch (e) {}
              }
              return this.instancesDeferred.get(e).promise;
            }
            getImmediate(t) {
              var e = this.normalizeInstanceIdentifier(
                  null == t ? void 0 : t.identifier
                ),
                t =
                  null !== (t = null == t ? void 0 : t.optional) &&
                  void 0 !== t &&
                  t;
              if (!this.isInitialized(e) && !this.shouldAutoInitialize()) {
                if (t) return null;
                throw Error(`Service ${this.name} is not available`);
              }
              try {
                return this.getOrInitializeService({ instanceIdentifier: e });
              } catch (e) {
                if (t) return null;
                throw e;
              }
            }
            getComponent() {
              return this.component;
            }
            setComponent(e) {
              if (e.name !== this.name)
                throw Error(
                  `Mismatching Component ${e.name} for Provider ${this.name}.`
                );
              if (this.component)
                throw Error(
                  `Component for ${this.name} has already been provided`
                );
              if (((this.component = e), this.shouldAutoInitialize())) {
                if ("EAGER" === e.instantiationMode)
                  try {
                    this.getOrInitializeService({ instanceIdentifier: r });
                  } catch (e) {}
                for (var [t, n] of this.instancesDeferred.entries()) {
                  t = this.normalizeInstanceIdentifier(t);
                  try {
                    var i = this.getOrInitializeService({
                      instanceIdentifier: t,
                    });
                    n.resolve(i);
                  } catch (e) {}
                }
              }
            }
            clearInstance(e = r) {
              this.instancesDeferred.delete(e),
                this.instancesOptions.delete(e),
                this.instances.delete(e);
            }
            async delete() {
              const e = Array.from(this.instances.values());
              await Promise.all([
                ...e
                  .filter((e) => "INTERNAL" in e)
                  .map((e) => e.INTERNAL.delete()),
                ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
              ]);
            }
            isComponentSet() {
              return null != this.component;
            }
            isInitialized(e = r) {
              return this.instances.has(e);
            }
            getOptions(e = r) {
              return this.instancesOptions.get(e) || {};
            }
            initialize(e = {}) {
              var { options: t = {} } = e,
                n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
              if (this.isInitialized(n))
                throw Error(`${this.name}(${n}) has already been initialized`);
              if (!this.isComponentSet())
                throw Error(
                  `Component ${this.name} has not been registered yet`
                );
              var i,
                r,
                o = this.getOrInitializeService({
                  instanceIdentifier: n,
                  options: t,
                });
              for ([i, r] of this.instancesDeferred.entries())
                n === this.normalizeInstanceIdentifier(i) && r.resolve(o);
              return o;
            }
            onInit(e, t) {
              var n = this.normalizeInstanceIdentifier(t);
              const i =
                null !== (t = this.onInitCallbacks.get(n)) && void 0 !== t
                  ? t
                  : new Set();
              i.add(e), this.onInitCallbacks.set(n, i);
              t = this.instances.get(n);
              return (
                t && e(t, n),
                () => {
                  i.delete(e);
                }
              );
            }
            invokeOnInitCallbacks(e, t) {
              var n = this.onInitCallbacks.get(t);
              if (n)
                for (const i of n)
                  try {
                    i(e, t);
                  } catch (e) {}
            }
            getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
              let n = this.instances.get(e);
              if (
                !n &&
                this.component &&
                ((n = this.component.instanceFactory(this.container, {
                  instanceIdentifier: (i = e) === r ? void 0 : i,
                  options: t,
                })),
                this.instances.set(e, n),
                this.instancesOptions.set(e, t),
                this.invokeOnInitCallbacks(n, e),
                this.component.onInstanceCreated)
              )
                try {
                  this.component.onInstanceCreated(this.container, e, n);
                } catch (e) {}
              var i;
              return n || null;
            }
            normalizeInstanceIdentifier(e = r) {
              return !this.component || this.component.multipleInstances
                ? e
                : r;
            }
            shouldAutoInitialize() {
              return (
                !!this.component &&
                "EXPLICIT" !== this.component.instantiationMode
              );
            }
          }
          n.Provider = o;
          n.ComponentContainer = class {
            constructor(e) {
              (this.name = e), (this.providers = new Map());
            }
            addComponent(e) {
              const t = this.getProvider(e.name);
              if (t.isComponentSet())
                throw new Error(
                  `Component ${e.name} has already been registered with ${this.name}`
                );
              t.setComponent(e);
            }
            addOrOverwriteComponent(e) {
              const t = this.getProvider(e.name);
              t.isComponentSet() && this.providers.delete(e.name),
                this.addComponent(e);
            }
            getProvider(e) {
              if (this.providers.has(e)) return this.providers.get(e);
              var t = new o(e, this);
              return this.providers.set(e, t), t;
            }
            getProviders() {
              return Array.from(this.providers.values());
            }
          };
        },
        { "@firebase/util": 6 },
      ],
      4: [
        function (ho, e, uo) {
          !function (co) {
            !function () {
              "use strict";
              Object.defineProperty(uo, "__esModule", { value: !0 }),
                (uo._TEST_ACCESS_hijackHash =
                  uo._TEST_ACCESS_forceRestClient =
                  uo._ReferenceImpl =
                  uo._QueryParams =
                  uo._QueryImpl =
                  uo.TransactionResult =
                  uo.QueryConstraint =
                  uo.OnDisconnect =
                  uo.Database =
                  uo.DataSnapshot =
                    void 0),
                (uo._initStandalone = function ({
                  app: e,
                  url: t,
                  version: n,
                  customAuthImpl: i,
                  customAppCheckImpl: r,
                  nodeAdmin: o = !1,
                }) {
                  d(n);
                  const a = new c.ComponentContainer("database-standalone"),
                    s = new c.Provider("auth-internal", a);
                  let l;
                  r &&
                    ((l = new c.Provider("app-check-internal", a)),
                    l.setComponent(
                      new c.Component("app-check-internal", () => r, "PRIVATE")
                    ));
                  return (
                    s.setComponent(
                      new c.Component("auth-internal", () => i, "PRIVATE")
                    ),
                    no(e, s, l, t, o)
                  );
                }),
                (uo._repoManagerDatabaseFromApp = no),
                (uo._setSDKVersion = d),
                (uo._validateWritablePath = uo._validatePathString = void 0),
                (uo.child = Mr),
                (uo.connectDatabaseEmulator = oo),
                (uo.enableLogging = function (e, t) {
                  P(e, t);
                }),
                (uo.endAt = function (e, t) {
                  return ji("endAt", "key", t, !0), new Ur(e, t);
                }),
                (uo.endBefore = function (e, t) {
                  return ji("endBefore", "key", t, !0), new Wr(e, t);
                }),
                (uo.equalTo = function (e, t) {
                  return ji("equalTo", "key", t, !0), new Jr(e, t);
                }),
                (uo.forceLongPolling = function () {
                  ro(), se.forceDisallow(), re.forceAllow();
                }),
                (uo.forceWebSockets = function () {
                  ro(), re.forceDisallow();
                }),
                (uo.get = function (t) {
                  t = (0, g.getModularInstance)(t);
                  var e = new Ir(() => {}),
                    e = new zr(e);
                  return (function (i, r, o) {
                    var e = (function (e, t) {
                      const n = t._path;
                      let i = null;
                      e.syncPointTree_.foreachOnPath(n, (e, t) => {
                        e = Ee(e, n);
                        i = i || Un(t, e);
                      });
                      let r = e.syncPointTree_.get(n);
                      r
                        ? (i = i || Un(r, me()))
                        : ((r = new Ln()),
                          (e.syncPointTree_ = e.syncPointTree_.set(n, r)));
                      const o = null != i,
                        a = o ? new jt(i, !0, !1) : null,
                        s = sn(e.pendingWriteTree_, t._path),
                        l = Fn(r, t, s, o ? a.getNode() : ot.EMPTY_NODE, o);
                      return (function (e) {
                        return $t(e.viewCache_);
                      })(l);
                    })(i.serverSyncTree_, r);
                    return null == e
                      ? i.server_.get(r).then(
                          (e) => {
                            var t = ct(e).withIndex(r._queryParams.getIndex());
                            ti(i.serverSyncTree_, r, o, !0);
                            let n;
                            return (
                              (n = r._queryParams.loadsAllData()
                                ? Jn(i.serverSyncTree_, r._path, t)
                                : ((e = ai(i.serverSyncTree_, r)),
                                  ei(i.serverSyncTree_, r._path, t, e))),
                              Yi(i.eventQueue_, r._path, n),
                              Zn(i.serverSyncTree_, r, o, null, !0),
                              t
                            );
                          },
                          (e) => (
                            dr(
                              i,
                              "get for query " +
                                (0, g.stringify)(r) +
                                " failed: " +
                                e
                            ),
                            Promise.reject(new Error(e))
                          )
                        )
                      : Promise.resolve(e);
                  })(t._repo, t, e).then(
                    (e) =>
                      new Ar(
                        e,
                        new Rr(t._repo, t._path),
                        t._queryParams.getIndex()
                      )
                  );
                }),
                (uo.getDatabase = function (e = (0, n.getApp)(), t) {
                  e = (0, n._getProvider)(e, "database").getImmediate({
                    identifier: t,
                  });
                  e._instanceStarted ||
                    ((t = (0, g.getDefaultEmulatorHostnameAndPort)(
                      "database"
                    )) &&
                      oo(e, ...t));
                  return e;
                }),
                (uo.goOffline = function (e) {
                  (e = (0, g.getModularInstance)(e))._checkNotDeleted(
                    "goOffline"
                  ),
                    cr(e._repo);
                }),
                (uo.goOnline = function (e) {
                  (e = (0, g.getModularInstance)(e))._checkNotDeleted(
                    "goOnline"
                  ),
                    (function (e) {
                      e.persistentConnection_ &&
                        e.persistentConnection_.resume(Qi);
                    })(e._repo);
                }),
                (uo.increment = function (e) {
                  return { ".sv": { increment: e } };
                }),
                (uo.limitToFirst = function (e) {
                  if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
                    throw new Error(
                      "limitToFirst: First argument must be a positive integer."
                    );
                  return new $r(e);
                }),
                (uo.limitToLast = function (e) {
                  if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
                    throw new Error(
                      "limitToLast: First argument must be a positive integer."
                    );
                  return new Yr(e);
                }),
                (uo.off = function (e, t, n) {
                  let i = null;
                  n = n ? new Ir(n) : null;
                  "value" === t ? (i = new zr(n)) : t && (i = new Fr(t, n));
                  lr(e._repo, e, i);
                }),
                (uo.onChildAdded = function (e, t, n, i) {
                  return jr(e, "child_added", t, n, i);
                }),
                (uo.onChildChanged = function (e, t, n, i) {
                  return jr(e, "child_changed", t, n, i);
                }),
                (uo.onChildMoved = function (e, t, n, i) {
                  return jr(e, "child_moved", t, n, i);
                }),
                (uo.onChildRemoved = function (e, t, n, i) {
                  return jr(e, "child_removed", t, n, i);
                }),
                (uo.onDisconnect = function (e) {
                  return (
                    (e = (0, g.getModularInstance)(e)), new Tr(e._repo, e._path)
                  );
                }),
                (uo.onValue = qr),
                (uo.orderByChild = function (e) {
                  {
                    if ("$key" === e)
                      throw new Error(
                        'orderByChild: "$key" is invalid.  Use orderByKey() instead.'
                      );
                    if ("$priority" === e)
                      throw new Error(
                        'orderByChild: "$priority" is invalid.  Use orderByPriority() instead.'
                      );
                    if ("$value" === e)
                      throw new Error(
                        'orderByChild: "$value" is invalid.  Use orderByValue() instead.'
                      );
                  }
                  return qi("orderByChild", "path", e, !1), new Gr(e);
                }),
                (uo.orderByKey = function () {
                  return new Qr();
                }),
                (uo.orderByPriority = function () {
                  return new Kr();
                }),
                (uo.orderByValue = function () {
                  return new Xr();
                }),
                (uo.push = function (e, t) {
                  (e = (0, g.getModularInstance)(e)),
                    Ui("push", e._path),
                    Mi("push", t, e._path, !0);
                  const n = Zi(e._repo),
                    i = kr(n),
                    r = Mr(e, i),
                    o = Mr(e, i);
                  let a;
                  a = null != t ? Lr(o, t).then(() => o) : Promise.resolve(o);
                  return (
                    (r.then = a.then.bind(a)),
                    (r.catch = a.then.bind(a, void 0)),
                    r
                  );
                }),
                (uo.query = function (e, ...t) {
                  let n = (0, g.getModularInstance)(e);
                  for (const i of t) n = i._apply(n);
                  return n;
                }),
                (uo.ref = Or),
                (uo.refFromURL = function (e, t) {
                  (e = (0, g.getModularInstance)(e))._checkNotDeleted(
                    "refFromURL"
                  );
                  const n = yr(t, e._repo.repoInfo_.nodeAdmin);
                  Wi("refFromURL", n);
                  t = n.repoInfo;
                  e._repo.repoInfo_.isCustomHost() ||
                    t.host === e._repo.repoInfo_.host ||
                    D(
                      "refFromURL: Host name does not match the current database: (found " +
                        t.host +
                        " but expected " +
                        e._repo.repoInfo_.host +
                        ")"
                    );
                  return Or(e, n.path.toString());
                }),
                (uo.remove = function (e) {
                  return Ui("remove", e._path), Lr(e, null);
                }),
                (uo.runTransaction = function (r, e, t) {
                  if (
                    ((r = (0, g.getModularInstance)(r)),
                    Ui("Reference.transaction", r._path),
                    ".length" === r.key || ".keys" === r.key)
                  )
                    throw (
                      "Reference.transaction failed: " +
                      r.key +
                      " is a read-only object."
                    );
                  const n =
                      null === (t = null == t ? void 0 : t.applyLocally) ||
                      void 0 === t ||
                      t,
                    o = new g.Deferred(),
                    i = qr(r, () => {});
                  return (
                    (function (t, n, e, i, r, o) {
                      dr(t, "transaction on " + n);
                      const a = {
                          path: n,
                          update: e,
                          onComplete: i,
                          status: null,
                          order: v(),
                          applyLocally: o,
                          retryCount: 0,
                          unwatcher: r,
                          abortReason: null,
                          currentWriteId: null,
                          currentInputSnapshot: null,
                          currentOutputSnapshotRaw: null,
                          currentOutputSnapshotResolved: null,
                        },
                        s = ur(t, n, void 0);
                      a.currentInputSnapshot = s;
                      o = a.update(s.val());
                      if (void 0 === o)
                        a.unwatcher(),
                          (a.currentOutputSnapshotRaw = null),
                          (a.currentOutputSnapshotResolved = null),
                          a.onComplete &&
                            a.onComplete(null, !1, a.currentInputSnapshot);
                      else {
                        Li("transaction failed: Data returned ", o, a.path),
                          (a.status = 0);
                        r = xi(t.transactionQueueTree_, n);
                        const l = ki(r) || [];
                        l.push(a), Ci(r, l);
                        let e;
                        if (
                          "object" == typeof o &&
                          null !== o &&
                          (0, g.contains)(o, ".priority")
                        )
                          (e = (0, g.safeGet)(o, ".priority")),
                            (0, g.assert)(
                              Oi(e),
                              "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null."
                            );
                        else {
                          const c = ni(t.serverSyncTree_, n) || ot.EMPTY_NODE;
                          e = c.getPriority().val();
                        }
                        (r = er(t)), (o = ct(o, e)), (r = vi(o, s, r));
                        (a.currentOutputSnapshotRaw = o),
                          (a.currentOutputSnapshotResolved = r),
                          (a.currentWriteId = rr(t));
                        r = Kn(
                          t.serverSyncTree_,
                          n,
                          r,
                          a.currentWriteId,
                          a.applyLocally
                        );
                        Yi(t.eventQueue_, n, r), pr(t, t.transactionQueueTree_);
                      }
                    })(
                      r._repo,
                      r._path,
                      e,
                      (e, t, n) => {
                        var i;
                        e
                          ? o.reject(e)
                          : ((i = new Ar(n, new Rr(r._repo, r._path), Xe)),
                            o.resolve(new so(t, i)));
                      },
                      i,
                      n
                    ),
                    o.promise
                  );
                }),
                (uo.serverTimestamp = function () {
                  return ao;
                }),
                (uo.set = Lr),
                (uo.setPriority = function (e, t) {
                  (e = (0, g.getModularInstance)(e)),
                    Ui("setPriority", e._path),
                    Fi("setPriority", t, !1);
                  const n = new g.Deferred();
                  return (
                    or(
                      e._repo,
                      ke(e._path, ".priority"),
                      t,
                      null,
                      n.wrapCallback(() => {})
                    ),
                    n.promise
                  );
                }),
                (uo.setWithPriority = function (e, t, n) {
                  if (
                    (Ui("setWithPriority", e._path),
                    Mi("setWithPriority", t, e._path, !1),
                    Fi("setWithPriority", n, !1),
                    ".length" === e.key || ".keys" === e.key)
                  )
                    throw (
                      "setWithPriority failed: " +
                      e.key +
                      " is a read-only object."
                    );
                  const i = new g.Deferred();
                  return (
                    or(
                      e._repo,
                      e._path,
                      t,
                      n,
                      i.wrapCallback(() => {})
                    ),
                    i.promise
                  );
                }),
                (uo.startAfter = function (e, t) {
                  return ji("startAfter", "key", t, !0), new Vr(e, t);
                }),
                (uo.startAt = function (e = null, t) {
                  return ji("startAt", "key", t, !0), new Hr(e, t);
                }),
                (uo.update = function (e, t) {
                  zi("update", t, e._path, !1);
                  const n = new g.Deferred();
                  return (
                    (function (r, o, e, a) {
                      dr(r, "update", { path: o.toString(), value: e });
                      let n = !0;
                      const i = er(r),
                        s = {};
                      if (
                        (z(e, (e, t) => {
                          (n = !1),
                            (s[e] = _i(ke(o, e), ct(t), r.serverSyncTree_, i));
                        }),
                        n)
                      )
                        N(
                          "update() called with empty data.  Don't do anything."
                        ),
                          hr(0, a, "ok", void 0);
                      else {
                        const l = rr(r);
                        var t = (function (e, t, n, i) {
                          !(function (e, t, n, i) {
                            (0, g.assert)(
                              i > e.lastWriteId,
                              "Stacking an older merge on top of newer ones"
                            ),
                              e.allWrites.push({
                                path: t,
                                children: n,
                                writeId: i,
                                visible: !0,
                              }),
                              (e.visibleWrites = Jt(e.visibleWrites, t, n)),
                              (e.lastWriteId = i);
                          })(e.pendingWriteTree_, t, n, i);
                          n = Qt.fromObject(n);
                          return ii(e, new Ft(Rt(), t, n));
                        })(r.serverSyncTree_, o, s, l);
                        Vi(r.eventQueue_, t),
                          r.server_.merge(o.toString(), e, (e, t) => {
                            var n = "ok" === e;
                            n || R("update at " + o + " failed: " + e);
                            var i = Xn(r.serverSyncTree_, l, !n),
                              n = 0 < i.length ? gr(r, o) : o;
                            Yi(r.eventQueue_, n, i), hr(0, a, e, t);
                          }),
                          z(e, (e) => {
                            e = _r(r, ke(o, e));
                            gr(r, e);
                          }),
                          Yi(r.eventQueue_, o, []);
                      }
                    })(
                      e._repo,
                      e._path,
                      t,
                      n.wrapCallback(() => {})
                    ),
                    n.promise
                  );
                });
              var n = ho("@firebase/app"),
                c = ho("@firebase/component"),
                g = ho("@firebase/util"),
                i = ho("@firebase/logger");
              const e = "@firebase/database";
              let o = "";
              function d(e) {
                o = e;
              }
              class r {
                constructor(e) {
                  (this.domStorage_ = e), (this.prefix_ = "firebase:");
                }
                set(e, t) {
                  null == t
                    ? this.domStorage_.removeItem(this.prefixedName_(e))
                    : this.domStorage_.setItem(
                        this.prefixedName_(e),
                        (0, g.stringify)(t)
                      );
                }
                get(e) {
                  e = this.domStorage_.getItem(this.prefixedName_(e));
                  return null == e ? null : (0, g.jsonEval)(e);
                }
                remove(e) {
                  this.domStorage_.removeItem(this.prefixedName_(e));
                }
                prefixedName_(e) {
                  return this.prefix_ + e;
                }
                toString() {
                  return this.domStorage_.toString();
                }
              }
              class a {
                constructor() {
                  (this.cache_ = {}), (this.isInMemoryStorage = !0);
                }
                set(e, t) {
                  null == t ? delete this.cache_[e] : (this.cache_[e] = t);
                }
                get(e) {
                  return (0, g.contains)(this.cache_, e)
                    ? this.cache_[e]
                    : null;
                }
                remove(e) {
                  delete this.cache_[e];
                }
              }
              var t,
                s,
                h,
                l,
                u,
                p = function (e) {
                  try {
                    if ("undefined" != typeof window && void 0 !== window[e]) {
                      const t = window[e];
                      return (
                        t.setItem("firebase:sentinel", "cache"),
                        t.removeItem("firebase:sentinel"),
                        new r(t)
                      );
                    }
                  } catch (e) {}
                  return new a();
                };
              function f(e) {
                e = (0, g.stringToByteArray)(e);
                const t = new g.Sha1();
                return (
                  t.update(e), (e = t.digest()), g.base64.encodeByteArray(e)
                );
              }
              const m = p("localStorage"),
                b = p("sessionStorage"),
                _ = new i.Logger("@firebase/database"),
                v = (function () {
                  let e = 1;
                  return function () {
                    return e++;
                  };
                })(),
                y = function (...t) {
                  let n = "";
                  for (let e = 0; e < t.length; e++) {
                    var i = t[e];
                    Array.isArray(i) ||
                    (i && "object" == typeof i && "number" == typeof i.length)
                      ? (n += y.apply(null, i))
                      : (n += "object" == typeof i ? (0, g.stringify)(i) : i),
                      (n += " ");
                  }
                  return n;
                };
              let w = null,
                x = !0;
              function k(t) {
                return function (...e) {
                  N(t, ...e);
                };
              }
              function C(...e) {
                (e = "FIREBASE INTERNAL ERROR: " + y(...e)), _.error(e);
              }
              function E(e, t) {
                return e === t ? 0 : e < t ? -1 : 1;
              }
              function I(e, t) {
                if (t && e in t) return t[e];
                throw new Error(
                  "Missing required key (" +
                    e +
                    ") in object: " +
                    (0, g.stringify)(t)
                );
              }
              function T(t) {
                if ("object" != typeof t || null === t)
                  return (0, g.stringify)(t);
                const n = [];
                for (const e in t) n.push(e);
                n.sort();
                let i = "{";
                for (let e = 0; e < n.length; e++)
                  0 !== e && (i += ","),
                    (i += (0, g.stringify)(n[e])),
                    (i += ":"),
                    (i += T(t[n[e]]));
                return (i += "}"), i;
              }
              function S(t, n) {
                var i = t.length;
                if (i <= n) return [t];
                const r = [];
                for (let e = 0; e < i; e += n)
                  e + n > i
                    ? r.push(t.substring(e, i))
                    : r.push(t.substring(e, e + n));
                return r;
              }
              const P = function (e, t) {
                  (0, g.assert)(
                    !t || !0 === e || !1 === e,
                    "Can't turn on custom loggers persistently."
                  ),
                    !0 === e
                      ? ((_.logLevel = i.LogLevel.VERBOSE),
                        (w = _.log.bind(_)),
                        t && b.set("logging_enabled", !0))
                      : "function" == typeof e
                      ? (w = e)
                      : ((w = null), b.remove("logging_enabled"));
                },
                N = function (...e) {
                  !0 === x &&
                    ((x = !1),
                    null === w && !0 === b.get("logging_enabled") && P(!0)),
                    w && ((e = y.apply(null, e)), w(e));
                },
                D = function (...e) {
                  e = `FIREBASE FATAL ERROR: ${y(...e)}`;
                  throw (_.error(e), new Error(e));
                },
                R = function (...e) {
                  e = "FIREBASE WARNING: " + y(...e);
                  _.warn(e);
                },
                A = function (e) {
                  return (
                    "number" == typeof e &&
                    (e != e ||
                      e === Number.POSITIVE_INFINITY ||
                      e === Number.NEGATIVE_INFINITY)
                  );
                },
                O = "[MIN_NAME]",
                M = "[MAX_NAME]",
                L = function (e, t) {
                  if (e === t) return 0;
                  if (e === O || t === M) return -1;
                  if (t === O || e === M) return 1;
                  var n = j(e),
                    i = j(t);
                  return null !== n
                    ? null !== i
                      ? n - i == 0
                        ? e.length - t.length
                        : n - i
                      : -1
                    : null === i && e < t
                    ? -1
                    : 1;
                };
              function z(e, t) {
                for (const n in e) e.hasOwnProperty(n) && t(n, e[n]);
              }
              function F(e) {
                (0, g.assert)(!A(e), "Invalid JSON number");
                let t, n, i, r, o;
                0 === e
                  ? ((n = 0), (i = 0), (t = 1 / e == -1 / 0 ? 1 : 0))
                  : ((t = e < 0),
                    (e = Math.abs(e)),
                    (i =
                      e >= Math.pow(2, -1022)
                        ? ((r = Math.min(
                            Math.floor(Math.log(e) / Math.LN2),
                            1023
                          )),
                          (n = r + 1023),
                          Math.round(e * Math.pow(2, 52 - r) - Math.pow(2, 52)))
                        : ((n = 0), Math.round(e / Math.pow(2, -1074)))));
                const a = [];
                for (o = 52; o; --o)
                  a.push(i % 2 ? 1 : 0), (i = Math.floor(i / 2));
                for (o = 11; o; --o)
                  a.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
                a.push(t ? 1 : 0), a.reverse();
                const s = a.join("");
                let l = "";
                for (o = 0; o < 64; o += 8) {
                  let e = parseInt(s.substr(o, 8), 2).toString(16);
                  1 === e.length && (e = "0" + e), (l += e);
                }
                return l.toLowerCase();
              }
              function j(e) {
                if (B.test(e)) {
                  e = Number(e);
                  if (e >= U && e <= W) return e;
                }
                return null;
              }
              function q(e, t) {
                const n = setTimeout(e, t);
                return (
                  "number" == typeof n &&
                  "undefined" != typeof Deno &&
                  Deno.unrefTimer
                    ? Deno.unrefTimer(n)
                    : "object" == typeof n && n.unref && n.unref(),
                  n
                );
              }
              const B = new RegExp("^-?(0*)\\d{1,10}$"),
                U = -2147483648,
                W = 2147483647,
                H = function (e) {
                  try {
                    e();
                  } catch (t) {
                    setTimeout(() => {
                      var e = t.stack || "";
                      throw (R("Exception was thrown by user callback.", e), t);
                    }, Math.floor(0));
                  }
                };
              class V {
                constructor(e, t) {
                  (this.appName_ = e),
                    (this.appCheckProvider = t),
                    (this.appCheck =
                      null == t ? void 0 : t.getImmediate({ optional: !0 })),
                    this.appCheck ||
                      (null != t && t.get().then((e) => (this.appCheck = e)));
                }
                getToken(n) {
                  return this.appCheck
                    ? this.appCheck.getToken(n)
                    : new Promise((e, t) => {
                        setTimeout(() => {
                          this.appCheck ? this.getToken(n).then(e, t) : e(null);
                        }, 0);
                      });
                }
                addTokenChangeListener(t) {
                  var e;
                  null !== (e = this.appCheckProvider) &&
                    void 0 !== e &&
                    e.get().then((e) => e.addTokenListener(t));
                }
                notifyForInvalidToken() {
                  R(
                    `Provided AppCheck credentials for the app named "${this.appName_}" ` +
                      "are invalid. This usually indicates your app was not initialized correctly."
                  );
                }
              }
              class $ {
                constructor(e, t, n) {
                  (this.appName_ = e),
                    (this.firebaseOptions_ = t),
                    (this.authProvider_ = n),
                    (this.auth_ = null),
                    (this.auth_ = n.getImmediate({ optional: !0 })),
                    this.auth_ || n.onInit((e) => (this.auth_ = e));
                }
                getToken(n) {
                  return this.auth_
                    ? this.auth_
                        .getToken(n)
                        .catch((e) =>
                          e && "auth/token-not-initialized" === e.code
                            ? (N(
                                "Got auth/token-not-initialized error.  Treating as null token."
                              ),
                              null)
                            : Promise.reject(e)
                        )
                    : new Promise((e, t) => {
                        setTimeout(() => {
                          this.auth_ ? this.getToken(n).then(e, t) : e(null);
                        }, 0);
                      });
                }
                addTokenChangeListener(t) {
                  this.auth_
                    ? this.auth_.addAuthTokenListener(t)
                    : this.authProvider_
                        .get()
                        .then((e) => e.addAuthTokenListener(t));
                }
                removeTokenChangeListener(t) {
                  this.authProvider_
                    .get()
                    .then((e) => e.removeAuthTokenListener(t));
                }
                notifyForInvalidToken() {
                  let e =
                    'Provided authentication credentials for the app named "' +
                    this.appName_ +
                    '" are invalid. This usually indicates your app was not initialized correctly. ';
                  "credential" in this.firebaseOptions_
                    ? (e +=
                        'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                    : "serviceAccount" in this.firebaseOptions_
                    ? (e +=
                        'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                    : (e +=
                        'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
                    R(e);
                }
              }
              class Y {
                constructor(e) {
                  this.accessToken = e;
                }
                getToken(e) {
                  return Promise.resolve({ accessToken: this.accessToken });
                }
                addTokenChangeListener(e) {
                  e(this.accessToken);
                }
                removeTokenChangeListener(e) {}
                notifyForInvalidToken() {}
              }
              Y.OWNER = "owner";
              const G =
                  /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
                Q = "websocket",
                K = "long_polling";
              class X {
                constructor(e, t, n, i, r = !1, o = "", a = !1, s = !1) {
                  (this.secure = t),
                    (this.namespace = n),
                    (this.webSocketOnly = i),
                    (this.nodeAdmin = r),
                    (this.persistenceKey = o),
                    (this.includeNamespaceInQueryParams = a),
                    (this.isUsingEmulator = s),
                    (this._host = e.toLowerCase()),
                    (this._domain = this._host.substr(
                      this._host.indexOf(".") + 1
                    )),
                    (this.internalHost = m.get("host:" + e) || this._host);
                }
                isCacheableHost() {
                  return "s-" === this.internalHost.substr(0, 2);
                }
                isCustomHost() {
                  return (
                    "firebaseio.com" !== this._domain &&
                    "firebaseio-demo.com" !== this._domain
                  );
                }
                get host() {
                  return this._host;
                }
                set host(e) {
                  e !== this.internalHost &&
                    ((this.internalHost = e),
                    this.isCacheableHost() &&
                      m.set("host:" + this._host, this.internalHost));
                }
                toString() {
                  let e = this.toURLString();
                  return (
                    this.persistenceKey &&
                      (e += "<" + this.persistenceKey + ">"),
                    e
                  );
                }
                toURLString() {
                  var e = this.secure ? "https://" : "http://",
                    t = this.includeNamespaceInQueryParams
                      ? `?ns=${this.namespace}`
                      : "";
                  return `${e}${this.host}/${t}`;
                }
              }
              function J(e, t, n) {
                (0, g.assert)(
                  "string" == typeof t,
                  "typeof type must == string"
                ),
                  (0, g.assert)(
                    "object" == typeof n,
                    "typeof params must == object"
                  );
                let i;
                if (t === Q)
                  i =
                    (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
                else {
                  if (t !== K) throw new Error("Unknown connection type: " + t);
                  i =
                    (e.secure ? "https://" : "http://") +
                    e.internalHost +
                    "/.lp?";
                }
                ((t = e).host !== t.internalHost ||
                  t.isCustomHost() ||
                  t.includeNamespaceInQueryParams) &&
                  (n.ns = e.namespace);
                const r = [];
                return (
                  z(n, (e, t) => {
                    r.push(e + "=" + t);
                  }),
                  i + r.join("&")
                );
              }
              class Z {
                constructor() {
                  this.counters_ = {};
                }
                incrementCounter(e, t = 1) {
                  (0, g.contains)(this.counters_, e) || (this.counters_[e] = 0),
                    (this.counters_[e] += t);
                }
                get() {
                  return (0, g.deepCopy)(this.counters_);
                }
              }
              const ee = {},
                te = {};
              function ne(e) {
                e = e.toString();
                return ee[e] || (ee[e] = new Z()), ee[e];
              }
              class ie {
                constructor(e) {
                  (this.onMessage_ = e),
                    (this.pendingResponses = []),
                    (this.currentResponseNum = 0),
                    (this.closeAfterResponse = -1),
                    (this.onClose = null);
                }
                closeAfter(e, t) {
                  (this.closeAfterResponse = e),
                    (this.onClose = t),
                    this.closeAfterResponse < this.currentResponseNum &&
                      (this.onClose(), (this.onClose = null));
                }
                handleResponse(e, t) {
                  for (
                    this.pendingResponses[e] = t;
                    this.pendingResponses[this.currentResponseNum];

                  ) {
                    const n = this.pendingResponses[this.currentResponseNum];
                    delete this.pendingResponses[this.currentResponseNum];
                    for (let e = 0; e < n.length; ++e)
                      n[e] &&
                        H(() => {
                          this.onMessage_(n[e]);
                        });
                    if (this.currentResponseNum === this.closeAfterResponse) {
                      this.onClose && (this.onClose(), (this.onClose = null));
                      break;
                    }
                    this.currentResponseNum++;
                  }
                }
              }
              class re {
                constructor(e, t, n, i, r, o, a) {
                  (this.connId = e),
                    (this.repoInfo = t),
                    (this.applicationId = n),
                    (this.appCheckToken = i),
                    (this.authToken = r),
                    (this.transportSessionId = o),
                    (this.lastSessionId = a),
                    (this.bytesSent = 0),
                    (this.bytesReceived = 0),
                    (this.everConnected_ = !1),
                    (this.log_ = k(e)),
                    (this.stats_ = ne(t)),
                    (this.urlFn = (e) => (
                      this.appCheckToken && (e.ac = this.appCheckToken),
                      J(t, K, e)
                    ));
                }
                open(e, t) {
                  (this.curSegmentNum = 0),
                    (this.onDisconnect_ = t),
                    (this.myPacketOrderer = new ie(e)),
                    (this.isClosed_ = !1),
                    (this.connectTimeoutTimer_ = setTimeout(() => {
                      this.log_("Timed out trying to connect."),
                        this.onClosed_(),
                        (this.connectTimeoutTimer_ = null);
                    }, Math.floor(3e4))),
                    (function (t) {
                      if (
                        (0, g.isNodeSdk)() ||
                        "complete" === document.readyState
                      )
                        t();
                      else {
                        let e = !1;
                        const n = function () {
                          document.body
                            ? e || ((e = !0), t())
                            : setTimeout(n, Math.floor(10));
                        };
                        document.addEventListener
                          ? (document.addEventListener(
                              "DOMContentLoaded",
                              n,
                              !1
                            ),
                            window.addEventListener("load", n, !1))
                          : document.attachEvent &&
                            (document.attachEvent("onreadystatechange", () => {
                              "complete" === document.readyState && n();
                            }),
                            window.attachEvent("onload", n));
                      }
                    })(() => {
                      if (!this.isClosed_) {
                        this.scriptTagHolder = new oe(
                          (...e) => {
                            var [t, n, i] = e;
                            if (
                              (this.incrementIncomingBytes_(e),
                              this.scriptTagHolder)
                            )
                              if (
                                (this.connectTimeoutTimer_ &&
                                  (clearTimeout(this.connectTimeoutTimer_),
                                  (this.connectTimeoutTimer_ = null)),
                                (this.everConnected_ = !0),
                                "start" === t)
                              )
                                (this.id = n), (this.password = i);
                              else {
                                if ("close" !== t)
                                  throw new Error(
                                    "Unrecognized command received: " + t
                                  );
                                n
                                  ? ((this.scriptTagHolder.sendNewPolls = !1),
                                    this.myPacketOrderer.closeAfter(n, () => {
                                      this.onClosed_();
                                    }))
                                  : this.onClosed_();
                              }
                          },
                          (...e) => {
                            var [t, n] = e;
                            this.incrementIncomingBytes_(e),
                              this.myPacketOrderer.handleResponse(t, n);
                          },
                          () => {
                            this.onClosed_();
                          },
                          this.urlFn
                        );
                        const t = { start: "t" };
                        (t.ser = Math.floor(1e8 * Math.random())),
                          this.scriptTagHolder.uniqueCallbackIdentifier &&
                            (t.cb =
                              this.scriptTagHolder.uniqueCallbackIdentifier),
                          (t.v = "5"),
                          this.transportSessionId &&
                            (t.s = this.transportSessionId),
                          this.lastSessionId && (t.ls = this.lastSessionId),
                          this.applicationId && (t.p = this.applicationId),
                          this.appCheckToken && (t.ac = this.appCheckToken),
                          "undefined" != typeof location &&
                            location.hostname &&
                            G.test(location.hostname) &&
                            (t.r = "f");
                        var e = this.urlFn(t);
                        this.log_("Connecting via long-poll to " + e),
                          this.scriptTagHolder.addTag(e, () => {});
                      }
                    });
                }
                start() {
                  this.scriptTagHolder.startLongPoll(this.id, this.password),
                    this.addDisconnectPingFrame(this.id, this.password);
                }
                static forceAllow() {
                  re.forceAllow_ = !0;
                }
                static forceDisallow() {
                  re.forceDisallow_ = !0;
                }
                static isAvailable() {
                  return (
                    !(0, g.isNodeSdk)() &&
                    (!!re.forceAllow_ ||
                      !(
                        re.forceDisallow_ ||
                        "undefined" == typeof document ||
                        null == document.createElement ||
                        ("object" == typeof window &&
                          window.chrome &&
                          window.chrome.extension &&
                          !/^chrome/.test(window.location.href)) ||
                        ("object" == typeof Windows &&
                          "object" == typeof Windows.UI)
                      ))
                  );
                }
                markConnectionHealthy() {}
                shutdown_() {
                  (this.isClosed_ = !0),
                    this.scriptTagHolder &&
                      (this.scriptTagHolder.close(),
                      (this.scriptTagHolder = null)),
                    this.myDisconnFrame &&
                      (document.body.removeChild(this.myDisconnFrame),
                      (this.myDisconnFrame = null)),
                    this.connectTimeoutTimer_ &&
                      (clearTimeout(this.connectTimeoutTimer_),
                      (this.connectTimeoutTimer_ = null));
                }
                onClosed_() {
                  this.isClosed_ ||
                    (this.log_("Longpoll is closing itself"),
                    this.shutdown_(),
                    this.onDisconnect_ &&
                      (this.onDisconnect_(this.everConnected_),
                      (this.onDisconnect_ = null)));
                }
                close() {
                  this.isClosed_ ||
                    (this.log_("Longpoll is being closed."), this.shutdown_());
                }
                send(e) {
                  e = (0, g.stringify)(e);
                  (this.bytesSent += e.length),
                    this.stats_.incrementCounter("bytes_sent", e.length);
                  var e = (0, g.base64Encode)(e),
                    t = S(e, 1840);
                  for (let e = 0; e < t.length; e++)
                    this.scriptTagHolder.enqueueSegment(
                      this.curSegmentNum,
                      t.length,
                      t[e]
                    ),
                      this.curSegmentNum++;
                }
                addDisconnectPingFrame(e, t) {
                  if (!(0, g.isNodeSdk)()) {
                    this.myDisconnFrame = document.createElement("iframe");
                    const n = { dframe: "t" };
                    (n.id = e),
                      (n.pw = t),
                      (this.myDisconnFrame.src = this.urlFn(n)),
                      (this.myDisconnFrame.style.display = "none"),
                      document.body.appendChild(this.myDisconnFrame);
                  }
                }
                incrementIncomingBytes_(e) {
                  e = (0, g.stringify)(e).length;
                  (this.bytesReceived += e),
                    this.stats_.incrementCounter("bytes_received", e);
                }
              }
              class oe {
                constructor(t, n, e, i) {
                  if (
                    ((this.onDisconnect = e),
                    (this.urlFn = i),
                    (this.outstandingRequests = new Set()),
                    (this.pendingSegs = []),
                    (this.currentSerial = Math.floor(1e8 * Math.random())),
                    (this.sendNewPolls = !0),
                    (0, g.isNodeSdk)())
                  )
                    (this.commandCB = t), (this.onMessageCB = n);
                  else {
                    (this.uniqueCallbackIdentifier = v()),
                      (window["pLPCommand" + this.uniqueCallbackIdentifier] =
                        t),
                      (window["pRTLPCB" + this.uniqueCallbackIdentifier] = n),
                      (this.myIFrame = oe.createIFrame_());
                    let e = "";
                    this.myIFrame.src &&
                      "javascript:" ===
                        this.myIFrame.src.substr(0, "javascript:".length) &&
                      ((r = document.domain),
                      (e = '<script>document.domain="' + r + '";</script>'));
                    var r = "<html><body>" + e + "</body></html>";
                    try {
                      this.myIFrame.doc.open(),
                        this.myIFrame.doc.write(r),
                        this.myIFrame.doc.close();
                    } catch (e) {
                      N("frame writing exception"), e.stack && N(e.stack), N(e);
                    }
                  }
                }
                static createIFrame_() {
                  const t = document.createElement("iframe");
                  if (((t.style.display = "none"), !document.body))
                    throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                  document.body.appendChild(t);
                  try {
                    t.contentWindow.document ||
                      N("No IE domain setting required");
                  } catch (e) {
                    var n = document.domain;
                    t.src =
                      "javascript:void((function(){document.open();document.domain='" +
                      n +
                      "';document.close();})())";
                  }
                  return (
                    t.contentDocument
                      ? (t.doc = t.contentDocument)
                      : t.contentWindow
                      ? (t.doc = t.contentWindow.document)
                      : t.document && (t.doc = t.document),
                    t
                  );
                }
                close() {
                  (this.alive = !1),
                    this.myIFrame &&
                      ((this.myIFrame.doc.body.textContent = ""),
                      setTimeout(() => {
                        null !== this.myIFrame &&
                          (document.body.removeChild(this.myIFrame),
                          (this.myIFrame = null));
                      }, Math.floor(0)));
                  const e = this.onDisconnect;
                  e && ((this.onDisconnect = null), e());
                }
                startLongPoll(e, t) {
                  for (
                    this.myID = e, this.myPW = t, this.alive = !0;
                    this.newRequest_();

                  );
                }
                newRequest_() {
                  if (
                    this.alive &&
                    this.sendNewPolls &&
                    this.outstandingRequests.size <
                      (0 < this.pendingSegs.length ? 2 : 1)
                  ) {
                    this.currentSerial++;
                    const r = {};
                    (r.id = this.myID),
                      (r.pw = this.myPW),
                      (r.ser = this.currentSerial);
                    var n = this.urlFn(r);
                    let e = "",
                      t = 0;
                    for (; 0 < this.pendingSegs.length; ) {
                      if (
                        !(this.pendingSegs[0].d.length + 30 + e.length <= 1870)
                      )
                        break;
                      var i = this.pendingSegs.shift();
                      (e =
                        e +
                        "&seg" +
                        t +
                        "=" +
                        i.seg +
                        "&ts" +
                        t +
                        "=" +
                        i.ts +
                        "&d" +
                        t +
                        "=" +
                        i.d),
                        t++;
                    }
                    return (
                      (n += e), this.addLongPollTag_(n, this.currentSerial), !0
                    );
                  }
                  return !1;
                }
                enqueueSegment(e, t, n) {
                  this.pendingSegs.push({ seg: e, ts: t, d: n }),
                    this.alive && this.newRequest_();
                }
                addLongPollTag_(e, t) {
                  this.outstandingRequests.add(t);
                  const n = () => {
                      this.outstandingRequests.delete(t), this.newRequest_();
                    },
                    i = setTimeout(n, Math.floor(25e3));
                  this.addTag(e, () => {
                    clearTimeout(i), n();
                  });
                }
                addTag(e, n) {
                  (0, g.isNodeSdk)()
                    ? this.doNodeLongPoll(e, n)
                    : setTimeout(() => {
                        try {
                          if (!this.sendNewPolls) return;
                          const t = this.myIFrame.doc.createElement("script");
                          (t.type = "text/javascript"),
                            (t.async = !0),
                            (t.src = e),
                            (t.onload = t.onreadystatechange =
                              function () {
                                var e = t.readyState;
                                (e && "loaded" !== e && "complete" !== e) ||
                                  ((t.onload = t.onreadystatechange = null),
                                  t.parentNode && t.parentNode.removeChild(t),
                                  n());
                              }),
                            (t.onerror = () => {
                              N("Long-poll script failed to load: " + e),
                                (this.sendNewPolls = !1),
                                this.close();
                            }),
                            this.myIFrame.doc.body.appendChild(t);
                        } catch (e) {}
                      }, Math.floor(1));
                }
              }
              let ae = null;
              "undefined" != typeof MozWebSocket
                ? (ae = MozWebSocket)
                : "undefined" != typeof WebSocket && (ae = WebSocket);
              class se {
                constructor(e, t, n, i, r, o, a) {
                  (this.connId = e),
                    (this.applicationId = n),
                    (this.appCheckToken = i),
                    (this.authToken = r),
                    (this.keepaliveTimer = null),
                    (this.frames = null),
                    (this.totalFrames = 0),
                    (this.bytesSent = 0),
                    (this.bytesReceived = 0),
                    (this.log_ = k(this.connId)),
                    (this.stats_ = ne(t)),
                    (this.connURL = se.connectionURL_(t, o, a, i, n)),
                    (this.nodeAdmin = t.nodeAdmin);
                }
                static connectionURL_(e, t, n, i, r) {
                  const o = { v: "5" };
                  return (
                    !(0, g.isNodeSdk)() &&
                      "undefined" != typeof location &&
                      location.hostname &&
                      G.test(location.hostname) &&
                      (o.r = "f"),
                    t && (o.s = t),
                    n && (o.ls = n),
                    i && (o.ac = i),
                    r && (o.p = r),
                    J(e, Q, o)
                  );
                }
                open(e, t) {
                  (this.onDisconnect = t),
                    (this.onMessage = e),
                    this.log_("Websocket connecting to " + this.connURL),
                    (this.everConnected_ = !1),
                    m.set("previous_websocket_failure", !0);
                  try {
                    let e;
                    var n, i;
                    (0, g.isNodeSdk)() &&
                      ((n = this.nodeAdmin ? "AdminNode" : "Node"),
                      (e = {
                        headers: {
                          "User-Agent": `Firebase/5/${o}/${co.platform}/${n}`,
                          "X-Firebase-GMPID": this.applicationId || "",
                        },
                      }),
                      this.authToken &&
                        (e.headers.Authorization = `Bearer ${this.authToken}`),
                      this.appCheckToken &&
                        (e.headers["X-Firebase-AppCheck"] = this.appCheckToken),
                      (i = co.env),
                      (r =
                        0 === this.connURL.indexOf("wss://")
                          ? i.HTTPS_PROXY || i.https_proxy
                          : i.HTTP_PROXY || i.http_proxy) &&
                        (e.proxy = { origin: r })),
                      (this.mySock = new ae(this.connURL, [], e));
                  } catch (e) {
                    this.log_("Error instantiating WebSocket.");
                    var r = e.message || e.data;
                    return r && this.log_(r), void this.onClosed_();
                  }
                  (this.mySock.onopen = () => {
                    this.log_("Websocket connected."),
                      (this.everConnected_ = !0);
                  }),
                    (this.mySock.onclose = () => {
                      this.log_("Websocket connection was disconnected."),
                        (this.mySock = null),
                        this.onClosed_();
                    }),
                    (this.mySock.onmessage = (e) => {
                      this.handleIncomingFrame(e);
                    }),
                    (this.mySock.onerror = (e) => {
                      this.log_("WebSocket error.  Closing connection.");
                      e = e.message || e.data;
                      e && this.log_(e), this.onClosed_();
                    });
                }
                start() {}
                static forceDisallow() {
                  se.forceDisallow_ = !0;
                }
                static isAvailable() {
                  let e = !1;
                  var t;
                  return (
                    "undefined" == typeof navigator ||
                      !navigator.userAgent ||
                      ((t = navigator.userAgent.match(
                        /Android ([0-9]{0,}\.[0-9]{0,})/
                      )) &&
                        1 < t.length &&
                        parseFloat(t[1]) < 4.4 &&
                        (e = !0)),
                    !e && null !== ae && !se.forceDisallow_
                  );
                }
                static previouslyFailed() {
                  return (
                    m.isInMemoryStorage ||
                    !0 === m.get("previous_websocket_failure")
                  );
                }
                markConnectionHealthy() {
                  m.remove("previous_websocket_failure");
                }
                appendFrame_(e) {
                  this.frames.push(e),
                    this.frames.length === this.totalFrames &&
                      ((e = this.frames.join("")),
                      (e = ((this.frames = null), g.jsonEval)(e)),
                      this.onMessage(e));
                }
                handleNewFrameCount_(e) {
                  (this.totalFrames = e), (this.frames = []);
                }
                extractFrameCount_(e) {
                  if (
                    ((0, g.assert)(
                      null === this.frames,
                      "We already have a frame buffer"
                    ),
                    e.length <= 6)
                  ) {
                    var t = Number(e);
                    if (!isNaN(t)) return this.handleNewFrameCount_(t), null;
                  }
                  return this.handleNewFrameCount_(1), e;
                }
                handleIncomingFrame(e) {
                  null !== this.mySock &&
                    ((e = e.data),
                    (this.bytesReceived += e.length),
                    this.stats_.incrementCounter("bytes_received", e.length),
                    this.resetKeepAlive(),
                    null !== this.frames
                      ? this.appendFrame_(e)
                      : null !== (e = this.extractFrameCount_(e)) &&
                        this.appendFrame_(e));
                }
                send(e) {
                  this.resetKeepAlive();
                  e = (0, g.stringify)(e);
                  (this.bytesSent += e.length),
                    this.stats_.incrementCounter("bytes_sent", e.length);
                  var t = S(e, 16384);
                  1 < t.length && this.sendString_(String(t.length));
                  for (let e = 0; e < t.length; e++) this.sendString_(t[e]);
                }
                shutdown_() {
                  (this.isClosed_ = !0),
                    this.keepaliveTimer &&
                      (clearInterval(this.keepaliveTimer),
                      (this.keepaliveTimer = null)),
                    this.mySock && (this.mySock.close(), (this.mySock = null));
                }
                onClosed_() {
                  this.isClosed_ ||
                    (this.log_("WebSocket is closing itself"),
                    this.shutdown_(),
                    this.onDisconnect &&
                      (this.onDisconnect(this.everConnected_),
                      (this.onDisconnect = null)));
                }
                close() {
                  this.isClosed_ ||
                    (this.log_("WebSocket is being closed"), this.shutdown_());
                }
                resetKeepAlive() {
                  clearInterval(this.keepaliveTimer),
                    (this.keepaliveTimer = setInterval(() => {
                      this.mySock && this.sendString_("0"),
                        this.resetKeepAlive();
                    }, Math.floor(45e3)));
                }
                sendString_(e) {
                  try {
                    this.mySock.send(e);
                  } catch (e) {
                    this.log_(
                      "Exception thrown from WebSocket.send():",
                      e.message || e.data,
                      "Closing connection."
                    ),
                      setTimeout(this.onClosed_.bind(this), 0);
                  }
                }
              }
              (se.responsesRequiredToBeHealthy = 2), (se.healthyTimeout = 3e4);
              class le {
                constructor(e) {
                  this.initTransports_(e);
                }
                static get ALL_TRANSPORTS() {
                  return [re, se];
                }
                static get IS_TRANSPORT_INITIALIZED() {
                  return this.globalTransportInitialized_;
                }
                initTransports_(e) {
                  var t = se && se.isAvailable();
                  let n = t && !se.previouslyFailed();
                  if (
                    (e.webSocketOnly &&
                      (t ||
                        R(
                          "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                        ),
                      (n = !0)),
                    n)
                  )
                    this.transports_ = [se];
                  else {
                    const i = (this.transports_ = []);
                    for (const r of le.ALL_TRANSPORTS)
                      r && r.isAvailable() && i.push(r);
                    le.globalTransportInitialized_ = !0;
                  }
                }
                initialTransport() {
                  if (0 < this.transports_.length) return this.transports_[0];
                  throw new Error("No transports available");
                }
                upgradeTransport() {
                  return 1 < this.transports_.length
                    ? this.transports_[1]
                    : null;
                }
              }
              le.globalTransportInitialized_ = !1;
              class ce {
                constructor(e, t, n, i, r, o, a, s, l, c) {
                  (this.id = e),
                    (this.repoInfo_ = t),
                    (this.applicationId_ = n),
                    (this.appCheckToken_ = i),
                    (this.authToken_ = r),
                    (this.onMessage_ = o),
                    (this.onReady_ = a),
                    (this.onDisconnect_ = s),
                    (this.onKill_ = l),
                    (this.lastSessionId = c),
                    (this.connectionCount = 0),
                    (this.pendingDataMessages = []),
                    (this.state_ = 0),
                    (this.log_ = k("c:" + this.id + ":")),
                    (this.transportManager_ = new le(t)),
                    this.log_("Connection created"),
                    this.start_();
                }
                start_() {
                  const e = this.transportManager_.initialTransport();
                  (this.conn_ = new e(
                    this.nextTransportId_(),
                    this.repoInfo_,
                    this.applicationId_,
                    this.appCheckToken_,
                    this.authToken_,
                    null,
                    this.lastSessionId
                  )),
                    (this.primaryResponsesRequired_ =
                      e.responsesRequiredToBeHealthy || 0);
                  const t = this.connReceiver_(this.conn_),
                    n = this.disconnReceiver_(this.conn_);
                  (this.tx_ = this.conn_),
                    (this.rx_ = this.conn_),
                    (this.secondaryConn_ = null),
                    (this.isHealthy_ = !1),
                    setTimeout(() => {
                      this.conn_ && this.conn_.open(t, n);
                    }, Math.floor(0));
                  var i = e.healthyTimeout || 0;
                  0 < i &&
                    (this.healthyTimeout_ = q(() => {
                      (this.healthyTimeout_ = null),
                        this.isHealthy_ ||
                          (this.conn_ && 102400 < this.conn_.bytesReceived
                            ? (this.log_(
                                "Connection exceeded healthy timeout but has received " +
                                  this.conn_.bytesReceived +
                                  " bytes.  Marking connection healthy."
                              ),
                              (this.isHealthy_ = !0),
                              this.conn_.markConnectionHealthy())
                            : this.conn_ && 10240 < this.conn_.bytesSent
                            ? this.log_(
                                "Connection exceeded healthy timeout but has sent " +
                                  this.conn_.bytesSent +
                                  " bytes.  Leaving connection alive."
                              )
                            : (this.log_(
                                "Closing unhealthy connection after timeout."
                              ),
                              this.close()));
                    }, Math.floor(i)));
                }
                nextTransportId_() {
                  return "c:" + this.id + ":" + this.connectionCount++;
                }
                disconnReceiver_(t) {
                  return (e) => {
                    t === this.conn_
                      ? this.onConnectionLost_(e)
                      : t === this.secondaryConn_
                      ? (this.log_("Secondary connection lost."),
                        this.onSecondaryConnectionLost_())
                      : this.log_("closing an old connection");
                  };
                }
                connReceiver_(t) {
                  return (e) => {
                    2 !== this.state_ &&
                      (t === this.rx_
                        ? this.onPrimaryMessageReceived_(e)
                        : t === this.secondaryConn_
                        ? this.onSecondaryMessageReceived_(e)
                        : this.log_("message on old connection"));
                  };
                }
                sendRequest(e) {
                  this.sendData_({ t: "d", d: e });
                }
                tryCleanupConnection() {
                  this.tx_ === this.secondaryConn_ &&
                    this.rx_ === this.secondaryConn_ &&
                    (this.log_(
                      "cleaning up and promoting a connection: " +
                        this.secondaryConn_.connId
                    ),
                    (this.conn_ = this.secondaryConn_),
                    (this.secondaryConn_ = null));
                }
                onSecondaryControl_(e) {
                  "t" in e &&
                    ("a" === (e = e.t)
                      ? this.upgradeIfSecondaryHealthy_()
                      : "r" === e
                      ? (this.log_("Got a reset on secondary, closing it"),
                        this.secondaryConn_.close(),
                        (this.tx_ !== this.secondaryConn_ &&
                          this.rx_ !== this.secondaryConn_) ||
                          this.close())
                      : "o" === e &&
                        (this.log_("got pong on secondary."),
                        this.secondaryResponsesRequired_--,
                        this.upgradeIfSecondaryHealthy_()));
                }
                onSecondaryMessageReceived_(e) {
                  var t = I("t", e),
                    e = I("d", e);
                  if ("c" === t) this.onSecondaryControl_(e);
                  else {
                    if ("d" !== t)
                      throw new Error("Unknown protocol layer: " + t);
                    this.pendingDataMessages.push(e);
                  }
                }
                upgradeIfSecondaryHealthy_() {
                  this.secondaryResponsesRequired_ <= 0
                    ? (this.log_("Secondary connection is healthy."),
                      (this.isHealthy_ = !0),
                      this.secondaryConn_.markConnectionHealthy(),
                      this.proceedWithUpgrade_())
                    : (this.log_("sending ping on secondary."),
                      this.secondaryConn_.send({
                        t: "c",
                        d: { t: "p", d: {} },
                      }));
                }
                proceedWithUpgrade_() {
                  this.secondaryConn_.start(),
                    this.log_("sending client ack on secondary"),
                    this.secondaryConn_.send({ t: "c", d: { t: "a", d: {} } }),
                    this.log_("Ending transmission on primary"),
                    this.conn_.send({ t: "c", d: { t: "n", d: {} } }),
                    (this.tx_ = this.secondaryConn_),
                    this.tryCleanupConnection();
                }
                onPrimaryMessageReceived_(e) {
                  var t = I("t", e),
                    e = I("d", e);
                  "c" === t
                    ? this.onControl_(e)
                    : "d" === t && this.onDataMessage_(e);
                }
                onDataMessage_(e) {
                  this.onPrimaryResponse_(), this.onMessage_(e);
                }
                onPrimaryResponse_() {
                  this.isHealthy_ ||
                    (this.primaryResponsesRequired_--,
                    this.primaryResponsesRequired_ <= 0 &&
                      (this.log_("Primary connection is healthy."),
                      (this.isHealthy_ = !0),
                      this.conn_.markConnectionHealthy()));
                }
                onControl_(e) {
                  var t = I("t", e);
                  if ("d" in e) {
                    e = e.d;
                    if ("h" === t) {
                      const n = Object.assign({}, e);
                      this.repoInfo_.isUsingEmulator &&
                        (n.h = this.repoInfo_.host),
                        this.onHandshake_(n);
                    } else if ("n" === t) {
                      this.log_("recvd end transmission on primary"),
                        (this.rx_ = this.secondaryConn_);
                      for (let e = 0; e < this.pendingDataMessages.length; ++e)
                        this.onDataMessage_(this.pendingDataMessages[e]);
                      (this.pendingDataMessages = []),
                        this.tryCleanupConnection();
                    } else
                      "s" === t
                        ? this.onConnectionShutdown_(e)
                        : "r" === t
                        ? this.onReset_(e)
                        : "e" === t
                        ? C("Server Error: " + e)
                        : "o" === t
                        ? (this.log_("got pong on primary."),
                          this.onPrimaryResponse_(),
                          this.sendPingOnPrimaryIfNecessary_())
                        : C("Unknown control packet command: " + t);
                  }
                }
                onHandshake_(e) {
                  var t = e.ts,
                    n = e.v,
                    i = e.h;
                  (this.sessionId = e.s),
                    (this.repoInfo_.host = i),
                    0 === this.state_ &&
                      (this.conn_.start(),
                      this.onConnectionEstablished_(this.conn_, t),
                      "5" !== n && R("Protocol version mismatch detected"),
                      this.tryStartUpgrade_());
                }
                tryStartUpgrade_() {
                  var e = this.transportManager_.upgradeTransport();
                  e && this.startUpgrade_(e);
                }
                startUpgrade_(e) {
                  (this.secondaryConn_ = new e(
                    this.nextTransportId_(),
                    this.repoInfo_,
                    this.applicationId_,
                    this.appCheckToken_,
                    this.authToken_,
                    this.sessionId
                  )),
                    (this.secondaryResponsesRequired_ =
                      e.responsesRequiredToBeHealthy || 0);
                  var t = this.connReceiver_(this.secondaryConn_),
                    e = this.disconnReceiver_(this.secondaryConn_);
                  this.secondaryConn_.open(t, e),
                    q(() => {
                      this.secondaryConn_ &&
                        (this.log_("Timed out trying to upgrade."),
                        this.secondaryConn_.close());
                    }, Math.floor(6e4));
                }
                onReset_(e) {
                  this.log_("Reset packet received.  New host: " + e),
                    (this.repoInfo_.host = e),
                    1 === this.state_
                      ? this.close()
                      : (this.closeConnections_(), this.start_());
                }
                onConnectionEstablished_(e, t) {
                  this.log_("Realtime connection established."),
                    (this.conn_ = e),
                    (this.state_ = 1),
                    this.onReady_ &&
                      (this.onReady_(t, this.sessionId),
                      (this.onReady_ = null)),
                    0 === this.primaryResponsesRequired_
                      ? (this.log_("Primary connection is healthy."),
                        (this.isHealthy_ = !0))
                      : q(() => {
                          this.sendPingOnPrimaryIfNecessary_();
                        }, Math.floor(5e3));
                }
                sendPingOnPrimaryIfNecessary_() {
                  this.isHealthy_ ||
                    1 !== this.state_ ||
                    (this.log_("sending ping on primary."),
                    this.sendData_({ t: "c", d: { t: "p", d: {} } }));
                }
                onSecondaryConnectionLost_() {
                  var e = this.secondaryConn_;
                  (this.secondaryConn_ = null),
                    (this.tx_ !== e && this.rx_ !== e) || this.close();
                }
                onConnectionLost_(e) {
                  (this.conn_ = null),
                    e || 0 !== this.state_
                      ? 1 === this.state_ &&
                        this.log_("Realtime connection lost.")
                      : (this.log_("Realtime connection failed."),
                        this.repoInfo_.isCacheableHost() &&
                          (m.remove("host:" + this.repoInfo_.host),
                          (this.repoInfo_.internalHost = this.repoInfo_.host))),
                    this.close();
                }
                onConnectionShutdown_(e) {
                  this.log_(
                    "Connection shutdown command received. Shutting down..."
                  ),
                    this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
                    (this.onDisconnect_ = null),
                    this.close();
                }
                sendData_(e) {
                  if (1 !== this.state_) throw "Connection is not connected";
                  this.tx_.send(e);
                }
                close() {
                  2 !== this.state_ &&
                    (this.log_("Closing realtime connection."),
                    (this.state_ = 2),
                    this.closeConnections_(),
                    this.onDisconnect_ &&
                      (this.onDisconnect_(), (this.onDisconnect_ = null)));
                }
                closeConnections_() {
                  this.log_("Shutting down all connections"),
                    this.conn_ && (this.conn_.close(), (this.conn_ = null)),
                    this.secondaryConn_ &&
                      (this.secondaryConn_.close(),
                      (this.secondaryConn_ = null)),
                    this.healthyTimeout_ &&
                      (clearTimeout(this.healthyTimeout_),
                      (this.healthyTimeout_ = null));
                }
              }
              class de {
                put(e, t, n, i) {}
                merge(e, t, n, i) {}
                refreshAuthToken(e) {}
                refreshAppCheckToken(e) {}
                onDisconnectPut(e, t, n) {}
                onDisconnectMerge(e, t, n) {}
                onDisconnectCancel(e, t) {}
                reportStats(e) {}
              }
              class he {
                constructor(e) {
                  (this.allowedEvents_ = e),
                    (this.listeners_ = {}),
                    (0, g.assert)(
                      Array.isArray(e) && 0 < e.length,
                      "Requires a non-empty array"
                    );
                }
                trigger(e, ...t) {
                  if (Array.isArray(this.listeners_[e])) {
                    const n = [...this.listeners_[e]];
                    for (let e = 0; e < n.length; e++)
                      n[e].callback.apply(n[e].context, t);
                  }
                }
                on(e, t, n) {
                  this.validateEventType_(e),
                    (this.listeners_[e] = this.listeners_[e] || []),
                    this.listeners_[e].push({ callback: t, context: n });
                  e = this.getInitialEvent(e);
                  e && t.apply(n, e);
                }
                off(e, t, n) {
                  this.validateEventType_(e);
                  const i = this.listeners_[e] || [];
                  for (let e = 0; e < i.length; e++)
                    if (i[e].callback === t && (!n || n === i[e].context))
                      return void i.splice(e, 1);
                }
                validateEventType_(t) {
                  (0, g.assert)(
                    this.allowedEvents_.find((e) => e === t),
                    "Unknown event: " + t
                  );
                }
              }
              class ue extends he {
                constructor() {
                  super(["online"]),
                    (this.online_ = !0),
                    "undefined" == typeof window ||
                      void 0 === window.addEventListener ||
                      (0, g.isMobileCordova)() ||
                      (window.addEventListener(
                        "online",
                        () => {
                          this.online_ ||
                            ((this.online_ = !0), this.trigger("online", !0));
                        },
                        !1
                      ),
                      window.addEventListener(
                        "offline",
                        () => {
                          this.online_ &&
                            ((this.online_ = !1), this.trigger("online", !1));
                        },
                        !1
                      ));
                }
                static getInstance() {
                  return new ue();
                }
                getInitialEvent(e) {
                  return (
                    (0, g.assert)("online" === e, "Unknown event type: " + e),
                    [this.online_]
                  );
                }
                currentlyOnline() {
                  return this.online_;
                }
              }
              const pe = 32,
                ge = 768;
              class fe {
                constructor(e, t) {
                  if (void 0 === t) {
                    this.pieces_ = e.split("/");
                    let t = 0;
                    for (let e = 0; e < this.pieces_.length; e++)
                      0 < this.pieces_[e].length &&
                        ((this.pieces_[t] = this.pieces_[e]), t++);
                    (this.pieces_.length = t), (this.pieceNum_ = 0);
                  } else (this.pieces_ = e), (this.pieceNum_ = t);
                }
                toString() {
                  let t = "";
                  for (let e = this.pieceNum_; e < this.pieces_.length; e++)
                    "" !== this.pieces_[e] && (t += "/" + this.pieces_[e]);
                  return t || "/";
                }
              }
              function me() {
                return new fe("");
              }
              function be(e) {
                return e.pieceNum_ >= e.pieces_.length
                  ? null
                  : e.pieces_[e.pieceNum_];
              }
              function _e(e) {
                return e.pieces_.length - e.pieceNum_;
              }
              function ve(e) {
                let t = e.pieceNum_;
                return t < e.pieces_.length && t++, new fe(e.pieces_, t);
              }
              function ye(e) {
                return e.pieceNum_ < e.pieces_.length
                  ? e.pieces_[e.pieces_.length - 1]
                  : null;
              }
              function we(e, t = 0) {
                return e.pieces_.slice(e.pieceNum_ + t);
              }
              function xe(t) {
                if (t.pieceNum_ >= t.pieces_.length) return null;
                const n = [];
                for (let e = t.pieceNum_; e < t.pieces_.length - 1; e++)
                  n.push(t.pieces_[e]);
                return new fe(n, 0);
              }
              function ke(t, n) {
                const i = [];
                for (let e = t.pieceNum_; e < t.pieces_.length; e++)
                  i.push(t.pieces_[e]);
                if (n instanceof fe)
                  for (let e = n.pieceNum_; e < n.pieces_.length; e++)
                    i.push(n.pieces_[e]);
                else {
                  var r = n.split("/");
                  for (let e = 0; e < r.length; e++)
                    0 < r[e].length && i.push(r[e]);
                }
                return new fe(i, 0);
              }
              function Ce(e) {
                return e.pieceNum_ >= e.pieces_.length;
              }
              function Ee(e, t) {
                var n = be(e),
                  i = be(t);
                if (null === n) return t;
                if (n === i) return Ee(ve(e), ve(t));
                throw new Error(
                  "INTERNAL ERROR: innerPath (" +
                    t +
                    ") is not within outerPath (" +
                    e +
                    ")"
                );
              }
              function Ie(e, t) {
                var n = we(e, 0),
                  i = we(t, 0);
                for (let e = 0; e < n.length && e < i.length; e++) {
                  var r = L(n[e], i[e]);
                  if (0 !== r) return r;
                }
                return n.length === i.length ? 0 : n.length < i.length ? -1 : 1;
              }
              function Te(n, i) {
                if (_e(n) !== _e(i)) return !1;
                for (
                  let e = n.pieceNum_, t = i.pieceNum_;
                  e <= n.pieces_.length;
                  e++, t++
                )
                  if (n.pieces_[e] !== i.pieces_[t]) return !1;
                return !0;
              }
              function Se(e, t) {
                let n = e.pieceNum_,
                  i = t.pieceNum_;
                if (_e(e) > _e(t)) return !1;
                for (; n < e.pieces_.length; ) {
                  if (e.pieces_[n] !== t.pieces_[i]) return !1;
                  ++n, ++i;
                }
                return !0;
              }
              class Pe {
                constructor(e, t) {
                  (this.errorPrefix_ = t),
                    (this.parts_ = we(e, 0)),
                    (this.byteLength_ = Math.max(1, this.parts_.length));
                  for (let e = 0; e < this.parts_.length; e++)
                    this.byteLength_ += (0, g.stringLength)(this.parts_[e]);
                  Ne(this);
                }
              }
              function Ne(e) {
                if (e.byteLength_ > ge)
                  throw new Error(
                    e.errorPrefix_ +
                      "has a key path longer than " +
                      ge +
                      " bytes (" +
                      e.byteLength_ +
                      ")."
                  );
                if (e.parts_.length > pe)
                  throw new Error(
                    e.errorPrefix_ +
                      "path specified exceeds the maximum depth that can be written (" +
                      pe +
                      ") or object contains a cycle " +
                      De(e)
                  );
              }
              function De(e) {
                return 0 === e.parts_.length
                  ? ""
                  : "in property '" + e.parts_.join(".") + "'";
              }
              class Re extends he {
                constructor() {
                  super(["visible"]);
                  let t, e;
                  "undefined" != typeof document &&
                    void 0 !== document.addEventListener &&
                    (void 0 !== document.hidden
                      ? ((e = "visibilitychange"), (t = "hidden"))
                      : void 0 !== document.mozHidden
                      ? ((e = "mozvisibilitychange"), (t = "mozHidden"))
                      : void 0 !== document.msHidden
                      ? ((e = "msvisibilitychange"), (t = "msHidden"))
                      : void 0 !== document.webkitHidden &&
                        ((e = "webkitvisibilitychange"), (t = "webkitHidden"))),
                    (this.visible_ = !0),
                    e &&
                      document.addEventListener(
                        e,
                        () => {
                          var e = !document[t];
                          e !== this.visible_ &&
                            ((this.visible_ = e), this.trigger("visible", e));
                        },
                        !1
                      );
                }
                static getInstance() {
                  return new Re();
                }
                getInitialEvent(e) {
                  return (
                    (0, g.assert)("visible" === e, "Unknown event type: " + e),
                    [this.visible_]
                  );
                }
              }
              class Ae extends de {
                constructor(e, t, n, i, r, o, a, s) {
                  if (
                    (super(),
                    (this.repoInfo_ = e),
                    (this.applicationId_ = t),
                    (this.onDataUpdate_ = n),
                    (this.onConnectStatus_ = i),
                    (this.onServerInfoUpdate_ = r),
                    (this.authTokenProvider_ = o),
                    (this.appCheckTokenProvider_ = a),
                    (this.authOverride_ = s),
                    (this.id = Ae.nextPersistentConnectionId_++),
                    (this.log_ = k("p:" + this.id + ":")),
                    (this.interruptReasons_ = {}),
                    (this.listens = new Map()),
                    (this.outstandingPuts_ = []),
                    (this.outstandingGets_ = []),
                    (this.outstandingPutCount_ = 0),
                    (this.outstandingGetCount_ = 0),
                    (this.onDisconnectRequestQueue_ = []),
                    (this.connected_ = !1),
                    (this.reconnectDelay_ = 1e3),
                    (this.maxReconnectDelay_ = 3e5),
                    (this.securityDebugCallback_ = null),
                    (this.lastSessionId = null),
                    (this.establishConnectionTimer_ = null),
                    (this.visible_ = !1),
                    (this.requestCBHash_ = {}),
                    (this.requestNumber_ = 0),
                    (this.realtime_ = null),
                    (this.authToken_ = null),
                    (this.appCheckToken_ = null),
                    (this.forceTokenRefresh_ = !1),
                    (this.invalidAuthTokenCount_ = 0),
                    (this.invalidAppCheckTokenCount_ = 0),
                    (this.firstConnection_ = !0),
                    (this.lastConnectionAttemptTime_ = null),
                    (this.lastConnectionEstablishedTime_ = null),
                    s && !(0, g.isNodeSdk)())
                  )
                    throw new Error(
                      "Auth override specified in options, but not supported on non Node.js platforms"
                    );
                  Re.getInstance().on("visible", this.onVisible_, this),
                    -1 === e.host.indexOf("fblocal") &&
                      ue.getInstance().on("online", this.onOnline_, this);
                }
                sendRequest(e, t, n) {
                  var i = ++this.requestNumber_,
                    t = { r: i, a: e, b: t };
                  this.log_((0, g.stringify)(t)),
                    (0, g.assert)(
                      this.connected_,
                      "sendRequest call when we're not connected not allowed."
                    ),
                    this.realtime_.sendRequest(t),
                    n && (this.requestCBHash_[i] = n);
                }
                get(e) {
                  this.initConnection_();
                  const n = new g.Deferred();
                  e = { p: e._path.toString(), q: e._queryObject };
                  this.outstandingGets_.push({
                    action: "g",
                    request: e,
                    onComplete: (e) => {
                      var t = e.d;
                      "ok" === e.s ? n.resolve(t) : n.reject(t);
                    },
                  }),
                    this.outstandingGetCount_++;
                  e = this.outstandingGets_.length - 1;
                  return this.connected_ && this.sendGet_(e), n.promise;
                }
                listen(e, t, n, i) {
                  this.initConnection_();
                  var r = e._queryIdentifier,
                    o = e._path.toString();
                  this.log_("Listen called for " + o + " " + r),
                    this.listens.has(o) || this.listens.set(o, new Map()),
                    (0, g.assert)(
                      e._queryParams.isDefault() ||
                        !e._queryParams.loadsAllData(),
                      "listen() called for non-default but complete query"
                    ),
                    (0, g.assert)(
                      !this.listens.get(o).has(r),
                      "listen() called twice for same path/queryId."
                    );
                  n = { onComplete: i, hashFn: t, query: e, tag: n };
                  this.listens.get(o).set(r, n),
                    this.connected_ && this.sendListen_(n);
                }
                sendGet_(t) {
                  const n = this.outstandingGets_[t];
                  this.sendRequest("g", n.request, (e) => {
                    delete this.outstandingGets_[t],
                      this.outstandingGetCount_--,
                      0 === this.outstandingGetCount_ &&
                        (this.outstandingGets_ = []),
                      n.onComplete && n.onComplete(e);
                  });
                }
                sendListen_(i) {
                  const r = i.query,
                    o = r._path.toString(),
                    a = r._queryIdentifier;
                  this.log_("Listen on " + o + " for " + a);
                  const e = { p: o };
                  i.tag && ((e.q = r._queryObject), (e.t = i.tag)),
                    (e.h = i.hashFn()),
                    this.sendRequest("q", e, (e) => {
                      var t = e.d,
                        n = e.s;
                      Ae.warnOnListenWarnings_(t, r),
                        (this.listens.get(o) && this.listens.get(o).get(a)) ===
                          i &&
                          (this.log_("listen response", e),
                          "ok" !== n && this.removeListen_(o, a),
                          i.onComplete && i.onComplete(n, t));
                    });
                }
                static warnOnListenWarnings_(e, t) {
                  if (e && "object" == typeof e && (0, g.contains)(e, "w")) {
                    const n = (0, g.safeGet)(e, "w");
                    Array.isArray(n) &&
                      ~n.indexOf("no_index") &&
                      ((e =
                        '".indexOn": "' +
                        t._queryParams.getIndex().toString() +
                        '"'),
                      (t = t._path.toString()),
                      R(
                        "Using an unspecified index. Your data will be downloaded and " +
                          `filtered on the client. Consider adding ${e} at ` +
                          `${t} to your security rules for better performance.`
                      ));
                  }
                }
                refreshAuthToken(e) {
                  (this.authToken_ = e),
                    this.log_("Auth token refreshed"),
                    this.authToken_
                      ? this.tryAuth()
                      : this.connected_ &&
                        this.sendRequest("unauth", {}, () => {}),
                    this.reduceReconnectDelayIfAdminCredential_(e);
                }
                reduceReconnectDelayIfAdminCredential_(e) {
                  ((e && 40 === e.length) || (0, g.isAdmin)(e)) &&
                    (this.log_(
                      "Admin auth credential detected.  Reducing max reconnect time."
                    ),
                    (this.maxReconnectDelay_ = 3e4));
                }
                refreshAppCheckToken(e) {
                  (this.appCheckToken_ = e),
                    this.log_("App check token refreshed"),
                    this.appCheckToken_
                      ? this.tryAppCheck()
                      : this.connected_ &&
                        this.sendRequest("unappeck", {}, () => {});
                }
                tryAuth() {
                  if (this.connected_ && this.authToken_) {
                    const n = this.authToken_;
                    var e = (0, g.isValidFormat)(n) ? "auth" : "gauth";
                    const t = { cred: n };
                    null === this.authOverride_
                      ? (t.noauth = !0)
                      : "object" == typeof this.authOverride_ &&
                        (t.authvar = this.authOverride_),
                      this.sendRequest(e, t, (e) => {
                        var t = e.s,
                          e = e.d || "error";
                        this.authToken_ === n &&
                          ("ok" === t
                            ? (this.invalidAuthTokenCount_ = 0)
                            : this.onAuthRevoked_(t, e));
                      });
                  }
                }
                tryAppCheck() {
                  this.connected_ &&
                    this.appCheckToken_ &&
                    this.sendRequest(
                      "appcheck",
                      { token: this.appCheckToken_ },
                      (e) => {
                        var t = e.s,
                          e = e.d || "error";
                        "ok" === t
                          ? (this.invalidAppCheckTokenCount_ = 0)
                          : this.onAppCheckRevoked_(t, e);
                      }
                    );
                }
                unlisten(e, t) {
                  var n = e._path.toString(),
                    i = e._queryIdentifier;
                  this.log_("Unlisten called for " + n + " " + i),
                    (0, g.assert)(
                      e._queryParams.isDefault() ||
                        !e._queryParams.loadsAllData(),
                      "unlisten() called for non-default but complete query"
                    ),
                    this.removeListen_(n, i) &&
                      this.connected_ &&
                      this.sendUnlisten_(n, i, e._queryObject, t);
                }
                sendUnlisten_(e, t, n, i) {
                  this.log_("Unlisten on " + e + " for " + t);
                  const r = { p: e };
                  i && ((r.q = n), (r.t = i)), this.sendRequest("n", r);
                }
                onDisconnectPut(e, t, n) {
                  this.initConnection_(),
                    this.connected_
                      ? this.sendOnDisconnect_("o", e, t, n)
                      : this.onDisconnectRequestQueue_.push({
                          pathString: e,
                          action: "o",
                          data: t,
                          onComplete: n,
                        });
                }
                onDisconnectMerge(e, t, n) {
                  this.initConnection_(),
                    this.connected_
                      ? this.sendOnDisconnect_("om", e, t, n)
                      : this.onDisconnectRequestQueue_.push({
                          pathString: e,
                          action: "om",
                          data: t,
                          onComplete: n,
                        });
                }
                onDisconnectCancel(e, t) {
                  this.initConnection_(),
                    this.connected_
                      ? this.sendOnDisconnect_("oc", e, null, t)
                      : this.onDisconnectRequestQueue_.push({
                          pathString: e,
                          action: "oc",
                          data: null,
                          onComplete: t,
                        });
                }
                sendOnDisconnect_(e, t, n, i) {
                  n = { p: t, d: n };
                  this.log_("onDisconnect " + e, n),
                    this.sendRequest(e, n, (e) => {
                      i &&
                        setTimeout(() => {
                          i(e.s, e.d);
                        }, Math.floor(0));
                    });
                }
                put(e, t, n, i) {
                  this.putInternal("p", e, t, n, i);
                }
                merge(e, t, n, i) {
                  this.putInternal("m", e, t, n, i);
                }
                putInternal(e, t, n, i, r) {
                  this.initConnection_();
                  const o = { p: t, d: n };
                  void 0 !== r && (o.h = r),
                    this.outstandingPuts_.push({
                      action: e,
                      request: o,
                      onComplete: i,
                    }),
                    this.outstandingPutCount_++;
                  i = this.outstandingPuts_.length - 1;
                  this.connected_
                    ? this.sendPut_(i)
                    : this.log_("Buffering put: " + t);
                }
                sendPut_(t) {
                  const n = this.outstandingPuts_[t].action;
                  var e = this.outstandingPuts_[t].request;
                  const i = this.outstandingPuts_[t].onComplete;
                  (this.outstandingPuts_[t].queued = this.connected_),
                    this.sendRequest(n, e, (e) => {
                      this.log_(n + " response", e),
                        delete this.outstandingPuts_[t],
                        this.outstandingPutCount_--,
                        0 === this.outstandingPutCount_ &&
                          (this.outstandingPuts_ = []),
                        i && i(e.s, e.d);
                    });
                }
                reportStats(e) {
                  this.connected_ &&
                    (this.log_("reportStats", (e = { c: e })),
                    this.sendRequest("s", e, (e) => {
                      "ok" !== e.s &&
                        ((e = e.d),
                        this.log_("reportStats", "Error sending stats: " + e));
                    }));
                }
                onDataMessage_(e) {
                  if ("r" in e) {
                    this.log_("from server: " + (0, g.stringify)(e));
                    var t = e.r;
                    const n = this.requestCBHash_[t];
                    n && (delete this.requestCBHash_[t], n(e.b));
                  } else {
                    if ("error" in e)
                      throw "A server-side error has occurred: " + e.error;
                    "a" in e && this.onDataPush_(e.a, e.b);
                  }
                }
                onDataPush_(e, t) {
                  this.log_("handleServerMessage", e, t),
                    "d" === e
                      ? this.onDataUpdate_(t.p, t.d, !1, t.t)
                      : "m" === e
                      ? this.onDataUpdate_(t.p, t.d, !0, t.t)
                      : "c" === e
                      ? this.onListenRevoked_(t.p, t.q)
                      : "ac" === e
                      ? this.onAuthRevoked_(t.s, t.d)
                      : "apc" === e
                      ? this.onAppCheckRevoked_(t.s, t.d)
                      : "sd" === e
                      ? this.onSecurityDebugPacket_(t)
                      : C(
                          "Unrecognized action received from server: " +
                            (0, g.stringify)(e) +
                            "\nAre you using the latest client?"
                        );
                }
                onReady_(e, t) {
                  this.log_("connection ready"),
                    (this.connected_ = !0),
                    (this.lastConnectionEstablishedTime_ =
                      new Date().getTime()),
                    this.handleTimestamp_(e),
                    (this.lastSessionId = t),
                    this.firstConnection_ && this.sendConnectStats_(),
                    this.restoreState_(),
                    (this.firstConnection_ = !1),
                    this.onConnectStatus_(!0);
                }
                scheduleConnect_(e) {
                  (0, g.assert)(
                    !this.realtime_,
                    "Scheduling a connect when we're already connected/ing?"
                  ),
                    this.establishConnectionTimer_ &&
                      clearTimeout(this.establishConnectionTimer_),
                    (this.establishConnectionTimer_ = setTimeout(() => {
                      (this.establishConnectionTimer_ = null),
                        this.establishConnection_();
                    }, Math.floor(e)));
                }
                initConnection_() {
                  !this.realtime_ &&
                    this.firstConnection_ &&
                    this.scheduleConnect_(0);
                }
                onVisible_(e) {
                  e &&
                    !this.visible_ &&
                    this.reconnectDelay_ === this.maxReconnectDelay_ &&
                    (this.log_("Window became visible.  Reducing delay."),
                    (this.reconnectDelay_ = 1e3),
                    this.realtime_ || this.scheduleConnect_(0)),
                    (this.visible_ = e);
                }
                onOnline_(e) {
                  e
                    ? (this.log_("Browser went online."),
                      (this.reconnectDelay_ = 1e3),
                      this.realtime_ || this.scheduleConnect_(0))
                    : (this.log_("Browser went offline.  Killing connection."),
                      this.realtime_ && this.realtime_.close());
                }
                onRealtimeDisconnect_() {
                  var e;
                  this.log_("data client disconnected"),
                    (this.connected_ = !1),
                    (this.realtime_ = null),
                    this.cancelSentTransactions_(),
                    (this.requestCBHash_ = {}),
                    this.shouldReconnect_() &&
                      (this.visible_
                        ? this.lastConnectionEstablishedTime_ &&
                          (3e4 <
                            new Date().getTime() -
                              this.lastConnectionEstablishedTime_ &&
                            (this.reconnectDelay_ = 1e3),
                          (this.lastConnectionEstablishedTime_ = null))
                        : (this.log_(
                            "Window isn't visible.  Delaying reconnect."
                          ),
                          (this.reconnectDelay_ = this.maxReconnectDelay_),
                          (this.lastConnectionAttemptTime_ =
                            new Date().getTime())),
                      (e =
                        new Date().getTime() - this.lastConnectionAttemptTime_),
                      (e = Math.max(0, this.reconnectDelay_ - e)),
                      (e = Math.random() * e),
                      this.log_("Trying to reconnect in " + e + "ms"),
                      this.scheduleConnect_(e),
                      (this.reconnectDelay_ = Math.min(
                        this.maxReconnectDelay_,
                        1.3 * this.reconnectDelay_
                      ))),
                    this.onConnectStatus_(!1);
                }
                async establishConnection_() {
                  if (this.shouldReconnect_()) {
                    this.log_("Making a connection attempt"),
                      (this.lastConnectionAttemptTime_ = new Date().getTime()),
                      (this.lastConnectionEstablishedTime_ = null);
                    var e = this.onDataMessage_.bind(this),
                      i = this.onReady_.bind(this);
                    const d = this.onRealtimeDisconnect_.bind(this);
                    var r = this.id + ":" + Ae.nextConnectionId_++,
                      o = this.lastSessionId;
                    let t = !1,
                      n = null;
                    var a = function () {
                      n ? n.close() : ((t = !0), d());
                    };
                    this.realtime_ = {
                      close: a,
                      sendRequest: function (e) {
                        (0, g.assert)(
                          n,
                          "sendRequest call when we're not connected not allowed."
                        ),
                          n.sendRequest(e);
                      },
                    };
                    var s = this.forceTokenRefresh_;
                    this.forceTokenRefresh_ = !1;
                    try {
                      var [l, c] = await Promise.all([
                        this.authTokenProvider_.getToken(s),
                        this.appCheckTokenProvider_.getToken(s),
                      ]);
                      t
                        ? N("getToken() completed but was canceled")
                        : (N("getToken() completed. Creating connection."),
                          (this.authToken_ = l && l.accessToken),
                          (this.appCheckToken_ = c && c.token),
                          (n = new ce(
                            r,
                            this.repoInfo_,
                            this.applicationId_,
                            this.appCheckToken_,
                            this.authToken_,
                            e,
                            i,
                            d,
                            (e) => {
                              R(e + " (" + this.repoInfo_.toString() + ")"),
                                this.interrupt("server_kill");
                            },
                            o
                          )));
                    } catch (e) {
                      this.log_("Failed to get token: " + e),
                        t || (this.repoInfo_.nodeAdmin && R(e), a());
                    }
                  }
                }
                interrupt(e) {
                  N("Interrupting connection for reason: " + e),
                    (this.interruptReasons_[e] = !0),
                    this.realtime_
                      ? this.realtime_.close()
                      : (this.establishConnectionTimer_ &&
                          (clearTimeout(this.establishConnectionTimer_),
                          (this.establishConnectionTimer_ = null)),
                        this.connected_ && this.onRealtimeDisconnect_());
                }
                resume(e) {
                  N("Resuming connection for reason: " + e),
                    delete this.interruptReasons_[e],
                    (0, g.isEmpty)(this.interruptReasons_) &&
                      ((this.reconnectDelay_ = 1e3),
                      this.realtime_ || this.scheduleConnect_(0));
                }
                handleTimestamp_(e) {
                  e -= new Date().getTime();
                  this.onServerInfoUpdate_({ serverTimeOffset: e });
                }
                cancelSentTransactions_() {
                  for (let e = 0; e < this.outstandingPuts_.length; e++) {
                    const t = this.outstandingPuts_[e];
                    t &&
                      "h" in t.request &&
                      t.queued &&
                      (t.onComplete && t.onComplete("disconnect"),
                      delete this.outstandingPuts_[e],
                      this.outstandingPutCount_--);
                  }
                  0 === this.outstandingPutCount_ &&
                    (this.outstandingPuts_ = []);
                }
                onListenRevoked_(e, t) {
                  let n;
                  n = t ? t.map((e) => T(e)).join("$") : "default";
                  const i = this.removeListen_(e, n);
                  i && i.onComplete && i.onComplete("permission_denied");
                }
                removeListen_(e, t) {
                  e = new fe(e).toString();
                  let n;
                  if (this.listens.has(e)) {
                    const i = this.listens.get(e);
                    (n = i.get(t)),
                      i.delete(t),
                      0 === i.size && this.listens.delete(e);
                  } else n = void 0;
                  return n;
                }
                onAuthRevoked_(e, t) {
                  N("Auth token revoked: " + e + "/" + t),
                    (this.authToken_ = null),
                    (this.forceTokenRefresh_ = !0),
                    this.realtime_.close(),
                    ("invalid_token" !== e && "permission_denied" !== e) ||
                      (this.invalidAuthTokenCount_++,
                      3 <= this.invalidAuthTokenCount_ &&
                        ((this.reconnectDelay_ = 3e4),
                        this.authTokenProvider_.notifyForInvalidToken()));
                }
                onAppCheckRevoked_(e, t) {
                  N("App check token revoked: " + e + "/" + t),
                    (this.appCheckToken_ = null),
                    (this.forceTokenRefresh_ = !0),
                    ("invalid_token" !== e && "permission_denied" !== e) ||
                      (this.invalidAppCheckTokenCount_++,
                      3 <= this.invalidAppCheckTokenCount_ &&
                        this.appCheckTokenProvider_.notifyForInvalidToken());
                }
                onSecurityDebugPacket_(e) {
                  this.securityDebugCallback_
                    ? this.securityDebugCallback_(e)
                    : 0 in e;
                }
                restoreState_() {
                  this.tryAuth(), this.tryAppCheck();
                  for (const t of this.listens.values())
                    for (const n of t.values()) this.sendListen_(n);
                  for (let e = 0; e < this.outstandingPuts_.length; e++)
                    this.outstandingPuts_[e] && this.sendPut_(e);
                  for (; this.onDisconnectRequestQueue_.length; ) {
                    var e = this.onDisconnectRequestQueue_.shift();
                    this.sendOnDisconnect_(
                      e.action,
                      e.pathString,
                      e.data,
                      e.onComplete
                    );
                  }
                  for (let e = 0; e < this.outstandingGets_.length; e++)
                    this.outstandingGets_[e] && this.sendGet_(e);
                }
                sendConnectStats_() {
                  const e = {};
                  let t = "js";
                  (0, g.isNodeSdk)() &&
                    (t = this.repoInfo_.nodeAdmin ? "admin_node" : "node"),
                    (e["sdk." + t + "." + o.replace(/\./g, "-")] = 1),
                    (0, g.isMobileCordova)()
                      ? (e["framework.cordova"] = 1)
                      : (0, g.isReactNative)() &&
                        (e["framework.reactnative"] = 1),
                    this.reportStats(e);
                }
                shouldReconnect_() {
                  var e = ue.getInstance().currentlyOnline();
                  return (0, g.isEmpty)(this.interruptReasons_) && e;
                }
              }
              (Ae.nextPersistentConnectionId_ = 0), (Ae.nextConnectionId_ = 0);
              class Oe {
                constructor(e, t) {
                  (this.name = e), (this.node = t);
                }
                static Wrap(e, t) {
                  return new Oe(e, t);
                }
              }
              class Me {
                getCompare() {
                  return this.compare.bind(this);
                }
                indexedValueChanged(e, t) {
                  (e = new Oe(O, e)), (t = new Oe(O, t));
                  return 0 !== this.compare(e, t);
                }
                minPost() {
                  return Oe.MIN;
                }
              }
              let Le;
              class ze extends Me {
                static get __EMPTY_NODE() {
                  return Le;
                }
                static set __EMPTY_NODE(e) {
                  Le = e;
                }
                compare(e, t) {
                  return L(e.name, t.name);
                }
                isDefinedOn(e) {
                  throw (0, g.assertionError)(
                    "KeyIndex.isDefinedOn not expected to be called."
                  );
                }
                indexedValueChanged(e, t) {
                  return !1;
                }
                minPost() {
                  return Oe.MIN;
                }
                maxPost() {
                  return new Oe(M, Le);
                }
                makePost(e, t) {
                  return (
                    (0, g.assert)(
                      "string" == typeof e,
                      "KeyIndex indexValue must always be a string."
                    ),
                    new Oe(e, Le)
                  );
                }
                toString() {
                  return ".key";
                }
              }
              const Fe = new ze();
              class je {
                constructor(e, t, n, i, r = null) {
                  (this.isReverse_ = i),
                    (this.resultGenerator_ = r),
                    (this.nodeStack_ = []);
                  let o = 1;
                  for (; !e.isEmpty(); )
                    if (((o = t ? n(e.key, t) : 1), i && (o *= -1), o < 0))
                      e = this.isReverse_ ? e.left : e.right;
                    else {
                      if (0 === o) {
                        this.nodeStack_.push(e);
                        break;
                      }
                      this.nodeStack_.push(e),
                        (e = this.isReverse_ ? e.right : e.left);
                    }
                }
                getNext() {
                  if (0 === this.nodeStack_.length) return null;
                  let e = this.nodeStack_.pop(),
                    t;
                  if (
                    ((t = this.resultGenerator_
                      ? this.resultGenerator_(e.key, e.value)
                      : { key: e.key, value: e.value }),
                    this.isReverse_)
                  )
                    for (e = e.left; !e.isEmpty(); )
                      this.nodeStack_.push(e), (e = e.right);
                  else
                    for (e = e.right; !e.isEmpty(); )
                      this.nodeStack_.push(e), (e = e.left);
                  return t;
                }
                hasNext() {
                  return 0 < this.nodeStack_.length;
                }
                peek() {
                  if (0 === this.nodeStack_.length) return null;
                  var e = this.nodeStack_[this.nodeStack_.length - 1];
                  return this.resultGenerator_
                    ? this.resultGenerator_(e.key, e.value)
                    : { key: e.key, value: e.value };
                }
              }
              class qe {
                constructor(e, t, n, i, r) {
                  (this.key = e),
                    (this.value = t),
                    (this.color = null != n ? n : qe.RED),
                    (this.left = null != i ? i : Be.EMPTY_NODE),
                    (this.right = null != r ? r : Be.EMPTY_NODE);
                }
                copy(e, t, n, i, r) {
                  return new qe(
                    null != e ? e : this.key,
                    null != t ? t : this.value,
                    null != n ? n : this.color,
                    null != i ? i : this.left,
                    null != r ? r : this.right
                  );
                }
                count() {
                  return this.left.count() + 1 + this.right.count();
                }
                isEmpty() {
                  return !1;
                }
                inorderTraversal(e) {
                  return (
                    this.left.inorderTraversal(e) ||
                    !!e(this.key, this.value) ||
                    this.right.inorderTraversal(e)
                  );
                }
                reverseTraversal(e) {
                  return (
                    this.right.reverseTraversal(e) ||
                    e(this.key, this.value) ||
                    this.left.reverseTraversal(e)
                  );
                }
                min_() {
                  return this.left.isEmpty() ? this : this.left.min_();
                }
                minKey() {
                  return this.min_().key;
                }
                maxKey() {
                  return this.right.isEmpty() ? this.key : this.right.maxKey();
                }
                insert(e, t, n) {
                  let i = this;
                  var r = n(e, i.key);
                  return (
                    (i =
                      r < 0
                        ? i.copy(null, null, null, i.left.insert(e, t, n), null)
                        : 0 === r
                        ? i.copy(null, t, null, null, null)
                        : i.copy(
                            null,
                            null,
                            null,
                            null,
                            i.right.insert(e, t, n)
                          )),
                    i.fixUp_()
                  );
                }
                removeMin_() {
                  if (this.left.isEmpty()) return Be.EMPTY_NODE;
                  let e = this;
                  return (
                    e.left.isRed_() ||
                      e.left.left.isRed_() ||
                      (e = e.moveRedLeft_()),
                    (e = e.copy(null, null, null, e.left.removeMin_(), null)),
                    e.fixUp_()
                  );
                }
                remove(e, t) {
                  let n, i;
                  if (((n = this), t(e, n.key) < 0))
                    n.left.isEmpty() ||
                      n.left.isRed_() ||
                      n.left.left.isRed_() ||
                      (n = n.moveRedLeft_()),
                      (n = n.copy(null, null, null, n.left.remove(e, t), null));
                  else {
                    if (
                      (n.left.isRed_() && (n = n.rotateRight_()),
                      n.right.isEmpty() ||
                        n.right.isRed_() ||
                        n.right.left.isRed_() ||
                        (n = n.moveRedRight_()),
                      0 === t(e, n.key))
                    ) {
                      if (n.right.isEmpty()) return Be.EMPTY_NODE;
                      (i = n.right.min_()),
                        (n = n.copy(
                          i.key,
                          i.value,
                          null,
                          null,
                          n.right.removeMin_()
                        ));
                    }
                    n = n.copy(null, null, null, null, n.right.remove(e, t));
                  }
                  return n.fixUp_();
                }
                isRed_() {
                  return this.color;
                }
                fixUp_() {
                  let e = this;
                  return (
                    e.right.isRed_() &&
                      !e.left.isRed_() &&
                      (e = e.rotateLeft_()),
                    e.left.isRed_() &&
                      e.left.left.isRed_() &&
                      (e = e.rotateRight_()),
                    e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
                    e
                  );
                }
                moveRedLeft_() {
                  let e = this.colorFlip_();
                  return (
                    e.right.left.isRed_() &&
                      ((e = e.copy(
                        null,
                        null,
                        null,
                        null,
                        e.right.rotateRight_()
                      )),
                      (e = e.rotateLeft_()),
                      (e = e.colorFlip_())),
                    e
                  );
                }
                moveRedRight_() {
                  let e = this.colorFlip_();
                  return (
                    e.left.left.isRed_() &&
                      ((e = e.rotateRight_()), (e = e.colorFlip_())),
                    e
                  );
                }
                rotateLeft_() {
                  var e = this.copy(null, null, qe.RED, null, this.right.left);
                  return this.right.copy(null, null, this.color, e, null);
                }
                rotateRight_() {
                  var e = this.copy(null, null, qe.RED, this.left.right, null);
                  return this.left.copy(null, null, this.color, null, e);
                }
                colorFlip_() {
                  var e = this.left.copy(
                      null,
                      null,
                      !this.left.color,
                      null,
                      null
                    ),
                    t = this.right.copy(
                      null,
                      null,
                      !this.right.color,
                      null,
                      null
                    );
                  return this.copy(null, null, !this.color, e, t);
                }
                checkMaxDepth_() {
                  var e = this.check_();
                  return Math.pow(2, e) <= this.count() + 1;
                }
                check_() {
                  if (this.isRed_() && this.left.isRed_())
                    throw new Error(
                      "Red node has red child(" +
                        this.key +
                        "," +
                        this.value +
                        ")"
                    );
                  if (this.right.isRed_())
                    throw new Error(
                      "Right child of (" +
                        this.key +
                        "," +
                        this.value +
                        ") is red"
                    );
                  var e = this.left.check_();
                  if (e !== this.right.check_())
                    throw new Error("Black depths differ");
                  return e + (this.isRed_() ? 0 : 1);
                }
              }
              (qe.RED = !0), (qe.BLACK = !1);
              class Be {
                constructor(e, t = Be.EMPTY_NODE) {
                  (this.comparator_ = e), (this.root_ = t);
                }
                insert(e, t) {
                  return new Be(
                    this.comparator_,
                    this.root_
                      .insert(e, t, this.comparator_)
                      .copy(null, null, qe.BLACK, null, null)
                  );
                }
                remove(e) {
                  return new Be(
                    this.comparator_,
                    this.root_
                      .remove(e, this.comparator_)
                      .copy(null, null, qe.BLACK, null, null)
                  );
                }
                get(e) {
                  var t;
                  let n = this.root_;
                  for (; !n.isEmpty(); ) {
                    if (0 === (t = this.comparator_(e, n.key))) return n.value;
                    t < 0 ? (n = n.left) : 0 < t && (n = n.right);
                  }
                  return null;
                }
                getPredecessorKey(e) {
                  let t,
                    n = this.root_,
                    i = null;
                  for (; !n.isEmpty(); ) {
                    if (0 === (t = this.comparator_(e, n.key))) {
                      if (n.left.isEmpty()) return i ? i.key : null;
                      for (n = n.left; !n.right.isEmpty(); ) n = n.right;
                      return n.key;
                    }
                    t < 0 ? (n = n.left) : 0 < t && ((i = n), (n = n.right));
                  }
                  throw new Error(
                    "Attempted to find predecessor key for a nonexistent key.  What gives?"
                  );
                }
                isEmpty() {
                  return this.root_.isEmpty();
                }
                count() {
                  return this.root_.count();
                }
                minKey() {
                  return this.root_.minKey();
                }
                maxKey() {
                  return this.root_.maxKey();
                }
                inorderTraversal(e) {
                  return this.root_.inorderTraversal(e);
                }
                reverseTraversal(e) {
                  return this.root_.reverseTraversal(e);
                }
                getIterator(e) {
                  return new je(this.root_, null, this.comparator_, !1, e);
                }
                getIteratorFrom(e, t) {
                  return new je(this.root_, e, this.comparator_, !1, t);
                }
                getReverseIteratorFrom(e, t) {
                  return new je(this.root_, e, this.comparator_, !0, t);
                }
                getReverseIterator(e) {
                  return new je(this.root_, null, this.comparator_, !0, e);
                }
              }
              function Ue(e, t) {
                return L(e.name, t.name);
              }
              function We(e, t) {
                return L(e, t);
              }
              Be.EMPTY_NODE = new (class {
                copy(e, t, n, i, r) {
                  return this;
                }
                insert(e, t, n) {
                  return new qe(e, t, null);
                }
                remove(e, t) {
                  return this;
                }
                count() {
                  return 0;
                }
                isEmpty() {
                  return !0;
                }
                inorderTraversal(e) {
                  return !1;
                }
                reverseTraversal(e) {
                  return !1;
                }
                minKey() {
                  return null;
                }
                maxKey() {
                  return null;
                }
                check_() {
                  return 0;
                }
                isRed_() {
                  return !1;
                }
              })();
              let He;
              function Ve(e) {
                return "number" == typeof e ? "number:" + F(e) : "string:" + e;
              }
              function $e(e) {
                var t;
                e.isLeafNode()
                  ? ((t = e.val()),
                    (0, g.assert)(
                      "string" == typeof t ||
                        "number" == typeof t ||
                        ("object" == typeof t && (0, g.contains)(t, ".sv")),
                      "Priority must be a string or number."
                    ))
                  : (0, g.assert)(
                      e === He || e.isEmpty(),
                      "priority of unexpected type."
                    ),
                  (0, g.assert)(
                    e === He || e.getPriority().isEmpty(),
                    "Priority nodes can't have a priority of their own."
                  );
              }
              let Ye;
              class Ge {
                constructor(e, t = Ge.__childrenNodeConstructor.EMPTY_NODE) {
                  (this.value_ = e),
                    (this.priorityNode_ = t),
                    ((this.lazyHash_ = null), g.assert)(
                      void 0 !== this.value_ && null !== this.value_,
                      "LeafNode shouldn't be created with null/undefined value."
                    ),
                    $e(this.priorityNode_);
                }
                static set __childrenNodeConstructor(e) {
                  Ye = e;
                }
                static get __childrenNodeConstructor() {
                  return Ye;
                }
                isLeafNode() {
                  return !0;
                }
                getPriority() {
                  return this.priorityNode_;
                }
                updatePriority(e) {
                  return new Ge(this.value_, e);
                }
                getImmediateChild(e) {
                  return ".priority" === e
                    ? this.priorityNode_
                    : Ge.__childrenNodeConstructor.EMPTY_NODE;
                }
                getChild(e) {
                  return Ce(e)
                    ? this
                    : ".priority" === be(e)
                    ? this.priorityNode_
                    : Ge.__childrenNodeConstructor.EMPTY_NODE;
                }
                hasChild() {
                  return !1;
                }
                getPredecessorChildName(e, t) {
                  return null;
                }
                updateImmediateChild(e, t) {
                  return ".priority" === e
                    ? this.updatePriority(t)
                    : t.isEmpty() && ".priority" !== e
                    ? this
                    : Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                        e,
                        t
                      ).updatePriority(this.priorityNode_);
                }
                updateChild(e, t) {
                  var n = be(e);
                  return null === n
                    ? t
                    : t.isEmpty() && ".priority" !== n
                    ? this
                    : ((0, g.assert)(
                        ".priority" !== n || 1 === _e(e),
                        ".priority must be the last token in a path"
                      ),
                      this.updateImmediateChild(
                        n,
                        Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(
                          ve(e),
                          t
                        )
                      ));
                }
                isEmpty() {
                  return !1;
                }
                numChildren() {
                  return 0;
                }
                forEachChild(e, t) {
                  return !1;
                }
                val(e) {
                  return e && !this.getPriority().isEmpty()
                    ? {
                        ".value": this.getValue(),
                        ".priority": this.getPriority().val(),
                      }
                    : this.getValue();
                }
                hash() {
                  if (null === this.lazyHash_) {
                    let e = "";
                    this.priorityNode_.isEmpty() ||
                      (e += "priority:" + Ve(this.priorityNode_.val()) + ":");
                    var t = typeof this.value_;
                    (e += t + ":"),
                      (e += "number" == t ? F(this.value_) : this.value_),
                      (this.lazyHash_ = f(e));
                  }
                  return this.lazyHash_;
                }
                getValue() {
                  return this.value_;
                }
                compareTo(e) {
                  return e === Ge.__childrenNodeConstructor.EMPTY_NODE
                    ? 1
                    : e instanceof Ge.__childrenNodeConstructor
                    ? -1
                    : ((0, g.assert)(e.isLeafNode(), "Unknown node type"),
                      this.compareToLeafNode_(e));
                }
                compareToLeafNode_(e) {
                  var t = typeof e.value_,
                    n = typeof this.value_,
                    i = Ge.VALUE_TYPE_ORDER.indexOf(t),
                    r = Ge.VALUE_TYPE_ORDER.indexOf(n);
                  return (
                    (0, g.assert)(0 <= i, "Unknown leaf type: " + t),
                    (0, g.assert)(0 <= r, "Unknown leaf type: " + n),
                    i === r
                      ? "object" == n
                        ? 0
                        : this.value_ < e.value_
                        ? -1
                        : this.value_ === e.value_
                        ? 0
                        : 1
                      : r - i
                  );
                }
                withIndex() {
                  return this;
                }
                isIndexed() {
                  return !0;
                }
                equals(e) {
                  return (
                    e === this ||
                    (!!e.isLeafNode() &&
                      this.value_ === e.value_ &&
                      this.priorityNode_.equals(e.priorityNode_))
                  );
                }
              }
              Ge.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
              let Qe, Ke;
              const Xe = new (class extends Me {
                  compare(e, t) {
                    const n = e.node.getPriority();
                    var i = t.node.getPriority(),
                      i = n.compareTo(i);
                    return 0 === i ? L(e.name, t.name) : i;
                  }
                  isDefinedOn(e) {
                    return !e.getPriority().isEmpty();
                  }
                  indexedValueChanged(e, t) {
                    return !e.getPriority().equals(t.getPriority());
                  }
                  minPost() {
                    return Oe.MIN;
                  }
                  maxPost() {
                    return new Oe(M, new Ge("[PRIORITY-POST]", Ke));
                  }
                  makePost(e, t) {
                    e = Qe(e);
                    return new Oe(t, new Ge("[PRIORITY-POST]", e));
                  }
                  toString() {
                    return ".priority";
                  }
                })(),
                Je = Math.log(2);
              class Ze {
                constructor(e) {
                  var t;
                  (this.count = ((t = e + 1), parseInt(Math.log(t) / Je, 10))),
                    (this.current_ = this.count - 1);
                  var n,
                    i = ((n = this.count), parseInt(Array(n + 1).join("1"), 2));
                  this.bits_ = (e + 1) & i;
                }
                nextBitIsOne() {
                  var e = !(this.bits_ & (1 << this.current_));
                  return this.current_--, e;
                }
              }
              function et(l, e, c, t) {
                l.sort(e);
                const d = function (e, t) {
                  var n = t - e;
                  let i, r;
                  if (0 == n) return null;
                  if (1 == n)
                    return (
                      (i = l[e]),
                      (r = c ? c(i) : i),
                      new qe(r, i.node, qe.BLACK, null, null)
                    );
                  (n = parseInt(n / 2, 10) + e),
                    (e = d(e, n)),
                    (t = d(n + 1, t));
                  return (
                    (i = l[n]),
                    (r = c ? c(i) : i),
                    new qe(r, i.node, qe.BLACK, e, t)
                  );
                };
                var n = (function (t) {
                  let r = null,
                    o = null,
                    a = l.length;
                  function n(e, t) {
                    var n = a - e,
                      i = a;
                    (a -= e),
                      (e = d(1 + n, i)),
                      (i = l[n]),
                      (n = c ? c(i) : i),
                      (function (e) {
                        if (r) {
                          r.left = e;
                          r = e;
                        } else {
                          o = e;
                          r = e;
                        }
                      })(new qe(n, i.node, t, null, e));
                  }
                  for (let e = 0; e < t.count; ++e) {
                    var i = t.nextBitIsOne(),
                      s = Math.pow(2, t.count - (e + 1));
                    i ? n(s, qe.BLACK) : (n(s, qe.BLACK), n(s, qe.RED));
                  }
                  return o;
                })(new Ze(l.length));
                return new Be(t || e, n);
              }
              let tt;
              const nt = {};
              class it {
                constructor(e, t) {
                  (this.indexes_ = e), (this.indexSet_ = t);
                }
                static get Default() {
                  return (
                    (0, g.assert)(
                      (nt, Xe),
                      "ChildrenNode.ts has not been loaded"
                    ),
                    (tt =
                      tt || new it({ ".priority": nt }, { ".priority": Xe })),
                    tt
                  );
                }
                get(e) {
                  var t = (0, g.safeGet)(this.indexes_, e);
                  if (!t) throw new Error("No index defined for " + e);
                  return t instanceof Be ? t : null;
                }
                hasIndex(e) {
                  return (0, g.contains)(this.indexSet_, e.toString());
                }
                addIndex(e, t) {
                  (0, g.assert)(
                    e !== Fe,
                    "KeyIndex always exists and isn't meant to be added to the IndexMap."
                  );
                  const n = [];
                  let i = !1;
                  const r = t.getIterator(Oe.Wrap);
                  let o = r.getNext();
                  for (; o; )
                    (i = i || e.isDefinedOn(o.node)),
                      n.push(o),
                      (o = r.getNext());
                  let a;
                  a = i ? et(n, e.getCompare()) : nt;
                  t = e.toString();
                  const s = Object.assign({}, this.indexSet_);
                  s[t] = e;
                  const l = Object.assign({}, this.indexes_);
                  return (l[t] = a), new it(l, s);
                }
                addToIndexes(a, s) {
                  var e = (0, g.map)(this.indexes_, (t, n) => {
                    const i = (0, g.safeGet)(this.indexSet_, n);
                    if (
                      ((0, g.assert)(
                        i,
                        "Missing index implementation for " + n
                      ),
                      t === nt)
                    ) {
                      if (i.isDefinedOn(a.node)) {
                        const r = [],
                          o = s.getIterator(Oe.Wrap);
                        let e = o.getNext();
                        for (; e; )
                          e.name !== a.name && r.push(e), (e = o.getNext());
                        return r.push(a), et(r, i.getCompare());
                      }
                      return nt;
                    }
                    {
                      n = s.get(a.name);
                      let e = t;
                      return (
                        n && (e = e.remove(new Oe(a.name, n))),
                        e.insert(a, a.node)
                      );
                    }
                  });
                  return new it(e, this.indexSet_);
                }
                removeFromIndexes(n, i) {
                  var e = (0, g.map)(this.indexes_, (e) => {
                    if (e === nt) return e;
                    var t = i.get(n.name);
                    return t ? e.remove(new Oe(n.name, t)) : e;
                  });
                  return new it(e, this.indexSet_);
                }
              }
              let rt;
              class ot {
                constructor(e, t, n) {
                  (this.children_ = e),
                    (this.priorityNode_ = t),
                    (this.indexMap_ = n),
                    (this.lazyHash_ = null),
                    this.priorityNode_ && $e(this.priorityNode_),
                    this.children_.isEmpty() &&
                      (0, g.assert)(
                        !this.priorityNode_ || this.priorityNode_.isEmpty(),
                        "An empty node cannot have a priority"
                      );
                }
                static get EMPTY_NODE() {
                  return (rt = rt || new ot(new Be(We), null, it.Default));
                }
                isLeafNode() {
                  return !1;
                }
                getPriority() {
                  return this.priorityNode_ || rt;
                }
                updatePriority(e) {
                  return this.children_.isEmpty()
                    ? this
                    : new ot(this.children_, e, this.indexMap_);
                }
                getImmediateChild(e) {
                  if (".priority" === e) return this.getPriority();
                  e = this.children_.get(e);
                  return null === e ? rt : e;
                }
                getChild(e) {
                  var t = be(e);
                  return null === t
                    ? this
                    : this.getImmediateChild(t).getChild(ve(e));
                }
                hasChild(e) {
                  return null !== this.children_.get(e);
                }
                updateImmediateChild(n, i) {
                  if (
                    ((0, g.assert)(
                      i,
                      "We should always be passing snapshot nodes"
                    ),
                    ".priority" === n)
                  )
                    return this.updatePriority(i);
                  {
                    var r = new Oe(n, i);
                    let e, t;
                    t = i.isEmpty()
                      ? ((e = this.children_.remove(n)),
                        this.indexMap_.removeFromIndexes(r, this.children_))
                      : ((e = this.children_.insert(n, i)),
                        this.indexMap_.addToIndexes(r, this.children_));
                    r = e.isEmpty() ? rt : this.priorityNode_;
                    return new ot(e, r, t);
                  }
                }
                updateChild(e, t) {
                  var n = be(e);
                  if (null === n) return t;
                  (0, g.assert)(
                    ".priority" !== be(e) || 1 === _e(e),
                    ".priority must be the last token in a path"
                  );
                  t = this.getImmediateChild(n).updateChild(ve(e), t);
                  return this.updateImmediateChild(n, t);
                }
                isEmpty() {
                  return this.children_.isEmpty();
                }
                numChildren() {
                  return this.children_.count();
                }
                val(n) {
                  if (this.isEmpty()) return null;
                  const i = {};
                  let r = 0,
                    o = 0,
                    a = !0;
                  if (
                    (this.forEachChild(Xe, (e, t) => {
                      (i[e] = t.val(n)),
                        r++,
                        a && ot.INTEGER_REGEXP_.test(e)
                          ? (o = Math.max(o, Number(e)))
                          : (a = !1);
                    }),
                    !n && a && o < 2 * r)
                  ) {
                    const e = [];
                    for (const t in i) e[t] = i[t];
                    return e;
                  }
                  return (
                    n &&
                      !this.getPriority().isEmpty() &&
                      (i[".priority"] = this.getPriority().val()),
                    i
                  );
                }
                hash() {
                  if (null === this.lazyHash_) {
                    let n = "";
                    this.getPriority().isEmpty() ||
                      (n += "priority:" + Ve(this.getPriority().val()) + ":"),
                      this.forEachChild(Xe, (e, t) => {
                        t = t.hash();
                        "" !== t && (n += ":" + e + ":" + t);
                      }),
                      (this.lazyHash_ = "" === n ? "" : f(n));
                  }
                  return this.lazyHash_;
                }
                getPredecessorChildName(e, t, n) {
                  const i = this.resolveIndex_(n);
                  if (i) {
                    t = i.getPredecessorKey(new Oe(e, t));
                    return t ? t.name : null;
                  }
                  return this.children_.getPredecessorKey(e);
                }
                getFirstChildName(e) {
                  const t = this.resolveIndex_(e);
                  if (t) {
                    e = t.minKey();
                    return e && e.name;
                  }
                  return this.children_.minKey();
                }
                getFirstChild(e) {
                  e = this.getFirstChildName(e);
                  return e ? new Oe(e, this.children_.get(e)) : null;
                }
                getLastChildName(e) {
                  const t = this.resolveIndex_(e);
                  if (t) {
                    e = t.maxKey();
                    return e && e.name;
                  }
                  return this.children_.maxKey();
                }
                getLastChild(e) {
                  e = this.getLastChildName(e);
                  return e ? new Oe(e, this.children_.get(e)) : null;
                }
                forEachChild(e, t) {
                  const n = this.resolveIndex_(e);
                  return n
                    ? n.inorderTraversal((e) => t(e.name, e.node))
                    : this.children_.inorderTraversal(t);
                }
                getIterator(e) {
                  return this.getIteratorFrom(e.minPost(), e);
                }
                getIteratorFrom(t, n) {
                  const e = this.resolveIndex_(n);
                  if (e) return e.getIteratorFrom(t, (e) => e);
                  {
                    const i = this.children_.getIteratorFrom(t.name, Oe.Wrap);
                    let e = i.peek();
                    for (; null != e && n.compare(e, t) < 0; )
                      i.getNext(), (e = i.peek());
                    return i;
                  }
                }
                getReverseIterator(e) {
                  return this.getReverseIteratorFrom(e.maxPost(), e);
                }
                getReverseIteratorFrom(t, n) {
                  const e = this.resolveIndex_(n);
                  if (e) return e.getReverseIteratorFrom(t, (e) => e);
                  {
                    const i = this.children_.getReverseIteratorFrom(
                      t.name,
                      Oe.Wrap
                    );
                    let e = i.peek();
                    for (; null != e && 0 < n.compare(e, t); )
                      i.getNext(), (e = i.peek());
                    return i;
                  }
                }
                compareTo(e) {
                  return this.isEmpty()
                    ? e.isEmpty()
                      ? 0
                      : -1
                    : e.isLeafNode() || e.isEmpty()
                    ? 1
                    : e === st
                    ? -1
                    : 0;
                }
                withIndex(e) {
                  if (e === Fe || this.indexMap_.hasIndex(e)) return this;
                  e = this.indexMap_.addIndex(e, this.children_);
                  return new ot(this.children_, this.priorityNode_, e);
                }
                isIndexed(e) {
                  return e === Fe || this.indexMap_.hasIndex(e);
                }
                equals(e) {
                  if (e === this) return !0;
                  if (e.isLeafNode()) return !1;
                  {
                    const n = e;
                    if (this.getPriority().equals(n.getPriority())) {
                      if (this.children_.count() !== n.children_.count())
                        return !1;
                      {
                        const i = this.getIterator(Xe),
                          r = n.getIterator(Xe);
                        let e = i.getNext(),
                          t = r.getNext();
                        for (; e && t; ) {
                          if (e.name !== t.name || !e.node.equals(t.node))
                            return !1;
                          (e = i.getNext()), (t = r.getNext());
                        }
                        return null === e && null === t;
                      }
                    }
                    return !1;
                  }
                }
                resolveIndex_(e) {
                  return e === Fe ? null : this.indexMap_.get(e.toString());
                }
              }
              ot.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
              class at extends ot {
                constructor() {
                  super(new Be(We), ot.EMPTY_NODE, it.Default);
                }
                compareTo(e) {
                  return e === this ? 0 : 1;
                }
                equals(e) {
                  return e === this;
                }
                getPriority() {
                  return this;
                }
                getImmediateChild(e) {
                  return ot.EMPTY_NODE;
                }
                isEmpty() {
                  return !1;
                }
              }
              const st = new at();
              Object.defineProperties(Oe, {
                MIN: { value: new Oe(O, ot.EMPTY_NODE) },
                MAX: { value: new Oe(M, st) },
              }),
                (ze.__EMPTY_NODE = ot.EMPTY_NODE),
                (Ge.__childrenNodeConstructor = ot),
                (t = st),
                (He = t),
                (s = st),
                (Ke = s);
              const lt = !0;
              function ct(r, e = null) {
                if (null === r) return ot.EMPTY_NODE;
                if (
                  ("object" == typeof r &&
                    ".priority" in r &&
                    (e = r[".priority"]),
                  (0, g.assert)(
                    null === e ||
                      "string" == typeof e ||
                      "number" == typeof e ||
                      ("object" == typeof e && ".sv" in e),
                    "Invalid priority type found: " + typeof e
                  ),
                  "object" !=
                    typeof (r =
                      "object" == typeof r &&
                      ".value" in r &&
                      null !== r[".value"]
                        ? r[".value"]
                        : r) || ".sv" in r)
                ) {
                  var t = r;
                  return new Ge(t, ct(e));
                }
                if (r instanceof Array || !lt) {
                  let i = ot.EMPTY_NODE;
                  return (
                    z(r, (e, t) => {
                      if ((0, g.contains)(r, e) && "." !== e.substring(0, 1)) {
                        const n = ct(t);
                        (!n.isLeafNode() && n.isEmpty()) ||
                          (i = i.updateImmediateChild(e, n));
                      }
                    }),
                    i.updatePriority(ct(e))
                  );
                }
                {
                  const o = [];
                  let i = !1;
                  if (
                    (z(r, (e, t) => {
                      if ("." !== e.substring(0, 1)) {
                        const n = ct(t);
                        n.isEmpty() ||
                          ((i = i || !n.getPriority().isEmpty()),
                          o.push(new Oe(e, n)));
                      }
                    }),
                    0 === o.length)
                  )
                    return ot.EMPTY_NODE;
                  var n = et(o, Ue, (e) => e.name, We);
                  if (i) {
                    t = et(o, Xe.getCompare());
                    return new ot(
                      n,
                      ct(e),
                      new it({ ".priority": t }, { ".priority": Xe })
                    );
                  }
                  return new ot(n, ct(e), it.Default);
                }
              }
              Qe = ct;
              class dt extends Me {
                constructor(e) {
                  super(),
                    (this.indexPath_ = e),
                    (0, g.assert)(
                      !Ce(e) && ".priority" !== be(e),
                      "Can't create PathIndex with empty path or .priority key"
                    );
                }
                extractChild(e) {
                  return e.getChild(this.indexPath_);
                }
                isDefinedOn(e) {
                  return !e.getChild(this.indexPath_).isEmpty();
                }
                compare(e, t) {
                  const n = this.extractChild(e.node);
                  var i = this.extractChild(t.node),
                    i = n.compareTo(i);
                  return 0 === i ? L(e.name, t.name) : i;
                }
                makePost(e, t) {
                  (e = ct(e)),
                    (e = ot.EMPTY_NODE.updateChild(this.indexPath_, e));
                  return new Oe(t, e);
                }
                maxPost() {
                  var e = ot.EMPTY_NODE.updateChild(this.indexPath_, st);
                  return new Oe(M, e);
                }
                toString() {
                  return we(this.indexPath_, 0).join("/");
                }
              }
              const ht = new (class extends Me {
                compare(e, t) {
                  var n = e.node.compareTo(t.node);
                  return 0 === n ? L(e.name, t.name) : n;
                }
                isDefinedOn(e) {
                  return !0;
                }
                indexedValueChanged(e, t) {
                  return !e.equals(t);
                }
                minPost() {
                  return Oe.MIN;
                }
                maxPost() {
                  return Oe.MAX;
                }
                makePost(e, t) {
                  e = ct(e);
                  return new Oe(t, e);
                }
                toString() {
                  return ".value";
                }
              })();
              function ut(e) {
                return { type: "value", snapshotNode: e };
              }
              function pt(e, t) {
                return { type: "child_added", snapshotNode: t, childName: e };
              }
              function gt(e, t) {
                return { type: "child_removed", snapshotNode: t, childName: e };
              }
              function ft(e, t, n) {
                return {
                  type: "child_changed",
                  snapshotNode: t,
                  childName: e,
                  oldSnap: n,
                };
              }
              class mt {
                constructor(e) {
                  this.index_ = e;
                }
                updateChild(e, t, n, i, r, o) {
                  (0, g.assert)(
                    e.isIndexed(this.index_),
                    "A node must be indexed if only a child is updated"
                  );
                  const a = e.getImmediateChild(t);
                  return a.getChild(i).equals(n.getChild(i)) &&
                    a.isEmpty() === n.isEmpty()
                    ? e
                    : (null != o &&
                        (n.isEmpty()
                          ? e.hasChild(t)
                            ? o.trackChildChange(gt(t, a))
                            : (0, g.assert)(
                                e.isLeafNode(),
                                "A child remove without an old child only makes sense on a leaf node"
                              )
                          : a.isEmpty()
                          ? o.trackChildChange(pt(t, n))
                          : o.trackChildChange(ft(t, n, a))),
                      e.isLeafNode() && n.isEmpty()
                        ? e
                        : e.updateImmediateChild(t, n).withIndex(this.index_));
                }
                updateFullNode(i, n, r) {
                  return (
                    null != r &&
                      (i.isLeafNode() ||
                        i.forEachChild(Xe, (e, t) => {
                          n.hasChild(e) || r.trackChildChange(gt(e, t));
                        }),
                      n.isLeafNode() ||
                        n.forEachChild(Xe, (e, t) => {
                          if (i.hasChild(e)) {
                            const n = i.getImmediateChild(e);
                            n.equals(t) || r.trackChildChange(ft(e, t, n));
                          } else r.trackChildChange(pt(e, t));
                        })),
                    n.withIndex(this.index_)
                  );
                }
                updatePriority(e, t) {
                  return e.isEmpty() ? ot.EMPTY_NODE : e.updatePriority(t);
                }
                filtersNodes() {
                  return !1;
                }
                getIndexedFilter() {
                  return this;
                }
                getIndex() {
                  return this.index_;
                }
              }
              class bt {
                constructor(e) {
                  (this.indexedFilter_ = new mt(e.getIndex())),
                    (this.index_ = e.getIndex()),
                    (this.startPost_ = bt.getStartPost_(e)),
                    (this.endPost_ = bt.getEndPost_(e)),
                    (this.startIsInclusive_ = !e.startAfterSet_),
                    (this.endIsInclusive_ = !e.endBeforeSet_);
                }
                getStartPost() {
                  return this.startPost_;
                }
                getEndPost() {
                  return this.endPost_;
                }
                matches(e) {
                  var t = this.startIsInclusive_
                      ? this.index_.compare(this.getStartPost(), e) <= 0
                      : this.index_.compare(this.getStartPost(), e) < 0,
                    e = this.endIsInclusive_
                      ? this.index_.compare(e, this.getEndPost()) <= 0
                      : this.index_.compare(e, this.getEndPost()) < 0;
                  return t && e;
                }
                updateChild(e, t, n, i, r, o) {
                  return (
                    this.matches(new Oe(t, n)) || (n = ot.EMPTY_NODE),
                    this.indexedFilter_.updateChild(e, t, n, i, r, o)
                  );
                }
                updateFullNode(e, t, n) {
                  let i = (t = t.isLeafNode() ? ot.EMPTY_NODE : t).withIndex(
                    this.index_
                  );
                  i = i.updatePriority(ot.EMPTY_NODE);
                  const r = this;
                  return (
                    t.forEachChild(Xe, (e, t) => {
                      r.matches(new Oe(e, t)) ||
                        (i = i.updateImmediateChild(e, ot.EMPTY_NODE));
                    }),
                    this.indexedFilter_.updateFullNode(e, i, n)
                  );
                }
                updatePriority(e, t) {
                  return e;
                }
                filtersNodes() {
                  return !0;
                }
                getIndexedFilter() {
                  return this.indexedFilter_;
                }
                getIndex() {
                  return this.index_;
                }
                static getStartPost_(e) {
                  if (e.hasStart()) {
                    var t = e.getIndexStartName();
                    return e.getIndex().makePost(e.getIndexStartValue(), t);
                  }
                  return e.getIndex().minPost();
                }
                static getEndPost_(e) {
                  if (e.hasEnd()) {
                    var t = e.getIndexEndName();
                    return e.getIndex().makePost(e.getIndexEndValue(), t);
                  }
                  return e.getIndex().maxPost();
                }
              }
              class _t {
                constructor(e) {
                  (this.withinDirectionalStart = (e) =>
                    this.reverse_
                      ? this.withinEndPost(e)
                      : this.withinStartPost(e)),
                    (this.withinDirectionalEnd = (e) =>
                      this.reverse_
                        ? this.withinStartPost(e)
                        : this.withinEndPost(e)),
                    (this.withinStartPost = (e) => {
                      e = this.index_.compare(
                        this.rangedFilter_.getStartPost(),
                        e
                      );
                      return this.startIsInclusive_ ? e <= 0 : e < 0;
                    }),
                    (this.withinEndPost = (e) => {
                      e = this.index_.compare(
                        e,
                        this.rangedFilter_.getEndPost()
                      );
                      return this.endIsInclusive_ ? e <= 0 : e < 0;
                    }),
                    (this.rangedFilter_ = new bt(e)),
                    (this.index_ = e.getIndex()),
                    (this.limit_ = e.getLimit()),
                    (this.reverse_ = !e.isViewFromLeft()),
                    (this.startIsInclusive_ = !e.startAfterSet_),
                    (this.endIsInclusive_ = !e.endBeforeSet_);
                }
                updateChild(e, t, n, i, r, o) {
                  return (
                    this.rangedFilter_.matches(new Oe(t, n)) ||
                      (n = ot.EMPTY_NODE),
                    e.getImmediateChild(t).equals(n)
                      ? e
                      : e.numChildren() < this.limit_
                      ? this.rangedFilter_
                          .getIndexedFilter()
                          .updateChild(e, t, n, i, r, o)
                      : this.fullLimitUpdateChild_(e, t, n, r, o)
                  );
                }
                updateFullNode(e, n, t) {
                  let i;
                  if (n.isLeafNode() || n.isEmpty())
                    i = ot.EMPTY_NODE.withIndex(this.index_);
                  else if (
                    2 * this.limit_ < n.numChildren() &&
                    n.isIndexed(this.index_)
                  ) {
                    i = ot.EMPTY_NODE.withIndex(this.index_);
                    let e;
                    e = this.reverse_
                      ? n.getReverseIteratorFrom(
                          this.rangedFilter_.getEndPost(),
                          this.index_
                        )
                      : n.getIteratorFrom(
                          this.rangedFilter_.getStartPost(),
                          this.index_
                        );
                    let t = 0;
                    for (; e.hasNext() && t < this.limit_; ) {
                      var r = e.getNext();
                      if (this.withinDirectionalStart(r)) {
                        if (!this.withinDirectionalEnd(r)) break;
                        (i = i.updateImmediateChild(r.name, r.node)), t++;
                      }
                    }
                  } else {
                    (i = n.withIndex(this.index_)),
                      (i = i.updatePriority(ot.EMPTY_NODE));
                    let e;
                    e = this.reverse_
                      ? i.getReverseIterator(this.index_)
                      : i.getIterator(this.index_);
                    let t = 0;
                    for (; e.hasNext(); ) {
                      var o = e.getNext();
                      t < this.limit_ &&
                      this.withinDirectionalStart(o) &&
                      this.withinDirectionalEnd(o)
                        ? t++
                        : (i = i.updateImmediateChild(o.name, ot.EMPTY_NODE));
                    }
                  }
                  return this.rangedFilter_
                    .getIndexedFilter()
                    .updateFullNode(e, i, t);
                }
                updatePriority(e, t) {
                  return e;
                }
                filtersNodes() {
                  return !0;
                }
                getIndexedFilter() {
                  return this.rangedFilter_.getIndexedFilter();
                }
                getIndex() {
                  return this.index_;
                }
                fullLimitUpdateChild_(e, t, n, i, r) {
                  let o;
                  if (this.reverse_) {
                    const u = this.index_.getCompare();
                    o = (e, t) => u(t, e);
                  } else o = this.index_.getCompare();
                  const a = e;
                  (0, g.assert)(a.numChildren() === this.limit_, "");
                  var s = new Oe(t, n),
                    l = this.reverse_
                      ? a.getFirstChild(this.index_)
                      : a.getLastChild(this.index_),
                    c = this.rangedFilter_.matches(s);
                  if (a.hasChild(t)) {
                    var d = a.getImmediateChild(t);
                    let e = i.getChildAfterChild(this.index_, l, this.reverse_);
                    for (; null != e && (e.name === t || a.hasChild(e.name)); )
                      e = i.getChildAfterChild(this.index_, e, this.reverse_);
                    var h = null == e ? 1 : o(e, s);
                    if (c && !n.isEmpty() && 0 <= h)
                      return (
                        null != r && r.trackChildChange(ft(t, n, d)),
                        a.updateImmediateChild(t, n)
                      );
                    {
                      null != r && r.trackChildChange(gt(t, d));
                      const p = a.updateImmediateChild(t, ot.EMPTY_NODE);
                      return null != e && this.rangedFilter_.matches(e)
                        ? (null != r && r.trackChildChange(pt(e.name, e.node)),
                          p.updateImmediateChild(e.name, e.node))
                        : p;
                    }
                  }
                  return !n.isEmpty() && c && 0 <= o(l, s)
                    ? (null != r &&
                        (r.trackChildChange(gt(l.name, l.node)),
                        r.trackChildChange(pt(t, n))),
                      a
                        .updateImmediateChild(t, n)
                        .updateImmediateChild(l.name, ot.EMPTY_NODE))
                    : e;
                }
              }
              class vt {
                constructor() {
                  (this.limitSet_ = !1),
                    (this.startSet_ = !1),
                    (this.startNameSet_ = !1),
                    (this.startAfterSet_ = !1),
                    (this.endSet_ = !1),
                    (this.endNameSet_ = !1),
                    (this.endBeforeSet_ = !1),
                    (this.limit_ = 0),
                    (this.viewFrom_ = ""),
                    (this.indexStartValue_ = null),
                    (this.indexStartName_ = ""),
                    (this.indexEndValue_ = null),
                    (this.indexEndName_ = ""),
                    (this.index_ = Xe);
                }
                hasStart() {
                  return this.startSet_;
                }
                isViewFromLeft() {
                  return "" === this.viewFrom_
                    ? this.startSet_
                    : "l" === this.viewFrom_;
                }
                getIndexStartValue() {
                  return (
                    (0, g.assert)(
                      this.startSet_,
                      "Only valid if start has been set"
                    ),
                    this.indexStartValue_
                  );
                }
                getIndexStartName() {
                  return (
                    (0, g.assert)(
                      this.startSet_,
                      "Only valid if start has been set"
                    ),
                    this.startNameSet_ ? this.indexStartName_ : O
                  );
                }
                hasEnd() {
                  return this.endSet_;
                }
                getIndexEndValue() {
                  return (
                    (0, g.assert)(
                      this.endSet_,
                      "Only valid if end has been set"
                    ),
                    this.indexEndValue_
                  );
                }
                getIndexEndName() {
                  return (
                    (0, g.assert)(
                      this.endSet_,
                      "Only valid if end has been set"
                    ),
                    this.endNameSet_ ? this.indexEndName_ : M
                  );
                }
                hasLimit() {
                  return this.limitSet_;
                }
                hasAnchoredLimit() {
                  return this.limitSet_ && "" !== this.viewFrom_;
                }
                getLimit() {
                  return (
                    (0, g.assert)(
                      this.limitSet_,
                      "Only valid if limit has been set"
                    ),
                    this.limit_
                  );
                }
                getIndex() {
                  return this.index_;
                }
                loadsAllData() {
                  return !(this.startSet_ || this.endSet_ || this.limitSet_);
                }
                isDefault() {
                  return this.loadsAllData() && this.index_ === Xe;
                }
                copy() {
                  const e = new vt();
                  return (
                    (e.limitSet_ = this.limitSet_),
                    (e.limit_ = this.limit_),
                    (e.startSet_ = this.startSet_),
                    (e.startAfterSet_ = this.startAfterSet_),
                    (e.indexStartValue_ = this.indexStartValue_),
                    (e.startNameSet_ = this.startNameSet_),
                    (e.indexStartName_ = this.indexStartName_),
                    (e.endSet_ = this.endSet_),
                    (e.endBeforeSet_ = this.endBeforeSet_),
                    (e.indexEndValue_ = this.indexEndValue_),
                    (e.endNameSet_ = this.endNameSet_),
                    (e.indexEndName_ = this.indexEndName_),
                    (e.index_ = this.index_),
                    (e.viewFrom_ = this.viewFrom_),
                    e
                  );
                }
              }
              function yt(e, t, n) {
                const i = e.copy();
                return (
                  (i.startSet_ = !0),
                  void 0 === t && (t = null),
                  (i.indexStartValue_ = t),
                  null != n
                    ? ((i.startNameSet_ = !0), (i.indexStartName_ = n))
                    : ((i.startNameSet_ = !1), (i.indexStartName_ = "")),
                  i
                );
              }
              function wt(e, t, n) {
                const i = e.copy();
                return (
                  (i.endSet_ = !0),
                  void 0 === t && (t = null),
                  (i.indexEndValue_ = t),
                  void 0 !== n
                    ? ((i.endNameSet_ = !0), (i.indexEndName_ = n))
                    : ((i.endNameSet_ = !1), (i.indexEndName_ = "")),
                  i
                );
              }
              function xt(e, t) {
                const n = e.copy();
                return (n.index_ = t), n;
              }
              function kt(e) {
                const t = {};
                if (e.isDefault()) return t;
                let n;
                var i;
                return (
                  (n =
                    e.index_ === Xe
                      ? "$priority"
                      : e.index_ === ht
                      ? "$value"
                      : e.index_ === Fe
                      ? "$key"
                      : ((0, g.assert)(
                          e.index_ instanceof dt,
                          "Unrecognized index type!"
                        ),
                        e.index_.toString())),
                  (t.orderBy = (0, g.stringify)(n)),
                  e.startSet_ &&
                    ((i = e.startAfterSet_ ? "startAfter" : "startAt"),
                    (t[i] = (0, g.stringify)(e.indexStartValue_)),
                    e.startNameSet_ &&
                      (t[i] += "," + (0, g.stringify)(e.indexStartName_))),
                  e.endSet_ &&
                    ((i = e.endBeforeSet_ ? "endBefore" : "endAt"),
                    (t[i] = (0, g.stringify)(e.indexEndValue_)),
                    e.endNameSet_ &&
                      (t[i] += "," + (0, g.stringify)(e.indexEndName_))),
                  e.limitSet_ &&
                    (e.isViewFromLeft()
                      ? (t.limitToFirst = e.limit_)
                      : (t.limitToLast = e.limit_)),
                  t
                );
              }
              function Ct(t) {
                const n = {};
                if (
                  (t.startSet_ &&
                    ((n.sp = t.indexStartValue_),
                    t.startNameSet_ && (n.sn = t.indexStartName_),
                    (n.sin = !t.startAfterSet_)),
                  t.endSet_ &&
                    ((n.ep = t.indexEndValue_),
                    t.endNameSet_ && (n.en = t.indexEndName_),
                    (n.ein = !t.endBeforeSet_)),
                  t.limitSet_)
                ) {
                  n.l = t.limit_;
                  let e = t.viewFrom_;
                  "" === e && (e = t.isViewFromLeft() ? "l" : "r"), (n.vf = e);
                }
                return t.index_ !== Xe && (n.i = t.index_.toString()), n;
              }
              uo._QueryParams = vt;
              class Et extends de {
                constructor(e, t, n, i) {
                  super(),
                    (this.repoInfo_ = e),
                    (this.onDataUpdate_ = t),
                    (this.authTokenProvider_ = n),
                    (this.appCheckTokenProvider_ = i),
                    (this.log_ = k("p:rest:")),
                    (this.listens_ = {});
                }
                reportStats(e) {
                  throw new Error("Method not implemented.");
                }
                static getListenId_(e, t) {
                  return void 0 !== t
                    ? "tag$" + t
                    : ((0, g.assert)(
                        e._queryParams.isDefault(),
                        "should have a tag if it's not a default query."
                      ),
                      e._path.toString());
                }
                listen(e, t, i, r) {
                  const o = e._path.toString();
                  this.log_(
                    "Listen called for " + o + " " + e._queryIdentifier
                  );
                  const a = Et.getListenId_(e, i),
                    s = {};
                  this.listens_[a] = s;
                  e = kt(e._queryParams);
                  this.restRequest_(o + ".json", e, (t, e) => {
                    let n = e;
                    if (
                      (null === (t = 404 === t ? (n = null) : t) &&
                        this.onDataUpdate_(o, n, !1, i),
                      (0, g.safeGet)(this.listens_, a) === s)
                    ) {
                      let e;
                      (e = t
                        ? 401 === t
                          ? "permission_denied"
                          : "rest_error:" + t
                        : "ok"),
                        r(e, null);
                    }
                  });
                }
                unlisten(e, t) {
                  t = Et.getListenId_(e, t);
                  delete this.listens_[t];
                }
                get(e) {
                  var t = kt(e._queryParams);
                  const i = e._path.toString(),
                    r = new g.Deferred();
                  return (
                    this.restRequest_(i + ".json", t, (e, t) => {
                      let n = t;
                      null === (e = 404 === e ? (n = null) : e)
                        ? (this.onDataUpdate_(i, n, !1, null), r.resolve(n))
                        : r.reject(new Error(n));
                    }),
                    r.promise
                  );
                }
                refreshAuthToken(e) {}
                restRequest_(r, o = {}, a) {
                  return (
                    (o.format = "export"),
                    Promise.all([
                      this.authTokenProvider_.getToken(!1),
                      this.appCheckTokenProvider_.getToken(!1),
                    ]).then(([e, t]) => {
                      e && e.accessToken && (o.auth = e.accessToken),
                        t && t.token && (o.ac = t.token);
                      const n =
                        (this.repoInfo_.secure ? "https://" : "http://") +
                        this.repoInfo_.host +
                        r +
                        "?ns=" +
                        this.repoInfo_.namespace +
                        (0, g.querystring)(o);
                      this.log_("Sending REST request for " + n);
                      const i = new XMLHttpRequest();
                      (i.onreadystatechange = () => {
                        if (a && 4 === i.readyState) {
                          this.log_(
                            "REST Response for " + n + " received. status:",
                            i.status,
                            "response:",
                            i.responseText
                          );
                          let e = null;
                          if (200 <= i.status && i.status < 300) {
                            try {
                              e = (0, g.jsonEval)(i.responseText);
                            } catch (e) {
                              R(
                                "Failed to parse JSON response for " +
                                  n +
                                  ": " +
                                  i.responseText
                              );
                            }
                            a(null, e);
                          } else
                            401 !== i.status &&
                              404 !== i.status &&
                              R(
                                "Got unsuccessful REST response for " +
                                  n +
                                  " Status: " +
                                  i.status
                              ),
                              a(i.status);
                          a = null;
                        }
                      }),
                        i.open("GET", n, !0),
                        i.send();
                    })
                  );
                }
              }
              class It {
                constructor() {
                  this.rootNode_ = ot.EMPTY_NODE;
                }
                getNode(e) {
                  return this.rootNode_.getChild(e);
                }
                updateSnapshot(e, t) {
                  this.rootNode_ = this.rootNode_.updateChild(e, t);
                }
              }
              function Tt() {
                return { value: null, children: new Map() };
              }
              function St(e, t, n) {
                var i;
                Ce(t)
                  ? ((e.value = n), e.children.clear())
                  : null !== e.value
                  ? (e.value = e.value.updateChild(t, n))
                  : ((i = be(t)),
                    e.children.has(i) || e.children.set(i, Tt()),
                    St(e.children.get(i), (t = ve(t)), n));
              }
              function Pt(e, n, i) {
                var r;
                null !== e.value
                  ? i(n, e.value)
                  : ((r = (e, t) => {
                      Pt(t, new fe(n.toString() + "/" + e), i);
                    }),
                    e.children.forEach((e, t) => {
                      r(t, e);
                    }));
              }
              class Nt {
                constructor(e) {
                  (this.collection_ = e), (this.last_ = null);
                }
                get() {
                  var e = this.collection_.get();
                  const n = Object.assign({}, e);
                  return (
                    this.last_ &&
                      z(this.last_, (e, t) => {
                        n[e] = n[e] - t;
                      }),
                    (this.last_ = e),
                    n
                  );
                }
              }
              class Dt {
                constructor(e, t) {
                  (this.server_ = t),
                    (this.statsToReport_ = {}),
                    (this.statsListener_ = new Nt(e));
                  e = 1e4 + 2e4 * Math.random();
                  q(this.reportStats_.bind(this), Math.floor(e));
                }
                reportStats_() {
                  var e = this.statsListener_.get();
                  const n = {};
                  let i = !1;
                  z(e, (e, t) => {
                    0 < t &&
                      (0, g.contains)(this.statsToReport_, e) &&
                      ((n[e] = t), (i = !0));
                  }),
                    i && this.server_.reportStats(n),
                    q(
                      this.reportStats_.bind(this),
                      Math.floor(2 * Math.random() * 3e5)
                    );
                }
              }
              function Rt() {
                return {
                  fromUser: !0,
                  fromServer: !1,
                  queryId: null,
                  tagged: !1,
                };
              }
              function At() {
                return {
                  fromUser: !1,
                  fromServer: !0,
                  queryId: null,
                  tagged: !1,
                };
              }
              function Ot(e) {
                return { fromUser: !1, fromServer: !0, queryId: e, tagged: !0 };
              }
              ((p = h = h || {})[(p.OVERWRITE = 0)] = "OVERWRITE"),
                (p[(p.MERGE = 1)] = "MERGE"),
                (p[(p.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
                (p[(p.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
              class Mt {
                constructor(e, t, n) {
                  (this.path = e),
                    (this.affectedTree = t),
                    (this.revert = n),
                    (this.type = h.ACK_USER_WRITE),
                    (this.source = Rt());
                }
                operationForChild(e) {
                  if (Ce(this.path)) {
                    if (null != this.affectedTree.value)
                      return (
                        (0, g.assert)(
                          this.affectedTree.children.isEmpty(),
                          "affectedTree should not have overlapping affected paths."
                        ),
                        this
                      );
                    var t = this.affectedTree.subtree(new fe(e));
                    return new Mt(me(), t, this.revert);
                  }
                  return (
                    (0, g.assert)(
                      be(this.path) === e,
                      "operationForChild called for unrelated child."
                    ),
                    new Mt(ve(this.path), this.affectedTree, this.revert)
                  );
                }
              }
              class Lt {
                constructor(e, t) {
                  (this.source = e),
                    (this.path = t),
                    (this.type = h.LISTEN_COMPLETE);
                }
                operationForChild(e) {
                  return Ce(this.path)
                    ? new Lt(this.source, me())
                    : new Lt(this.source, ve(this.path));
                }
              }
              class zt {
                constructor(e, t, n) {
                  (this.source = e),
                    (this.path = t),
                    (this.snap = n),
                    (this.type = h.OVERWRITE);
                }
                operationForChild(e) {
                  return Ce(this.path)
                    ? new zt(this.source, me(), this.snap.getImmediateChild(e))
                    : new zt(this.source, ve(this.path), this.snap);
                }
              }
              class Ft {
                constructor(e, t, n) {
                  (this.source = e),
                    (this.path = t),
                    (this.children = n),
                    (this.type = h.MERGE);
                }
                operationForChild(e) {
                  if (Ce(this.path)) {
                    const t = this.children.subtree(new fe(e));
                    return t.isEmpty()
                      ? null
                      : t.value
                      ? new zt(this.source, me(), t.value)
                      : new Ft(this.source, me(), t);
                  }
                  return (
                    (0, g.assert)(
                      be(this.path) === e,
                      "Can't get a merge for a child not on the path of the operation"
                    ),
                    new Ft(this.source, ve(this.path), this.children)
                  );
                }
                toString() {
                  return (
                    "Operation(" +
                    this.path +
                    ": " +
                    this.source.toString() +
                    " merge: " +
                    this.children.toString() +
                    ")"
                  );
                }
              }
              class jt {
                constructor(e, t, n) {
                  (this.node_ = e),
                    (this.fullyInitialized_ = t),
                    (this.filtered_ = n);
                }
                isFullyInitialized() {
                  return this.fullyInitialized_;
                }
                isFiltered() {
                  return this.filtered_;
                }
                isCompleteForPath(e) {
                  if (Ce(e))
                    return this.isFullyInitialized() && !this.filtered_;
                  e = be(e);
                  return this.isCompleteForChild(e);
                }
                isCompleteForChild(e) {
                  return (
                    (this.isFullyInitialized() && !this.filtered_) ||
                    this.node_.hasChild(e)
                  );
                }
                getNode() {
                  return this.node_;
                }
              }
              class qt {
                constructor(e) {
                  (this.query_ = e),
                    (this.index_ = this.query_._queryParams.getIndex());
                }
              }
              function Bt(n, e, t, i) {
                var r = [];
                const o = [];
                return (
                  e.forEach((e) => {
                    var t;
                    "child_changed" === e.type &&
                      n.index_.indexedValueChanged(e.oldSnap, e.snapshotNode) &&
                      o.push(
                        ((t = e.childName),
                        {
                          type: "child_moved",
                          snapshotNode: e.snapshotNode,
                          childName: t,
                        })
                      );
                  }),
                  Ut(n, r, "child_removed", e, i, t),
                  Ut(n, r, "child_added", e, i, t),
                  Ut(n, r, "child_moved", o, i, t),
                  Ut(n, r, "child_changed", e, i, t),
                  Ut(n, r, "value", e, i, t),
                  r
                );
              }
              function Ut(o, a, t, e, s, l) {
                const n = e.filter((e) => e.type === t);
                n.sort((e, t) =>
                  (function (e, t, n) {
                    if (null == t.childName || null == n.childName)
                      throw (0, g.assertionError)(
                        "Should only compare child_ events."
                      );
                    (t = new Oe(t.childName, t.snapshotNode)),
                      (n = new Oe(n.childName, n.snapshotNode));
                    return e.index_.compare(t, n);
                  })(o, e, t)
                ),
                  n.forEach((t) => {
                    const n =
                      ((e = o),
                      (r = l),
                      "value" === (i = t).type ||
                        "child_removed" === i.type ||
                        (i.prevName = r.getPredecessorChildName(
                          i.childName,
                          i.snapshotNode,
                          e.index_
                        )),
                      i);
                    var e, i, r;
                    s.forEach((e) => {
                      e.respondsTo(t.type) &&
                        a.push(e.createEvent(n, o.query_));
                    });
                  });
              }
              function Wt(e, t) {
                return { eventCache: e, serverCache: t };
              }
              function Ht(e, t, n, i) {
                return Wt(new jt(t, n, i), e.serverCache);
              }
              function Vt(e, t, n, i) {
                return Wt(e.eventCache, new jt(t, n, i));
              }
              function $t(e) {
                return e.eventCache.isFullyInitialized()
                  ? e.eventCache.getNode()
                  : null;
              }
              function Yt(e) {
                return e.serverCache.isFullyInitialized()
                  ? e.serverCache.getNode()
                  : null;
              }
              let Gt;
              class Qt {
                constructor(e, t = ((Gt = Gt || new Be(E)), Gt)) {
                  (this.value = e), (this.children = t);
                }
                static fromObject(e) {
                  let n = new Qt(null);
                  return (
                    z(e, (e, t) => {
                      n = n.set(new fe(e), t);
                    }),
                    n
                  );
                }
                isEmpty() {
                  return null === this.value && this.children.isEmpty();
                }
                findRootMostMatchingPathAndValue(e, t) {
                  if (null != this.value && t(this.value))
                    return { path: me(), value: this.value };
                  if (Ce(e)) return null;
                  {
                    var n = be(e);
                    const i = this.children.get(n);
                    if (null === i) return null;
                    t = i.findRootMostMatchingPathAndValue(ve(e), t);
                    return null == t
                      ? null
                      : { path: ke(new fe(n), t.path), value: t.value };
                  }
                }
                findRootMostValueAndPath(e) {
                  return this.findRootMostMatchingPathAndValue(e, () => !0);
                }
                subtree(e) {
                  if (Ce(e)) return this;
                  {
                    var t = be(e);
                    const n = this.children.get(t);
                    return null !== n ? n.subtree(ve(e)) : new Qt(null);
                  }
                }
                set(e, t) {
                  if (Ce(e)) return new Qt(t, this.children);
                  {
                    var n = be(e);
                    const i = this.children.get(n) || new Qt(null);
                    (t = i.set(ve(e), t)), (t = this.children.insert(n, t));
                    return new Qt(this.value, t);
                  }
                }
                remove(t) {
                  if (Ce(t))
                    return this.children.isEmpty()
                      ? new Qt(null)
                      : new Qt(null, this.children);
                  {
                    var n = be(t);
                    const i = this.children.get(n);
                    if (i) {
                      const r = i.remove(ve(t));
                      let e;
                      return (
                        (e = r.isEmpty()
                          ? this.children.remove(n)
                          : this.children.insert(n, r)),
                        null === this.value && e.isEmpty()
                          ? new Qt(null)
                          : new Qt(this.value, e)
                      );
                    }
                    return this;
                  }
                }
                get(e) {
                  if (Ce(e)) return this.value;
                  {
                    var t = be(e);
                    const n = this.children.get(t);
                    return n ? n.get(ve(e)) : null;
                  }
                }
                setTree(t, n) {
                  if (Ce(t)) return n;
                  {
                    var i = be(t);
                    const r = this.children.get(i) || new Qt(null),
                      o = r.setTree(ve(t), n);
                    let e;
                    return (
                      (e = o.isEmpty()
                        ? this.children.remove(i)
                        : this.children.insert(i, o)),
                      new Qt(this.value, e)
                    );
                  }
                }
                fold(e) {
                  return this.fold_(me(), e);
                }
                fold_(n, i) {
                  const r = {};
                  return (
                    this.children.inorderTraversal((e, t) => {
                      r[e] = t.fold_(ke(n, e), i);
                    }),
                    i(n, this.value, r)
                  );
                }
                findOnPath(e, t) {
                  return this.findOnPath_(e, me(), t);
                }
                findOnPath_(e, t, n) {
                  var i = !!this.value && n(t, this.value);
                  if (i) return i;
                  if (Ce(e)) return null;
                  {
                    i = be(e);
                    const r = this.children.get(i);
                    return r ? r.findOnPath_(ve(e), ke(t, i), n) : null;
                  }
                }
                foreachOnPath(e, t) {
                  return this.foreachOnPath_(e, me(), t);
                }
                foreachOnPath_(e, t, n) {
                  if (Ce(e)) return this;
                  {
                    this.value && n(t, this.value);
                    var i = be(e);
                    const r = this.children.get(i);
                    return r
                      ? r.foreachOnPath_(ve(e), ke(t, i), n)
                      : new Qt(null);
                  }
                }
                foreach(e) {
                  this.foreach_(me(), e);
                }
                foreach_(n, i) {
                  this.children.inorderTraversal((e, t) => {
                    t.foreach_(ke(n, e), i);
                  }),
                    this.value && i(n, this.value);
                }
                foreachChild(n) {
                  this.children.inorderTraversal((e, t) => {
                    t.value && n(e, t.value);
                  });
                }
              }
              class Kt {
                constructor(e) {
                  this.writeTree_ = e;
                }
                static empty() {
                  return new Kt(new Qt(null));
                }
              }
              function Xt(t, n, i) {
                if (Ce(n)) return new Kt(new Qt(i));
                var r = t.writeTree_.findRootMostValueAndPath(n);
                if (null != r) {
                  var o = r.path;
                  let e = r.value;
                  r = Ee(o, n);
                  return (
                    (e = e.updateChild(r, i)), new Kt(t.writeTree_.set(o, e))
                  );
                }
                (i = new Qt(i)), (i = t.writeTree_.setTree(n, i));
                return new Kt(i);
              }
              function Jt(e, n, t) {
                let i = e;
                return (
                  z(t, (e, t) => {
                    i = Xt(i, ke(n, e), t);
                  }),
                  i
                );
              }
              function Zt(e, t) {
                if (Ce(t)) return Kt.empty();
                t = e.writeTree_.setTree(t, new Qt(null));
                return new Kt(t);
              }
              function en(e, t) {
                return null != tn(e, t);
              }
              function tn(e, t) {
                var n = e.writeTree_.findRootMostValueAndPath(t);
                return null != n
                  ? e.writeTree_.get(n.path).getChild(Ee(n.path, t))
                  : null;
              }
              function nn(e) {
                const n = [],
                  t = e.writeTree_.value;
                return (
                  null != t
                    ? t.isLeafNode() ||
                      t.forEachChild(Xe, (e, t) => {
                        n.push(new Oe(e, t));
                      })
                    : e.writeTree_.children.inorderTraversal((e, t) => {
                        null != t.value && n.push(new Oe(e, t.value));
                      }),
                  n
                );
              }
              function rn(e, t) {
                if (Ce(t)) return e;
                var n = tn(e, t);
                return null != n
                  ? new Kt(new Qt(n))
                  : new Kt(e.writeTree_.subtree(t));
              }
              function on(e) {
                return e.writeTree_.isEmpty();
              }
              function an(e, t) {
                return (function i(r, e, o) {
                  {
                    if (null != e.value) return o.updateChild(r, e.value);
                    {
                      let n = null;
                      return (
                        e.children.inorderTraversal((e, t) => {
                          ".priority" === e
                            ? ((0, g.assert)(
                                null !== t.value,
                                "Priority writes must always be leaf nodes"
                              ),
                              (n = t.value))
                            : (o = i(ke(r, e), t, o));
                        }),
                        (o =
                          !o.getChild(r).isEmpty() && null !== n
                            ? o.updateChild(ke(r, ".priority"), n)
                            : o)
                      );
                    }
                  }
                })(me(), e.writeTree_, t);
              }
              function sn(e, t) {
                return vn(t, e);
              }
              function ln(t, n) {
                var e,
                  i = t.allWrites.findIndex((e) => e.writeId === n);
                (0, g.assert)(
                  0 <= i,
                  "removeWrite called with nonexistent writeId."
                );
                const r = t.allWrites[i];
                t.allWrites.splice(i, 1);
                let o = r.visible,
                  a = !1,
                  s = t.allWrites.length - 1;
                for (; o && 0 <= s; ) {
                  var l = t.allWrites[s];
                  l.visible &&
                    (s >= i &&
                    (function (e, t) {
                      {
                        if (e.snap) return Se(e.path, t);
                        for (const n in e.children)
                          if (
                            e.children.hasOwnProperty(n) &&
                            Se(ke(e.path, n), t)
                          )
                            return !0;
                        return !1;
                      }
                    })(l, r.path)
                      ? (o = !1)
                      : Se(r.path, l.path) && (a = !0)),
                    s--;
                }
                return (
                  !!o &&
                  (a
                    ? (((e = t).visibleWrites = dn(e.allWrites, cn, me())),
                      0 < e.allWrites.length
                        ? (e.lastWriteId =
                            e.allWrites[e.allWrites.length - 1].writeId)
                        : (e.lastWriteId = -1))
                    : r.snap
                    ? (t.visibleWrites = Zt(t.visibleWrites, r.path))
                    : z(r.children, (e) => {
                        t.visibleWrites = Zt(t.visibleWrites, ke(r.path, e));
                      }),
                  !0)
                );
              }
              function cn(e) {
                return e.visible;
              }
              function dn(t, n, i) {
                let r = Kt.empty();
                for (let e = 0; e < t.length; ++e) {
                  const a = t[e];
                  if (n(a)) {
                    var o = a.path;
                    let e;
                    if (a.snap)
                      Se(i, o)
                        ? ((e = Ee(i, o)), (r = Xt(r, e, a.snap)))
                        : Se(o, i) &&
                          ((e = Ee(o, i)),
                          (r = Xt(r, me(), a.snap.getChild(e))));
                    else {
                      if (!a.children)
                        throw (0, g.assertionError)(
                          "WriteRecord should have .snap or .children"
                        );
                      if (Se(i, o)) (e = Ee(i, o)), (r = Jt(r, e, a.children));
                      else if (Se(o, i))
                        if (((e = Ee(o, i)), Ce(e)))
                          r = Jt(r, me(), a.children);
                        else {
                          const s = (0, g.safeGet)(a.children, be(e));
                          s && ((o = s.getChild(ve(e))), (r = Xt(r, me(), o)));
                        }
                    }
                  }
                }
                return r;
              }
              function hn(e, t, n, i, r) {
                if (i || r) {
                  var o = rn(e.visibleWrites, t);
                  if (!r && on(o)) return n;
                  if (r || null != n || en(o, me()))
                    return an(
                      dn(
                        e.allWrites,
                        function (e) {
                          return (
                            (e.visible || r) &&
                            (!i || !~i.indexOf(e.writeId)) &&
                            (Se(e.path, t) || Se(t, e.path))
                          );
                        },
                        t
                      ),
                      n || ot.EMPTY_NODE
                    );
                  return null;
                }
                o = tn(e.visibleWrites, t);
                if (null != o) return o;
                e = rn(e.visibleWrites, t);
                return on(e)
                  ? n
                  : null != n || en(e, me())
                  ? an(e, n || ot.EMPTY_NODE)
                  : null;
              }
              function un(e, t, n, i) {
                return hn(e.writeTree, e.treePath, t, n, i);
              }
              function pn(e, t) {
                return (function (e, t, n) {
                  let i = ot.EMPTY_NODE;
                  const r = tn(e.visibleWrites, t);
                  if (r)
                    return (
                      r.isLeafNode() ||
                        r.forEachChild(Xe, (e, t) => {
                          i = i.updateImmediateChild(e, t);
                        }),
                      i
                    );
                  if (n) {
                    const o = rn(e.visibleWrites, t);
                    return (
                      n.forEachChild(Xe, (e, t) => {
                        t = an(rn(o, new fe(e)), t);
                        i = i.updateImmediateChild(e, t);
                      }),
                      nn(o).forEach((e) => {
                        i = i.updateImmediateChild(e.name, e.node);
                      }),
                      i
                    );
                  }
                  return (
                    nn(rn(e.visibleWrites, t)).forEach((e) => {
                      i = i.updateImmediateChild(e.name, e.node);
                    }),
                    i
                  );
                })(e.writeTree, e.treePath, t);
              }
              function gn(e, t, n, i) {
                return (
                  (r = e.writeTree),
                  (e = e.treePath),
                  (t = t),
                  (i = i),
                  (0, g.assert)(
                    n || i,
                    "Either existingEventSnap or existingServerSnap must exist"
                  ),
                  (e = ke(e, t)),
                  en(r.visibleWrites, e)
                    ? null
                    : on((e = rn(r.visibleWrites, e)))
                    ? i.getChild(t)
                    : an(e, i.getChild(t))
                );
                var r;
              }
              function fn(e, t) {
                return (
                  (n = e.writeTree),
                  (t = ke(e.treePath, t)),
                  tn(n.visibleWrites, t)
                );
                var n;
              }
              function mn(e, t, n, i, r, o) {
                return (function (e, t, n, i, r, o, a) {
                  let s;
                  if (((e = rn(e.visibleWrites, t)), null != (t = tn(e, me()))))
                    s = t;
                  else {
                    if (null == n) return [];
                    s = an(e, n);
                  }
                  if (((s = s.withIndex(a)), s.isEmpty() || s.isLeafNode()))
                    return [];
                  {
                    const l = [],
                      c = a.getCompare(),
                      d = o
                        ? s.getReverseIteratorFrom(i, a)
                        : s.getIteratorFrom(i, a);
                    let e = d.getNext();
                    for (; e && l.length < r; )
                      0 !== c(e, i) && l.push(e), (e = d.getNext());
                    return l;
                  }
                })(e.writeTree, e.treePath, t, n, i, r, o);
              }
              function bn(e, t, n) {
                return (
                  (i = e.writeTree),
                  (r = e.treePath),
                  (e = n),
                  (t = ke(r, (n = t))),
                  null != (r = tn(i.visibleWrites, t))
                    ? r
                    : e.isCompleteForChild(n)
                    ? an(
                        rn(i.visibleWrites, t),
                        e.getNode().getImmediateChild(n)
                      )
                    : null
                );
                var i, r;
              }
              function _n(e, t) {
                return vn(ke(e.treePath, t), e.writeTree);
              }
              function vn(e, t) {
                return { treePath: e, writeTree: t };
              }
              class yn {
                constructor() {
                  this.changeMap = new Map();
                }
                trackChildChange(e) {
                  var t = e.type,
                    n = e.childName;
                  (0, g.assert)(
                    "child_added" === t ||
                      "child_changed" === t ||
                      "child_removed" === t,
                    "Only child changes supported for tracking"
                  ),
                    (0, g.assert)(
                      ".priority" !== n,
                      "Only non-priority child changes can be tracked."
                    );
                  var i = this.changeMap.get(n);
                  if (i) {
                    var r = i.type;
                    if ("child_added" === t && "child_removed" === r)
                      this.changeMap.set(
                        n,
                        ft(n, e.snapshotNode, i.snapshotNode)
                      );
                    else if ("child_removed" === t && "child_added" === r)
                      this.changeMap.delete(n);
                    else if ("child_removed" === t && "child_changed" === r)
                      this.changeMap.set(n, gt(n, i.oldSnap));
                    else if ("child_changed" === t && "child_added" === r)
                      this.changeMap.set(n, pt(n, e.snapshotNode));
                    else {
                      if ("child_changed" !== t || "child_changed" !== r)
                        throw (0, g.assertionError)(
                          "Illegal combination of changes: " +
                            e +
                            " occurred after " +
                            i
                        );
                      this.changeMap.set(n, ft(n, e.snapshotNode, i.oldSnap));
                    }
                  } else this.changeMap.set(n, e);
                }
                getChanges() {
                  return Array.from(this.changeMap.values());
                }
              }
              const wn = new (class {
                getCompleteChild(e) {
                  return null;
                }
                getChildAfterChild(e, t, n) {
                  return null;
                }
              })();
              class xn {
                constructor(e, t, n = null) {
                  (this.writes_ = e),
                    (this.viewCache_ = t),
                    (this.optCompleteServerCache_ = n);
                }
                getCompleteChild(e) {
                  const t = this.viewCache_.eventCache;
                  if (t.isCompleteForChild(e))
                    return t.getNode().getImmediateChild(e);
                  var n =
                    null != this.optCompleteServerCache_
                      ? new jt(this.optCompleteServerCache_, !0, !1)
                      : this.viewCache_.serverCache;
                  return bn(this.writes_, e, n);
                }
                getChildAfterChild(e, t, n) {
                  var i =
                      null != this.optCompleteServerCache_
                        ? this.optCompleteServerCache_
                        : Yt(this.viewCache_),
                    e = mn(this.writes_, i, t, 1, n, e);
                  return 0 === e.length ? null : e[0];
                }
              }
              function kn(e, t, n, i, r) {
                const o = new yn();
                let a, s;
                if (n.type === h.OVERWRITE) {
                  var l = n;
                  a = l.source.fromUser
                    ? In(e, t, l.path, l.snap, i, r, o)
                    : ((0, g.assert)(l.source.fromServer, "Unknown source."),
                      (s =
                        l.source.tagged ||
                        (t.serverCache.isFiltered() && !Ce(l.path))),
                      En(e, t, l.path, l.snap, i, r, s, o));
                } else if (n.type === h.MERGE) {
                  var c = n;
                  a = c.source.fromUser
                    ? (function (n, i, r, e, o, a, s) {
                        let l = i;
                        return (
                          e.foreach((e, t) => {
                            e = ke(r, e);
                            Tn(i, be(e)) && (l = In(n, l, e, t, o, a, s));
                          }),
                          e.foreach((e, t) => {
                            e = ke(r, e);
                            Tn(i, be(e)) || (l = In(n, l, e, t, o, a, s));
                          }),
                          l
                        );
                      })(e, t, c.path, c.children, i, r, o)
                    : ((0, g.assert)(c.source.fromServer, "Unknown source."),
                      (s = c.source.tagged || t.serverCache.isFiltered()),
                      Pn(e, t, c.path, c.children, i, r, s, o));
                } else if (n.type === h.ACK_USER_WRITE) {
                  c = n;
                  a = c.revert
                    ? (function (n, i, r, o, a, s) {
                        let l;
                        {
                          if (null != fn(o, r)) return i;
                          {
                            a = new xn(o, i, a);
                            const d = i.eventCache.getNode();
                            let t;
                            if (Ce(r) || ".priority" === be(r)) {
                              let e;
                              (e = i.serverCache.isFullyInitialized()
                                ? un(o, Yt(i))
                                : ((c = i.serverCache.getNode()),
                                  (0, g.assert)(
                                    c instanceof ot,
                                    "serverChildren would be complete if leaf node"
                                  ),
                                  pn(o, c))),
                                (e = e),
                                (t = n.filter.updateFullNode(d, e, s));
                            } else {
                              var c = be(r);
                              let e = bn(o, c, i.serverCache);
                              null == e &&
                                i.serverCache.isCompleteForChild(c) &&
                                (e = d.getImmediateChild(c)),
                                (t =
                                  null != e
                                    ? n.filter.updateChild(d, c, e, ve(r), a, s)
                                    : i.eventCache.getNode().hasChild(c)
                                    ? n.filter.updateChild(
                                        d,
                                        c,
                                        ot.EMPTY_NODE,
                                        ve(r),
                                        a,
                                        s
                                      )
                                    : d),
                                t.isEmpty() &&
                                  i.serverCache.isFullyInitialized() &&
                                  ((l = un(o, Yt(i))),
                                  l.isLeafNode() &&
                                    (t = n.filter.updateFullNode(t, l, s)));
                            }
                            return (
                              (l =
                                i.serverCache.isFullyInitialized() ||
                                null != fn(o, me())),
                              Ht(i, t, l, n.filter.filtersNodes())
                            );
                          }
                        }
                      })(e, t, c.path, i, r, o)
                    : (function (e, t, r, n, o, a, s) {
                        if (null != fn(o, r)) return t;
                        const l = t.serverCache.isFiltered(),
                          c = t.serverCache;
                        {
                          if (null != n.value) {
                            if (
                              (Ce(r) && c.isFullyInitialized()) ||
                              c.isCompleteForPath(r)
                            )
                              return En(
                                e,
                                t,
                                r,
                                c.getNode().getChild(r),
                                o,
                                a,
                                l,
                                s
                              );
                            if (Ce(r)) {
                              let n = new Qt(null);
                              return (
                                c.getNode().forEachChild(Fe, (e, t) => {
                                  n = n.set(new fe(e), t);
                                }),
                                Pn(e, t, r, n, o, a, l, s)
                              );
                            }
                            return t;
                          }
                          {
                            let i = new Qt(null);
                            return (
                              n.foreach((e, t) => {
                                var n = ke(r, e);
                                c.isCompleteForPath(n) &&
                                  (i = i.set(e, c.getNode().getChild(n)));
                              }),
                              Pn(e, t, r, i, o, a, l, s)
                            );
                          }
                        }
                      })(e, t, c.path, c.affectedTree, i, r, o);
                } else {
                  if (n.type !== h.LISTEN_COMPLETE)
                    throw (0, g.assertionError)(
                      "Unknown operation type: " + n.type
                    );
                  a = (function (e, t, n, i, r) {
                    const o = t.serverCache,
                      a = Vt(
                        t,
                        o.getNode(),
                        o.isFullyInitialized() || Ce(n),
                        o.isFiltered()
                      );
                    return Cn(e, a, n, i, wn, r);
                  })(e, t, n.path, i, o);
                }
                i = o.getChanges();
                return (
                  (function (e, t, n) {
                    const i = t.eventCache;
                    if (i.isFullyInitialized()) {
                      var r = i.getNode().isLeafNode() || i.getNode().isEmpty();
                      const o = $t(e);
                      (0 < n.length ||
                        !e.eventCache.isFullyInitialized() ||
                        (r && !i.getNode().equals(o)) ||
                        !i.getNode().getPriority().equals(o.getPriority())) &&
                        n.push(ut($t(t)));
                    }
                  })(t, a, i),
                  { viewCache: a, changes: i }
                );
              }
              function Cn(i, r, o, a, s, l) {
                const c = r.eventCache;
                if (null != fn(a, o)) return r;
                {
                  let t, n;
                  if (Ce(o)) {
                    var e;
                    (0, g.assert)(
                      r.serverCache.isFullyInitialized(),
                      "If change path is empty, we must have complete server data"
                    ),
                      (t = r.serverCache.isFiltered()
                        ? ((e = pn(
                            a,
                            (e = Yt(r)) instanceof ot ? e : ot.EMPTY_NODE
                          )),
                          i.filter.updateFullNode(r.eventCache.getNode(), e, l))
                        : ((d = un(a, Yt(r))),
                          i.filter.updateFullNode(
                            r.eventCache.getNode(),
                            d,
                            l
                          )));
                  } else {
                    var d = be(o);
                    if (".priority" === d) {
                      (0, g.assert)(
                        1 === _e(o),
                        "Can't have a priority with additional path components"
                      );
                      var h = c.getNode();
                      n = r.serverCache.getNode();
                      var u = gn(a, o, h, n);
                      t =
                        null != u ? i.filter.updatePriority(h, u) : c.getNode();
                    } else {
                      h = ve(o);
                      let e;
                      (e = c.isCompleteForChild(d)
                        ? ((n = r.serverCache.getNode()),
                          null != (u = gn(a, o, c.getNode(), n))
                            ? c.getNode().getImmediateChild(d).updateChild(h, u)
                            : c.getNode().getImmediateChild(d))
                        : bn(a, d, r.serverCache)),
                        (t =
                          null != e
                            ? i.filter.updateChild(c.getNode(), d, e, h, s, l)
                            : c.getNode());
                    }
                  }
                  return Ht(
                    r,
                    t,
                    c.isFullyInitialized() || Ce(o),
                    i.filter.filtersNodes()
                  );
                }
              }
              function En(e, t, n, i, r, o, a, s) {
                const l = t.serverCache;
                let c;
                const d = a ? e.filter : e.filter.getIndexedFilter();
                if (Ce(n)) c = d.updateFullNode(l.getNode(), i, null);
                else if (d.filtersNodes() && !l.isFiltered()) {
                  var h = l.getNode().updateChild(n, i);
                  c = d.updateFullNode(l.getNode(), h, null);
                } else {
                  a = be(n);
                  if (!l.isCompleteForPath(n) && 1 < _e(n)) return t;
                  h = ve(n);
                  const u = l.getNode().getImmediateChild(a);
                  i = u.updateChild(h, i);
                  c =
                    ".priority" === a
                      ? d.updatePriority(l.getNode(), i)
                      : d.updateChild(l.getNode(), a, i, h, wn, null);
                }
                t = Vt(t, c, l.isFullyInitialized() || Ce(n), d.filtersNodes());
                return Cn(e, t, n, r, new xn(r, t, o), s);
              }
              function In(t, n, i, r, e, o, a) {
                const s = n.eventCache;
                let l, c;
                const d = new xn(e, n, o);
                if (Ce(i))
                  (c = t.filter.updateFullNode(n.eventCache.getNode(), r, a)),
                    (l = Ht(n, c, !0, t.filter.filtersNodes()));
                else {
                  o = be(i);
                  if (".priority" === o)
                    (c = t.filter.updatePriority(n.eventCache.getNode(), r)),
                      (l = Ht(n, c, s.isFullyInitialized(), s.isFiltered()));
                  else {
                    i = ve(i);
                    const h = s.getNode().getImmediateChild(o);
                    let e;
                    if (Ce(i)) e = r;
                    else {
                      const u = d.getCompleteChild(o);
                      e =
                        null != u
                          ? ".priority" === ye(i) && u.getChild(xe(i)).isEmpty()
                            ? u
                            : u.updateChild(i, r)
                          : ot.EMPTY_NODE;
                    }
                    l = h.equals(e)
                      ? n
                      : Ht(
                          n,
                          t.filter.updateChild(s.getNode(), o, e, i, d, a),
                          s.isFullyInitialized(),
                          t.filter.filtersNodes()
                        );
                  }
                }
                return l;
              }
              function Tn(e, t) {
                return e.eventCache.isCompleteForChild(t);
              }
              function Sn(e, n, t) {
                return (
                  t.foreach((e, t) => {
                    n = n.updateChild(e, t);
                  }),
                  n
                );
              }
              function Pn(i, r, e, t, o, a, s, l) {
                if (
                  r.serverCache.getNode().isEmpty() &&
                  !r.serverCache.isFullyInitialized()
                )
                  return r;
                let c = r,
                  n;
                n = Ce(e) ? t : new Qt(null).setTree(e, t);
                const d = r.serverCache.getNode();
                return (
                  n.children.inorderTraversal((e, t) => {
                    d.hasChild(e) &&
                      ((t = Sn(
                        0,
                        r.serverCache.getNode().getImmediateChild(e),
                        t
                      )),
                      (c = En(i, c, new fe(e), t, o, a, s, l)));
                  }),
                  n.children.inorderTraversal((e, t) => {
                    var n =
                      !r.serverCache.isCompleteForChild(e) && null === t.value;
                    d.hasChild(e) ||
                      n ||
                      ((t = Sn(
                        0,
                        r.serverCache.getNode().getImmediateChild(e),
                        t
                      )),
                      (c = En(i, c, new fe(e), t, o, a, s, l)));
                  }),
                  c
                );
              }
              class Nn {
                constructor(e, t) {
                  (this.query_ = e), (this.eventRegistrations_ = []);
                  const n = this.query_._queryParams,
                    i = new mt(n.getIndex()),
                    r = (e = n).loadsAllData()
                      ? new mt(e.getIndex())
                      : new (e.hasLimit() ? _t : bt)(e);
                  this.processor_ = { filter: r };
                  const o = t.serverCache,
                    a = t.eventCache;
                  (e = i.updateFullNode(ot.EMPTY_NODE, o.getNode(), null)),
                    (t = r.updateFullNode(ot.EMPTY_NODE, a.getNode(), null)),
                    (e = new jt(e, o.isFullyInitialized(), i.filtersNodes())),
                    (t = new jt(t, a.isFullyInitialized(), r.filtersNodes()));
                  (this.viewCache_ = Wt(t, e)),
                    (this.eventGenerator_ = new qt(this.query_));
                }
                get query() {
                  return this.query_;
                }
              }
              function Dn(e) {
                return 0 === e.eventRegistrations_.length;
              }
              function Rn(n, i, t) {
                const r = [];
                if (t) {
                  (0, g.assert)(
                    null == i,
                    "A cancel should cancel all event registrations."
                  );
                  const o = n.query._path;
                  n.eventRegistrations_.forEach((e) => {
                    e = e.createCancelEvent(t, o);
                    e && r.push(e);
                  });
                }
                if (i) {
                  let t = [];
                  for (let e = 0; e < n.eventRegistrations_.length; ++e) {
                    const a = n.eventRegistrations_[e];
                    if (a.matches(i)) {
                      if (i.hasAnyCallback()) {
                        t = t.concat(n.eventRegistrations_.slice(e + 1));
                        break;
                      }
                    } else t.push(a);
                  }
                  n.eventRegistrations_ = t;
                } else n.eventRegistrations_ = [];
                return r;
              }
              function An(e, t, n, i) {
                t.type === h.MERGE &&
                  null !== t.source.queryId &&
                  ((0, g.assert)(
                    Yt(e.viewCache_),
                    "We should always have a full cache before handling merges"
                  ),
                  (0, g.assert)(
                    $t(e.viewCache_),
                    "Missing event cache, even though we have a server cache"
                  ));
                const r = e.viewCache_,
                  o = kn(e.processor_, r, t, n, i);
                return (
                  (n = e.processor_),
                  (i = o.viewCache),
                  (0, g.assert)(
                    i.eventCache.getNode().isIndexed(n.filter.getIndex()),
                    "Event snap not indexed"
                  ),
                  (0, g.assert)(
                    i.serverCache.getNode().isIndexed(n.filter.getIndex()),
                    "Server snap not indexed"
                  ),
                  (0, g.assert)(
                    o.viewCache.serverCache.isFullyInitialized() ||
                      !r.serverCache.isFullyInitialized(),
                    "Once a server snap is complete, it should never go back"
                  ),
                  (e.viewCache_ = o.viewCache),
                  On(e, o.changes, o.viewCache.eventCache.getNode(), null)
                );
              }
              function On(e, t, n, i) {
                i = i ? [i] : e.eventRegistrations_;
                return Bt(e.eventGenerator_, t, n, i);
              }
              let Mn;
              class Ln {
                constructor() {
                  this.views = new Map();
                }
              }
              function zn(t, n, i, r) {
                var e = n.source.queryId;
                if (null !== e) {
                  e = t.views.get(e);
                  return (
                    (0, g.assert)(
                      null != e,
                      "SyncTree gave us an op for an invalid query."
                    ),
                    An(e, n, i, r)
                  );
                }
                {
                  let e = [];
                  for (const o of t.views.values())
                    e = e.concat(An(o, n, i, r));
                  return e;
                }
              }
              function Fn(e, n, i, r, o) {
                var t = n._queryIdentifier,
                  t = e.views.get(t);
                if (t) return t;
                {
                  let e = un(i, o ? r : null),
                    t = !1;
                  t =
                    !!e ||
                    ((e = r instanceof ot ? pn(i, r) : ot.EMPTY_NODE), !1);
                  o = Wt(new jt(e, t, !1), new jt(r, o, !1));
                  return new Nn(n, o);
                }
              }
              function jn(e, t, n, i, r, o) {
                o = Fn(e, t, i, r, o);
                return (
                  e.views.has(t._queryIdentifier) ||
                    e.views.set(t._queryIdentifier, o),
                  o.eventRegistrations_.push(n),
                  (function (e, t) {
                    const n = e.viewCache_.eventCache,
                      i = [];
                    if (!n.getNode().isLeafNode()) {
                      const r = n.getNode();
                      r.forEachChild(Xe, (e, t) => {
                        i.push(pt(e, t));
                      });
                    }
                    return (
                      n.isFullyInitialized() && i.push(ut(n.getNode())),
                      On(e, i, n.getNode(), t)
                    );
                  })(o, n)
                );
              }
              function qn(e, t, n, i) {
                var r = t._queryIdentifier;
                const o = [];
                let a = [];
                var s = Vn(e);
                if ("default" === r)
                  for (var [l, c] of e.views.entries())
                    (a = a.concat(Rn(c, n, i))),
                      Dn(c) &&
                        (e.views.delete(l),
                        c.query._queryParams.loadsAllData() || o.push(c.query));
                else {
                  const d = e.views.get(r);
                  d &&
                    ((a = a.concat(Rn(d, n, i))),
                    Dn(d) &&
                      (e.views.delete(r),
                      d.query._queryParams.loadsAllData() || o.push(d.query)));
                }
                return (
                  s &&
                    !Vn(e) &&
                    o.push(
                      ((0, g.assert)(Mn, "Reference.ts has not been loaded"),
                      new Mn(t._repo, t._path))
                    ),
                  { removed: o, events: a }
                );
              }
              function Bn(e) {
                const t = [];
                for (const n of e.views.values())
                  n.query._queryParams.loadsAllData() || t.push(n);
                return t;
              }
              function Un(e, t) {
                let n = null;
                for (const i of e.views.values())
                  n =
                    n ||
                    (function (e, t) {
                      const n = Yt(e.viewCache_);
                      return n &&
                        (e.query._queryParams.loadsAllData() ||
                          (!Ce(t) && !n.getImmediateChild(be(t)).isEmpty()))
                        ? n.getChild(t)
                        : null;
                    })(i, t);
                return n;
              }
              function Wn(e, t) {
                const n = t._queryParams;
                if (n.loadsAllData()) return $n(e);
                t = t._queryIdentifier;
                return e.views.get(t);
              }
              function Hn(e, t) {
                return null != Wn(e, t);
              }
              function Vn(e) {
                return null != $n(e);
              }
              function $n(e) {
                for (const t of e.views.values())
                  if (t.query._queryParams.loadsAllData()) return t;
                return null;
              }
              let Yn;
              let Gn = 1;
              class Qn {
                constructor(e) {
                  (this.listenProvider_ = e),
                    (this.syncPointTree_ = new Qt(null)),
                    (this.pendingWriteTree_ = {
                      visibleWrites: Kt.empty(),
                      allWrites: [],
                      lastWriteId: -1,
                    }),
                    (this.tagToQueryMap = new Map()),
                    (this.queryToTagMap = new Map());
                }
              }
              function Kn(e, t, n, i, r) {
                var o, a, s, l;
                return (
                  (o = e.pendingWriteTree_),
                  (a = t),
                  (s = n),
                  (l = i),
                  (i = r),
                  (0, g.assert)(
                    l > o.lastWriteId,
                    "Stacking an older write on top of newer ones"
                  ),
                  o.allWrites.push({
                    path: a,
                    snap: s,
                    writeId: l,
                    visible: (i = void 0 === i ? !0 : i),
                  }),
                  i && (o.visibleWrites = Xt(o.visibleWrites, a, s)),
                  (o.lastWriteId = l),
                  r ? ii(e, new zt(Rt(), t, n)) : []
                );
              }
              function Xn(e, t, n = !1) {
                var i = (function (t, n) {
                  for (let e = 0; e < t.allWrites.length; e++) {
                    var i = t.allWrites[e];
                    if (i.writeId === n) return i;
                  }
                  return null;
                })(e.pendingWriteTree_, t);
                if (ln(e.pendingWriteTree_, t)) {
                  let t = new Qt(null);
                  return (
                    null != i.snap
                      ? (t = t.set(me(), !0))
                      : z(i.children, (e) => {
                          t = t.set(new fe(e), !0);
                        }),
                    ii(e, new Mt(i.path, t, n))
                  );
                }
                return [];
              }
              function Jn(e, t, n) {
                return ii(e, new zt(At(), t, n));
              }
              function Zn(n, e, t, i, r = !1) {
                var o = e._path,
                  a = n.syncPointTree_.get(o);
                let s = [];
                if (a && ("default" === e._queryIdentifier || Hn(a, e))) {
                  t = qn(a, e, t, i);
                  0 === a.views.size &&
                    (n.syncPointTree_ = n.syncPointTree_.remove(o));
                  const h = t.removed;
                  if (((s = t.events), !r)) {
                    (t =
                      -1 !== h.findIndex((e) => e._queryParams.loadsAllData())),
                      (r = n.syncPointTree_.findOnPath(o, (e, t) => Vn(t)));
                    if (t && !r) {
                      const u = n.syncPointTree_.subtree(o);
                      if (!u.isEmpty()) {
                        var l = u.fold((e, t, i) => {
                          if (t && Vn(t)) return [$n(t)];
                          {
                            let n = [];
                            return (
                              t && (n = Bn(t)),
                              z(i, (e, t) => {
                                n = n.concat(t);
                              }),
                              n
                            );
                          }
                        });
                        for (let e = 0; e < l.length; ++e) {
                          var c = l[e],
                            d = c.query,
                            c = oi(n, c);
                          n.listenProvider_.startListening(
                            hi(d),
                            ai(n, d),
                            c.hashFn,
                            c.onComplete
                          );
                        }
                      }
                    }
                    !r &&
                      0 < h.length &&
                      !i &&
                      (t
                        ? n.listenProvider_.stopListening(hi(e), null)
                        : h.forEach((e) => {
                            var t = n.queryToTagMap.get(si(e));
                            n.listenProvider_.stopListening(hi(e), t);
                          }));
                  }
                  !(function (t, n) {
                    for (let e = 0; e < n.length; ++e) {
                      const o = n[e];
                      var i, r;
                      o._queryParams.loadsAllData() ||
                        ((i = si(o)),
                        (r = t.queryToTagMap.get(i)),
                        t.queryToTagMap.delete(i),
                        t.tagToQueryMap.delete(r));
                    }
                  })(n, h);
                }
                return s;
              }
              function ei(e, t, n, i) {
                var r = li(e, i);
                if (null == r) return [];
                (i = ci(r)), (r = i.path), (i = i.queryId), (t = Ee(r, t));
                return di(e, r, new zt(Ot(i), t, n));
              }
              function ti(e, t, n, i = !1) {
                const r = t._path;
                let o = null,
                  a = !1;
                e.syncPointTree_.foreachOnPath(r, (e, t) => {
                  e = Ee(e, r);
                  (o = o || Un(t, e)), (a = a || Vn(t));
                });
                let s = e.syncPointTree_.get(r);
                s
                  ? ((a = a || Vn(s)), (o = o || Un(s, me())))
                  : ((s = new Ln()),
                    (e.syncPointTree_ = e.syncPointTree_.set(r, s)));
                let l;
                if (null != o) l = !0;
                else {
                  (l = !1), (o = ot.EMPTY_NODE);
                  const p = e.syncPointTree_.subtree(r);
                  p.foreachChild((e, t) => {
                    t = Un(t, me());
                    t && (o = o.updateImmediateChild(e, t));
                  });
                }
                var c,
                  d = Hn(s, t);
                d ||
                  t._queryParams.loadsAllData() ||
                  ((h = si(t)),
                  (0, g.assert)(
                    !e.queryToTagMap.has(h),
                    "View does not exist, but we have a tag"
                  ),
                  (c = Gn++),
                  e.queryToTagMap.set(h, c),
                  e.tagToQueryMap.set(c, h));
                var h = sn(e.pendingWriteTree_, r);
                let u = jn(s, t, n, h, o, l);
                return (
                  d ||
                    a ||
                    i ||
                    ((i = Wn(s, t)),
                    (u = u.concat(
                      (function (t, e, n) {
                        const i = e._path,
                          r = ai(t, e),
                          o = oi(t, n),
                          a = t.listenProvider_.startListening(
                            hi(e),
                            r,
                            o.hashFn,
                            o.onComplete
                          ),
                          s = t.syncPointTree_.subtree(i);
                        if (r)
                          (0, g.assert)(
                            !Vn(s.value),
                            "If we're adding a query, it shouldn't be shadowed"
                          );
                        else {
                          var l = s.fold((e, t, i) => {
                            if (!Ce(e) && t && Vn(t)) return [$n(t).query];
                            {
                              let n = [];
                              return (
                                t && (n = n.concat(Bn(t).map((e) => e.query))),
                                z(i, (e, t) => {
                                  n = n.concat(t);
                                }),
                                n
                              );
                            }
                          });
                          for (let e = 0; e < l.length; ++e) {
                            var c = l[e];
                            t.listenProvider_.stopListening(hi(c), ai(t, c));
                          }
                        }
                        return a;
                      })(e, t, i)
                    ))),
                  u
                );
              }
              function ni(e, n, t) {
                var i = e.pendingWriteTree_,
                  e = e.syncPointTree_.findOnPath(n, (e, t) => {
                    e = Un(t, Ee(e, n));
                    if (e) return e;
                  });
                return hn(i, n, e, t, !0);
              }
              function ii(e, t) {
                return (function t(n, i, r, o) {
                  {
                    if (Ce(n.path)) return ri(n, i, r, o);
                    {
                      const a = i.get(me());
                      null == r && null != a && (r = Un(a, me()));
                      let e = [];
                      const s = be(n.path),
                        l = n.operationForChild(s),
                        c = i.children.get(s);
                      if (c && l) {
                        const d = r ? r.getImmediateChild(s) : null,
                          h = _n(o, s);
                        e = e.concat(t(l, c, d, h));
                      }
                      return a && (e = e.concat(zn(a, n, o, r))), e;
                    }
                  }
                })(t, e.syncPointTree_, null, sn(e.pendingWriteTree_, me()));
              }
              function ri(r, e, o, a) {
                var t = e.get(me());
                null == o && null != t && (o = Un(t, me()));
                let s = [];
                return (
                  e.children.inorderTraversal((e, t) => {
                    var n = o ? o.getImmediateChild(e) : null,
                      i = _n(a, e),
                      e = r.operationForChild(e);
                    e && (s = s.concat(ri(e, t, n, i)));
                  }),
                  t && (s = s.concat(zn(t, r, a, o))),
                  s
                );
              }
              function oi(i, t) {
                const r = t.query,
                  o = ai(i, r);
                return {
                  hashFn: () => {
                    const e =
                      t.viewCache_.serverCache.getNode() || ot.EMPTY_NODE;
                    return e.hash();
                  },
                  onComplete: (e) => {
                    if ("ok" === e)
                      return o
                        ? (function (e, t, n) {
                            var i = li(e, n);
                            if (i) {
                              (n = ci(i)),
                                (i = n.path),
                                (n = n.queryId),
                                (t = Ee(i, t));
                              return di(e, i, new Lt(Ot(n), t));
                            }
                            return [];
                          })(i, r._path, o)
                        : ((t = i), (n = r._path), ii(t, new Lt(At(), n)));
                    var t,
                      n,
                      e = (function (e, t) {
                        let n = "Unknown Error";
                        "too_big" === e
                          ? (n =
                              "The data requested exceeds the maximum size that can be accessed with a single request.")
                          : "permission_denied" === e
                          ? (n =
                              "Client doesn't have permission to access the desired data.")
                          : "unavailable" === e &&
                            (n = "The service is unavailable");
                        const i = new Error(
                          e + " at " + t._path.toString() + ": " + n
                        );
                        return (i.code = e.toUpperCase()), i;
                      })(e, r);
                    return Zn(i, r, null, e);
                  },
                };
              }
              function ai(e, t) {
                t = si(t);
                return e.queryToTagMap.get(t);
              }
              function si(e) {
                return e._path.toString() + "$" + e._queryIdentifier;
              }
              function li(e, t) {
                return e.tagToQueryMap.get(t);
              }
              function ci(e) {
                var t = e.indexOf("$");
                return (
                  (0, g.assert)(-1 !== t && t < e.length - 1, "Bad queryKey."),
                  { queryId: e.substr(t + 1), path: new fe(e.substr(0, t)) }
                );
              }
              function di(e, t, n) {
                var i = e.syncPointTree_.get(t);
                return (
                  (0, g.assert)(
                    i,
                    "Missing sync point for query tag that we're tracking"
                  ),
                  zn(i, n, sn(e.pendingWriteTree_, t), null)
                );
              }
              function hi(e) {
                return e._queryParams.loadsAllData() &&
                  !e._queryParams.isDefault()
                  ? ((0, g.assert)(Yn, "Reference.ts has not been loaded"),
                    new Yn(e._repo, e._path))
                  : e;
              }
              class ui {
                constructor(e) {
                  this.node_ = e;
                }
                getImmediateChild(e) {
                  e = this.node_.getImmediateChild(e);
                  return new ui(e);
                }
                node() {
                  return this.node_;
                }
              }
              class pi {
                constructor(e, t) {
                  (this.syncTree_ = e), (this.path_ = t);
                }
                getImmediateChild(e) {
                  e = ke(this.path_, e);
                  return new pi(this.syncTree_, e);
                }
                node() {
                  return ni(this.syncTree_, this.path_);
                }
              }
              function gi(e) {
                return (
                  ((e = e || {}).timestamp =
                    e.timestamp || new Date().getTime()),
                  e
                );
              }
              function fi(e, t, n) {
                return e && "object" == typeof e
                  ? ((0, g.assert)(
                      ".sv" in e,
                      "Unexpected leaf node or priority contents"
                    ),
                    "string" == typeof e[".sv"]
                      ? mi(e[".sv"], t, n)
                      : "object" == typeof e[".sv"]
                      ? bi(e[".sv"], t)
                      : void (0, g.assert)(
                          !1,
                          "Unexpected server value: " +
                            JSON.stringify(e, null, 2)
                        ))
                  : e;
              }
              const mi = function (e, t, n) {
                  if ("timestamp" === e) return n.timestamp;
                  (0, g.assert)(!1, "Unexpected server value: " + e);
                },
                bi = function (e, t, n) {
                  e.hasOwnProperty("increment") ||
                    (0, g.assert)(
                      !1,
                      "Unexpected server value: " + JSON.stringify(e, null, 2)
                    );
                  e = e.increment;
                  "number" != typeof e &&
                    (0, g.assert)(!1, "Unexpected increment value: " + e);
                  const i = t.node();
                  if (
                    ((0, g.assert)(
                      null !== i && void 0 !== i,
                      "Expected ChildrenNode.EMPTY_NODE for nulls"
                    ),
                    !i.isLeafNode())
                  )
                    return e;
                  const r = i;
                  t = r.getValue();
                  return "number" != typeof t ? e : t + e;
                },
                _i = function (e, t, n, i) {
                  return yi(t, new pi(n, e), i);
                },
                vi = function (e, t, n) {
                  return yi(e, new ui(t), n);
                };
              function yi(e, i, r) {
                var t = e.getPriority().val(),
                  n = fi(t, i.getImmediateChild(".priority"), r);
                let o;
                if (e.isLeafNode()) {
                  const a = e;
                  t = fi(a.getValue(), i, r);
                  return t !== a.getValue() || n !== a.getPriority().val()
                    ? new Ge(t, ct(n))
                    : e;
                }
                {
                  const s = e;
                  return (
                    (o = s),
                    n !== s.getPriority().val() &&
                      (o = o.updatePriority(new Ge(n))),
                    s.forEachChild(Xe, (e, t) => {
                      var n = yi(t, i.getImmediateChild(e), r);
                      n !== t && (o = o.updateImmediateChild(e, n));
                    }),
                    o
                  );
                }
              }
              class wi {
                constructor(
                  e = "",
                  t = null,
                  n = { children: {}, childCount: 0 }
                ) {
                  (this.name = e), (this.parent = t), (this.node = n);
                }
              }
              function xi(e, t) {
                let n = t instanceof fe ? t : new fe(t),
                  i = e,
                  r = be(n);
                for (; null !== r; ) {
                  var o = (0, g.safeGet)(i.node.children, r) || {
                    children: {},
                    childCount: 0,
                  };
                  (i = new wi(r, i, o)), (n = ve(n)), (r = be(n));
                }
                return i;
              }
              function ki(e) {
                return e.node.value;
              }
              function Ci(e, t) {
                (e.node.value = t), Si(e);
              }
              function Ei(e) {
                return 0 < e.node.childCount;
              }
              function Ii(n, i) {
                z(n.node.children, (e, t) => {
                  i(new wi(e, n, t));
                });
              }
              function Ti(e) {
                return new fe(
                  null === e.parent ? e.name : Ti(e.parent) + "/" + e.name
                );
              }
              function Si(e) {
                var t, n, i, r;
                null !== e.parent &&
                  ((t = e.parent),
                  (n = e.name),
                  (r = (function (e) {
                    return void 0 === ki(e) && !Ei(e);
                  })((i = e))),
                  (e = (0, g.contains)(t.node.children, n)),
                  r && e
                    ? (delete t.node.children[n], t.node.childCount--, Si(t))
                    : r ||
                      e ||
                      ((t.node.children[n] = i.node),
                      t.node.childCount++,
                      Si(t)));
              }
              const Pi = /[\[\].#$\/\u0000-\u001F\u007F]/,
                Ni = /[\[\].#$\u0000-\u001F\u007F]/,
                Di = 10485760,
                Ri = function (e) {
                  return "string" == typeof e && 0 !== e.length && !Pi.test(e);
                },
                Ai = function (e) {
                  return "string" == typeof e && 0 !== e.length && !Ni.test(e);
                },
                Oi = function (e) {
                  return (
                    null === e ||
                    "string" == typeof e ||
                    ("number" == typeof e && !A(e)) ||
                    (e && "object" == typeof e && (0, g.contains)(e, ".sv"))
                  );
                },
                Mi = function (e, t, n, i) {
                  (i && void 0 === t) ||
                    Li((0, g.errorPrefix)(e, "value"), t, n);
                },
                Li = function (o, e, t) {
                  const a = t instanceof fe ? new Pe(t, o) : t;
                  if (void 0 === e)
                    throw new Error(o + "contains undefined " + De(a));
                  if ("function" == typeof e)
                    throw new Error(
                      o +
                        "contains a function " +
                        De(a) +
                        " with contents = " +
                        e.toString()
                    );
                  if (A(e))
                    throw new Error(
                      o + "contains " + e.toString() + " " + De(a)
                    );
                  if (
                    "string" == typeof e &&
                    e.length > Di / 3 &&
                    (0, g.stringLength)(e) > Di
                  )
                    throw new Error(
                      o +
                        "contains a string greater than " +
                        Di +
                        " utf8 bytes " +
                        De(a) +
                        " ('" +
                        e.substring(0, 50) +
                        "...')"
                    );
                  if (e && "object" == typeof e) {
                    let i = !1,
                      r = !1;
                    if (
                      (z(e, (e, t) => {
                        if (".value" === e) i = !0;
                        else if (
                          ".priority" !== e &&
                          ".sv" !== e &&
                          ((r = !0), !Ri(e))
                        )
                          throw new Error(
                            o +
                              " contains an invalid key (" +
                              e +
                              ") " +
                              De(a) +
                              '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                          );
                        var n;
                        (n = a),
                          (e = e),
                          0 < n.parts_.length && (n.byteLength_ += 1),
                          n.parts_.push(e),
                          (n.byteLength_ += (0, g.stringLength)(e)),
                          Ne(n),
                          Li(o, t, a),
                          (n = a),
                          (t = n.parts_.pop()),
                          (n.byteLength_ -= (0, g.stringLength)(t)),
                          0 < n.parts_.length && --n.byteLength_;
                      }),
                      i && r)
                    )
                      throw new Error(
                        o +
                          ' contains ".value" child ' +
                          De(a) +
                          " in addition to actual children."
                      );
                  }
                },
                zi = function (e, t, i, n) {
                  if (!n || void 0 !== t) {
                    const r = (0, g.errorPrefix)(e, "values");
                    if (!t || "object" != typeof t || Array.isArray(t))
                      throw new Error(
                        r +
                          " must be an object containing the children to replace."
                      );
                    const o = [];
                    z(t, (e, t) => {
                      const n = new fe(e);
                      if ((Li(r, t, ke(i, n)), ".priority" === ye(n) && !Oi(t)))
                        throw new Error(
                          r +
                            "contains an invalid value for '" +
                            n.toString() +
                            "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
                        );
                      o.push(n);
                    }),
                      (function (t, e) {
                        let n, i;
                        for (n = 0; n < e.length; n++) {
                          i = e[n];
                          var r = we(i);
                          for (let e = 0; e < r.length; e++)
                            if (
                              (".priority" !== r[e] || e !== r.length - 1) &&
                              !Ri(r[e])
                            )
                              throw new Error(
                                t +
                                  "contains an invalid key (" +
                                  r[e] +
                                  ") in path " +
                                  i.toString() +
                                  '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                              );
                        }
                        e.sort(Ie);
                        let o = null;
                        for (n = 0; n < e.length; n++) {
                          if (((i = e[n]), null !== o && Se(o, i)))
                            throw new Error(
                              t +
                                "contains a path " +
                                o.toString() +
                                " that is ancestor of another path " +
                                i.toString()
                            );
                          o = i;
                        }
                      })(r, o);
                  }
                },
                Fi = function (e, t, n) {
                  if (!n || void 0 !== t) {
                    if (A(t))
                      throw new Error(
                        (0, g.errorPrefix)(e, "priority") +
                          "is " +
                          t.toString() +
                          ", but must be a valid Firebase priority (a string, finite number, server value, or null)."
                      );
                    if (!Oi(t))
                      throw new Error(
                        (0, g.errorPrefix)(e, "priority") +
                          "must be a valid Firebase priority (a string, finite number, server value, or null)."
                      );
                  }
                },
                ji = function (e, t, n, i) {
                  if (!((i && void 0 === n) || Ri(n)))
                    throw new Error(
                      (0, g.errorPrefix)(e, t) +
                        'was an invalid key = "' +
                        n +
                        '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
                    );
                },
                qi = function (e, t, n, i) {
                  if (!((i && void 0 === n) || Ai(n)))
                    throw new Error(
                      (0, g.errorPrefix)(e, t) +
                        'was an invalid path = "' +
                        n +
                        '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
                    );
                };
              uo._validatePathString = qi;
              const Bi = function (e, t, n, i) {
                  (n = n && n.replace(/^\/*\.info(\/|$)/, "/")), qi(e, t, n, i);
                },
                Ui = function (e, t) {
                  if (".info" === be(t))
                    throw new Error(
                      e + " failed = Can't modify data under /.info/"
                    );
                };
              uo._validateWritablePath = Ui;
              const Wi = function (e, t) {
                var n = t.path.toString();
                if (
                  "string" != typeof t.repoInfo.host ||
                  0 === t.repoInfo.host.length ||
                  (!Ri(t.repoInfo.namespace) &&
                    "localhost" !== t.repoInfo.host.split(":")[0]) ||
                  (0 !== n.length &&
                    ((n = (n = n) && n.replace(/^\/*\.info(\/|$)/, "/")),
                    !Ai(n)))
                )
                  throw new Error(
                    (0, g.errorPrefix)(e, "url") +
                      'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
                  );
              };
              class Hi {
                constructor() {
                  (this.eventLists_ = []), (this.recursionDepth_ = 0);
                }
              }
              function Vi(t, n) {
                let i = null;
                for (let e = 0; e < n.length; e++) {
                  const o = n[e];
                  var r = o.getPath();
                  null === i ||
                    Te(r, i.path) ||
                    (t.eventLists_.push(i), (i = null)),
                    null === i && (i = { events: [], path: r }),
                    i.events.push(o);
                }
                i && t.eventLists_.push(i);
              }
              function $i(e, t, n) {
                Vi(e, n), Gi(e, (e) => Te(e, t));
              }
              function Yi(e, t, n) {
                Vi(e, n), Gi(e, (e) => Se(e, t) || Se(t, e));
              }
              function Gi(t, n) {
                t.recursionDepth_++;
                let i = !0;
                for (let e = 0; e < t.eventLists_.length; e++) {
                  var r = t.eventLists_[e];
                  r &&
                    (n(r.path)
                      ? ((function (t) {
                          for (let e = 0; e < t.events.length; e++) {
                            const i = t.events[e];
                            var n;
                            null !== i &&
                              ((t.events[e] = null),
                              (n = i.getEventRunner()),
                              w && N("event: " + i.toString()),
                              H(n));
                          }
                        })(t.eventLists_[e]),
                        (t.eventLists_[e] = null))
                      : (i = !1));
                }
                i && (t.eventLists_ = []), t.recursionDepth_--;
              }
              const Qi = "repo_interrupt",
                Ki = 25;
              class Xi {
                constructor(e, t, n, i) {
                  (this.repoInfo_ = e),
                    (this.forceRestClient_ = t),
                    (this.authTokenProvider_ = n),
                    (this.appCheckProvider_ = i),
                    (this.dataUpdateCount = 0),
                    (this.statsListener_ = null),
                    (this.eventQueue_ = new Hi()),
                    (this.nextWriteId_ = 1),
                    (this.interceptServerDataCallback_ = null),
                    (this.onDisconnect_ = Tt()),
                    (this.transactionQueueTree_ = new wi()),
                    (this.persistentConnection_ = null),
                    (this.key = this.repoInfo_.toURLString());
                }
                toString() {
                  return (
                    (this.repoInfo_.secure ? "https://" : "http://") +
                    this.repoInfo_.host
                  );
                }
              }
              function Ji(a, e, t) {
                if (
                  ((a.stats_ = ne(a.repoInfo_)),
                  a.forceRestClient_ ||
                    (function () {
                      const e =
                        ("object" == typeof window &&
                          window.navigator &&
                          window.navigator.userAgent) ||
                        "";
                      return (
                        0 <=
                        e.search(
                          /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
                        )
                      );
                    })())
                )
                  (a.server_ = new Et(
                    a.repoInfo_,
                    (e, t, n, i) => {
                      tr(a, e, t, n, i);
                    },
                    a.authTokenProvider_,
                    a.appCheckProvider_
                  )),
                    setTimeout(() => nr(a, !0), 0);
                else {
                  if (null != t) {
                    if ("object" != typeof t)
                      throw new Error(
                        "Only objects are supported for option databaseAuthVariableOverride"
                      );
                    try {
                      (0, g.stringify)(t);
                    } catch (e) {
                      throw new Error("Invalid authOverride provided: " + e);
                    }
                  }
                  (a.persistentConnection_ = new Ae(
                    a.repoInfo_,
                    e,
                    (e, t, n, i) => {
                      tr(a, e, t, n, i);
                    },
                    (e) => {
                      nr(a, e);
                    },
                    (e) => {
                      var n;
                      (n = a),
                        z(e, (e, t) => {
                          ir(n, e, t);
                        });
                    },
                    a.authTokenProvider_,
                    a.appCheckProvider_,
                    t
                  )),
                    (a.server_ = a.persistentConnection_);
                }
                a.authTokenProvider_.addTokenChangeListener((e) => {
                  a.server_.refreshAuthToken(e);
                }),
                  a.appCheckProvider_.addTokenChangeListener((e) => {
                    a.server_.refreshAppCheckToken(e.token);
                  }),
                  (a.statsReporter_ =
                    ((e = a.repoInfo_),
                    (t = () => new Dt(a.stats_, a.server_)),
                    (e = e.toString()),
                    te[e] || (te[e] = t()),
                    te[e])),
                  (a.infoData_ = new It()),
                  (a.infoSyncTree_ = new Qn({
                    startListening: (e, t, n, i) => {
                      let r = [];
                      const o = a.infoData_.getNode(e._path);
                      return (
                        o.isEmpty() ||
                          ((r = Jn(a.infoSyncTree_, e._path, o)),
                          setTimeout(() => {
                            i("ok");
                          }, 0)),
                        r
                      );
                    },
                    stopListening: () => {},
                  })),
                  ir(a, "connected", !1),
                  (a.serverSyncTree_ = new Qn({
                    startListening: (n, e, t, i) => (
                      a.server_.listen(n, t, e, (e, t) => {
                        t = i(e, t);
                        Yi(a.eventQueue_, n._path, t);
                      }),
                      []
                    ),
                    stopListening: (e, t) => {
                      a.server_.unlisten(e, t);
                    },
                  }));
              }
              function Zi(e) {
                const t = e.infoData_.getNode(new fe(".info/serverTimeOffset"));
                e = t.val() || 0;
                return new Date().getTime() + e;
              }
              function er(e) {
                return gi({ timestamp: Zi(e) });
              }
              function tr(e, t, n, i, r) {
                e.dataUpdateCount++;
                var o,
                  a = new fe(t);
                n = e.interceptServerDataCallback_
                  ? e.interceptServerDataCallback_(t, n)
                  : n;
                let s = [];
                s = r
                  ? i
                    ? ((t = (0, g.map)(n, (e) => ct(e))),
                      (function (e, t, n, i) {
                        var r = li(e, i);
                        if (r) {
                          (i = ci(r)),
                            (r = i.path),
                            (i = i.queryId),
                            (t = Ee(r, t)),
                            (n = Qt.fromObject(n));
                          return di(e, r, new Ft(Ot(i), t, n));
                        }
                        return [];
                      })(e.serverSyncTree_, a, t, r))
                    : ((o = ct(n)), ei(e.serverSyncTree_, a, o, r))
                  : i
                  ? ((o = (0, g.map)(n, (e) => ct(e))),
                    (r = e.serverSyncTree_),
                    (i = a),
                    (o = o),
                    (o = Qt.fromObject(o)),
                    ii(r, new Ft(At(), i, o)))
                  : ((n = ct(n)), Jn(e.serverSyncTree_, a, n));
                let l = a;
                0 < s.length && (l = gr(e, a)), Yi(e.eventQueue_, l, s);
              }
              function nr(e, t) {
                ir(e, "connected", t),
                  !1 === t &&
                    (function (n) {
                      dr(n, "onDisconnectEvents");
                      const i = er(n),
                        r = Tt();
                      Pt(n.onDisconnect_, me(), (e, t) => {
                        t = _i(e, t, n.serverSyncTree_, i);
                        St(r, e, t);
                      });
                      let o = [];
                      Pt(r, me(), (e, t) => {
                        o = o.concat(Jn(n.serverSyncTree_, e, t));
                        e = _r(n, e);
                        gr(n, e);
                      }),
                        (n.onDisconnect_ = Tt()),
                        Yi(n.eventQueue_, me(), o);
                    })(e);
              }
              function ir(e, t, n) {
                (t = new fe("/.info/" + t)), (n = ct(n));
                e.infoData_.updateSnapshot(t, n);
                n = Jn(e.infoSyncTree_, t, n);
                Yi(e.eventQueue_, t, n);
              }
              function rr(e) {
                return e.nextWriteId_++;
              }
              function or(i, r, e, t, o) {
                dr(i, "set", { path: r.toString(), value: e, priority: t });
                var n = er(i);
                const a = ct(e, t);
                (t = ni(i.serverSyncTree_, r)), (n = vi(a, t, n));
                const s = rr(i);
                n = Kn(i.serverSyncTree_, r, n, s, !0);
                Vi(i.eventQueue_, n),
                  i.server_.put(r.toString(), a.val(!0), (e, t) => {
                    var n = "ok" === e;
                    n || R("set at " + r + " failed: " + e);
                    n = Xn(i.serverSyncTree_, s, !n);
                    Yi(i.eventQueue_, r, n), hr(0, o, e, t);
                  });
                n = _r(i, r);
                gr(i, n), Yi(i.eventQueue_, n, []);
              }
              function ar(n, i, r) {
                n.server_.onDisconnectCancel(i.toString(), (e, t) => {
                  "ok" === e &&
                    !(function e(n, t) {
                      if (Ce(t))
                        return (n.value = null), n.children.clear(), !0;
                      if (null !== n.value) {
                        if (n.value.isLeafNode()) return !1;
                        {
                          const r = n.value;
                          return (
                            (n.value = null),
                            r.forEachChild(Xe, (e, t) => {
                              St(n, new fe(e), t);
                            }),
                            e(n, t)
                          );
                        }
                      }
                      if (0 < n.children.size) {
                        var i = be(t);
                        return (
                          (t = ve(t)),
                          n.children.has(i) &&
                            e(n.children.get(i), t) &&
                            n.children.delete(i),
                          0 === n.children.size
                        );
                      }
                      return !0;
                    })(n.onDisconnect_, i),
                    hr(0, r, e, t);
                });
              }
              function sr(n, i, e, r) {
                const o = ct(e);
                n.server_.onDisconnectPut(i.toString(), o.val(!0), (e, t) => {
                  "ok" === e && St(n.onDisconnect_, i, o), hr(0, r, e, t);
                });
              }
              function lr(e, t, n) {
                let i;
                (i =
                  ".info" === be(t._path)
                    ? Zn(e.infoSyncTree_, t, n)
                    : Zn(e.serverSyncTree_, t, n)),
                  $i(e.eventQueue_, t._path, i);
              }
              function cr(e) {
                e.persistentConnection_ &&
                  e.persistentConnection_.interrupt(Qi);
              }
              function dr(e, ...t) {
                let n = "";
                e.persistentConnection_ &&
                  (n = e.persistentConnection_.id + ":"),
                  N(n, ...t);
              }
              function hr(e, i, r, o) {
                i &&
                  H(() => {
                    if ("ok" === r) i(null);
                    else {
                      var t = (r || "error").toUpperCase();
                      let e = t;
                      o && (e += ": " + o);
                      const n = new Error(e);
                      (n.code = t), i(n);
                    }
                  });
              }
              function ur(e, t, n) {
                return ni(e.serverSyncTree_, t, n) || ot.EMPTY_NODE;
              }
              function pr(t, e = t.transactionQueueTree_) {
                if ((e || br(t, e), ki(e))) {
                  const n = mr(t, e);
                  (0, g.assert)(
                    0 < n.length,
                    "Sending zero length transaction queue"
                  ),
                    n.every((e) => 0 === e.status) &&
                      (function (r, o, a) {
                        const e = a.map((e) => e.currentWriteId),
                          t = ur(r, o, e);
                        let n = t;
                        var i = t.hash();
                        for (let e = 0; e < a.length; e++) {
                          const d = a[e];
                          (0, g.assert)(
                            0 === d.status,
                            "tryToSendTransactionQueue_: items in queue should all be run."
                          ),
                            (d.status = 1),
                            d.retryCount++;
                          var s = Ee(o, d.path);
                          n = n.updateChild(s, d.currentOutputSnapshotRaw);
                        }
                        const l = n.val(!0),
                          c = o;
                        r.server_.put(
                          c.toString(),
                          l,
                          (t) => {
                            dr(r, "transaction put response", {
                              path: c.toString(),
                              status: t,
                            });
                            let n = [];
                            if ("ok" === t) {
                              const i = [];
                              for (let e = 0; e < a.length; e++)
                                (a[e].status = 2),
                                  (n = n.concat(
                                    Xn(r.serverSyncTree_, a[e].currentWriteId)
                                  )),
                                  a[e].onComplete &&
                                    i.push(() =>
                                      a[e].onComplete(
                                        null,
                                        !0,
                                        a[e].currentOutputSnapshotResolved
                                      )
                                    ),
                                  a[e].unwatcher();
                              br(r, xi(r.transactionQueueTree_, o)),
                                pr(r, r.transactionQueueTree_),
                                Yi(r.eventQueue_, o, n);
                              for (let e = 0; e < i.length; e++) H(i[e]);
                            } else {
                              if ("datastale" === t)
                                for (let e = 0; e < a.length; e++)
                                  3 === a[e].status
                                    ? (a[e].status = 4)
                                    : (a[e].status = 0);
                              else {
                                R(
                                  "transaction at " +
                                    c.toString() +
                                    " failed: " +
                                    t
                                );
                                for (let e = 0; e < a.length; e++)
                                  (a[e].status = 4), (a[e].abortReason = t);
                              }
                              gr(r, o);
                            }
                          },
                          i
                        );
                      })(t, Ti(e), n);
                } else
                  Ei(e) &&
                    Ii(e, (e) => {
                      pr(t, e);
                    });
              }
              function gr(e, t) {
                var n = fr(e, t),
                  t = Ti(n);
                return (
                  (function (r, o, a) {
                    if (0 !== o.length) {
                      const c = [];
                      let i = [];
                      const e = o.filter((e) => 0 === e.status),
                        d = e.map((e) => e.currentWriteId);
                      for (let n = 0; n < o.length; n++) {
                        const h = o[n];
                        var s = Ee(a, h.path);
                        let e = !1,
                          t;
                        if (
                          ((0, g.assert)(
                            null !== s,
                            "rerunTransactionsUnderNode_: relativePath should not be null."
                          ),
                          4 === h.status)
                        )
                          (e = !0),
                            (t = h.abortReason),
                            (i = i.concat(
                              Xn(r.serverSyncTree_, h.currentWriteId, !0)
                            ));
                        else if (0 === h.status)
                          if (h.retryCount >= Ki)
                            (e = !0),
                              (t = "maxretry"),
                              (i = i.concat(
                                Xn(r.serverSyncTree_, h.currentWriteId, !0)
                              ));
                          else {
                            const u = ur(r, h.path, d);
                            h.currentInputSnapshot = u;
                            var l = o[n].update(u.val());
                            if (void 0 !== l) {
                              Li(
                                "transaction failed: Data returned ",
                                l,
                                h.path
                              );
                              let e = ct(l);
                              ("object" == typeof l &&
                                null != l &&
                                (0, g.contains)(l, ".priority")) ||
                                (e = e.updatePriority(u.getPriority()));
                              (s = h.currentWriteId),
                                (l = er(r)),
                                (l = vi(e, u, l));
                              (h.currentOutputSnapshotRaw = e),
                                (h.currentOutputSnapshotResolved = l),
                                (h.currentWriteId = rr(r)),
                                d.splice(d.indexOf(s), 1),
                                (i = i.concat(
                                  Kn(
                                    r.serverSyncTree_,
                                    h.path,
                                    l,
                                    h.currentWriteId,
                                    h.applyLocally
                                  )
                                )),
                                (i = i.concat(Xn(r.serverSyncTree_, s, !0)));
                            } else
                              (e = !0),
                                (t = "nodata"),
                                (i = i.concat(
                                  Xn(r.serverSyncTree_, h.currentWriteId, !0)
                                ));
                          }
                        Yi(r.eventQueue_, a, i),
                          (i = []),
                          e &&
                            ((o[n].status = 2),
                            (function (e) {
                              setTimeout(e, Math.floor(0));
                            })(o[n].unwatcher),
                            o[n].onComplete &&
                              ("nodata" === t
                                ? c.push(() =>
                                    o[n].onComplete(
                                      null,
                                      !1,
                                      o[n].currentInputSnapshot
                                    )
                                  )
                                : c.push(() =>
                                    o[n].onComplete(new Error(t), !1, null)
                                  )));
                      }
                      br(r, r.transactionQueueTree_);
                      for (let e = 0; e < c.length; e++) H(c[e]);
                      pr(r, r.transactionQueueTree_);
                    }
                  })(e, mr(e, n), t),
                  t
                );
              }
              function fr(e, t) {
                let n,
                  i = e.transactionQueueTree_;
                for (n = be(t); null !== n && void 0 === ki(i); )
                  (i = xi(i, n)), (t = ve(t)), (n = be(t));
                return i;
              }
              function mr(e, t) {
                const n = [];
                return (
                  (function t(n, e, i) {
                    const r = ki(e);
                    if (r) for (let e = 0; e < r.length; e++) i.push(r[e]);
                    Ii(e, (e) => {
                      t(n, e, i);
                    });
                  })(e, t, n),
                  n.sort((e, t) => e.order - t.order),
                  n
                );
              }
              function br(t, e) {
                const n = ki(e);
                if (n) {
                  let t = 0;
                  for (let e = 0; e < n.length; e++)
                    2 !== n[e].status && ((n[t] = n[e]), t++);
                  (n.length = t), Ci(e, 0 < n.length ? n : void 0);
                }
                Ii(e, (e) => {
                  br(t, e);
                });
              }
              function _r(t, e) {
                var n = Ti(fr(t, e)),
                  e = xi(t.transactionQueueTree_, e);
                return (
                  (function (e, t, n) {
                    let i = n ? e : e.parent;
                    for (; null !== i; ) {
                      if (t(i)) return;
                      i = i.parent;
                    }
                  })(e, (e) => {
                    vr(t, e);
                  }),
                  vr(t, e),
                  (function t(e, n, i, r) {
                    i && !r && n(e),
                      Ii(e, (e) => {
                        t(e, n, !0, r);
                      }),
                      i && r && n(e);
                  })(e, (e) => {
                    vr(t, e);
                  }),
                  n
                );
              }
              function vr(i, e) {
                const r = ki(e);
                if (r) {
                  const o = [];
                  let t = [],
                    n = -1;
                  for (let e = 0; e < r.length; e++)
                    3 === r[e].status ||
                      (1 === r[e].status
                        ? ((0, g.assert)(
                            n === e - 1,
                            "All SENT items should be at beginning of queue."
                          ),
                          (n = e),
                          (r[e].status = 3),
                          (r[e].abortReason = "set"))
                        : ((0, g.assert)(
                            0 === r[e].status,
                            "Unexpected transaction status in abort"
                          ),
                          r[e].unwatcher(),
                          (t = t.concat(
                            Xn(i.serverSyncTree_, r[e].currentWriteId, !0)
                          )),
                          r[e].onComplete &&
                            o.push(
                              r[e].onComplete.bind(
                                null,
                                new Error("set"),
                                !1,
                                null
                              )
                            )));
                  -1 === n ? Ci(e, void 0) : (r.length = n + 1),
                    Yi(i.eventQueue_, Ti(e), t);
                  for (let e = 0; e < o.length; e++) H(o[e]);
                }
              }
              const yr = function (e, t) {
                  var n = wr(e),
                    i = n.namespace;
                  "firebase.com" === n.domain &&
                    D(
                      n.host +
                        " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
                    ),
                    (i && "undefined" !== i) ||
                      "localhost" === n.domain ||
                      D(
                        "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
                      ),
                    n.secure ||
                      ("undefined" != typeof window &&
                        window.location &&
                        window.location.protocol &&
                        -1 !== window.location.protocol.indexOf("https:") &&
                        R(
                          "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
                        ));
                  e = "ws" === n.scheme || "wss" === n.scheme;
                  return {
                    repoInfo: new X(
                      n.host,
                      n.secure,
                      i,
                      e,
                      t,
                      "",
                      i !== n.subdomain
                    ),
                    path: new fe(n.pathString),
                  };
                },
                wr = function (i) {
                  let r = "",
                    o = "",
                    a = "",
                    s = "",
                    l = "",
                    c = !0,
                    d = "https",
                    h = 443;
                  if ("string" == typeof i) {
                    let e = i.indexOf("//");
                    0 <= e &&
                      ((d = i.substring(0, e - 1)), (i = i.substring(e + 2)));
                    let t = i.indexOf("/");
                    -1 === t && (t = i.length);
                    let n = i.indexOf("?");
                    -1 === n && (n = i.length),
                      (r = i.substring(0, Math.min(t, n))),
                      t < n &&
                        (s = (function (e) {
                          let n = "";
                          var i = e.split("/");
                          for (let t = 0; t < i.length; t++)
                            if (0 < i[t].length) {
                              let e = i[t];
                              try {
                                e = decodeURIComponent(e.replace(/\+/g, " "));
                              } catch (e) {}
                              n += "/" + e;
                            }
                          return n;
                        })(i.substring(t, n)));
                    var u = (function (e) {
                      const t = {};
                      for (const i of (e =
                        "?" === e.charAt(0) ? e.substring(1) : e).split("&")) {
                        var n;
                        0 !== i.length &&
                          (2 === (n = i.split("=")).length
                            ? (t[decodeURIComponent(n[0])] = decodeURIComponent(
                                n[1]
                              ))
                            : R(
                                `Invalid query segment '${i}' in query '${e}'`
                              ));
                      }
                      return t;
                    })(i.substring(Math.min(i.length, n)));
                    (e = r.indexOf(":")),
                      0 <= e
                        ? ((c = "https" === d || "wss" === d),
                          (h = parseInt(r.substring(e + 1), 10)))
                        : (e = r.length);
                    const p = r.slice(0, e);
                    "localhost" === p.toLowerCase()
                      ? (o = "localhost")
                      : p.split(".").length <= 2
                      ? (o = p)
                      : ((i = r.indexOf(".")),
                        (a = r.substring(0, i).toLowerCase()),
                        (o = r.substring(i + 1)),
                        (l = a)),
                      "ns" in u && (l = u.ns);
                  }
                  return {
                    host: r,
                    port: h,
                    domain: o,
                    subdomain: a,
                    secure: c,
                    scheme: d,
                    pathString: s,
                    namespace: l,
                  };
                },
                xr =
                  "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
                kr = (function () {
                  let o = 0;
                  const a = [];
                  return function (e) {
                    var t = e === o;
                    o = e;
                    let n;
                    const i = new Array(8);
                    for (n = 7; 0 <= n; n--)
                      (i[n] = xr.charAt(e % 64)), (e = Math.floor(e / 64));
                    (0, g.assert)(0 === e, "Cannot push at time == 0");
                    let r = i.join("");
                    if (t) {
                      for (n = 11; 0 <= n && 63 === a[n]; n--) a[n] = 0;
                      a[n]++;
                    } else
                      for (n = 0; n < 12; n++)
                        a[n] = Math.floor(64 * Math.random());
                    for (n = 0; n < 12; n++) r += xr.charAt(a[n]);
                    return (
                      (0, g.assert)(
                        20 === r.length,
                        "nextPushId: Length should be 20."
                      ),
                      r
                    );
                  };
                })();
              class Cr {
                constructor(e, t, n, i) {
                  (this.eventType = e),
                    (this.eventRegistration = t),
                    (this.snapshot = n),
                    (this.prevName = i);
                }
                getPath() {
                  var e = this.snapshot.ref;
                  return ("value" === this.eventType ? e : e.parent)._path;
                }
                getEventType() {
                  return this.eventType;
                }
                getEventRunner() {
                  return this.eventRegistration.getEventRunner(this);
                }
                toString() {
                  return (
                    this.getPath().toString() +
                    ":" +
                    this.eventType +
                    ":" +
                    (0, g.stringify)(this.snapshot.exportVal())
                  );
                }
              }
              class Er {
                constructor(e, t, n) {
                  (this.eventRegistration = e),
                    (this.error = t),
                    (this.path = n);
                }
                getPath() {
                  return this.path;
                }
                getEventType() {
                  return "cancel";
                }
                getEventRunner() {
                  return this.eventRegistration.getEventRunner(this);
                }
                toString() {
                  return this.path.toString() + ":cancel";
                }
              }
              class Ir {
                constructor(e, t) {
                  (this.snapshotCallback = e), (this.cancelCallback = t);
                }
                onValue(e, t) {
                  this.snapshotCallback.call(null, e, t);
                }
                onCancel(e) {
                  return (
                    (0, g.assert)(
                      this.hasCancelCallback,
                      "Raising a cancel event on a listener with no cancel callback"
                    ),
                    this.cancelCallback.call(null, e)
                  );
                }
                get hasCancelCallback() {
                  return !!this.cancelCallback;
                }
                matches(e) {
                  return (
                    this.snapshotCallback === e.snapshotCallback ||
                    (void 0 !== this.snapshotCallback.userCallback &&
                      this.snapshotCallback.userCallback ===
                        e.snapshotCallback.userCallback &&
                      this.snapshotCallback.context ===
                        e.snapshotCallback.context)
                  );
                }
              }
              class Tr {
                constructor(e, t) {
                  (this._repo = e), (this._path = t);
                }
                cancel() {
                  const e = new g.Deferred();
                  return (
                    ar(
                      this._repo,
                      this._path,
                      e.wrapCallback(() => {})
                    ),
                    e.promise
                  );
                }
                remove() {
                  Ui("OnDisconnect.remove", this._path);
                  const e = new g.Deferred();
                  return (
                    sr(
                      this._repo,
                      this._path,
                      null,
                      e.wrapCallback(() => {})
                    ),
                    e.promise
                  );
                }
                set(e) {
                  Ui("OnDisconnect.set", this._path),
                    Mi("OnDisconnect.set", e, this._path, !1);
                  const t = new g.Deferred();
                  return (
                    sr(
                      this._repo,
                      this._path,
                      e,
                      t.wrapCallback(() => {})
                    ),
                    t.promise
                  );
                }
                setWithPriority(e, t) {
                  Ui("OnDisconnect.setWithPriority", this._path),
                    Mi("OnDisconnect.setWithPriority", e, this._path, !1),
                    Fi("OnDisconnect.setWithPriority", t, !1);
                  const n = new g.Deferred();
                  return (
                    (function (n, i, e, t, r) {
                      const o = ct(e, t);
                      n.server_.onDisconnectPut(
                        i.toString(),
                        o.val(!0),
                        (e, t) => {
                          "ok" === e && St(n.onDisconnect_, i, o),
                            hr(0, r, e, t);
                        }
                      );
                    })(
                      this._repo,
                      this._path,
                      e,
                      t,
                      n.wrapCallback(() => {})
                    ),
                    n.promise
                  );
                }
                update(e) {
                  Ui("OnDisconnect.update", this._path),
                    zi("OnDisconnect.update", e, this._path, !1);
                  const t = new g.Deferred();
                  return (
                    (function (n, i, r, o) {
                      if ((0, g.isEmpty)(r))
                        return (
                          N(
                            "onDisconnect().update() called with empty data.  Don't do anything."
                          ),
                          hr(0, o, "ok", void 0)
                        );
                      n.server_.onDisconnectMerge(i.toString(), r, (e, t) => {
                        "ok" === e &&
                          z(r, (e, t) => {
                            t = ct(t);
                            St(n.onDisconnect_, ke(i, e), t);
                          }),
                          hr(0, o, e, t);
                      });
                    })(
                      this._repo,
                      this._path,
                      e,
                      t.wrapCallback(() => {})
                    ),
                    t.promise
                  );
                }
              }
              uo.OnDisconnect = Tr;
              class Sr {
                constructor(e, t, n, i) {
                  (this._repo = e),
                    (this._path = t),
                    (this._queryParams = n),
                    (this._orderByCalled = i);
                }
                get key() {
                  return Ce(this._path) ? null : ye(this._path);
                }
                get ref() {
                  return new Rr(this._repo, this._path);
                }
                get _queryIdentifier() {
                  var e = Ct(this._queryParams),
                    e = T(e);
                  return "{}" === e ? "default" : e;
                }
                get _queryObject() {
                  return Ct(this._queryParams);
                }
                isEqual(e) {
                  if (!((e = (0, g.getModularInstance)(e)) instanceof Sr))
                    return !1;
                  var t = this._repo === e._repo,
                    n = Te(this._path, e._path),
                    e = this._queryIdentifier === e._queryIdentifier;
                  return t && n && e;
                }
                toJSON() {
                  return this.toString();
                }
                toString() {
                  return (
                    this._repo.toString() +
                    (function (t) {
                      let n = "";
                      for (let e = t.pieceNum_; e < t.pieces_.length; e++)
                        "" !== t.pieces_[e] &&
                          (n += "/" + encodeURIComponent(String(t.pieces_[e])));
                      return n || "/";
                    })(this._path)
                  );
                }
              }
              function Pr(e, t) {
                if (!0 === e._orderByCalled)
                  throw new Error(
                    t + ": You can't combine multiple orderBy calls."
                  );
              }
              function Nr(e) {
                let t = null,
                  n = null;
                if (
                  (e.hasStart() && (t = e.getIndexStartValue()),
                  e.hasEnd() && (n = e.getIndexEndValue()),
                  e.getIndex() === Fe)
                ) {
                  var i =
                      "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                    r =
                      "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
                  if (e.hasStart()) {
                    if (e.getIndexStartName() !== O) throw new Error(i);
                    if ("string" != typeof t) throw new Error(r);
                  }
                  if (e.hasEnd()) {
                    if (e.getIndexEndName() !== M) throw new Error(i);
                    if ("string" != typeof n) throw new Error(r);
                  }
                } else if (e.getIndex() === Xe) {
                  if ((null != t && !Oi(t)) || (null != n && !Oi(n)))
                    throw new Error(
                      "Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string)."
                    );
                } else if (
                  ((0, g.assert)(
                    e.getIndex() instanceof dt || e.getIndex() === ht,
                    "unknown index type."
                  ),
                  (null != t && "object" == typeof t) ||
                    (null != n && "object" == typeof n))
                )
                  throw new Error(
                    "Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object."
                  );
              }
              function Dr(e) {
                if (
                  e.hasStart() &&
                  e.hasEnd() &&
                  e.hasLimit() &&
                  !e.hasAnchoredLimit()
                )
                  throw new Error(
                    "Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead."
                  );
              }
              uo._QueryImpl = Sr;
              class Rr extends Sr {
                constructor(e, t) {
                  super(e, t, new vt(), !1);
                }
                get parent() {
                  var e = xe(this._path);
                  return null === e ? null : new Rr(this._repo, e);
                }
                get root() {
                  let e = this;
                  for (; null !== e.parent; ) e = e.parent;
                  return e;
                }
              }
              uo._ReferenceImpl = Rr;
              class Ar {
                constructor(e, t, n) {
                  (this._node = e), (this.ref = t), (this._index = n);
                }
                get priority() {
                  return this._node.getPriority().val();
                }
                get key() {
                  return this.ref.key;
                }
                get size() {
                  return this._node.numChildren();
                }
                child(e) {
                  var t = new fe(e),
                    e = Mr(this.ref, e);
                  return new Ar(this._node.getChild(t), e, Xe);
                }
                exists() {
                  return !this._node.isEmpty();
                }
                exportVal() {
                  return this._node.val(!0);
                }
                forEach(n) {
                  if (this._node.isLeafNode()) return !1;
                  const e = this._node;
                  return !!e.forEachChild(this._index, (e, t) =>
                    n(new Ar(t, Mr(this.ref, e), Xe))
                  );
                }
                hasChild(e) {
                  e = new fe(e);
                  return !this._node.getChild(e).isEmpty();
                }
                hasChildren() {
                  return !this._node.isLeafNode() && !this._node.isEmpty();
                }
                toJSON() {
                  return this.exportVal();
                }
                val() {
                  return this._node.val();
                }
              }
              function Or(e, t) {
                return (
                  (e = (0, g.getModularInstance)(e))._checkNotDeleted("ref"),
                  void 0 !== t ? Mr(e._root, t) : e._root
                );
              }
              function Mr(e, t) {
                return (
                  (null === be((e = (0, g.getModularInstance)(e))._path)
                    ? Bi
                    : qi)("child", "path", t, !1),
                  new Rr(e._repo, ke(e._path, t))
                );
              }
              function Lr(e, t) {
                (e = (0, g.getModularInstance)(e)),
                  Ui("set", e._path),
                  Mi("set", t, e._path, !1);
                const n = new g.Deferred();
                return (
                  or(
                    e._repo,
                    e._path,
                    t,
                    null,
                    n.wrapCallback(() => {})
                  ),
                  n.promise
                );
              }
              uo.DataSnapshot = Ar;
              class zr {
                constructor(e) {
                  this.callbackContext = e;
                }
                respondsTo(e) {
                  return "value" === e;
                }
                createEvent(e, t) {
                  var n = t._queryParams.getIndex();
                  return new Cr(
                    "value",
                    this,
                    new Ar(e.snapshotNode, new Rr(t._repo, t._path), n)
                  );
                }
                getEventRunner(e) {
                  return "cancel" === e.getEventType()
                    ? () => this.callbackContext.onCancel(e.error)
                    : () => this.callbackContext.onValue(e.snapshot, null);
                }
                createCancelEvent(e, t) {
                  return this.callbackContext.hasCancelCallback
                    ? new Er(this, e, t)
                    : null;
                }
                matches(e) {
                  return (
                    e instanceof zr &&
                    (!e.callbackContext ||
                      !this.callbackContext ||
                      e.callbackContext.matches(this.callbackContext))
                  );
                }
                hasAnyCallback() {
                  return null !== this.callbackContext;
                }
              }
              class Fr {
                constructor(e, t) {
                  (this.eventType = e), (this.callbackContext = t);
                }
                respondsTo(e) {
                  let t = "children_added" === e ? "child_added" : e;
                  return (
                    (t = "children_removed" === t ? "child_removed" : t),
                    this.eventType === t
                  );
                }
                createCancelEvent(e, t) {
                  return this.callbackContext.hasCancelCallback
                    ? new Er(this, e, t)
                    : null;
                }
                createEvent(e, t) {
                  (0, g.assert)(
                    null != e.childName,
                    "Child events should have a childName."
                  );
                  var n = Mr(new Rr(t._repo, t._path), e.childName),
                    t = t._queryParams.getIndex();
                  return new Cr(
                    e.type,
                    this,
                    new Ar(e.snapshotNode, n, t),
                    e.prevName
                  );
                }
                getEventRunner(e) {
                  return "cancel" === e.getEventType()
                    ? () => this.callbackContext.onCancel(e.error)
                    : () =>
                        this.callbackContext.onValue(e.snapshot, e.prevName);
                }
                matches(e) {
                  return (
                    e instanceof Fr &&
                    this.eventType === e.eventType &&
                    (!this.callbackContext ||
                      !e.callbackContext ||
                      this.callbackContext.matches(e.callbackContext))
                  );
                }
                hasAnyCallback() {
                  return !!this.callbackContext;
                }
              }
              function jr(n, e, t, i, r) {
                let o;
                if (
                  ("object" == typeof i && ((o = void 0), (r = i)),
                  "function" == typeof i && (o = i),
                  r && r.onlyOnce)
                ) {
                  const s = t;
                  r = (e, t) => {
                    lr(n._repo, n, a), s(e, t);
                  };
                  (r.userCallback = t.userCallback),
                    (r.context = t.context),
                    (t = r);
                }
                t = new Ir(t, o || void 0);
                const a = "value" === e ? new zr(t) : new Fr(e, t);
                return (
                  (function (e, t, n) {
                    let i;
                    (i =
                      ".info" === be(t._path)
                        ? ti(e.infoSyncTree_, t, n)
                        : ti(e.serverSyncTree_, t, n)),
                      $i(e.eventQueue_, t._path, i);
                  })(n._repo, n, a),
                  () => lr(n._repo, n, a)
                );
              }
              function qr(e, t, n, i) {
                return jr(e, "value", t, n, i);
              }
              class Br {}
              class Ur extends (uo.QueryConstraint = Br) {
                constructor(e, t) {
                  super(),
                    (this._value = e),
                    (this._key = t),
                    (this.type = "endAt");
                }
                _apply(e) {
                  Mi("endAt", this._value, e._path, !0);
                  var t = wt(e._queryParams, this._value, this._key);
                  if ((Dr(t), Nr(t), e._queryParams.hasEnd()))
                    throw new Error(
                      "endAt: Starting point was already set (by another call to endAt, endBefore or equalTo)."
                    );
                  return new Sr(e._repo, e._path, t, e._orderByCalled);
                }
              }
              class Wr extends Br {
                constructor(e, t) {
                  super(),
                    (this._value = e),
                    (this._key = t),
                    (this.type = "endBefore");
                }
                _apply(e) {
                  Mi("endBefore", this._value, e._path, !1);
                  var t = (function (e, t, n) {
                    let i;
                    return (
                      (i = e.index_ === Fe || n ? wt(e, t, n) : wt(e, t, O)),
                      (i.endBeforeSet_ = !0),
                      i
                    );
                  })(e._queryParams, this._value, this._key);
                  if ((Dr(t), Nr(t), e._queryParams.hasEnd()))
                    throw new Error(
                      "endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo)."
                    );
                  return new Sr(e._repo, e._path, t, e._orderByCalled);
                }
              }
              class Hr extends Br {
                constructor(e, t) {
                  super(),
                    (this._value = e),
                    (this._key = t),
                    (this.type = "startAt");
                }
                _apply(e) {
                  Mi("startAt", this._value, e._path, !0);
                  var t = yt(e._queryParams, this._value, this._key);
                  if ((Dr(t), Nr(t), e._queryParams.hasStart()))
                    throw new Error(
                      "startAt: Starting point was already set (by another call to startAt, startBefore or equalTo)."
                    );
                  return new Sr(e._repo, e._path, t, e._orderByCalled);
                }
              }
              class Vr extends Br {
                constructor(e, t) {
                  super(),
                    (this._value = e),
                    (this._key = t),
                    (this.type = "startAfter");
                }
                _apply(e) {
                  Mi("startAfter", this._value, e._path, !1);
                  var t = (function (e, t, n) {
                    let i;
                    return (
                      (i = e.index_ === Fe || n ? yt(e, t, n) : yt(e, t, M)),
                      (i.startAfterSet_ = !0),
                      i
                    );
                  })(e._queryParams, this._value, this._key);
                  if ((Dr(t), Nr(t), e._queryParams.hasStart()))
                    throw new Error(
                      "startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo)."
                    );
                  return new Sr(e._repo, e._path, t, e._orderByCalled);
                }
              }
              class $r extends Br {
                constructor(e) {
                  super(), (this._limit = e), (this.type = "limitToFirst");
                }
                _apply(e) {
                  if (e._queryParams.hasLimit())
                    throw new Error(
                      "limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast)."
                    );
                  return new Sr(
                    e._repo,
                    e._path,
                    (function (e, t) {
                      const n = e.copy();
                      return (
                        (n.limitSet_ = !0),
                        (n.limit_ = t),
                        (n.viewFrom_ = "l"),
                        n
                      );
                    })(e._queryParams, this._limit),
                    e._orderByCalled
                  );
                }
              }
              class Yr extends Br {
                constructor(e) {
                  super(), (this._limit = e), (this.type = "limitToLast");
                }
                _apply(e) {
                  if (e._queryParams.hasLimit())
                    throw new Error(
                      "limitToLast: Limit was already set (by another call to limitToFirst or limitToLast)."
                    );
                  return new Sr(
                    e._repo,
                    e._path,
                    (function (e, t) {
                      const n = e.copy();
                      return (
                        (n.limitSet_ = !0),
                        (n.limit_ = t),
                        (n.viewFrom_ = "r"),
                        n
                      );
                    })(e._queryParams, this._limit),
                    e._orderByCalled
                  );
                }
              }
              class Gr extends Br {
                constructor(e) {
                  super(), (this._path = e), (this.type = "orderByChild");
                }
                _apply(e) {
                  Pr(e, "orderByChild");
                  var t = new fe(this._path);
                  if (Ce(t))
                    throw new Error(
                      "orderByChild: cannot pass in empty path. Use orderByValue() instead."
                    );
                  (t = new dt(t)), (t = xt(e._queryParams, t));
                  return Nr(t), new Sr(e._repo, e._path, t, !0);
                }
              }
              class Qr extends Br {
                constructor() {
                  super(...arguments), (this.type = "orderByKey");
                }
                _apply(e) {
                  Pr(e, "orderByKey");
                  var t = xt(e._queryParams, Fe);
                  return Nr(t), new Sr(e._repo, e._path, t, !0);
                }
              }
              class Kr extends Br {
                constructor() {
                  super(...arguments), (this.type = "orderByPriority");
                }
                _apply(e) {
                  Pr(e, "orderByPriority");
                  var t = xt(e._queryParams, Xe);
                  return Nr(t), new Sr(e._repo, e._path, t, !0);
                }
              }
              class Xr extends Br {
                constructor() {
                  super(...arguments), (this.type = "orderByValue");
                }
                _apply(e) {
                  Pr(e, "orderByValue");
                  var t = xt(e._queryParams, ht);
                  return Nr(t), new Sr(e._repo, e._path, t, !0);
                }
              }
              class Jr extends Br {
                constructor(e, t) {
                  super(),
                    (this._value = e),
                    (this._key = t),
                    (this.type = "equalTo");
                }
                _apply(e) {
                  if (
                    (Mi("equalTo", this._value, e._path, !1),
                    e._queryParams.hasStart())
                  )
                    throw new Error(
                      "equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo)."
                    );
                  if (e._queryParams.hasEnd())
                    throw new Error(
                      "equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo)."
                    );
                  return new Ur(this._value, this._key)._apply(
                    new Hr(this._value, this._key)._apply(e)
                  );
                }
              }
              (l = Rr),
                (0, g.assert)(
                  !Mn,
                  "__referenceConstructor has already been defined"
                ),
                (Mn = l),
                (u = Rr),
                (0, g.assert)(
                  !Yn,
                  "__referenceConstructor has already been defined"
                ),
                (Yn = u);
              const Zr = "FIREBASE_DATABASE_EMULATOR_HOST",
                eo = {};
              let to = !1;
              function no(e, t, n, i, r) {
                let o = i || e.options.databaseURL;
                void 0 === o &&
                  (e.options.projectId ||
                    D(
                      "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
                    ),
                  N("Using default host for project ", e.options.projectId),
                  (o = `${e.options.projectId}-default-rtdb.firebaseio.com`));
                let a = yr(o, r),
                  s = a.repoInfo,
                  l,
                  c = void 0;
                void 0 !== co && co.env && (c = co.env[Zr]),
                  c
                    ? ((l = !0),
                      (o = `http://${c}?ns=${s.namespace}`),
                      (a = yr(o, r)),
                      (s = a.repoInfo))
                    : (l = !a.repoInfo.secure);
                t = r && l ? new Y(Y.OWNER) : new $(e.name, e.options, t);
                Wi("Invalid Firebase Database URL", a),
                  Ce(a.path) ||
                    D(
                      "Database URL must point to the root of a Firebase Database (not including a child path)."
                    );
                n = (function (e, t, n, i) {
                  let r = eo[t.name];
                  r || ((r = {}), (eo[t.name] = r));
                  t = r[e.toURLString()];
                  t &&
                    D(
                      "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
                    );
                  return (t = new Xi(e, to, n, i)), (r[e.toURLString()] = t);
                })(s, e, t, new V(e.name, n));
                return new io(n, e);
              }
              class io {
                constructor(e, t) {
                  (this._repoInternal = e),
                    (this.app = t),
                    (this.type = "database"),
                    (this._instanceStarted = !1);
                }
                get _repo() {
                  return (
                    this._instanceStarted ||
                      (Ji(
                        this._repoInternal,
                        this.app.options.appId,
                        this.app.options.databaseAuthVariableOverride
                      ),
                      (this._instanceStarted = !0)),
                    this._repoInternal
                  );
                }
                get _root() {
                  return (
                    this._rootInternal ||
                      (this._rootInternal = new Rr(this._repo, me())),
                    this._rootInternal
                  );
                }
                _delete() {
                  return (
                    null !== this._rootInternal &&
                      ((function (e, t) {
                        const n = eo[t];
                        (n && n[e.key] === e) ||
                          D(
                            `Database ${t}(${e.repoInfo_}) has already been deleted.`
                          ),
                          cr(e),
                          delete n[e.key];
                      })(this._repo, this.app.name),
                      (this._repoInternal = null),
                      (this._rootInternal = null)),
                    Promise.resolve()
                  );
                }
                _checkNotDeleted(e) {
                  null === this._rootInternal &&
                    D("Cannot call " + e + " on a deleted database.");
                }
              }
              function ro() {
                le.IS_TRANSPORT_INITIALIZED &&
                  R(
                    "Transport has already been initialized. Please call this function before calling ref or setting up a listener"
                  );
              }
              function oo(e, t, n, i = {}) {
                (e = (0, g.getModularInstance)(e))._checkNotDeleted(
                  "useEmulator"
                ),
                  e._instanceStarted &&
                    D(
                      "Cannot call useEmulator() after instance has already been initialized."
                    );
                var r,
                  o = e._repoInternal;
                let a = void 0;
                o.repoInfo_.nodeAdmin
                  ? (i.mockUserToken &&
                      D(
                        'mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'
                      ),
                    (a = new Y(Y.OWNER)))
                  : i.mockUserToken &&
                    ((r =
                      "string" == typeof i.mockUserToken
                        ? i.mockUserToken
                        : (0, g.createMockUserToken)(
                            i.mockUserToken,
                            e.app.options.projectId
                          )),
                    (a = new Y(r))),
                  (r = o),
                  (o = t),
                  (t = n),
                  (n = a),
                  (r.repoInfo_ = new X(
                    `${o}:${t}`,
                    !1,
                    r.repoInfo_.namespace,
                    r.repoInfo_.webSocketOnly,
                    r.repoInfo_.nodeAdmin,
                    r.repoInfo_.persistenceKey,
                    r.repoInfo_.includeNamespaceInQueryParams,
                    !0
                  )),
                  n && (r.authTokenProvider_ = n);
              }
              uo.Database = io;
              const ao = { ".sv": "timestamp" };
              class so {
                constructor(e, t) {
                  (this.committed = e), (this.snapshot = t);
                }
                toJSON() {
                  return {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON(),
                  };
                }
              }
              (uo.TransactionResult = so),
                Ae,
                (Ae.prototype.simpleListen = function (e, t) {
                  this.sendRequest("q", { p: e }, t);
                }),
                (Ae.prototype.echo = function (e, t) {
                  this.sendRequest("echo", { d: e }, t);
                }),
                ce;
              (uo._TEST_ACCESS_hijackHash = function (r) {
                const o = Ae.prototype.put;
                return (
                  (Ae.prototype.put = function (e, t, n, i) {
                    void 0 !== i && (i = r()), o.call(this, e, t, n, i);
                  }),
                  function () {
                    Ae.prototype.put = o;
                  }
                );
              }),
                X;
              var lo;
              (uo._TEST_ACCESS_forceRestClient = function (e) {
                (e = e), (to = e);
              }),
                d(n.SDK_VERSION),
                (0, n._registerComponent)(
                  new c.Component(
                    "database",
                    (e, { instanceIdentifier: t }) => {
                      return no(
                        e.getProvider("app").getImmediate(),
                        e.getProvider("auth-internal"),
                        e.getProvider("app-check-internal"),
                        t
                      );
                    },
                    "PUBLIC"
                  ).setMultipleInstances(!0)
                ),
                (0, n.registerVersion)(e, "1.0.6", lo),
                (0, n.registerVersion)(e, "1.0.6", "esm2017");
            }.call(this);
          }.call(this, ho("_process"));
        },
        {
          "@firebase/app": 2,
          "@firebase/component": 3,
          "@firebase/logger": 5,
          "@firebase/util": 6,
          _process: 12,
        },
      ],
      5: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.Logger = n.LogLevel = void 0),
            (n.setLogLevel = function (t) {
              i.forEach((e) => {
                e.setLogLevel(t);
              });
            }),
            (n.setUserLogHandler = function (o, e) {
              for (const t of i) {
                let r = null;
                e && e.level && (r = s[e.level]),
                  (t.userLogHandler =
                    null === o
                      ? null
                      : (e, t, ...n) => {
                          var i = n
                            .map((e) => {
                              if (null == e) return null;
                              if ("string" == typeof e) return e;
                              if ("number" == typeof e || "boolean" == typeof e)
                                return e.toString();
                              if (e instanceof Error) return e.message;
                              try {
                                return JSON.stringify(e);
                              } catch (e) {
                                return null;
                              }
                            })
                            .filter((e) => e)
                            .join(" ");
                          t >= (null !== r && void 0 !== r ? r : e.logLevel) &&
                            o({
                              level: a[t].toLowerCase(),
                              message: i,
                              args: n,
                              type: e.name,
                            });
                        });
              }
            });
          const i = [];
          var a, r;
          (n.LogLevel = a),
            ((r = a || (n.LogLevel = a = {}))[(r.DEBUG = 0)] = "DEBUG"),
            (r[(r.VERBOSE = 1)] = "VERBOSE"),
            (r[(r.INFO = 2)] = "INFO"),
            (r[(r.WARN = 3)] = "WARN"),
            (r[(r.ERROR = 4)] = "ERROR"),
            (r[(r.SILENT = 5)] = "SILENT");
          const s = {
              debug: a.DEBUG,
              verbose: a.VERBOSE,
              info: a.INFO,
              warn: a.WARN,
              error: a.ERROR,
              silent: a.SILENT,
            },
            o = a.INFO,
            l = {
              [a.DEBUG]: "log",
              [a.VERBOSE]: "log",
              [a.INFO]: "info",
              [a.WARN]: "warn",
              [a.ERROR]: "error",
            },
            c = (e, t) => {
              if (!(t < e.logLevel)) {
                new Date().toISOString();
                e = l[t];
                if (!e)
                  throw new Error(
                    `Attempted to log a message with an invalid logType (value: ${t})`
                  );
              }
            };
          n.Logger = class {
            constructor(e) {
              (this.name = e),
                (this._logLevel = o),
                (this._logHandler = c),
                (this._userLogHandler = null),
                i.push(this);
            }
            get logLevel() {
              return this._logLevel;
            }
            set logLevel(e) {
              if (!(e in a))
                throw new TypeError(
                  `Invalid value "${e}" assigned to \`logLevel\``
                );
              this._logLevel = e;
            }
            setLogLevel(e) {
              this._logLevel = "string" == typeof e ? s[e] : e;
            }
            get logHandler() {
              return this._logHandler;
            }
            set logHandler(e) {
              if ("function" != typeof e)
                throw new TypeError(
                  "Value assigned to `logHandler` must be a function"
                );
              this._logHandler = e;
            }
            get userLogHandler() {
              return this._userLogHandler;
            }
            set userLogHandler(e) {
              this._userLogHandler = e;
            }
            debug(...e) {
              this._userLogHandler && this._userLogHandler(this, a.DEBUG, ...e),
                this._logHandler(this, a.DEBUG, ...e);
            }
            log(...e) {
              this._userLogHandler &&
                this._userLogHandler(this, a.VERBOSE, ...e),
                this._logHandler(this, a.VERBOSE, ...e);
            }
            info(...e) {
              this._userLogHandler && this._userLogHandler(this, a.INFO, ...e),
                this._logHandler(this, a.INFO, ...e);
            }
            warn(...e) {
              this._userLogHandler && this._userLogHandler(this, a.WARN, ...e),
                this._logHandler(this, a.WARN, ...e);
            }
            error(...e) {
              this._userLogHandler && this._userLogHandler(this, a.ERROR, ...e),
                this._logHandler(this, a.ERROR, ...e);
            }
          };
        },
        {},
      ],
      6: [
        function (e, t, R) {
          !function (N, D) {
            !function () {
              "use strict";
              Object.defineProperty(R, "__esModule", { value: !0 }),
                (R.Sha1 =
                  R.RANDOM_FACTOR =
                  R.MAX_VALUE_MILLIS =
                  R.FirebaseError =
                  R.ErrorFactory =
                  R.Deferred =
                  R.DecodeBase64StringError =
                  R.CONSTANTS =
                    void 0),
                (R.areCookiesEnabled = function () {
                  return !(
                    "undefined" == typeof navigator || !navigator.cookieEnabled
                  );
                }),
                (R.assertionError = R.assert = void 0),
                (R.async = function (t, n) {
                  return (...e) => {
                    Promise.resolve(!0)
                      .then(() => {
                        t(...e);
                      })
                      .catch((e) => {
                        n && n(e);
                      });
                  };
                }),
                (R.base64urlEncodeWithoutPadding =
                  R.base64Encode =
                  R.base64Decode =
                  R.base64 =
                    void 0),
                (R.calculateBackoffMillis = function (e, t = I, n = T) {
                  (n = t * Math.pow(n, e)),
                    (e = Math.round(P * n * (Math.random() - 0.5) * 2));
                  return Math.min(S, n + e);
                }),
                (R.contains = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (R.createMockUserToken = function (e, t) {
                  if (e.uid)
                    throw new Error(
                      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
                    );
                  var n = t || "demo-project",
                    i = e.iat || 0,
                    t = e.sub || e.user_id;
                  if (!t)
                    throw new Error(
                      "mockUserToken must contain 'sub' or 'user_id' field!"
                    );
                  e = Object.assign(
                    {
                      iss: `https://securetoken.google.com/${n}`,
                      aud: n,
                      iat: i,
                      exp: i + 3600,
                      auth_time: i,
                      sub: t,
                      user_id: t,
                      firebase: { sign_in_provider: "custom", identities: {} },
                    },
                    e
                  );
                  return [
                    a(JSON.stringify({ alg: "none", type: "JWT" })),
                    a(JSON.stringify(e)),
                    "",
                  ].join(".");
                }),
                (R.createSubscribe = function (e, t) {
                  const n = new k(e, t);
                  return n.subscribe.bind(n);
                }),
                (R.decode = void 0),
                (R.deepCopy = function (e) {
                  return d(void 0, e);
                }),
                (R.deepEqual = function e(t, n) {
                  if (t === n) return !0;
                  const i = Object.keys(t);
                  const r = Object.keys(n);
                  for (const o of i) {
                    if (!r.includes(o)) return !1;
                    const a = t[o],
                      s = n[o];
                    if (x(a) && x(s)) {
                      if (!e(a, s)) return !1;
                    } else if (a !== s) return !1;
                  }
                  for (const l of r) if (!i.includes(l)) return !1;
                  return !0;
                }),
                (R.deepExtend = d),
                (R.errorPrefix = E),
                (R.extractQuerystring = function (e) {
                  var t = e.indexOf("?");
                  if (!t) return "";
                  var n = e.indexOf("#", t);
                  return e.substring(t, 0 < n ? n : void 0);
                }),
                (R.getExperimentalSetting =
                  R.getDefaults =
                  R.getDefaultEmulatorHostnameAndPort =
                  R.getDefaultEmulatorHost =
                  R.getDefaultAppConfig =
                    void 0),
                (R.getGlobal = e),
                (R.getModularInstance = function (e) {
                  return e && e._delegate ? e._delegate : e;
                }),
                (R.getUA = g),
                (R.isAdmin = void 0),
                (R.isBrowser = function () {
                  return "undefined" != typeof window || m();
                }),
                (R.isBrowserExtension = function () {
                  var e =
                    "object" == typeof chrome
                      ? chrome.runtime
                      : "object" == typeof browser
                      ? browser.runtime
                      : void 0;
                  return "object" == typeof e && void 0 !== e.id;
                }),
                (R.isElectron = function () {
                  return 0 <= g().indexOf("Electron/");
                }),
                (R.isEmpty = function (e) {
                  for (const t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                  return !0;
                }),
                (R.isIE = function () {
                  const e = g();
                  return 0 <= e.indexOf("MSIE ") || 0 <= e.indexOf("Trident/");
                }),
                (R.isIndexedDBAvailable = function () {
                  try {
                    return "object" == typeof indexedDB;
                  } catch (e) {
                    return !1;
                  }
                }),
                (R.isMobileCordova = function () {
                  return (
                    "undefined" != typeof window &&
                    !!(window.cordova || window.phonegap || window.PhoneGap) &&
                    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                      g()
                    )
                  );
                }),
                (R.isNode = f),
                (R.isNodeSdk = function () {
                  return !0 === t.NODE_CLIENT || !0 === t.NODE_ADMIN;
                }),
                (R.isReactNative = function () {
                  return (
                    "object" == typeof navigator &&
                    "ReactNative" === navigator.product
                  );
                }),
                (R.isSafari = function () {
                  return (
                    !f() &&
                    !!navigator.userAgent &&
                    navigator.userAgent.includes("Safari") &&
                    !navigator.userAgent.includes("Chrome")
                  );
                }),
                (R.isUWP = function () {
                  return 0 <= g().indexOf("MSAppHost/");
                }),
                (R.isValidTimestamp = R.isValidFormat = void 0),
                (R.isWebWorker = m),
                (R.issuedAtTime = void 0),
                (R.jsonEval = y),
                (R.map = function (e, t, n) {
                  const i = {};
                  for (const r in e)
                    Object.prototype.hasOwnProperty.call(e, r) &&
                      (i[r] = t.call(n, e[r], r, e));
                  return i;
                }),
                (R.ordinal = function (e) {
                  return Number.isFinite(e)
                    ? e +
                        (function (e) {
                          var t = (e = Math.abs(e)) % 100;
                          if (10 <= t && t <= 20) return "th";
                          e %= 10;
                          return 1 != e
                            ? 2 != e
                              ? 3 != e
                                ? "th"
                                : "rd"
                              : "nd"
                            : "st";
                        })(e)
                    : `${e}`;
                }),
                (R.promiseWithTimeout = function (e, t = 2e3) {
                  const n = new p();
                  return (
                    setTimeout(() => n.reject("timeout!"), t),
                    e.then(n.resolve, n.reject),
                    n.promise
                  );
                }),
                (R.querystring = function (e) {
                  const t = [];
                  for (const [n, i] of Object.entries(e))
                    Array.isArray(i)
                      ? i.forEach((e) => {
                          t.push(
                            encodeURIComponent(n) + "=" + encodeURIComponent(e)
                          );
                        })
                      : t.push(
                          encodeURIComponent(n) + "=" + encodeURIComponent(i)
                        );
                  return t.length ? "&" + t.join("&") : "";
                }),
                (R.querystringDecode = function (e) {
                  const n = {},
                    t = e.replace(/^\?/, "").split("&");
                  return (
                    t.forEach((e) => {
                      var t;
                      e &&
                        (([t, e] = e.split("=")),
                        (n[decodeURIComponent(t)] = decodeURIComponent(e)));
                    }),
                    n
                  );
                }),
                (R.safeGet = function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                }),
                (R.stringToByteArray = R.stringLength = void 0),
                (R.stringify = function (e) {
                  return JSON.stringify(e);
                }),
                (R.validateArgCount = R.uuidv4 = void 0),
                (R.validateCallback = function (e, t, n, i) {
                  if ((!i || n) && "function" != typeof n)
                    throw new Error(E(e, t) + "must be a valid function.");
                }),
                (R.validateContextObject = function (e, t, n, i) {
                  if ((!i || n) && ("object" != typeof n || null === n))
                    throw new Error(
                      E(e, t) + "must be a valid context object."
                    );
                }),
                (R.validateIndexedDBOpenable = function () {
                  return new Promise((t, n) => {
                    try {
                      let e = !0;
                      const i =
                          "validate-browser-context-for-indexeddb-analytics-module",
                        r = self.indexedDB.open(i);
                      (r.onsuccess = () => {
                        r.result.close(),
                          e || self.indexedDB.deleteDatabase(i),
                          t(!0);
                      }),
                        (r.onupgradeneeded = () => {
                          e = !1;
                        }),
                        (r.onerror = () => {
                          var e;
                          n(
                            (null === (e = r.error) || void 0 === e
                              ? void 0
                              : e.message) || ""
                          );
                        });
                    } catch (e) {
                      n(e);
                    }
                  });
                });
              const t = {
                NODE_CLIENT: !(R.validateNamespace = function (e, t, n) {
                  if ((!n || t) && "string" != typeof t)
                    throw new Error(
                      E(e, "namespace") + "must be a valid firebase namespace."
                    );
                }),
                NODE_ADMIN: !1,
                SDK_VERSION: "${JSCORE_VERSION}",
              };
              R.CONSTANTS = t;
              function s(e, t) {
                if (!e) throw n(t);
              }
              R.assert = s;
              const n = function (e) {
                return new Error(
                  "Firebase Database (" +
                    t.SDK_VERSION +
                    ") INTERNAL ASSERT FAILED: " +
                    e
                );
              };
              R.assertionError = n;
              function i(n) {
                const i = [];
                let r = 0;
                for (let t = 0; t < n.length; t++) {
                  let e = n.charCodeAt(t);
                  e < 128
                    ? (i[r++] = e)
                    : (e < 2048
                        ? (i[r++] = (e >> 6) | 192)
                        : (55296 == (64512 & e) &&
                          t + 1 < n.length &&
                          56320 == (64512 & n.charCodeAt(t + 1))
                            ? ((e =
                                65536 +
                                ((1023 & e) << 10) +
                                (1023 & n.charCodeAt(++t))),
                              (i[r++] = (e >> 18) | 240),
                              (i[r++] = ((e >> 12) & 63) | 128))
                            : (i[r++] = (e >> 12) | 224),
                          (i[r++] = ((e >> 6) & 63) | 128)),
                      (i[r++] = (63 & e) | 128));
                }
                return i;
              }
              const r = {
                byteToCharMap_: null,
                charToByteMap_: null,
                byteToCharMapWebSafe_: null,
                charToByteMapWebSafe_: null,
                ENCODED_VALS_BASE:
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                get ENCODED_VALS() {
                  return this.ENCODED_VALS_BASE + "+/=";
                },
                get ENCODED_VALS_WEBSAFE() {
                  return this.ENCODED_VALS_BASE + "-_.";
                },
                HAS_NATIVE_SUPPORT: "function" == typeof atob,
                encodeByteArray(i, e) {
                  if (!Array.isArray(i))
                    throw Error(
                      "encodeByteArray takes an array as a parameter"
                    );
                  this.init_();
                  var r = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
                  const o = [];
                  for (let n = 0; n < i.length; n += 3) {
                    var a = i[n],
                      s = n + 1 < i.length,
                      l = s ? i[n + 1] : 0,
                      c = n + 2 < i.length,
                      d = c ? i[n + 2] : 0;
                    let e = ((15 & l) << 2) | (d >> 6),
                      t = 63 & d;
                    c || ((t = 64), s || (e = 64)),
                      o.push(
                        r[a >> 2],
                        r[((3 & a) << 4) | (l >> 4)],
                        r[e],
                        r[t]
                      );
                  }
                  return o.join("");
                },
                encodeString(e, t) {
                  return this.HAS_NATIVE_SUPPORT && !t
                    ? btoa(e)
                    : this.encodeByteArray(i(e), t);
                },
                decodeString(e, t) {
                  return this.HAS_NATIVE_SUPPORT && !t
                    ? atob(e)
                    : (function (e) {
                        const t = [];
                        let n = 0,
                          i = 0;
                        for (; n < e.length; ) {
                          var r,
                            o,
                            a = e[n++];
                          a < 128
                            ? (t[i++] = String.fromCharCode(a))
                            : 191 < a && a < 224
                            ? ((r = e[n++]),
                              (t[i++] = String.fromCharCode(
                                ((31 & a) << 6) | (63 & r)
                              )))
                            : 239 < a && a < 365
                            ? ((o =
                                (((7 & a) << 18) |
                                  ((63 & e[n++]) << 12) |
                                  ((63 & e[n++]) << 6) |
                                  (63 & e[n++])) -
                                65536),
                              (t[i++] = String.fromCharCode(55296 + (o >> 10))),
                              (t[i++] = String.fromCharCode(
                                56320 + (1023 & o)
                              )))
                            : ((r = e[n++]),
                              (o = e[n++]),
                              (t[i++] = String.fromCharCode(
                                ((15 & a) << 12) | ((63 & r) << 6) | (63 & o)
                              )));
                        }
                        return t.join("");
                      })(this.decodeStringToByteArray(e, t));
                },
                decodeStringToByteArray(t, e) {
                  this.init_();
                  var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_;
                  const i = [];
                  for (let e = 0; e < t.length; ) {
                    var r = n[t.charAt(e++)],
                      o = e < t.length ? n[t.charAt(e)] : 0;
                    ++e;
                    var a = e < t.length ? n[t.charAt(e)] : 64;
                    ++e;
                    var s = e < t.length ? n[t.charAt(e)] : 64;
                    if ((++e, null == r || null == o || null == a || null == s))
                      throw new l();
                    i.push((r << 2) | (o >> 4)),
                      64 !== a &&
                        (i.push(((o << 4) & 240) | (a >> 2)),
                        64 !== s && i.push(((a << 6) & 192) | s));
                  }
                  return i;
                },
                init_() {
                  if (!this.byteToCharMap_) {
                    (this.byteToCharMap_ = {}),
                      (this.charToByteMap_ = {}),
                      (this.byteToCharMapWebSafe_ = {}),
                      (this.charToByteMapWebSafe_ = {});
                    for (let e = 0; e < this.ENCODED_VALS.length; e++)
                      (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                        (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                        (this.byteToCharMapWebSafe_[e] =
                          this.ENCODED_VALS_WEBSAFE.charAt(e)),
                        (this.charToByteMapWebSafe_[
                          this.byteToCharMapWebSafe_[e]
                        ] = e),
                        e >= this.ENCODED_VALS_BASE.length &&
                          ((this.charToByteMap_[
                            this.ENCODED_VALS_WEBSAFE.charAt(e)
                          ] = e),
                          (this.charToByteMapWebSafe_[
                            this.ENCODED_VALS.charAt(e)
                          ] = e));
                  }
                },
              };
              R.base64 = r;
              class l extends Error {
                constructor() {
                  super(...arguments), (this.name = "DecodeBase64StringError");
                }
              }
              R.DecodeBase64StringError = l;
              function o(e) {
                return (e = i(e)), r.encodeByteArray(e, !0);
              }
              R.base64Encode = o;
              const a = function (e) {
                return o(e).replace(/\./g, "");
              };
              R.base64urlEncodeWithoutPadding = a;
              const c = function (e) {
                try {
                  return r.decodeString(e, !0);
                } catch (e) {}
                return null;
              };
              function d(e, t) {
                if (!(t instanceof Object)) return t;
                switch (t.constructor) {
                  case Date:
                    const n = t;
                    return new Date(n.getTime());
                  case Object:
                    void 0 === e && (e = {});
                    break;
                  case Array:
                    e = [];
                    break;
                  default:
                    return t;
                }
                for (const i in t)
                  t.hasOwnProperty(i) &&
                    "__proto__" !== i &&
                    (e[i] = d(e[i], t[i]));
                return e;
              }
              function e() {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if (void 0 !== D) return D;
                throw new Error("Unable to locate global object.");
              }
              R.base64Decode = c;
              const h = () => {
                try {
                  return (
                    e().__FIREBASE_DEFAULTS__ ||
                    (() => {
                      if (void 0 !== N && void 0 !== N.env) {
                        var e = N.env.__FIREBASE_DEFAULTS__;
                        return e ? JSON.parse(e) : void 0;
                      }
                    })() ||
                    (() => {
                      if ("undefined" != typeof document) {
                        let e;
                        try {
                          e = document.cookie.match(
                            /__FIREBASE_DEFAULTS__=([^;]+)/
                          );
                        } catch (e) {
                          return;
                        }
                        var t = e && c(e[1]);
                        return t && JSON.parse(t);
                      }
                    })()
                  );
                } catch (e) {
                  return;
                }
              };
              R.getDefaults = h;
              const u = (e) => {
                var t;
                return null ===
                  (t =
                    null === (t = h()) || void 0 === t
                      ? void 0
                      : t.emulatorHosts) || void 0 === t
                  ? void 0
                  : t[e];
              };
              R.getDefaultEmulatorHost = u;
              R.getDefaultEmulatorHostnameAndPort = (e) => {
                const t = u(e);
                if (t) {
                  var n = t.lastIndexOf(":");
                  if (n <= 0 || n + 1 === t.length)
                    throw new Error(
                      `Invalid host ${t} with no separate hostname and port!`
                    );
                  e = parseInt(t.substring(n + 1), 10);
                  return "[" === t[0]
                    ? [t.substring(1, n - 1), e]
                    : [t.substring(0, n), e];
                }
              };
              R.getDefaultAppConfig = () => {
                var e;
                return null === (e = h()) || void 0 === e ? void 0 : e.config;
              };
              R.getExperimentalSetting = (e) => {
                var t;
                return null === (t = h()) || void 0 === t ? void 0 : t[`_${e}`];
              };
              class p {
                constructor() {
                  (this.reject = () => {}),
                    (this.resolve = () => {}),
                    (this.promise = new Promise((e, t) => {
                      (this.resolve = e), (this.reject = t);
                    }));
                }
                wrapCallback(n) {
                  return (e, t) => {
                    e ? this.reject(e) : this.resolve(t),
                      "function" == typeof n &&
                        (this.promise.catch(() => {}),
                        1 === n.length ? n(e) : n(e, t));
                  };
                }
              }
              function g() {
                return "undefined" != typeof navigator &&
                  "string" == typeof navigator.userAgent
                  ? navigator.userAgent
                  : "";
              }
              function f() {
                var e =
                  null === (e = h()) || void 0 === e
                    ? void 0
                    : e.forceEnvironment;
                if ("node" === e) return !0;
                if ("browser" === e) return !1;
                try {
                  return (
                    "[object process]" ===
                    Object.prototype.toString.call(D.process)
                  );
                } catch (e) {
                  return !1;
                }
              }
              function m() {
                return (
                  "undefined" != typeof WorkerGlobalScope &&
                  "undefined" != typeof self &&
                  self instanceof WorkerGlobalScope
                );
              }
              R.Deferred = p;
              class b extends Error {
                constructor(e, t, n) {
                  super(t),
                    (this.code = e),
                    (this.customData = n),
                    (this.name = "FirebaseError"),
                    Object.setPrototypeOf(this, b.prototype),
                    Error.captureStackTrace &&
                      Error.captureStackTrace(this, _.prototype.create);
                }
              }
              R.FirebaseError = b;
              class _ {
                constructor(e, t, n) {
                  (this.service = e), (this.serviceName = t), (this.errors = n);
                }
                create(e, ...t) {
                  var i,
                    n = t[0] || {},
                    t = `${this.service}/${e}`,
                    e = this.errors[e],
                    e = e
                      ? ((i = n),
                        e.replace(v, (e, t) => {
                          var n = i[t];
                          return null != n ? String(n) : `<${t}?>`;
                        }))
                      : "Error",
                    e = `${this.serviceName}: ${e} (${t}).`;
                  return new b(t, e, n);
                }
              }
              R.ErrorFactory = _;
              const v = /\{\$([^}]+)}/g;
              function y(e) {
                return JSON.parse(e);
              }
              function w(e) {
                let t = {},
                  n = {},
                  i = {},
                  r = "";
                try {
                  var o = e.split(".");
                  (t = y(c(o[0]) || "")),
                    (n = y(c(o[1]) || "")),
                    (r = o[2]),
                    (i = n.d || {}),
                    delete n.d;
                } catch (e) {}
                return { header: t, claims: n, data: i, signature: r };
              }
              R.decode = w;
              R.isValidTimestamp = function (e) {
                const t = w(e).claims;
                e = Math.floor(new Date().getTime() / 1e3);
                let n = 0,
                  i = 0;
                return (
                  "object" == typeof t &&
                    (t.hasOwnProperty("nbf")
                      ? (n = t.nbf)
                      : t.hasOwnProperty("iat") && (n = t.iat),
                    (i = t.hasOwnProperty("exp") ? t.exp : n + 86400)),
                  !!e && !!n && !!i && e >= n && e <= i
                );
              };
              R.issuedAtTime = function (e) {
                const t = w(e).claims;
                return "object" == typeof t && t.hasOwnProperty("iat")
                  ? t.iat
                  : null;
              };
              R.isValidFormat = function (e) {
                const t = w(e),
                  n = t.claims;
                return !!n && "object" == typeof n && n.hasOwnProperty("iat");
              };
              function x(e) {
                return null !== e && "object" == typeof e;
              }
              R.isAdmin = function (e) {
                e = w(e).claims;
                return "object" == typeof e && !0 === e.admin;
              };
              R.Sha1 = class {
                constructor() {
                  (this.chain_ = []),
                    (this.buf_ = []),
                    (this.W_ = []),
                    (this.pad_ = []),
                    (this.inbuf_ = 0),
                    (this.total_ = 0),
                    (this.blockSize = 64),
                    (this.pad_[0] = 128);
                  for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
                  this.reset();
                }
                reset() {
                  (this.chain_[0] = 1732584193),
                    (this.chain_[1] = 4023233417),
                    (this.chain_[2] = 2562383102),
                    (this.chain_[3] = 271733878),
                    (this.chain_[4] = 3285377520),
                    (this.inbuf_ = 0),
                    (this.total_ = 0);
                }
                compress_(t, n) {
                  n = n || 0;
                  const i = this.W_;
                  if ("string" == typeof t)
                    for (let e = 0; e < 16; e++)
                      (i[e] =
                        (t.charCodeAt(n) << 24) |
                        (t.charCodeAt(n + 1) << 16) |
                        (t.charCodeAt(n + 2) << 8) |
                        t.charCodeAt(n + 3)),
                        (n += 4);
                  else
                    for (let e = 0; e < 16; e++)
                      (i[e] =
                        (t[n] << 24) |
                        (t[n + 1] << 16) |
                        (t[n + 2] << 8) |
                        t[n + 3]),
                        (n += 4);
                  for (let e = 16; e < 80; e++) {
                    var r = i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16];
                    i[e] = 4294967295 & ((r << 1) | (r >>> 31));
                  }
                  let o = this.chain_[0],
                    a = this.chain_[1],
                    s = this.chain_[2],
                    l = this.chain_[3],
                    c = this.chain_[4],
                    d,
                    h;
                  for (let e = 0; e < 80; e++) {
                    h =
                      e < 40
                        ? e < 20
                          ? ((d = l ^ (a & (s ^ l))), 1518500249)
                          : ((d = a ^ s ^ l), 1859775393)
                        : e < 60
                        ? ((d = (a & s) | (l & (a | s))), 2400959708)
                        : ((d = a ^ s ^ l), 3395469782);
                    var u =
                      (((o << 5) | (o >>> 27)) + d + c + h + i[e]) & 4294967295;
                    (c = l),
                      (l = s),
                      (s = 4294967295 & ((a << 30) | (a >>> 2))),
                      (a = o),
                      (o = u);
                  }
                  (this.chain_[0] = (this.chain_[0] + o) & 4294967295),
                    (this.chain_[1] = (this.chain_[1] + a) & 4294967295),
                    (this.chain_[2] = (this.chain_[2] + s) & 4294967295),
                    (this.chain_[3] = (this.chain_[3] + l) & 4294967295),
                    (this.chain_[4] = (this.chain_[4] + c) & 4294967295);
                }
                update(n, i) {
                  if (null != n) {
                    var r = (i = void 0 === i ? n.length : i) - this.blockSize;
                    let e = 0;
                    const o = this.buf_;
                    let t = this.inbuf_;
                    for (; e < i; ) {
                      if (0 === t)
                        for (; e <= r; )
                          this.compress_(n, e), (e += this.blockSize);
                      if ("string" == typeof n) {
                        for (; e < i; )
                          if (
                            ((o[t] = n.charCodeAt(e)),
                            ++t,
                            ++e,
                            t === this.blockSize)
                          ) {
                            this.compress_(o), (t = 0);
                            break;
                          }
                      } else
                        for (; e < i; )
                          if (((o[t] = n[e]), ++t, ++e, t === this.blockSize)) {
                            this.compress_(o), (t = 0);
                            break;
                          }
                    }
                    (this.inbuf_ = t), (this.total_ += i);
                  }
                }
                digest() {
                  const n = [];
                  let t = 8 * this.total_;
                  this.inbuf_ < 56
                    ? this.update(this.pad_, 56 - this.inbuf_)
                    : this.update(
                        this.pad_,
                        this.blockSize - (this.inbuf_ - 56)
                      );
                  for (let e = this.blockSize - 1; 56 <= e; e--)
                    (this.buf_[e] = 255 & t), (t /= 256);
                  this.compress_(this.buf_);
                  let i = 0;
                  for (let t = 0; t < 5; t++)
                    for (let e = 24; 0 <= e; e -= 8)
                      (n[i] = (this.chain_[t] >> e) & 255), ++i;
                  return n;
                }
              };
              class k {
                constructor(e, t) {
                  (this.observers = []),
                    (this.unsubscribes = []),
                    (this.observerCount = 0),
                    (this.task = Promise.resolve()),
                    (this.finalized = !1),
                    (this.onNoObservers = t),
                    this.task
                      .then(() => {
                        e(this);
                      })
                      .catch((e) => {
                        this.error(e);
                      });
                }
                next(t) {
                  this.forEachObserver((e) => {
                    e.next(t);
                  });
                }
                error(t) {
                  this.forEachObserver((e) => {
                    e.error(t);
                  }),
                    this.close(t);
                }
                complete() {
                  this.forEachObserver((e) => {
                    e.complete();
                  }),
                    this.close();
                }
                subscribe(e, t, n) {
                  let i;
                  if (void 0 === e && void 0 === t && void 0 === n)
                    throw new Error("Missing Observer.");
                  (i = (function (e, t) {
                    if ("object" != typeof e || null === e) return !1;
                    for (const n of t)
                      if (n in e && "function" == typeof e[n]) return !0;
                    return !1;
                  })(e, ["next", "error", "complete"])
                    ? e
                    : { next: e, error: t, complete: n }),
                    void 0 === i.next && (i.next = C),
                    void 0 === i.error && (i.error = C),
                    void 0 === i.complete && (i.complete = C);
                  n = this.unsubscribeOne.bind(this, this.observers.length);
                  return (
                    this.finalized &&
                      this.task.then(() => {
                        try {
                          this.finalError
                            ? i.error(this.finalError)
                            : i.complete();
                        } catch (e) {}
                      }),
                    this.observers.push(i),
                    n
                  );
                }
                unsubscribeOne(e) {
                  void 0 !== this.observers &&
                    void 0 !== this.observers[e] &&
                    (delete this.observers[e],
                    --this.observerCount,
                    0 === this.observerCount &&
                      void 0 !== this.onNoObservers &&
                      this.onNoObservers(this));
                }
                forEachObserver(t) {
                  if (!this.finalized)
                    for (let e = 0; e < this.observers.length; e++)
                      this.sendOne(e, t);
                }
                sendOne(e, t) {
                  this.task.then(() => {
                    if (
                      void 0 !== this.observers &&
                      void 0 !== this.observers[e]
                    )
                      try {
                        t(this.observers[e]);
                      } catch (e) {}
                  });
                }
                close(e) {
                  this.finalized ||
                    ((this.finalized = !0),
                    void 0 !== e && (this.finalError = e),
                    this.task.then(() => {
                      (this.observers = void 0), (this.onNoObservers = void 0);
                    }));
                }
              }
              function C() {}
              function E(e, t) {
                return `${e} failed: ${t} argument `;
              }
              R.validateArgCount = function (e, t, n, i) {
                let r;
                if (
                  (i < t
                    ? (r = "at least " + t)
                    : n < i && (r = 0 === n ? "none" : "no more than " + n),
                  r)
                ) {
                  i =
                    e +
                    " failed: Was called with " +
                    i +
                    (1 === i ? " argument." : " arguments.") +
                    " Expects " +
                    r +
                    ".";
                  throw new Error(i);
                }
              };
              R.stringToByteArray = function (n) {
                const i = [];
                let r = 0;
                for (let t = 0; t < n.length; t++) {
                  let e = n.charCodeAt(t);
                  var o, a;
                  55296 <= e &&
                    e <= 56319 &&
                    ((o = e - 55296),
                    t++,
                    s(t < n.length, "Surrogate pair missing trail surrogate."),
                    (a = n.charCodeAt(t) - 56320),
                    (e = 65536 + (o << 10) + a)),
                    e < 128
                      ? (i[r++] = e)
                      : (e < 2048
                          ? (i[r++] = (e >> 6) | 192)
                          : (e < 65536
                              ? (i[r++] = (e >> 12) | 224)
                              : ((i[r++] = (e >> 18) | 240),
                                (i[r++] = ((e >> 12) & 63) | 128)),
                            (i[r++] = ((e >> 6) & 63) | 128)),
                        (i[r++] = (63 & e) | 128));
                }
                return i;
              };
              R.stringLength = function (t) {
                let n = 0;
                for (let e = 0; e < t.length; e++) {
                  var i = t.charCodeAt(e);
                  i < 128
                    ? n++
                    : i < 2048
                    ? (n += 2)
                    : 55296 <= i && i <= 56319
                    ? ((n += 4), e++)
                    : (n += 3);
                }
                return n;
              };
              R.uuidv4 = function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  (e) => {
                    const t = (16 * Math.random()) | 0,
                      n = "x" === e ? t : (3 & t) | 8;
                    return n.toString(16);
                  }
                );
              };
              const I = 1e3,
                T = 2,
                S = 144e5;
              R.MAX_VALUE_MILLIS = S;
              const P = 0.5;
              R.RANDOM_FACTOR = P;
            }.call(this);
          }.call(
            this,
            e("_process"),
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          );
        },
        { _process: 12 },
      ],
      7: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = e("@firebase/app");
          Object.keys(i).forEach(function (e) {
            "default" !== e &&
              "__esModule" !== e &&
              ((e in n && n[e] === i[e]) ||
                Object.defineProperty(n, e, {
                  enumerable: !0,
                  get: function () {
                    return i[e];
                  },
                }));
          });
          (0, i.registerVersion)("firebase", "10.12.4", "app");
        },
        { "@firebase/app": 2 },
      ],
      8: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 });
          var i = e("@firebase/database");
          Object.keys(i).forEach(function (e) {
            "default" !== e &&
              "__esModule" !== e &&
              ((e in n && n[e] === i[e]) ||
                Object.defineProperty(n, e, {
                  enumerable: !0,
                  get: function () {
                    return i[e];
                  },
                }));
          });
        },
        { "@firebase/database": 4 },
      ],
      9: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.deleteDB = function (e, { blocked: t } = {}) {
              const n = indexedDB.deleteDatabase(e);
              t && n.addEventListener("blocked", (e) => t(e.oldVersion, e));
              return (0, l.w)(n).then(() => {});
            }),
            (n.openDB = function (
              e,
              t,
              { blocked: n, upgrade: i, blocking: r, terminated: o } = {}
            ) {
              const a = indexedDB.open(e, t),
                s = (0, l.w)(a);
              i &&
                a.addEventListener("upgradeneeded", (e) => {
                  i(
                    (0, l.w)(a.result),
                    e.oldVersion,
                    e.newVersion,
                    (0, l.w)(a.transaction),
                    e
                  );
                });
              n &&
                a.addEventListener("blocked", (e) =>
                  n(e.oldVersion, e.newVersion, e)
                );
              return (
                s
                  .then((e) => {
                    o && e.addEventListener("close", () => o()),
                      r &&
                        e.addEventListener("versionchange", (e) =>
                          r(e.oldVersion, e.newVersion, e)
                        );
                  })
                  .catch(() => {}),
                s
              );
            }),
            Object.defineProperty(n, "unwrap", {
              enumerable: !0,
              get: function () {
                return l.u;
              },
            }),
            Object.defineProperty(n, "wrap", {
              enumerable: !0,
              get: function () {
                return l.w;
              },
            });
          var l = e("./wrap-idb-value.js");
          const a = ["get", "getKey", "getAll", "getAllKeys", "count"],
            s = ["put", "add", "delete", "clear"],
            c = new Map();
          function r(e, t) {
            if (e instanceof IDBDatabase && !(t in e) && "string" == typeof t) {
              if (c.get(t)) return c.get(t);
              const i = t.replace(/FromIndex$/, ""),
                r = t !== i,
                o = s.includes(i);
              if (
                i in (r ? IDBIndex : IDBObjectStore).prototype &&
                (o || a.includes(i))
              ) {
                e = async function (e, ...t) {
                  e = this.transaction(e, o ? "readwrite" : "readonly");
                  let n = e.store;
                  return (
                    r && (n = n.index(t.shift())),
                    (await Promise.all([n[i](...t), o && e.done]))[0]
                  );
                };
                return c.set(t, e), e;
              }
            }
          }
          (0, l.r)((i) => ({
            ...i,
            get: (e, t, n) => r(e, t) || i.get(e, t, n),
            has: (e, t) => !!r(e, t) || i.has(e, t),
          }));
        },
        { "./wrap-idb-value.js": 10 },
      ],
      10: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.i = n.a = void 0),
            (n.r = function (e) {
              h = e(h);
            }),
            (n.u = void 0),
            (n.w = g);
          const i = (t, e) => e.some((e) => t instanceof e);
          n.i = i;
          let r, o;
          const a = new WeakMap(),
            s = new WeakMap(),
            l = new WeakMap(),
            c = new WeakMap(),
            d = new WeakMap();
          n.a = d;
          let h = {
            get(e, t, n) {
              if (e instanceof IDBTransaction) {
                if ("done" === t) return s.get(e);
                if ("objectStoreNames" === t)
                  return e.objectStoreNames || l.get(e);
                if ("store" === t)
                  return n.objectStoreNames[1]
                    ? void 0
                    : n.objectStore(n.objectStoreNames[0]);
              }
              return g(e[t]);
            },
            set(e, t, n) {
              return (e[t] = n), !0;
            },
            has(e, t) {
              return (
                (e instanceof IDBTransaction &&
                  ("done" === t || "store" === t)) ||
                t in e
              );
            },
          };
          function u(n) {
            return n !== IDBDatabase.prototype.transaction ||
              "objectStoreNames" in IDBTransaction.prototype
              ? (o = o || [
                  IDBCursor.prototype.advance,
                  IDBCursor.prototype.continue,
                  IDBCursor.prototype.continuePrimaryKey,
                ]).includes(n)
                ? function (...e) {
                    return n.apply(f(this), e), g(a.get(this));
                  }
                : function (...e) {
                    return g(n.apply(f(this), e));
                  }
              : function (e, ...t) {
                  t = n.call(f(this), e, ...t);
                  return l.set(t, e.sort ? e.sort() : [e]), g(t);
                };
          }
          function p(e) {
            return "function" == typeof e
              ? u(e)
              : (e instanceof IDBTransaction &&
                  ((o = e),
                  s.has(o) ||
                    ((t = new Promise((e, t) => {
                      const n = () => {
                          o.removeEventListener("complete", i),
                            o.removeEventListener("error", r),
                            o.removeEventListener("abort", r);
                        },
                        i = () => {
                          e(), n();
                        },
                        r = () => {
                          t(
                            o.error ||
                              new DOMException("AbortError", "AbortError")
                          ),
                            n();
                        };
                      o.addEventListener("complete", i),
                        o.addEventListener("error", r),
                        o.addEventListener("abort", r);
                    })),
                    s.set(o, t))),
                i(
                  e,
                  (r = r || [
                    IDBDatabase,
                    IDBObjectStore,
                    IDBIndex,
                    IDBCursor,
                    IDBTransaction,
                  ])
                )
                  ? new Proxy(e, h)
                  : e);
            var o, t;
          }
          function g(e) {
            if (e instanceof IDBRequest)
              return (function (o) {
                const e = new Promise((e, t) => {
                  const n = () => {
                      o.removeEventListener("success", i),
                        o.removeEventListener("error", r);
                    },
                    i = () => {
                      e(g(o.result)), n();
                    },
                    r = () => {
                      t(o.error), n();
                    };
                  o.addEventListener("success", i),
                    o.addEventListener("error", r);
                });
                return (
                  e
                    .then((e) => {
                      e instanceof IDBCursor && a.set(e, o);
                    })
                    .catch(() => {}),
                  d.set(e, o),
                  e
                );
              })(e);
            if (c.has(e)) return c.get(e);
            var t = p(e);
            return t !== e && (c.set(e, t), d.set(t, e)), t;
          }
          const f = (e) => d.get(e);
          n.u = f;
        },
        {},
      ],
      11: [
        function (e, t, n) {
          t.exports =
            '.wabs-tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.wabs-tooltip .tooltiptext {\n  visibility: hidden;\n  font-size: small;\n  padding: 8px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  top: 150%;\n  left: 20%;\n  width: 290px;\n  margin-left: -144px;\n  line-height: 1.2;\n  white-space: normal;\n}\n\n.wabs-tooltip .tooltiptext::after {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent;\n}\n\n.wabs-tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n\n.dark #wabs {\n background-color: var(--background-default) !important;\n color: var(--primary-lighter);\n}\n\n.dark #wabs .language ul > li:hover {\n  color: var(--background-default)\n}\n\n.dark #wabs label {\n  color: var(--primary-lighter) !important;\n}\n\n.dark #wabs .tabs .tab-label-content > label {\n  background-color: var(--panel-background);\n}\n\n.dark #wabs .footer-nav, .dark #wabs .language ul {\n  background-color: var(--panel-background) !important;\n}\n\n.dark #wabs .btn--primary {\n  background-color: var(--button-round-background);\n}\n\n.dark #wabs #logo {\n  background:white;\n  padding:5px 10px;\n  border-radius:20px\n}\n\n.dark #wabs label[for*="collapsible-"] {\n  border-bottom: 1px solid var(--border-list);\n}\n\n.dark #wabs button svg path {\n  fill: var(--primary-stronger);\n}\n\n.dark #wabs .modal-log-trigger {\n  color: var(--primary-stronger) !important;\n}\n\n\n.dark #wabs .choices__inner {\n  background-color: var(--panel-background);\n  border-color: var(--border-list);\n}\n\n.dark #wabs .modal-content .choices__inner {\n  border-color: var(--button-round-background)\n}\n\n.dark #wabs .choices__input {\n  background-color: transparent;\n}\n\n.dark #wabs .modal-content {\n  background: var(--panel-background) !important;\n}\n\n.dark #wabs input[type="text"], .dark #wabs select {\n  color: var(--secondary-lighter) !important;\n}\n\n.dark #wabs .modal-content code {\n  background: var(--background-default);\n}\n\n.dark #wabs .message.sent {\n  background-color: var(--outgoing-background);\n}\n\n.dark #wabs .message.sent textarea {\n  color: var(--primary-stronger);\n}\n\n.dark #wabs .message.sent::after {\n  border-color: transparent transparent transparent var(--outgoing-background);\n}\n\n.dark #wabs .btn--flat {\n  border-radius: 1.98px;\n}\n\n.dark #wabs .choices_list--dropdown .choices_item--selectable.ishighlighted{\n  background:var(--button-round-background) !important;\n  color: #ffffff;\n}\n\n.dark #wabs .collapsible-wrap.card.no-pad>label{\n  border-bottom-color:var(--border-list) !important;\n}\n\n.dark #wabs .choices__list--dropdown .choices__item--selectable.is-highlighted{\n  background:var(--button-round-background) !important;\n  color: #ffffff;\n}\n.dark #wabs .choices[data-type*=\'select-multiple\'] .choices__button, .choices[data-type*=\'text\'] .choices__button{\n  border-left:1px solid #fff !important\n}\n\n.dark #wabs .is-open .choices__list--dropdown {\n  background-color: var(--panel-background);\n}\n\n.dark #wabs .choices[data-type*="select-one"]::after {\n  border-color: var(--secondary-lighter) transparent transparent;\n}\n\n.dark #wabs #activities-table .table-header, .dark #wabs .packages-table .table-header {\n  color: var(--primary-stronger);\n}\n\n.dark #wabs table tr:hover {\n  color: var(--panel-background);\n}\n\n.dark .alerty {\n  background: var(--background-default);\n  color: var(--primary-lighter);\n}\n\n.dark .alerty .alerty-title {\n  color: var(--primary-lighter)\n}\n\n.dark .alerty .alerty-action .btn-ok {\n  background-color: var(--button-round-background);\n}\n\n.dark .alerty .alerty-action .btn-ok:hover {\n  background-color: var(--button-round-background);\n  filter: brightness(120%);\n}\n\n\n.dark .alerty .alerty-action .btn-cancel {\n  color: var(--button-round-background);\n}\n\n.dark .alerty .alerty-content .alerty-prompt input {\n  background-color: var(--panel-background);\n  color: var(--primary-lighter);\n}\n\n.dark .alerty .alerty-content .alerty-message {\n  color: var(--primary-lighter);\n}\n\n.dark footer > .quick-replies-container > button {\n  background-color: var(--button-primary-background);\n  color: var(--primary-stronger);\n}\n\n.dark .snackbar {\n  background-color: var(--button-primary-background);\n}\n\n\n.dark .snackbar span a {\n  color: #ffffff;\n}\n\n.dark .emoji-picker-container svg path {\n  fill: currentColor !important;\n}\n\n.dark #waResetPassword {\n  color: #eee !important;\n}\n\n\n\nfooter .quick-replies-container {\n  padding: 5px 5px 2px 5px;\n  white-space: nowrap;\n  overflow-y:scroll;\n/*  position: absolute;\nbottom: 60px;*/\nmax-width: 100%;\nbackground-color: var(--rich-text-panel-background);\nborder-left: 1px solid var(--border-stronger);\n/*opacity: 0.4;*/\n}\n\n/*footer .quick-replies-container:hover {\n  opacity: 1;\n  }*/\n\n  footer > .quick-replies-container > button {\n    padding: 2px 5px;\n    background: #ebebeb;\n    border-radius: 20px;\n    color: #444444;\n    box-shadow: 0 1px .5px rgba(var(--shadow-rgb),.13);\n  }\n\n  footer > .quick-replies-container > button.disabled-button {\n    opacity: 0.4;\n    pointer-events: none;\n  }\n\n  .quick-labels-list-holder {\n    transform-origin: right top;\n    transform: scale(0);\n    top: 44px;\n    max-width: 340px;\n    overflow: hidden;\n    position: absolute;\n    z-index: 10000;\n    background-color: var(--dropdown-background);\n    border-radius: 3px;\n    box-shadow: 0 2px 5px 0 rgba(var(--shadow-rgb), 0.26), 0 2px 10px 0 rgba(var(--shadow-rgb), 0.16);\n    padding: 9px 0;\n    transition: transform 150ms linear;\n    overflow-y: auto;\n    max-height: 450px;\n  }\n  .quick-labels-list-holder.active {\n    transform: scale(1);\n  }\n  .quick-labels-list-holder span {\n    display: none;\n  }\n  .quick-labels-list-holder .has-label span {\n    display: inline-block;\n  }\n  .quick-label-item-inner {\n    flex-grow: 1;\n    overflow: hidden;\n    position: relative;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n    color: var(--primary);\n    display: block;\n    font-size: 14.5px;\n    height: 40px;\n    line-height: 14.5px;\n    white-space: nowrap;\n    cursor: pointer;\n    padding-top: 13px;\n  }\n  .quick-label-item {\n    position: relative;\n  }\n  .quick-label-item:hover {\n    background-color: var(--dropdown-background-hover);\n  }\n  html[dir="ltr"] .quick-labels-list-holder {\n    text-align: left;\n  }\n  html[dir="ltr"] .quick-labels-list-holder {\n    right: 4px;\n  }\n  html[dir="ltr"] .quick-label-item-inner {\n    padding-left: 24px;\n    padding-right: 58px;\n  }\n\n\n\n\n\n\n\n\n  @-webkit-keyframes tada { \n    0% {-webkit-transform: scale(1);}\n    10%, 20% {-webkit-transform: scale(0.9) rotate(-3deg);} \n    30%, 50%, 70%, 90% {-webkit-transform: scale(1.1) rotate(3deg);}\n    40%, 60%, 80% {-webkit-transform: scale(1.1) rotate(-3deg);} \n    100% {-webkit-transform: scale(1) rotate(0);} \n  }\n\n  @keyframes tada { \n    0% {transform: scale(1);} \n    10%, 20% {transform: scale(0.9) rotate(-3deg);} \n    30%, 50%, 70%, 90% {transform: scale(1.1) rotate(3deg);} \n    40%, 60%, 80% {transform: scale(1.1) rotate(-3deg);} \n    100% {transform: scale(1) rotate(0);}\n  }\n\n\n  #wabs .tada { \n    -webkit-animation-name: tada; \n    animation-name: tada;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s; \n    -webkit-animation-fill-mode: both; \n    animation-fill-mode: both;\n    animation-iteration-count: infinite;\n  }\n\n  #wabs.rtl #send-sticker, #wabs.rtl #send-status {\n   -moz-transform: scale(-1, -1);\n   -o-transform: scale(-1, -1);\n   -webkit-transform: scale(-1, -1);\n   transform: scale(-1, -1);\n }\n\n #wabs.rtl .modal-content label > input[type="checkbox"] {\n  margin-right: 0;\n  margin-left: 10px;\n}\n\n#wabs.rtl .modal-content label > input[type="checkbox"]:not(.modal-trigger):not(.toggle):not(#alert-check):not([id*="lightbox-"]):checked::after {\n  right: 0;\n}\n\n/* snackbar */\n#snackbar-container {\n  position: fixed;\n  left: 20px;\n  bottom: 0;\n  z-index: 99999;\n}\n.snackbar {\n  overflow: hidden;\n  clear: both;\n  /*min-width: 288px;\n  max-width: 568px;*/\n  width: fit-content;\n  cursor: pointer;\n  opacity: 0;\n}\n.snackbar.snackbar-opened {\n  height: auto;\n  opacity: 1;\n}\n@media (max-width: 767px) {\n  #snackbar-container {\n    left: 0px !important;\n    right: 0px;\n    width: 100%;\n  }\n  #snackbar-container .snackbar {\n    min-width: 100%;\n  }\n  #snackbar-container [class="snackbar snackbar-opened"] ~ .snackbar.toast {\n    margin-top: 20px;\n  }\n  #snackbar-container [class="snackbar snackbar-opened"] {\n    border-radius: 0;\n    margin-bottom: 0;\n  }\n}\n\n.snackbar {\n  background-color: #323232;\n  color: #FFFFFF;\n  font-size: 14px;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  height: 0;\n  -moz-transition: -moz-transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, padding 0 linear 0.2s, height 0 linear 0.2s;\n  -webkit-transition: -webkit-transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, padding 0 linear 0.2s, height 0 linear 0.2s;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, padding 0 linear 0.2s, height 0 linear 0.2s;\n  -moz-transform: translateY(200%);\n  -webkit-transform: translateY(200%);\n  transform: translateY(200%);\n}\n.snackbar.snackbar-opened {\n  padding: 14px 15px;\n  margin-bottom: 20px;\n  height: auto;\n  -moz-transition: -moz-transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s;\n  -webkit-transition: -webkit-transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, height 0 linear 0.2s;\n  -moz-transform: none;\n  -webkit-transform: none;\n  transform: none;\n}\n.snackbar.toast {\n  border-radius: 200px;\n}\n\n\n#wabs .emoji-picker-list > li {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n#wabs button[disabled] {\n  pointer-events: none;\n  background-color: lightgray;\n  color: #eee;\n}\n\n.alerty ::selection { \n  background: #04CD52 !important;\n  color: #ffffff !important\n}\n\n.alerty-message .labels-list {\n  margin-left: -24px;\n  margin-right: -24px;\n}\n\n.alerty-message .labels-list li {\n  cursor: pointer;\n}\n\n.alerty-message .labels-list li:hover {\n  background-color: #f5f5f5;\n}\n\n.alerty-message .labels-list li label {\n  padding: 5px;\n  text-align: left;\n  direction: ltr;\n}\n\n.alerty-message .labels-list li label {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.alerty .btn-cancel, .alerty .btn-ok {\n  text-transform: uppercase;\n}\n\n.wabs-rtl .alerty {\n  direction: rtl;\n  text-align: right;\n}\n\n.wabs-rtl .alerty input[type="text"] {\n  direction: ltr;\n  text-align: left;\n}\n\n.wabs-rtl .alerty-content, .wabs-rtl .alerty .alerty-content .alerty-message {\n  text-align: right;\n}\n\n.wabs-rtl .snackbar.snackbar-opened {\n  direction: rtl;\n  text-align: right;\n}\n\n#wabs .tip.groups-tools-btn:hover::after {\n  bottom: -3em;\n  left: 0 !important;\n  width: max-content;\n  transform: none;\n}\n\n#wabs #add-group-action:hover::after {\n  bottom: -35px !important;\n  right: 0 !important;\n  width: max-content;\n  transform: none;\n  left: auto !important;\n}\n\n\n/*\n.center-menu {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 99999;\n}\n\n.center-menu.menu {\n  width: 30px;\n  height: 30px;\n}\n\n.center-menu .item {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  cursor: pointer;\n  text-align: center;\n  line-height: 30px;\n}\n\n.center-menu i {\n  font-size: calc(30*0.6)px;\n  color: #222222;\n}\n\n*/\n\n#wabs .choices.is-open {\n  z-index: 9999999;\n}\n\n#wabs .vcard-container .choices, #wabs .vcard-container .choices .choices__inner {\n  width: 100% !important;\n  height: fit-content !important;\n} \n\n#wabs .reply-days-container .choices, #wabs .reply-days-container .choices .choices__inner {\n  width: 100% !important;\n  height: fit-content !important;\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n} \n\n#wabs .reply-groups-container .choices, #wabs .reply-groups-container .choices .choices__inner {\n  width: 100% !important;\n  height: fit-content !important;\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n}\n\n#wabs .reply-auto-label-container .choices, #wabs .reply-auto-label-container .choices .choices__inner {\n  width: 100% !important;\n  height: fit-content !important;\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n}\n\n#wabs .reply-options-holder label {\n  line-height: 1.5 !important;\n}\n\n\nhtml[dir=rtl] .alerty-content {\n  direction: rtl;\n  text-align: right;\n}\n\n#wabs.rtl .emoji-picker-trigger {\n  left: 0;\n}\n\n/*\n      emoji-picker styles\n      */\n\n      #wabs .emoji-picker-container {\n        position: relative;\n      }\n\n      #wabs .emoji-picker-trigger {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        background: none;\n        box-shadow: none;\n        border: none;\n        opacity: 0.5;\n        cursor: pointer;\n        outline: none !important;\n        border-radius: 50%;\n      }\n      #wabs .emoji-picker-trigger:hover {\n        opacity: 1;\n      }\n\n      #wabs .emoji-picker-open .emoji-picker-trigger > svg {\n        opacity: 0;\n        visibility: hidden;\n      }\n      #wabs .emoji-picker-open .emoji-picker-trigger:before {\n        content: "\0D7";\n        position: absolute;\n        font-size: 24px;\n        background: #fff;\n        top: -3px;\n        right: 0;\n      }\n\n      #wabs .emoji-picker {\n        display: none;\n        z-index: 999;\n        width: 272px;\n        overflow: hidden;\n        background: #fff;\n        border-radius: 5px;\n        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n        margin-top: 8px;\n        outline: none;\n      }\n      #wabs .emoji-picker-open .emoji-picker {\n        display: block;\n        position: absolute;\n        right: 0;\n        top: 30px;\n      }\n      #wabs [data-meteor-emoji-large] + .emoji-picker {\n        display: block;\n        width: 100%;\n        margin-bottom: 15px;\n        position: static !important;\n      }\n\n      #wabs .emoji-picker-tabs {\n        padding: 0;\n        margin: 0;\n        display: table;\n        width: 100%;\n        background: #eff0f1;\n        list-style: none;\n      }\n\n      #wabs .emoji-picker-tabs > li {\n        display: table-cell;\n      }\n\n      #wabs .emoji-picker-anchor {\n        display: block;\n        padding: 5px;\n        text-align: center;\n        text-decoration: none;\n        font-size: 24px;\n        position: initial;\n        opacity: 0.75;\n      }\n      #wabs .emoji-picker-anchor:hover {\n        background: rgba(0,0,0,.05);\n        opacity: 1;\n      }\n      #wabs .emoji-picker-anchor.active {\n        background: rgba(0,0,0,.15);\n      }\n\n      #wabs .emoji-picker-list {\n        padding: 10px 0;\n        margin: 0;\n        margin-left: 3%;\n        list-style: none;\n        text-align: left;\n      }\n      #wabs .emoji-picker-list > li {\n        display: inline-block;\n      }\n\n      #wabs .emoji-picker-emoji {\n        background: none;\n        border: none;\n        -webkit-appearance: none;\n        padding: 5px;\n        margin: 1px;\n        font-size: 24px !important;\n        line-height: 1;\n        border-radius: 3px;\n        cursor: pointer;\n        font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\';\n      }\n      #wabs .emoji-picker-emoji:hover {\n        background: rgba(0,0,0,.07);\n      }\n\n\n\n\n\n\n\n      #wabs .language ul {\n        bottom: 20px;\n        background-color: rgb(26, 188, 156);\n        transform-origin: 0 100%;\n        margin: 0 8px;\n        width: 90px;\n        padding-right: 15px;\n        margin-right: 0;\n      }\n\n\n      #wabs .language ul > li {\n        padding: 5px 8px;\n        display: inline-block;\n        margin: 0;\n      }\n\n      #wabs .language ul > li:hover {\n        color: rgb(26, 188, 156);\n        background-color: #fff;\n      }\n\n      #wabs .label-tag {\n        background-color: red !important;\n        color: white;\n        font-size: x-small;\n        vertical-align: middle;\n        text-transform: uppercase;\n        line-height: 1.5;\n        height: fit-content;\n      }\n\n\n      #wabs #datepicker {\n        border-radius: 4px;\n        padding: 6px;\n        position: relative;\n        display: inline-block;\n        border: 2px solid rgb(33, 150, 243);\n        overflow: visible;\n        outline: none;\n      }\n\n      #wabs #datepicker::before {\n        width: 0px;\n        height: 0px;\n        border-left: 5px solid transparent;\n        border-right: 5px solid transparent;\n        position: absolute;\n        right: 8px;\n        top: -9px;\n        border-bottom: 8px solid rgb(33, 150, 243);\n        content: " ";\n      }\n\n      #wabs #datepicker.has-error {\n        border: 2px solid red !important;\n      }\n\n      #wabs #datepicker.has-error::before {\n        border-bottom: 8px solid red !important;\n      }\n\n      .chat-dropdown {\n        top:44px;\n        right:4px;\n        background-color:var(--dropdown-background);\n        border-radius:3px;\n        box-shadow:0 2px 5px 0 rgba(var(--shadow-rgb),.26),0 2px 10px 0 rgba(var(--shadow-rgb),.16);\n        padding:12px;\n        position: absolute;\n        max-width: 250px;\n        z-index: 9;\n      }\n\n\n      .chat-dropdown li {\n        flex-grow: 1;\n        overflow: hidden;\n        position: relative;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        box-sizing: border-box;\n        color: var(--primary);\n        display: block;\n        font-size: 14.5px;\n        height: 40px;\n        line-height: 14.5px;\n        white-space: nowrap;\n      }\n\n      .chat-dropdown li img {\n        border-radius: 50%;\n        width: 30px;\n        float: left;\n      }\n\n      .message{color:#000;clear:both;line-height:18px;font-size:15px;padding:8px;position:relative;margin:8px 0;max-width:100%;word-wrap:break-word;z-index:-1;margin-bottom: 20px}\n      .message:after{position:absolute;content:"";width:0;height:0;border-style:solid;}\n      .message.sent{background:#e1ffc7;border-radius:5px 0px 5px 5px;}\n      .message.sent:after{border-width:0px 0 10px 10px;border-color:transparent transparent transparent #e1ffc7;top:0;right:-10px;}\n\n\n\n      .message-type-container > label > span, .reply-type-container > label > span {\n        padding: 20px 5px;\n        vertical-align: middle;\n        line-height: 2;\n        cursor: pointer;\n      }\n\n\n\n      .shake {\n        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n        transform: translate3d(0, 0, 0);\n        backface-visibility: hidden;\n        perspective: 1000px;\n      }\n\n      @keyframes shake {\n        10%, 90% {\n          transform: translate3d(-1px, 0, 0);\n        }\n\n        20%, 80% {\n          transform: translate3d(2px, 0, 0);\n        }\n\n        30%, 50%, 70% {\n          transform: translate3d(-4px, 0, 0);\n        }\n\n        40%, 60% {\n          transform: translate3d(4px, 0, 0);\n        }\n      }\n\n\n\n      .wa-lock-inner {\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        margin-left: -150px;\n        width: 300px;\n        text-align: center;\n        margin-top: -100px;\n      }\n\n\n      .wa-lock-inner img {\n        display: block;\n        margin: 0 auto;\n        width: 60px;\n        border-radius: 50%;\n      }\n\n      .wa-lock-inner input {\n        width: 200px;\n        height: 30px;\n        line-height: 30px;\n        border-radius: 25px;\n        border: 0;\n        -webkit-box-shadow:  0px 0px 42px -1px rgba(0,0,0,0.2);\n        -moz-box-shadow: 0px 0px 42px -1px rgba(0,0,0,0.2);\n        box-shadow: 0px 0px 42px -1px rgba(0,0,0,0.2);\n        outline: none;\n        text-align: center;\n        padding: 2px 25px;\n        font-size: 18px;\n      }\n\n      .wa-lock-inner p {\n        color: red;\n        opacity: 0.55;\n        cursor: pointer;\n        display: inline-block;\n      }\n\n      .wa-lock-inner .input-holder {\n        position: relative;\n        margin-top: 20px;\n      }\n\n      .wa-lock-inner .input-holder > svg {\n        position: absolute;\n        left: 36px;\n        top: 6px;\n      }\n\n      .wa-lock-inner button {\n        height: 30px;\n        background: #4adf82;\n        color: #ffffff;\n        width: 30px;\n        border-radius: 25px;\n        position: absolute;\n        right: 28px;\n        top: 2px;\n      }\n\n      .wa-lock-inner button svg {\n        -webkit-transform: scaleX(-1);\n        transform: scaleX(-1);\n        margin-left: 2px;\n      }\n\n      .wa-lock-inner input::placeholder {\n        color: lightgray;\n      }\n\n      .wa-lock-wrapper {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 99999;\n        direction: ltr;\n      }\n\n      .wa-lock {\n        filter: blur(10px);\n        -webkit-filter: blur(10px);\n        pointer-events: none;\n      }\n\n      .black-and-white {\n        -webkit-filter: grayscale(100%);\n        filter: grayscale(100%);\n      }\n\n      .alerty {\n        color: #1b1919;\n        position: fixed;\n        z-index: 1061;\n        border-radius: 2px;\n        width: 400px;\n        margin-left: -200px;\n        background-color: #fff;\n        -webkit-box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n        font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n        left: 50%;\n        top: 50%;\n        font-size: 16px;\n      }\n\n\n      @-webkit-keyframes zoomIn {\n        from {\n          opacity: 0;\n          -webkit-transform: scale3d(0.3, 0.3, 0.3);\n          transform: scale3d(0.3, 0.3, 0.3);\n        }\n\n        50% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes zoomIn {\n        from {\n          opacity: 0;\n          -webkit-transform: scale3d(0.3, 0.3, 0.3);\n          transform: scale3d(0.3, 0.3, 0.3);\n        }\n\n        50% {\n          opacity: 1;\n        }\n      }\n\n      .zoomIn {\n        -webkit-animation-name: zoomIn;\n        animation-name: zoomIn;\n      }\n\n\n      @-webkit-keyframes zoomOut {\n        from {\n          opacity: 1;\n        }\n\n        50% {\n          opacity: 0;\n          -webkit-transform: scale3d(0.3, 0.3, 0.3);\n          transform: scale3d(0.3, 0.3, 0.3);\n        }\n\n        to {\n          opacity: 0;\n        }\n      }\n\n      @keyframes zoomOut {\n        from {\n          opacity: 1;\n        }\n\n        50% {\n          opacity: 0;\n          -webkit-transform: scale3d(0.3, 0.3, 0.3);\n          transform: scale3d(0.3, 0.3, 0.3);\n        }\n\n        to {\n          opacity: 0;\n        }\n      }\n\n      .zoomOut {\n        -webkit-animation-name: zoomOut;\n        animation-name: zoomOut;\n      }\n\n\n\n      .alerty.alerty-show {\n        -webkit-animation: zoomIn .35s ease;\n        -o-animation: zoomIn .35s ease;\n        animation: zoomIn .35s ease;\n      }\n\n      .alerty.alerty-hide {\n        -webkit-animation: zoomOut .35s ease;\n        -o-animation: zoomOut .35s ease;\n        animation: zoomOut .35s ease;\n      }\n\n      .alerty .alerty-title {\n        padding: 24px 24px 20px;\n        font-size: 20px;\n        color: #1b1919;\n        line-height: 1;\n      }\n\n      .alerty .alerty-title + .alerty-content {\n        padding-top: 0;\n      }\n\n      .alerty .alerty-content {\n        text-align: left;\n        line-height: 1.2;\n        padding: 24px;\n        padding: 24px;\n      }\n\n      .alerty .alerty-content .alerty-message {\n        margin: 0;\n        padding: 0;\n        color: #635a56;\n      }\n\n      .alerty .alerty-content .alerty-prompt {\n        margin-top: 16px;\n        text-align: center;\n        position: relative;\n      }\n\n      .alerty .alerty-content .alerty-prompt input {\n        width: 100%;\n        height: 36px;\n        display: inline-block;\n        padding: 6px 0;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        border: none;\n        outline: none;\n        font-size: 16px;\n        color: #1b1919;\n        border-bottom: 1px solid #d9d6d4;\n      }\n\n      .alerty .alerty-content .alerty-prompt input:focus + .input-line {\n        visibility: visible;\n        -webkit-transform: scaleX(1);\n        -ms-transform: scaleX(1);\n        -o-transform: scaleX(1);\n        transform: scaleX(1);\n      }\n\n      .alerty .alerty-content .alerty-prompt .input-line {\n        height: 2px;\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        background-color: #00bfa5;\n        visibility: hidden;\n        -webkit-transform: scaleX(0);\n        -ms-transform: scaleX(0);\n        -o-transform: scaleX(0);\n        transform: scaleX(0);\n        -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n        -o-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n        transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n        display: block;\n      }\n\n      .alerty .alerty-action {\n        padding: 22px 24px 20px;\n        text-align: right;\n      }\n\n      .alerty .alerty-action [class*="btn-"] {\n        margin-left: 8px;\n        cursor: pointer;\n        color: #1b1919;\n        height: 36px;\n        line-height: 36px;\n        min-width: 88px;\n        text-align: center;\n        outline: none !important;\n        background-color: transparent;\n        display: inline-block;\n        border-radius: 2px;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.12);\n        -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n        -o-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n        transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n        font-size: 14px;\n      }\n\n\n      .alerty .alerty-action .btn-ok {\n        color: #ffffff;\n        background-color: #05cd51;\n        padding: 0 10px;\n      }\n\n\n      .alerty .alerty-action .btn-ok:hover {\n        background-color: #06d755;\n        box-shadow: 0 1px 1px 0 rgba(0,0,0,.06), 0 2px 5px 0 rgba(0,0,0,.2);\n      }\n\n\n      .alerty .alerty-action .btn-cancel {\n        color: #05cd51;\n      }\n\n\n      .alerty .alerty-action .btn-cancel:hover {\n        background-color: #fff;\n        box-shadow: 0 1px 1px 0 rgba(0,0,0,.06), 0 2px 5px 0 rgba(0,0,0,.2);\n      }\n\n      .alerty.toasts {\n        height: 48px;\n        top: auto;\n        bottom: 0;\n        background-color: #323232;\n        min-width: 288px;\n        max-width: 568px;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n      }\n\n      .alerty.toasts .alerty-content {\n        height: 48px;\n        line-height: 48px;\n        padding: 0 24px;\n        font-size: 14px;\n      }\n\n      .alerty.toasts .alerty-content .alerty-message {\n        color: #fff;\n      }\n\n      .alerty.toasts.alerty-show {\n        -webkit-animation: slideInUp .35s ease;\n        -o-animation: slideInUp .35s ease;\n        animation: slideInUp .35s ease;\n      }\n\n      .alerty.toasts.alerty-hide {\n        -webkit-animation: slideOutDown .35s ease;\n        -o-animation: slideOutDown .35s ease;\n        animation: slideOutDown .35s ease;\n      }\n\n      .alerty.toasts.place-top {\n        top: 0;\n        bottom: auto;\n      }\n\n      .alerty.toasts.place-top.alerty-show {\n        -webkit-animation: slideInDown .35s ease;\n        -o-animation: slideInDown .35s ease;\n        animation: slideInDown .35s ease;\n      }\n\n      .alerty.toasts.place-top.alerty-hide {\n        -webkit-animation: slideOutUp .35s ease;\n        -o-animation: slideOutUp .35s ease;\n        animation: slideOutUp .35s ease;\n      }\n\n      @media all and (max-width: 540px) {\n        .alerty {\n          width: auto;\n          margin-left: 0;\n          margin-right: 0;\n          left: 15px;\n          right: 15px;\n        }\n        .alerty.toasts {\n          width: 100%;\n          border-radius: 0;\n          left: 0;\n          right: 0;\n        }\n      }\n\n      .alerty-overlay {\n        position: fixed;\n        background-color: #000;\n        z-index: 1060;\n        height: 100%;\n        width: 100%;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        opacity: 0;\n        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n        -webkit-transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n        -o-transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n        transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n      }\n\n      .alerty-overlay.active {\n        opacity: 0.4;\n        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";\n      }\n\n      .no-scrolling {\n        height: 100%;\n        overflow: hidden;\n      }\n\n\n\n\n      #wabs * {\n        font-size: small;\n      }\n\n      #wabs [class^=btn] {\n        /*transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);*/\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n        position: relative;\n        cursor: pointer;\n        text-transform: uppercase;\n        margin-bottom: 10px;\n        background-image: none;\n        background-size: 0;\n        background-repeat: no-repeat;\n        background-position: 50% 50%;\n        /*transition: background-color 0.3s cubic-bezier(0.64, 0.09, 0.08, 1), box-shadow 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);*/\n        will-change: background-size, background-image;\n        padding: 10px 20px;\n        display: inline-block;\n        font-family: inherit;\n        border: 0;\n      }\n      #wabs [class^=btn]:after {\n        position: absolute;\n        content: "";\n        transition: none;\n        background: radial-gradient(circle, white 95%, rgba(0, 0, 0, 0) 95%);\n        background-size: 0.7%;\n        background-position: 50% 50%;\n        background-repeat: no-repeat;\n      }\n/*#wabs [class^=btn]:focus {\n  outline: none;\n  background-size: 1000%;\n  transition: all 1s cubic-bezier(0.64, 0.09, 0.08, 1);\n  }*/\n\n  #wabs .btn--float {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    background-image: radial-gradient(circle, #ffeb3b 1%, #fff388 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #ffeb3b;\n    will-change: box-shadow, background-color;\n    font-size: 22px;\n    padding: 0;\n  }\n  #wabs .btn--float:hover {\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.16), 0 4px 15px 0 rgba(0, 0, 0, 0.13);\n    background-color: #ffee55;\n  }\n\n  #wabs .btn--raised {\n    border-radius: 1.98px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n    background-image: radial-gradient(circle, #3498db 1%, #75b9e7 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #3498db;\n    will-change: box-shadow, background-color;\n    color: white;\n  }\n  #wabs .btn--raised:hover {\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.16), 0 4px 15px 0 rgba(0, 0, 0, 0.13);\n    background-color: #4aa3df;\n  }\n\n  #wabs .btn--flat {\n    background-image: radial-gradient(circle, #28e1bd 1%, #6bebd1 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #28e1bd;\n    background-color: #fcfcfc;\n    box-shadow: none;\n  }\n\n  #wabs .btn--primary {\n    background-image: radial-gradient(circle, #1abc9c 1%, #3ee4c4 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #1abc9c;\n  }\n  #wabs .btn--primary:hover {\n    background-color: #1dd2af;\n  }\n\n  #wabs .btn--secondary {\n    background-image: radial-gradient(circle, #28e1bd 1%, #6bebd1 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #28e1bd;\n  }\n  #wabs .btn--secondary:hover {\n    background-color: #3ee4c4;\n  }\n\n  #wabs .btn--accent {\n    background-image: radial-gradient(circle, #ffeb3b 1%, #fff388 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #ffeb3b;\n  }\n  #wabs .btn--accent:hover {\n    background-color: #ffee55;\n  }\n\n  #wabs .btn--red {\n    background-image: radial-gradient(circle, #e74c3c 1%, #ef8b80 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #e74c3c;\n  }\n  #wabs .btn--red:hover {\n    background-color: #ea6153;\n  }\n\n  #wabs .btn--yellow {\n    background-image: radial-gradient(circle, #f1c40f 1%, #f5d657 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #f1c40f;\n  }\n  #wabs .btn--yellow:hover {\n    background-color: #f2ca27;\n  }\n\n  #wabs .btn--green {\n    background-image: radial-gradient(circle, #4caf50 1%, #80c883 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #4caf50;\n  }\n  #wabs .btn--green:hover {\n    background-color: #5cb860;\n  }\n\n  #wabs .btn--blue {\n    background-image: radial-gradient(circle, #2196f3 1%, #6ab8f7 15%, rgba(0, 0, 0, 0) 30%);\n    background-color: #2196f3;\n  }\n  #wabs .btn--blue:hover {\n    background-color: #39a1f4;\n  }\n\n\n\n  #wabs [id*=collapsible-] {\n    display: none;\n  }\n  #wabs [id*=collapsible-]:checked ~ [class*=collapsible-][class$=area] {\n    transform: scaleY(1);\n    height: auto;\n    padding: 15px 20px;\n    margin-bottom: 20px;\n  }\n  #wabs [id*=collapsible-]:checked + label:before {\n    margin-top: 6px;\n    transform: rotate(-45deg) translateX(1px);\n  }\n  #wabs [id*=collapsible-]:checked + label:after {\n    margin-top: 5px;\n    transform: rotate(45deg) translate(4px, -3px);\n  }\n  #wabs label[for*=collapsible-] {\n    width: 100%;\n    cursor: pointer;\n    display: flex;\n    position: relative;\n    padding: 15px 24px;\n    border-bottom: solid 1px #ebebeb;\n    color: #474747;\n    border-radius: 3px;\n  }\n  #wabs label[for*=collapsible-]:before, #wabs label[for*=collapsible-]:after {\n    content: "";\n    position: absolute;\n    right: 20px;\n    width: 2px;\n    height: 8px;\n    background: #9e9e9e;\n    transition: all 0.3s ease;\n  }\n  #wabs label[for*=collapsible-]:before {\n    margin-top: 2px;\n    transform: rotate(50deg);\n  }\n  #wabs label[for*=collapsible-]:after {\n    margin-top: 6px;\n    transform: rotate(-50deg);\n  }\n  #wabs [class*=collapsible-][class$=area] {\n    transform: scaleY(0);\n    transform-origin: 0 0;\n    height: 0;\n    will-change: height, transform;\n    transition: all 0.3s ease;\n    padding-left: 20px;\n  }\n\n  #wabs label[for=collapsible-no-arrow]:before, #wabs label[for=collapsible-no-arrow]:after {\n    display: none !important;\n  }\n\n\n\n\n\n  .alerty .subscription-status-items li {\n    margin-top: 5px;\n  }\n\n\n  #wabs table {\n    width: 100%;\n  }\n\n  #wabs .table-header {\n    color: #474747;\n    font-size: 16px;\n    line-height: 52px;\n    font-weight: bold;\n  }\n\n  #wabs #activities-table tr, #wabs #groups-duplicates-table tr , #wabs #table-import-targets tr, #wabs #calls-table tr {\n    line-height: 2;\n  }\n\n\n  #wabs tr {\n    font-size: 17px;\n    line-height: 52px;\n    border-bottom: solid 1px #ebebeb;\n    will-change: background;\n  }\n\n  #wabs tr:not(.table-header):hover {\n    background: #ebebeb;\n  }\n\n  #wabs td:first-child {\n    padding-left: 20px;\n  }\n  @media screen and (max-width: 1200px) {\n   #wabs td:first-child {\n    padding-left: 12px;\n  }\n}\n@media screen and (max-width: 900px) {\n  #wabs td:first-child {\n    padding-left: 20px;\n  }\n}\n#wabs td:last-child {\n  padding-right: 20px;\n}\n@media screen and (max-width: 1200px) {\n  #wabs td:last-child {\n    padding-right: 12px;\n  }\n}\n@media screen and (max-width: 900px) {\n  #wabs td:last-child {\n    padding-right: 20px;\n  }\n}\n\n\n\n\n#wabs label > input[type=checkbox] {\n  margin-right: 10px;\n  vertical-align: text-top;\n}\n\n#wabs label {\n  color: #2e2e2e;\n}\n#wabs input[type=email], #wabs input[type=text]:not(.choices__input), #wabs input[type=password] {\n  margin-bottom: 40px;\n  width: 200px;\n  display: block;\n  border: none;\n  padding: 10px 0;\n  border-bottom: solid 1px #1abc9c;\n  will-change: background-position;\n  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #1abc9c 96%);\n  background-position: -200px 0;\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  color: #0e6252;\n}\n#wabs input[type=email]:focus, #wabs input[type=email]:valid, #wabs input[type=text]:not(.choices__input):focus, #wabs input[type=text]:not(.choices__input):valid, #wabs input[type=password]:focus, #wabs input[type=password]:valid {\n  box-shadow: none;\n  outline: none;\n  background-position: 0 0;\n}\n#wabs input[type=email]:focus::-webkit-input-placeholder, #wabs input[type=email]:valid::-webkit-input-placeholder, #wabs input[type=text]:not(.choices__input):focus::-webkit-input-placeholder, #wabs input[type=text]:not(.choices__input):valid::-webkit-input-placeholder, #wabs input[type=password]:focus::-webkit-input-placeholder, #wabs input[type=password]:valid::-webkit-input-placeholder {\n  color: #1abc9c;\n  font-size: 11px;\n  transform: translateY(-20px);\n  visibility: visible !important;\n}\n#wabs input[type=email]::-webkit-input-placeholder, #wabs input[type=text]:not(.choices__input)::-webkit-input-placeholder, #wabs input[type=password]::-webkit-input-placeholder {\n  transition: all 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n#wabs input[type=checkbox]:not(.modal-trigger):not(.toggle):not(#alert-check):not([id*=lightbox-]) {\n  position: relative;\n  cursor: pointer;\n}\n#wabs input[type=checkbox]:not(.modal-trigger):not(.toggle):not(#alert-check):not([id*=lightbox-]):before {\n  content: "";\n  width: 12px;\n  height: 12px;\n  border: solid 2px #1abc9c;\n  border-radius: 3px;\n  background: white;\n  position: absolute;\n}\n#wabs input[type=checkbox]:not(.modal-trigger):not(.toggle):not(#alert-check):not([id*=lightbox-]):after {\n  content: "\u2713";\n  color: white;\n  background: #1abc9c;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  border: solid 2px #1abc9c;\n  border-radius: 3px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  /*transition: opacity 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);*/\n  will-change: opacity;\n}\n#wabs input[type=checkbox]:not(.modal-trigger):not(.toggle):not(#alert-check):not([id*=lightbox-]):checked:after {\n  opacity: 1;\n}\n#wabs input[type=checkbox]:not(.modal-trigger):not(.toggle):not(#alert-check):not([id*=lightbox-]):focus {\n  outline: none;\n}\n#wabs input[type=radio] {\n  position: relative;\n  top: 2px;\n  left: 2px;\n  margin: 0 8px;\n  cursor: pointer;\n}\n#wabs input[type=radio]:before {\n  content: "";\n  background-color: white;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: solid 2px #1abc9c;\n  display: inline-block;\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  background-image: radial-gradient(circle, #1abc9c 40%, white 50%);\n  background-size: 0;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  will-change: background-size;\n  z-index: 2;\n}\n#wabs input[type=radio]:after {\n  content: "";\n  width: 16px;\n  height: 16px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n#wabs input[type=radio]:checked:before {\n  background-size: 14px 14px;\n}\n#wabs input[type=radio]:focus {\n  outline: none;\n}\n#wabs select {\n  border: none;\n  border-bottom: 2.5px solid rgb(26, 188, 156);\n  color: #212121;\n  padding: 6px;\n  cursor: pointer;\n}\n\n#wabs select.classic {\n  background-image:\n  linear-gradient(45deg, transparent 50%, #1abc9c 50%),\n  linear-gradient(135deg, #1abc9c 50%, transparent 50%),\n  linear-gradient(to right, transparent, transparent);\n  background-position:\n  calc(100% - 20px) calc(1em + 2px),\n  calc(100% - 15px) calc(1em + 2px),\n  100% 0;\n  background-size:\n  5px 5px,\n  5px 5px,\n  2.5em 2.5em;\n  background-repeat: no-repeat;\n}\n\n#wabs select.classic:focus {\n  background-image:\n  linear-gradient(45deg, #1abc9c 50%, transparent 50%),\n  linear-gradient(135deg, transparent 50%, #1abc9c 50%),\n  linear-gradient(to right, transparent, transparent);\n  background-position:\n  calc(100% - 15px) 1em,\n  calc(100% - 20px) 1em,\n  100% 0;\n  background-size:\n  5px 5px,\n  5px 5px,\n  2.5em 2.5em;\n  background-repeat: no-repeat;\n  border-color: #1abc9c;\n  outline: 0;\n}\n#wabs input[type=range] {\n  -webkit-appearance: none;\n}\n#wabs input[type=range]:focus {\n  outline: none;\n}\n#wabs input[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  cursor: pointer;\n  background: #9e9e9e;\n}\n#wabs input[type=range]::-webkit-slider-thumb {\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  background: #2ecc71;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -6px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n}\n#wabs input[type=range]::-moz-range-track {\n  height: 3px;\n  cursor: pointer;\n  background: #9e9e9e;\n}\n#wabs input[type=range]::-moz-range-thumb {\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  border: none;\n  background: #2ecc71;\n  cursor: pointer;\n}\n#wabs input[type=range]::-ms-track {\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n#wabs input[type=range]::-ms-fill-lower {\n  background: #2ecc71;\n}\n#wabs input[type=range]::-ms-fill-upper {\n  background: #9e9e9e;\n}\n#wabs input[type=range]::-ms-thumb {\n  background: #2ecc71;\n}\n#wabs .toggle {\n  display: none;\n}\n#wabs .toggle:checked + label {\n  background: #93e7b6;\n}\n#wabs .toggle:checked + label:after {\n  background: #2ecc71;\n  margin-left: 18px;\n}\n#wabs .toggle + label {\n  position: absolute;\n  width: 30px;\n  height: 6px;\n  margin-top: 12px;\n  background: #9e9e9e;\n  transition: background 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  will-change: background;\n}\n#wabs .toggle + label:after {\n  position: absolute;\n  content: "";\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #dedede;\n  display: inline-block;\n  cursor: pointer;\n  margin-top: -4px;\n  margin-left: -1px;\n  transition: all 0.3s ease;\n  will-change: background, margin-left;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n}\n#wabs textarea {\n  border: solid 1px #9e9e9e;\n  transition: border 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  font-family: inherit;\n}\n#wabs textarea:focus {\n  border: solid 1px #1abc9c;\n  outline: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.g--1 {\n  width: 8.3333333333%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--1 {\n  margin-left: 8.3333333333%;\n}\n\n.g--2 {\n  width: 16.6666666667%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--2 {\n  margin-left: 16.6666666667%;\n}\n\n.g--3 {\n  width: 25%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--3 {\n  margin-left: 25%;\n}\n\n.g--4 {\n  width: 33.3333333333%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--4 {\n  margin-left: 33.3333333333%;\n}\n\n.g--5 {\n  width: 41.6666666667%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--5 {\n  margin-left: 41.6666666667%;\n}\n\n.g--6 {\n  width: 50%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--6 {\n  margin-left: 50%;\n}\n\n.g--7 {\n  width: 58.3333333333%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--7 {\n  margin-left: 58.3333333333%;\n}\n\n.g--8 {\n  width: 66.6666666667%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--8 {\n  margin-left: 66.6666666667%;\n}\n\n.g--9 {\n  width: 75%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--9 {\n  margin-left: 75%;\n}\n\n.g--10 {\n  width: 83.3333333333%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--10 {\n  margin-left: 83.3333333333%;\n}\n\n.g--11 {\n  width: 91.6666666667%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--11 {\n  margin-left: 91.6666666667%;\n}\n\n.g--12 {\n  width: 100%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.m--12 {\n  margin-left: 100%;\n}\n\n.m--0 {\n  margin-left: 0;\n}\n\n[class*=container] {\n  display: flex;\n}\n\n.container--baseline {\n  align-items: baseline;\n}\n\n.container--center {\n  align-items: center;\n}\n\n.container--start {\n  align-items: flex-start;\n}\n\n.container--end {\n  align-items: flex-end;\n}\n\n.container--justify {\n  justify-content: center;\n}\n\n.container--wrap {\n  flex-wrap: wrap;\n}\n\n.nudge--right {\n  margin-right: 20px;\n}\n\n.nudge--left {\n  margin-left: 20px;\n}\n\n@media screen and (max-width: 1200px) {\n  .g-m--1 {\n    width: 8.3333333333%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .g-m--2 {\n    width: 16.6666666667%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .g-m--3 {\n    width: 25%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--3 {\n    margin-left: 25%;\n  }\n\n  .g-m--4 {\n    width: 33.3333333333%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .g-m--5 {\n    width: 41.6666666667%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .g-m--6 {\n    width: 50%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--6 {\n    margin-left: 50%;\n  }\n\n  .g-m--7 {\n    width: 58.3333333333%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .g-m--8 {\n    width: 66.6666666667%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .g-m--9 {\n    width: 75%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--9 {\n    margin-left: 75%;\n  }\n\n  .g-m--10 {\n    width: 83.3333333333%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .g-m--11 {\n    width: 91.6666666667%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .g-m--12 {\n    width: 100%;\n    margin-top: 26px;\n    margin-bottom: 26px;\n  }\n\n  .m-m--12 {\n    margin-left: 100%;\n  }\n\n  .m-m--0 {\n    margin-left: 0;\n  }\n\n  .container--wrap--m {\n    flex-wrap: wrap;\n  }\n\n  .no-nudge--m {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n@media screen and (max-width: 900px) {\n  .g-s--1 {\n    width: 8.3333333333%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .g-s--2 {\n    width: 16.6666666667%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .g-s--3 {\n    width: 25%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--3 {\n    margin-left: 25%;\n  }\n\n  .g-s--4 {\n    width: 33.3333333333%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .g-s--5 {\n    width: 41.6666666667%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .g-s--6 {\n    width: 50%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--6 {\n    margin-left: 50%;\n  }\n\n  .g-s--7 {\n    width: 58.3333333333%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .g-s--8 {\n    width: 66.6666666667%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .g-s--9 {\n    width: 75%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--9 {\n    margin-left: 75%;\n  }\n\n  .g-s--10 {\n    width: 83.3333333333%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .g-s--11 {\n    width: 91.6666666667%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .g-s--12 {\n    width: 100%;\n    margin-top: 18px;\n    margin-bottom: 18px;\n  }\n\n  .m-s--12 {\n    margin-left: 100%;\n  }\n\n  .m-s--0 {\n    margin-left: 0;\n  }\n\n  .container--wrap--s {\n    flex-wrap: wrap;\n  }\n\n  .nudge--right {\n    margin-right: 15px;\n  }\n\n  .nudge--left {\n    margin-left: 15px;\n  }\n\n  .no-nudge--s {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n@media screen and (max-width: 520px) {\n  .g-t--1 {\n    width: 8.3333333333%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .g-t--2 {\n    width: 16.6666666667%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .g-t--3 {\n    width: 25%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--3 {\n    margin-left: 25%;\n  }\n\n  .g-t--4 {\n    width: 33.3333333333%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .g-t--5 {\n    width: 41.6666666667%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .g-t--6 {\n    width: 50%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--6 {\n    margin-left: 50%;\n  }\n\n  .g-t--7 {\n    width: 58.3333333333%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .g-t--8 {\n    width: 66.6666666667%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .g-t--9 {\n    width: 75%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--9 {\n    margin-left: 75%;\n  }\n\n  .g-t--10 {\n    width: 83.3333333333%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .g-t--11 {\n    width: 91.6666666667%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .g-t--12 {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .m-t--12 {\n    margin-left: 100%;\n  }\n\n  .m-t--0 {\n    margin-left: 0;\n  }\n\n  .container--wrap--t {\n    flex-wrap: wrap;\n  }\n\n  .nudge--right {\n    margin-right: 10px;\n  }\n\n  .nudge--left {\n    margin-left: 10px;\n  }\n\n  .no-nudge--t {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#wabs input[id*=modal-] {\n  display: none;\n}\n#wabs input[id*=modal-]:checked + label {\n  outline: none;\n  background-size: 1000%;\n  transition: all 1s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n#wabs input[id*=modal-]:checked + label:before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n#wabs input[id*=modal-]:checked ~ .modal-content {\n  transition: opacity 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  opacity: 1;\n  display: block;\n  height: auto;\n  width: auto;\n  padding: 40px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n}\n#wabs input[id*=modal-]:checked ~ .modal-content * {\n  height: auto;\n  width: auto;\n}\n#wabs .modal-trigger {\n  white-space: pre;\n  cursor: pointer;\n  /*transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);*/\n  padding: 10px 20px;\n  background-size: 0;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  position: absolute;\n  left: -100px;\n}\n#wabs .modal-trigger:after {\n  white-space: nowrap;\n  padding: 10px;\n  cursor: pointer;\n  /*transition: all 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);*/\n  background-image: none;\n}\n#wabs .modal-content {\n  display: none;\n  position: fixed;\n  opacity: 0;\n  height: 0;\n  background: white;\n  border-radius: 3px;\n}\n#wabs .modal-content * {\n  width: 0;\n  height: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n.nav--horizontal {\n  display: flex;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.nav--horizontal ul, .nav--horizontal ol {\n  margin-left: 0;\n}\n.nav--horizontal > ul, .nav--horizontal > li {\n  display: flex;\n}\n.nav--horizontal a {\n  display: inline-block;\n}\n\n.nav--vertical {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.nav--vertical ul, .nav--vertical ol {\n  margin-left: 0;\n}\n.nav--vertical ul, .nav--vertical li, .nav--vertical a {\n  display: inline-block;\n  float: left;\n  clear: left;\n}\n.nav--vertical li:first-child a {\n  margin-bottom: 7px;\n}\n.nav--vertical li:last-child a {\n  margin-top: 7px;\n}\n.nav--vertical li a {\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\n.logo-area {\n  width: 100%;\n  height: 152px;\n  border-bottom: solid 1px #e0e0e0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #474747;\n}\n\n.nav--super-vertical {\n  margin-top: 0;\n  margin-bottom: 0;\n  position: fixed;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  background: white;\n  z-index: 7;\n  overflow-Y: auto;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.nav--super-vertical a, .nav--super-vertical label {\n  width: 100%;\n  display: block;\n  text-decoration: none;\n  color: #474747;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 20px 24px;\n  transition: none;\n  background-image: none;\n}\n.nav--super-vertical a:hover, .nav--super-vertical label:hover {\n  background: #e0e0e0;\n}\n.nav--super-vertical input {\n  display: none;\n}\n.nav--super-vertical input:checked + label {\n  transition: background 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), color 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n  background: #e0e0e0;\n}\n.nav--super-vertical input:checked ~ .nav-collapsible-links {\n  height: auto;\n  transform: scaleY(1);\n}\n.nav--super-vertical input:checked ~ .nav-collapsible-links a {\n  height: 54px;\n}\n\n.nav-collapsible-links {\n  height: 100%;\n  transform: scaleY(0);\n  transform-origin: 0 0;\n  transition: transform 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n.nav-collapsible-links a {\n  padding: 0 24px 0 34px;\n  height: 0;\n  font-weight: 400;\n  transition: height 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  display: flex;\n  align-items: center;\n}\n\n#nav--super-vertical-responsive,\n#nav--super-vertical-responsive + label,\n#nav--horizontal-responsive,\n#nav--horizontal-responsive + label {\n  display: none;\n}\n\n@media screen and (max-width: 1200px) {\n  .nav--super-vertical {\n    padding-top: 40px;\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  }\n\n  #nav--super-vertical-responsive + label {\n    display: block;\n    position: fixed;\n    z-index: 8;\n    top: 0;\n    left: 0;\n    padding: 10px;\n    background: white;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n    cursor: pointer;\n    transition: background 0.3s cubic-bezier(0.64, 0.09, 0.08, 1), color 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  }\n\n  #nav--super-vertical-responsive:checked + label {\n    background: #1abc9c;\n    color: white;\n  }\n  #nav--super-vertical-responsive:checked ~ .nav--super-vertical {\n    transform: translateX(0);\n  }\n}\n@media screen and (max-width: 900px) {\n  .nav--horizontal {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 7;\n    transform: translateY(-100%);\n    transition: transform 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  }\n  .nav--horizontal ul, .nav--horizontal li, .nav--horizontal a {\n    width: 100%;\n    display: block;\n    margin: 0;\n  }\n  .nav--horizontal a {\n    line-height: 40px;\n  }\n  .nav--horizontal > ul {\n    padding-top: 50px;\n    background: white;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n  }\n\n  #nav--horizontal-responsive + label {\n    display: block;\n    position: fixed;\n    z-index: 8;\n    top: 0;\n    left: 0;\n    padding: 10px;\n    background: white;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n    cursor: pointer;\n    transition: background 0.3s cubic-bezier(0.64, 0.09, 0.08, 1), color 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  }\n\n  #nav--horizontal-responsive:checked + label {\n    background: #1abc9c;\n    color: white;\n  }\n  #nav--horizontal-responsive:checked ~ .nav--horizontal {\n    transform: translateY(0);\n  }\n}\n.nav--vertical a, .nav--horizontal a {\n  color: #1abc9c;\n  background: white;\n  padding: 10px;\n  transition: none;\n  will-change: background;\n}\n.nav--vertical a:hover, .nav--horizontal a:hover {\n  background: #e5e5e5;\n}\n\n.dropdown {\n  position: relative;\n}\n.dropdown ul {\n  position: absolute;\n  background: white;\n  left: 0;\n  transition: all 0.3s ease;\n  transform: scale(0);\n  transform-origin: 0 0;\n  z-index: 2;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n  width: 100%;\n}\n.dropdown ul li {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.dropdown ul li a {\n  width: 100%;\n  padding: 8px 10px;\n  display: inline-block;\n  margin: 0;\n  border-radius: 0;\n}\n.dropdown:hover ul {\n  transform: scale(1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#wabs .tabs {\n  display: flex;\n  position: relative;\n  padding: 0;\n}\n#wabs .tabs input[type=radio][name=tabs] {\n  position: absolute;\n  z-index: -1;\n}\n#wabs .tabs input[type=radio][name=tabs]:checked + .tab-label-content > label {\n  color: white;\n}\n#wabs .tabs input[type=radio][name=tabs]:checked + .tab-label-content .tab-content {\n  display: block;\n}\n#wabs .tabs input[type=radio][name=tabs]:first-of-type:checked ~ .slide {\n  left: 0;\n}\n#wabs .tabs input[type=radio][name=tabs]:nth-of-type(1):checked ~ .slide-demo {\n  left: 0%;\n  left: calc((100% / 4) * 0);\n}\n#wabs .tabs input[type=radio][name=tabs]:nth-of-type(2):checked ~ .slide-demo {\n  left: 25%;\n  left: calc((100% / 4) * 1);\n}\n#wabs .tabs input[type=radio][name=tabs]:nth-of-type(3):checked ~ .slide-demo {\n  left: 50%;\n  left: calc((100% / 4) * 2);\n}\n#wabs .tabs input[type=radio][name=tabs]:nth-of-type(4):checked ~ .slide-demo {\n  left: 75%;\n  left: calc((100% / 4) * 3);\n}\n#wabs .slide-demo {\n  width: 25%;\n  width: calc(100% / 4);\n}\n#wabs .tab-label-content:nth-of-type(1) .tab-content {\n  left: 0%;\n}\n#wabs .tab-label-content:nth-of-type(2) .tab-content {\n  left: -100%;\n}\n#wabs .tab-label-content:nth-of-type(3) .tab-content {\n  left: -200%;\n}\n#wabs .tab-label-content:nth-of-type(4) .tab-content {\n  left: -300%;\n}\n#wabs .tab-content {\n  width: 385%;\n  z-index: 9999;\n}\n#wabs .tabs .tab-label-content > label {\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #00bfa5;\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 40px;\n  transition: color 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);\n  will-change: color;\n  width: 100%;\n}\n#wabs .slide {\n  background: #ffeb3b;\n  height: 4px;\n  position: absolute;\n  left: 0;\n  top: 37px;\n  transition: left 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n  will-change: left;\n}\n#wabs .tab-label-content {\n  width: 100%;\n  position: relative;\n}\n#wabs .tab-label-content .tab-content {\n  padding: 10px;\n  position: absolute;\n  padding: 20px;\n  display: none;\n}\n#wabs .card.tabs .tab-label-content:first-of-type label {\n  border-top-left-radius: 3px;\n}\n#wabs .card.tabs .tab-label-content:nth-last-child(2) label {\n  border-top-right-radius: 3px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#wabs .tip {\n  position: relative;\n}\n#wabs .tip:hover:after {\n  position: absolute;\n  content: attr(data-text);\n  background: rgba(0,0,0,.82);\n  border-radius: 3px;\n  padding: 8px;\n  bottom: -2.5em;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 2;\n  color: #ffffff;\n}\n\n#wabs #account-info.tip:hover::after {\n  line-height: 1;\n  bottom: 26px;\n  width: max-content;\n  left: 100% !important;\n}\n\n#wabs #subscription-status.tip:hover::after {\n  line-height: 1;\n  bottom: 30px;\n  width: max-content;\n  left: 100% !important;\n}\n\n\n\n\n\n\n\n\n\n\n\n.card.tabs .tab-label-content:first-of-type label {\n  border-top-left-radius: 0 !important;\n}\n\n.card.tabs .tab-label-content:nth-last-child(2) label {\n  border-top-right-radius:  0 !important;\n}\n\n@-webkit-keyframes blink {\n  0% {\n    border-color: red\n  }\n  50% {\n    border-color: transparent\n  }\n  100% {\n    border-color: red\n  }\n}\n\n.blinking {\n  -webkit-animation: blink 1s infinite;\n  -moz-animation: blink 1s infinite;\n  -ms-animation: blink 1s infinite;\n  border: 3px solid\n}\n\n\n/*#wabs {\n  -webkit-transform: translateX(0);\n    transform: translateX(0);\n    }*/\n\n/*\n#wabs {\n  -webkit-animation-duration: 0.1s;\n  animation-duration: 0.1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n   -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1);\n    transform: scale3d(0.1, 0.1, 0.1);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1);\n    transform: scale3d(0.1, 0.1, 0.1);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n*/\n\n#wabs label svg path {\n  color: var(--icon);\n}\n\n\n#wabs .modal-rate svg {\n  display: inline-block;\n  fill: #febf00;\n}\n\n#wabs input.modal-subscribe-input:checked + label::before {\n  top: 40px;\n  left: 1px;\n  cursor: not-allowed;\n}\n\n#wabs .buy-btn {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  border: 1px solid #eee;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  height: 17px;\n  text-align: left;\n  line-height: 1;\n  background-position-y: center;\n  background-position-x: 93%;\n  width: 300px;\n  margin: 0 auto;\n}\n\n#wabs .choices[data-type="select-multiple"] input.choices__input {\n  width: fit-content !important;\n}\n\n#wabs .messages-templates-selection input.choices__input {\n  display: inline;\n  width: auto !important;\n}\n\n#wabs b {\n  font-weight: bold;\n}\n\n#wabs .text-right {\n  text-align: right;\n  direction: rtl;\n}\n\n#wabs .text-left {\n  text-align: left;\n  direction: ltr;\n}\n\n#wabs .text-center {\n  text-align: center;\n}\n\n#wabs label[for*="collapsible-"] {\n  width: auto;\n}\n\n#wabs .btn--small {\n  font-size: x-small;\n  padding: 5px;\n}\n\n#wabs input {\n  background-size: 100% !important;\n}\n\n#wabs #replies-container .collapsible-wrap {\n  width: 100%;\n}\n\n#wabs #replies-container .collapse-label {\n  width: auto !important;\n}\n\n#wabs #replies-container .collapse-label span,\n#wabs #scheduling-container .collapse-label span {\n  font-size: small;\n  margin-left: 20px;\n  padding: 2px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 70% !important;\n}\n\n#wabs #replies-container .collapsible-wrap div > p {\n  line-height: 1.5;\n  font-size: small;\n}\n\n#wabs #bulkMsg-variables .tip:hover::after {\n  width: 200px;\n  bottom: -5em;\n  font-size: x-small;\n}\n\n#wabs #bulkMsg-tools .tip:hover::after {\n  font-size: x-small;\n  white-space: nowrap;\n  bottom: -3.5em;\n}\n\n#wabs #replies-container .tip:hover::after, \n#wabs #templates-container .tip:hover::after,\n#wabs #scheduling-container .tip:hover::after,\n#wabs .modal-content .tip:hover::after {\n  font-size: x-small;\n  white-space: nowrap;\n  bottom: -3.5em;\n}\n\n#wabs .footer-nav ul {\n  float: right;\n  margin-right: 20px;\n}\n\n#wabs .footer-nav li {\n  display: inline;\n}\n\n\n#wabs .footer-nav li a {\n  color: #ffffff;\n  float: left;\n  margin: 0 10px;\n}\n\n#wabs .footer-nav {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(26, 188, 156);\n  color: white;\n  padding: 10px;\n  font-size: small;\n  z-index: 999999;\n}\n\n/*#wabs .footer-nav {\n  border: 1px solid rgb(26, 188, 156);\n  right: 100px; \n  position: fixed; \n  bottom: 33px; \n  background-color: white; \n  z-index: 999999;\n}\n\n#wabs .footer-nav li {\n  margin: 3px 0;\n  overflow: hidden;\n  }*/\n\n  #wabs textarea::selection {\n    color: white;\n    background-color: blue;\n  }\n\n  #wabs input::selection {\n    color: white;\n    background-color: blue;\n  }\n\n  #wabs .modal-content h4 {\n    font-size: 20px;\n    font-weight: bold;\n    margin-bottom: 20px;\n  }\n\n  #wabs .modal-content p {\n    line-height: 1.5;\n    margin-bottom: 10px;\n  }\n\n\n  #wabs .target-reach p {\n    margin-bottom: 5px;\n  }\n\n  #wabs .m0 {\n    margin: 0;\n  }\n\n  #wabs .ml-2 {\n    margin-left: 20px;\n  }\n\n  #wabs .pl-2 {\n    padding-left: 20px;\n  }\n\n  #wabs code {\n    background: #eee;\n    padding: 2px 3px;\n    border-radius: 3px;\n  }\n\n  #wabs .vars-list li {\n    font-size: small;\n    line-height: 1.4;\n  }\n\n  #wabs .bulkMsg {\n    margin: 10px 0 10px 20px;\n    width: 80%;\n    height: 40px;\n    padding: 10px;\n    border-radius: 3px;\n    resize: vertical;\n  }\n\n  #wabs #bulkMsg-tools {\n    position: absolute;\n    bottom: 20px;\n    right: 14%;\n  }\n\n  #wabs #bulkMsg-tools span {\n    display: inline-block;\n  }\n\n  #wabs ul li {\n    margin: 5px 0;\n  }\n\n  #wabs .choices__inner {\n    min-height: 28px;\n    padding: 4.5px 4.5px 0.25px;\n  }\n\n  /* #wabs .choices__input {\n    display: none;\n  } */\n\n  #wabs [data-type="select-one"] .choices__inner {\n    padding: 4.5px 4.5px 4.5px !important;\n  }\n\n/*\n#wabs .choices {\n  width: 85% !important;\n  display: grid;\n  }*/\n\n  #wabs .choices {\n    margin: 15px 0 !important;\n  }\n\n  #wabs #account-info a {\n    color: #fff;\n  }\n\n\n  #wabs .modal-content.g--4 {\n    transform: translate(-50%, -51%) !important;\n  }\n\n  #wabs .modal-content.modal-add-reply-content,  #wabs .modal-content.modal-add-template-content {\n    transform: translate(-50%, -50.1%) !important;\n  }\n\n  #wabs .bulk-running, #wabs .export-groups-running {\n    opacity: 0.3;\n    pointer-events: none;\n  }\n\n\n  #wabs .rtl .modal-add-reply-content label, #wabs .rtl .modal-add-template-content label {\n    direction: ltr;\n    margin-left: 10px !important;\n  }\n\n/*#wabs .collapsible-wrap label {\n    z-index: -1;\n}\n\n#wabs .collapsible-wrap {\n    z-index: -1;\n}\n\n#wabs .collapsible-wrap li {\n    z-index: -1;\n}\n\n\n\n\n*/\n\n\n\n\n\n\n.choices{position:relative;overflow:visible;margin-bottom:24px;font-size:16px}.choices:focus{outline:0}.choices:last-child{margin-bottom:0}.choices.is-open{overflow:initial}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none!important}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #ddd;background-color:#fff;margin:0}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:.25}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one] .choices__item[data-value=\'\'] .choices__button{display:none}.choices[data-type*=select-one]:after{content:\'\';height:0;width:0;border-style:solid;border-color:#333 transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{position:relative;display:inline-block;margin:0 -4px 0 8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:.75;border-radius:0}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #ddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{margin:0;padding-left:0;list-style:none}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-right:4px;padding-left:16px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#fff;word-break:break-all;box-sizing:border-box}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{visibility:hidden;z-index:1;position:absolute;width:100%;background-color:#fff;border:1px solid #ddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all;will-change:visibility}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:.25rem .25rem 0 0}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}.choices__button:focus,.choices__input:focus{outline:0}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px}[dir=rtl] .choices__input{padding-right:2px;padding-left:0}.choices__placeholder{opacity:.5}\n\n\n\n#wabs [class*="collapsible-"][class$="area"] {\n  position: relative !important;\n  z-index: 100 !important;\n}\n\n\n\n\n/* reactions */\n/*.FB_reactions {\n  border: 1px solid #bfbfbf;\n  color: #8c8c8c;\n  position:relative;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5); \n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-block;\n  text-transform: uppercase;\n  font-family: "Open Sans","Helvetica Neue",sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  background:#fff;\n  line-height: 20px;\n  padding: 2px ;\n  transition: all 20ms ease-out;\n  vertical-align: top;\n  z-index: 99999;\n  width:90px;   \n  background:url(chrome-extension://ekcgkejcjdcmonfpmnljobemcbpnkamh/src/emojis/emojis/default.png) center left no-repeat;  \n  background-position: left 10px top 2px;\n}\n\n[data-emoji-class="like"]{background:url(chrome-extension://ekcgkejcjdcmonfpmnljobemcbpnkamh/src/emojis/like.gif) center left no-repeat; background-size: 25px 25px; background-position: left 10px top 6px;}\n[data-emoji-class="love"]{background:url(chrome-extension://ekcgkejcjdcmonfpmnljobemcbpnkamh/src/emojis/emojis/love.gif) center left no-repeat; background-size: 25px 25px; background-position: left 10px top 6px;}\n[data-emoji-class="haha"]{background:url(chrome-extension://ekcgkejcjdcmonfpmnljobemcbpnkamh/src/emojis/emojis/haha.gif) center left no-repeat;background-size: 25px 25px; background-position: left 10px top 6px;}\n[data-emoji-class="wow"]{background:url(chrome-extension://ekcgkejcjdcmonfpmnljobemcbpnkamh/src/emojis/emojis/wow.gif) center left no-repeat;background-size: 25px 25px; background-position: left 10px top 6px;}\n[data-emoji-class="sad"]{background:url(chrome-extension://ekcgkejcjdcmonfpmnljobemcbpnkamh/src/emojis/emojis/sad.gif) center left no-repeat;background-size: 25px 25px; background-position: left 10px top 6px;}\n[data-emoji-class="angry"]{background:url(chrome-extension://ekcgkejcjdcmonfpmnljobemcbpnkamh/src/emojis/emojis/angry.gif) center left no-repeat;background-size: 25px 25px; background-position: left 10px top 6px;}\n\n.FB_reactions span{display:block; padding:9px 0px 4px 40px; text-align:left;}\n*/\n\n._bar ._inner img {\n  width: 40px;\n/*  padding: 0;\n  margin-right: -17px;\n  margin-top: -6px;\n  margin-bottom: -6px;\n  margin-left: -5px;*/\n  position: relative;\n  cursor: pointer;\n  float:left;\n  transform: scale(.8, .8) translate(0, 0);\n  transition: transform 200ms ease;\n  z-index: 99999;\n}\n\n._bar ._inner img:nth-child(1) { \n  -webkit-animation:bounce .21s .1s;\n}\n._bar ._inner img:nth-child(2) { \n  -webkit-animation:bounce .25s .1s;\n}\n._bar ._inner img:nth-child(3) { \n  -webkit-animation:bounce .29s .1s;\n}\n._bar ._inner img:nth-child(4) { \n  -webkit-animation:bounce .3s .1s;\n}\n._bar ._inner img:nth-child(5) { \n  -webkit-animation:bounce .35s .1s;\n}\n._bar ._inner img:nth-child(6) { \n  -webkit-animation:bounce .4s .1s\n}\n._bar ._inner img:nth-child(7) { \n  -webkit-animation:bounce .49s .1s\n}\n\n@-webkit-keyframes bounce {\n  0%       { bottom:5px;  }\n  25%{ bottom:55px; }   \n  50%      { bottom:20px;  }\n  75% { bottom:15px; }\n  100%     {bottom:0; }\n}\n\n._bar ._inner img:hover {\n  transform: scale(1.2, 1.2) translate(0, -6px);\n  opacity: 1;      \n}\n\n._bar {\n  display:none;\n}\n\n._inner {\n  position: relative;\n  overflow: hidden;\n  background-color: white;\n  margin: auto;\n  padding: 0px 0px 1px 1px;\n  border-radius: 20px;\n  -moz-box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);\n  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);\n  -moz-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -moz-transform-style: preserve-3d;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  z-index: 99999;\n}\n\n\n._bar.reactions-container {\n  border-radius: 50px !important;\n}\n\n.ov_visi{ overflow:visible;}\n\n\n.header-warning {\n  font-size: x-small;\n  color: white;\n  position: absolute;\n  background: red;\n  padding: 5px;\n  right: 0;\n}\n\n.header-warning:hover {\n  background: yellow;\n  color: black;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.call-popup {\n  z-index: 1000;\n  background-color: #f1f1f1;\n  text-align: center;\n  min-height: 500px;\n  min-width: 410px;\n  max-height: 700px;\n  max-width: 800px;\n  height: 500px;\n  width: 410px;\n  box-shadow: 0 1px 1px 0 rgba(0,0,0,.06), 0 2px 5px 0 rgba(0,0,0,.2);\n  background-color: rgb(26, 188, 156);\n/*  margin: auto;\n  position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n  */\n}\n\n/*Drgable */\n\n.call-popup {\n  position: absolute;\n  /*resize: both; !*enable this to css resize*! */\n  overflow: hidden;\n}\n\n.call-popup-header {\n  padding: 10px;\n  cursor: move;\n  z-index: 10;\n  background-color: #009688;;\n  color: #fff;\n  height: auto;\n}\n\n/*Resizeable*/\n\n.call-popup .resizer-right {\n  width: 5px;\n  height: 100%;\n  background: transparent;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  cursor: e-resize;\n}\n\n.call-popup .resizer-bottom {\n  width: 100%;\n  height: 5px;\n  background: transparent;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  cursor: n-resize;\n}\n\n.call-popup .resizer-both {\n  width: 5px;\n  height: 5px;\n  background: transparent;\n  z-index: 10;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  cursor: nw-resize;\n}\n\n/*NOSELECT*/\n\n.call-popup * {\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently\n  supported by Chrome and Opera */\n}\n\n.call-animation {\n  background: #fff;\n  width: 135px;\n  height: 135px;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 100%;\n  border: solid 5px #fff;\n  animation: play 2s ease infinite;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  backface-visibility: hidden;\n  margin: auto;\n  position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n\n\n}\n\n.call-popup .caller-image {\n  width: 135px;\n  height: 135px;\n  border-radius: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n\n@keyframes play {\n\n  0% {\n    transform: scale(1);\n  }\n  15% {\n    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.4);\n  }\n  25% {\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4), 0 0 0 20px rgba(255, 255, 255, 0.2);\n  }\n  25% {\n    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.4), 0 0 0 30px rgba(255, 255, 255, 0.2);\n  }\n\n}\n\n#wabs .choices__list--multiple .choices__item {\n  background-color: rgb(26, 188, 156);\n  border-color: rgb(26, 188, 156);\n  border-radius: 3px;\n}\n\n#wabs input[id*="modal-"]:checked + label::before {\n  z-index: 9999;\n}\n\n\n\n\n\n#wabs .packages-table {\n  margin: -20px auto 15px auto;\n}\n\n#wabs .packages-table .table-header {\n  text-align: center;\n}\n\n#wabs .packages-table tr {\n  line-height: 2.5;\n  position: relative;\n}\n\n#wabs .packages-table td {\n  padding: 0 25px;\n  position: relative;\n  white-space: nowrap;\n}\n\n#wabs .packages-table .off {\n  color: lightgray !important;\n}\n\n#wabs .packages-table td > span {\n  margin-right: 5px;\n}\n\n#wabs .packages-table td:not(.off) > span {\n  color: #00BEA5;\n}\n\n#wabs .packages-table td.popular:not(.off) > span {\n  color: #ffffff;\n}\n\n#wabs .btn--medium {\n  display: inline-block;\n  padding: 3px 10px;\n  line-height: 22px;\n  font-size: small;\n}\n\n#wabs .packages-table .popular {\n  background: #00bea5;\n  color: #ffffff;\n}\n\n#wabs .packages-table tr:hover a {\n  display: block;\n  /*margin: 10px 0;*/\n  /*float: __MSG_x_direction_float_opposite__;*/\n  position: absolute;\n  right: 5px;\n  top: 10px;\n  cursor: pointer;\n}\n\n#wabs .packages-table tr svg {\n  fill: #00bea5;\n}\n\n#wabs .packages-table tr td.popular svg {\n  fill: #ffffff;\n}\n\n#wabs .packages-table tr a {\n  display: none;\n}\n\n\n.wabs-is-online {\n  overflow: visible !important\n}\n\nbody.dark .app-wrapper-web::after {\n  display: none !important;\n}\n\nbody.dark {\n  background-size: cover !important;\n}\n\n\n._3mMX1 .wabs-is-online::after {\n  border: 2px solid #ebebeb;\n}\n\n.wabs-is-online::after {\n  content:" ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background-color: #07d755;\n  border-radius: 100%;\n  width: 13px;\n  height: 13px;\n  border: 2px solid #ffffff;\n  z-index: 9999;\n}\n\n/* chat folders */\n  #chat-folders ul.folders li {\n      display: inline-block;\n      height: 100%;\n      align-items: center;\n  }\n\n  #chat-folders #arrow-right {\n      position: absolute;\n      height: 100%;\n      right: 0;\n      width: 50px;\n      vertical-align: middle;\n      text-align: center;\n      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(9, 9, 121, 0) 0%, rgba(0, 0, 0, 1) 100%);\n      line-height: 2.6;\n      cursor: pointer;\n      z-index: 99999;\n  }\n\n  #chat-folders #arrow-left {\n      position: absolute;\n      height: 100%;\n      left: 0;\n      width: 50px;\n      vertical-align: middle;\n      text-align: center;\n      background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(9, 9, 121, 0) 0%, rgba(0, 0, 0, 1) 100%);\n      line-height: 2.6;\n      cursor: pointer;\n      z-index: 99999;\n  }\n\n  #chat-folders ul.folders li div.folder-item-container {\n      padding: 0 13px;\n      height: 100%;\n      display: flex;\n      align-items: center;\n  }\n\n  #chat-folders ul.folders li div.folder-item-container .controls {\n      display: inline-flex;\n      align-items: center;\n  }\n\n  #chat-folders ul.folders li div.folder-item-container button.label:hover {\n      color: #009588;\n  }\n\n  #chat-folders ul.folders li div.folder-item-container button.dropdown-button:hover {\n      background-color: #009588;\n  }\n\n  #chat-folders ul.folders li.active div.folder-item-container .controls {\n      height: 100%;\n  }\n\n  #chat-folders ul.folders li.active div.folder-item-container .controls::after {\n      content: "";\n      display: inline-block;\n      position: absolute;\n      background: #009588;\n      width: 100%;\n      height: 4px;\n      left: 0;\n      bottom: 0;\n  }\n\n  #chat-folders ul.folders li.active div.folder-item-container button.label {\n      color: #009588;\n  }\n\n  #chat-folders {\n      display: flex;\n      justify-content: space-between;\n      height: 100%;\n      border-bottom: 1px solid var(--border-default);\n      overflow: hidden;\n      height: 48px;\n      max-height: 48px;\n      z-index: 250;\n      position: relative;\n  }\n\n  #chat-folders ul.folders {\n      height: 100%;\n      white-space: nowrap;\n      margin-top: 1px;\n      margin-right: auto;\n      margin-bottom: 0px;\n      margin-left: auto;\n  }\n\n  #chat-folders * {\n      position: relative;\n  }\n\n  #chat-folders button {\n      font-size: 14px;\n      font-weight: 500;\n      color: #636466;\n  }\n\n  /* end chat folders */\n\n\n\n  /* toaster */\n  toaster-component{\n    position: fixed;\n    z-index: 2000;\n    width: 300px;\n    bottom: 0;\n    left: 0;\n    padding: 0 0 2rem 1.5rem;\n    display: grid;\n    justify-content: start;\n    justify-items: center;\n    gap: 0.5rem;\n    pointer-events: none;\n}\ntoaster-component output{\n    background-color: rgb(26, 188, 156);\n    border: 1px solid var(--grey-300);\n    box-shadow: var(--shadow-md);\n    color: var(--message-primary);\n    max-inline-size: min(25ch, 90vw);\n    padding: 1rem;\n    border-radius: 0.15rem;\n    animation: \n        fade-in 0.3s ease,\n        slide-in 0.3s ease,\n        fade-out 0.3s 4.4s ease;\n    animation-fill-mode: forwards;\n    font-size: var(--font-sm);\n    user-select: none;\n    cursor: pointer;\n    pointer-events: all;\n}\ntoaster-component output:active{\n    transform: scale(0.95);\n}\ntoaster-component output a{\n  color: #fff !important;\n}\n@keyframes fade-in {\n  from { opacity: 0 }\n}\n\n@keyframes fade-out {\n  to { opacity: 0 }\n}\n\n@keyframes slide-in {\n  from { transform: translateY(var(--_travel-distance, 10px)) }\n}\n\n  /* end snackbar */\n\n  .customWAButton {\n    padding: 8px;\n  }\n\n  .message-action-button {\n    transition: box-shadow .08s cubic-bezier(.4, 0, .2, 1);\n    border-radius: 50%;\n    position: relative;\n}\n\n.translate-message-button {\n    margin: 0px 3px;\n}\n';
        },
        {},
      ],
      12: [
        function (e, t, n) {
          var i,
            r,
            t = (t.exports = {});
          function o() {
            throw new Error("setTimeout has not been defined");
          }
          function a() {
            throw new Error("clearTimeout has not been defined");
          }
          function s(t) {
            if (i === setTimeout) return setTimeout(t, 0);
            if ((i === o || !i) && setTimeout)
              return (i = setTimeout), setTimeout(t, 0);
            try {
              return i(t, 0);
            } catch (e) {
              try {
                return i.call(null, t, 0);
              } catch (e) {
                return i.call(this, t, 0);
              }
            }
          }
          !(function () {
            try {
              i = "function" == typeof setTimeout ? setTimeout : o;
            } catch (e) {
              i = o;
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
              r = a;
            }
          })();
          var l,
            c = [],
            d = !1,
            h = -1;
          function u() {
            d &&
              l &&
              ((d = !1),
              l.length ? (c = l.concat(c)) : (h = -1),
              c.length && p());
          }
          function p() {
            if (!d) {
              var e = s(u);
              d = !0;
              for (var t = c.length; t; ) {
                for (l = c, c = []; ++h < t; ) l && l[h].run();
                (h = -1), (t = c.length);
              }
              (l = null),
                (d = !1),
                (function (t) {
                  if (r === clearTimeout) return clearTimeout(t);
                  if ((r === a || !r) && clearTimeout)
                    return (r = clearTimeout), clearTimeout(t);
                  try {
                    r(t);
                  } catch (e) {
                    try {
                      return r.call(null, t);
                    } catch (e) {
                      return r.call(this, t);
                    }
                  }
                })(e);
            }
          }
          function g(e, t) {
            (this.fun = e), (this.array = t);
          }
          function f() {}
          (t.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (1 < arguments.length)
              for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            c.push(new g(e, t)), 1 !== c.length || d || s(p);
          }),
            (g.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (t.title = "browser"),
            (t.browser = !0),
            (t.env = {}),
            (t.argv = []),
            (t.version = ""),
            (t.versions = {}),
            (t.on = f),
            (t.addListener = f),
            (t.once = f),
            (t.off = f),
            (t.removeListener = f),
            (t.removeAllListeners = f),
            (t.emit = f),
            (t.prependListener = f),
            (t.prependOnceListener = f),
            (t.listeners = function (e) {
              return [];
            }),
            (t.binding = function (e) {
              throw new Error("process.binding is not supported");
            }),
            (t.cwd = function () {
              return "/";
            }),
            (t.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            }),
            (t.umask = function () {
              return 0;
            });
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
