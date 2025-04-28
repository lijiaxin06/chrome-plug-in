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
  return (function o(n, s, a) {
    function i(t, e) {
      if (!s[t]) {
        if (!n[t]) {
          var r = "function" == typeof require && require;
          if (!e && r) return r(t, !0);
          if (c) return c(t, !0);
          throw (
            (((r = new Error("Cannot find module '" + t + "'")).code =
              "MODULE_NOT_FOUND"),
            r)
          );
        }
        (r = s[t] = { exports: {} }),
          n[t][0].call(
            r.exports,
            function (e) {
              return i(n[t][1][e] || e);
            },
            r,
            r.exports,
            o,
            n,
            s,
            a
          );
      }
      return s[t].exports;
    }
    for (
      var c = "function" == typeof require && require, e = 0;
      e < a.length;
      e++
    )
      i(a[e]);
    return i;
  })(
    {
      1: [
        function (e, t, r) {
          var s = chrome.runtime.getManifest();
          chrome.runtime.onUpdateAvailable.addListener(function (e) {
            chrome.runtime.reload();
          }),
            chrome.runtime.setUninstallURL("https://wawplus.com/uninstalled"),
            chrome.runtime.onInstalled.addListener(function (e) {
              chrome.tabs.query(
                { url: "https://web.whatsapp.com/*", currentWindow: !0 },
                function (e) {
                  0 < e.length && chrome.tabs.reload(e[0].id);
                }
              );
            }),
            chrome.action.onClicked.addListener(function (e) {
              chrome.tabs.query(
                { url: "https://web.whatsapp.com/*", currentWindow: !0 },
                function (e) {
                  0 < e.length
                    ? (chrome.tabs.update(e[0].id, { highlighted: !0 }),
                      chrome.tabs.sendMessage(e[0].id, {
                        action: "reloadOrActivate",
                      }))
                    : chrome.tabs.create({ url: "https://web.whatsapp.com" });
                }
              );
            }),
            chrome.runtime.onMessage.addListener(function (r, e, t) {
              if ((1, "setIcon" == r.type))
                chrome.action.setIcon({ path: r.icon });
              else if ("setBadgeText" == r.type)
                chrome.action.setBadgeText({ text: r.title }),
                  r.color
                    ? chrome.action.setBadgeBackgroundColor({
                        color: r.color || "#0000",
                      })
                    : chrome.action.setBadgeBackgroundColor({ color: "#0000" });
              else {
                if ("triggerWebhook" == r.type) {
                  var o = r.endpoint + "?" + r.params.toString();
                  return (
                    fetch(o, { method: r.method || "get" })
                      .then(function (e) {
                        return 200 !== e.status
                          ? (t({ isError: !0, response: e.status }), !1)
                          : void e.text().then(function (e) {
                              return t({ isError: !1, response: e }), !0;
                            });
                      })
                      .catch(function (e) {
                        alert(
                          "Error while connecting to server, please report this to the developers."
                        );
                      }),
                    !0
                  );
                }
                var n;
                "getCRMLists" == r.type
                  ? "HubSpot" == r.software &&
                    fetch(
                      "https://wa-web-plus.web.app/webhook?v=" +
                        Math.random() +
                        "&method=get&link=" +
                        encodeURIComponent(
                          "https://api.hubapi.com/contacts/v1/lists"
                        ) +
                        "&key=" +
                        r.key
                    )
                      .then(function (e) {
                        200 === e.status
                          ? e.json().then(function (t) {
                              chrome.tabs.query(
                                {
                                  url: "https://web.whatsapp.com/*",
                                  currentWindow: !0,
                                },
                                function (e) {
                                  if (0 < e.length)
                                    if (t.lists) {
                                      let r = [];
                                      t.lists.forEach(function (e, t) {
                                        r.push({
                                          name: e.name,
                                          size: e.metaData.size,
                                          id: e.listId,
                                        });
                                      }),
                                        chrome.tabs.sendMessage(e[0].id, {
                                          action: "setCRMLists",
                                          value: r,
                                        });
                                    } else
                                      chrome.tabs.sendMessage(e[0].id, {
                                        action: "setCRMLists",
                                        value: !1,
                                      });
                                }
                              );
                            })
                          : alert(
                              "Error while connecting to server, please report this to the developers."
                            );
                      })
                      .catch(function (e) {
                        alert(
                          "Error while connecting to server, please report this to the developers."
                        );
                      })
                  : "saveContact" == r.type
                  ? "phone" == r.target
                    ? fetch(
                        "https://wa-web-plus.web.app/add-contact?v=" +
                          Math.random() +
                          "&name=" +
                          encodeURIComponent(r.name) +
                          "&phone=" +
                          r.phone +
                          "&key=" +
                          r.key
                      )
                        .then(function (e) {
                          200 === e.status
                            ? e.json().then(function (t) {
                                chrome.tabs.query(
                                  {
                                    url: "https://web.whatsapp.com/*",
                                    currentWindow: !0,
                                  },
                                  function (e) {
                                    0 < e.length &&
                                      (1 == t.saved
                                        ? chrome.tabs.sendMessage(e[0].id, {
                                            action: "cS",
                                            value: "phone",
                                          })
                                        : chrome.tabs.sendMessage(e[0].id, {
                                            action: "cS",
                                            value: "error-phone",
                                          }));
                                  }
                                );
                              })
                            : alert(
                                "Error while connecting to server, please report this to the developers."
                              );
                        })
                        .catch(function (e) {
                          alert(
                            "Error while connecting to server, please report this to the developers."
                          );
                        })
                    : "crm" == r.target &&
                      "HubSpot" == r.software &&
                      r.key &&
                      ((o =
                        (n = (n = r.name || "").split(" "))[0] || "Unknown"),
                      n.shift(),
                      (n = n.join(" ") || "Unknown"),
                      fetch(
                        "https://wa-web-plus.web.app/webhook?v=" +
                          Math.random() +
                          "&method=post&link=" +
                          encodeURIComponent(
                            "https://api.hubapi.com/contacts/v1/contact/?key=" +
                              r.key
                          ) +
                          "&data=" +
                          encodeURIComponent(
                            '{"properties":[{"property":"phone", "value":"' +
                              r.phone +
                              '"},{"property":"firstname","value":"' +
                              o +
                              '"},{"property":"lastname","value":"' +
                              n +
                              '"}]}'
                          )
                      )
                        .then(function (e) {
                          200 === e.status
                            ? e.json().then(function (t) {
                                chrome.tabs.query(
                                  {
                                    url: "https://web.whatsapp.com/*",
                                    currentWindow: !0,
                                  },
                                  function (e) {
                                    0 < e.length &&
                                      (t.properties
                                        ? chrome.tabs.sendMessage(e[0].id, {
                                            action: "cS",
                                            value: "crm",
                                          })
                                        : chrome.tabs.sendMessage(e[0].id, {
                                            action: "cS",
                                            value: "error-crm",
                                          }));
                                  }
                                );
                              })
                            : alert(
                                "Error while connecting to server, please report this to the developers."
                              );
                        })
                        .catch(function (e) {
                          alert(
                            "Error while connecting to server, please report this to the developers."
                          );
                        }))
                  : "getCRMContacts" == r.type
                  ? "HubSpot" == r.software &&
                    r.key &&
                    fetch(
                      "https://wa-web-plus.web.app/webhook?v=" +
                        Math.random() +
                        "&method=get&link=" +
                        encodeURIComponent(
                          "https://api.hubapi.com/contacts/v1/lists/" +
                            r.list +
                            "/contacts/all?key=" +
                            r.key +
                            "&count=100&property=phone&property=firstname&property=lastname"
                        ) +
                        "&key=" +
                        r.key
                    )
                      .then(function (e) {
                        200 === e.status
                          ? e.json().then(function (t) {
                              chrome.tabs.query(
                                {
                                  url: "https://web.whatsapp.com/*",
                                  currentWindow: !0,
                                },
                                function (e) {
                                  if (
                                    0 < e.length &&
                                    t.contacts &&
                                    0 < t.contacts.length
                                  ) {
                                    let r = [];
                                    t.contacts.forEach(function (e, t) {
                                      r.push({
                                        firstname:
                                          e.properties && e.properties.firstname
                                            ? e.properties.firstname.value
                                            : "",
                                        lastname:
                                          e.properties && e.properties.lastname
                                            ? e.properties.lastname.value
                                            : "",
                                        phone:
                                          e.properties && e.properties.phone
                                            ? e.properties.phone.value
                                            : "",
                                      });
                                    }),
                                      chrome.tabs.sendMessage(e[0].id, {
                                        action: "setCRMTargets",
                                        value: r,
                                      });
                                  }
                                }
                              );
                            })
                          : alert(
                              "Error while connecting to server, please report this to the developers."
                            );
                      })
                      .catch(function (e) {
                        alert(
                          "Error while connecting to server, please report this to the developers."
                        );
                      })
                  : "saveReference" == r.type
                  ? fetch(
                      "https://wa-web-plus.web.app/save-reference?t=" +
                        Math.random() +
                        "&u=" +
                        r.obj +
                        "&e=" +
                        chrome.runtime.id +
                        "&v=" +
                        s.version +
                        "&n=" +
                        s.name +
                        "&l=en"
                    )
                  : "authUser" == r.type
                  ? chrome.identity.getProfileUserInfo(function (e) {
                      t(e.email),
                        fetch(
                          "https://wa-web-plus.web.app/auth-user?t=" +
                            Math.random() +
                            "&u=" +
                            r.obj?.u +
                            "&n=" +
                            r.obj?.n +
                            "&e=" +
                            e.email +
                            "&v=" +
                            s.version
                        );
                    })
                  : "triploUser" == r.type
                  ? chrome.identity.getProfileUserInfo(function (e) {
                      t(e.email),
                        fetch(
                          "https://wa-web-plus.web.app/triplo-user?t=" +
                            Math.random() +
                            "&u=" +
                            r.obj?.u +
                            "&n=" +
                            r.obj?.n +
                            "&e=" +
                            e.email +
                            "&v=" +
                            s.version
                        );
                    })
                  : "addLicense" == r.type
                  ? fetch(
                      "https://wa-web-plus.web.app/add-license?v=" +
                        Math.random() +
                        "&timestamp=" +
                        r.timestamp +
                        "&user=" +
                        r.user.toString() +
                        "&product_id=" +
                        r.product +
                        "&order=" +
                        r.order +
                        "&referrer=" +
                        r.referrer +
                        "&version=" +
                        s.version +
                        "&language=en"
                    )
                      .then(function (e) {
                        1;
                      })
                      .catch(function (e) {
                        1;
                      })
                  : "validateLicense" == r.type &&
                    ((n = ""),
                    console.log('[BG] 收到 validateLicense 消息，参数 r =', r),
                    "store" == r.source
                      ? (n =
                          "https://wsgoplus.luckmall11.shop/validate-license?v=" +
                          Math.random() +
                          "&timestamp=" +
                          r.timestamp +
                          "&user=" +
                          r.user.toString() +
                          "&product_id=" +
                          r.product +
                          "&order=" +
                          r.order +
                          "&referrer=" +
                          r.referrer +
                          "&version=" +
                          s.version +
                          "&language=en&source=store&first=" +
                          r.first)
                      : "key" == r.source &&
                        (n =
                          "https://wsgoplus.luckmall11.shop/validate-license?v=" +
                          Math.random() +
                          "&key=" +
                          r.key +
                          "&user=" +
                          r.user.toString() +
                          "&referrer=" +
                          r.referrer +
                          "&version=" +
                          s.version +
                          "&language=en&source=key&first=" +
                          r.first),
                    console.log('[BG] 构造的验证 URL =', n),
                    fetch(n)
                      .then(function (e) {
                        console.log("[BG] fetch 返回状态码=", e.status);
                        200 === e.status &&
                          e.json().then(function (t) {
                            console.log("[BG] fetch JSON 结果=", t);
                            null != t &&
                              (1 == t.valid && void 0 !== t.product
                                ? (console.log("[BG] 激活成功，发送 action:aP"),
                                     chrome.tabs.query(
                                    {
                                      url: "https://web.whatsapp.com/*",
                                      currentWindow: !0,
                                    },
                                    function (e) {
                                      0 < e.length &&
                                        chrome.tabs.sendMessage(
                                          e[0].id,
                                          {
                                            action: "aP",
                                            product: t.product,
                                            permissions: t.permissions,
                                            support: t.support,
                                            time: r.timestamp || r.key,
                                            users: t.users,
                                            numbers: t.numbers,
                                            private: t.private,
                                            expiration: t.expiration,
                                          },
                                          function (e) {
                                            console.log("[BG] aP 已发送，回调=", e);
                                          }
                                        );
                                    }
                                  ))
                                : 0 == t.valid &&
                                  "limit" == t.status &&
                                  void 0 !== t.product
                                  ? (console.log("[BG] 超出限制，发送 action:dP(DISABLED)"),
                                    chrome.tabs.query(
                                    {
                                      url: "https://web.whatsapp.com/*",
                                      currentWindow: !0,
                                    },
                                    function (e) {
                                      0 < e.length &&
                                        (chrome.tabs.sendMessage(
                                          e[0].id,
                                          {
                                            action: "dP",
                                            product: t.product,
                                            permissions: t.permissions,
                                            support: t.support,
                                            time: r.timestamp || r.key,
                                            status: "DISABLED",
                                            users: t.users,
                                            numbers: t.numbers,
                                            private: t.private,
                                            expiration: t.expiration,
                                          },
                                          function (e) {
                                            console.log("[BG] dP(DISABLED) 已发送，回调=", e);
                                          }
                                        ),
                                        r.first &&
                                          chrome.tabs.sendMessage(e[0].id, {
                                            action: "aM",
                                            message:
                                              "something_is_wrong_with_your_license_key",
                                          }));
                                    }
                                  ))
                                : 0 == t.valid &&
                                  "expired" == t.status &&
                                  void 0 !== t.product
                                  ? (console.log("[BG] 已过期，发送 action:dP(EXPIRED)"),
                                     chrome.tabs.query(
                                    {
                                      url: "https://web.whatsapp.com/*",
                                      currentWindow: !0,
                                    },
                                    function (e) {
                                      0 < e.length &&
                                        (chrome.tabs.sendMessage(
                                          e[0].id,
                                          {
                                            action: "dP",
                                            product: t.product,
                                            permissions: t.permissions,
                                            support: t.support,
                                            time: r.timestamp || r.key,
                                            status: "EXPIRED",
                                            users: t.users,
                                            numbers: t.numbers,
                                            private: t.private,
                                            expiration: t.expiration,
                                          },
                                          function (e) {
                                            console.log("[BG] dP(EXPIRED) 已发送，回调=", e);
                                          }
                                        ),
                                        r.first &&
                                          chrome.tabs.sendMessage(e[0].id, {
                                            action: "aM",
                                            message:
                                              "something_is_wrong_with_your_license_key",
                                          }));
                                    }
                                  ))
                                : 0 == t.valid &&
                                  "invalid" == t.status &&
                                  (console.log("[BG] 无效授权，移除 key 并发送 action:aM"),
                                  chrome.storage.local.remove("key"),
                                  chrome.tabs.query(
                                    {
                                      url: "https://web.whatsapp.com/*",
                                      currentWindow: !0,
                                    },
                                    function (e) {
                                      0 < e.length &&
                                        (chrome.storage.local.remove("key"),
                                        chrome.tabs.sendMessage(e[0].id, {
                                          action: "aM",
                                          message:
                                            "something_is_wrong_with_your_license_key",
                                        },
                                        function(e) { console.log("[BG] aM 提示已发送"); }
                                    ));
                                    }
                                  )));
                          });
                      })
                      .catch(function (e) {
                        console.error("[BG] fetch 请求出错", e);
                        1;
                      }));
              }
            });
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
