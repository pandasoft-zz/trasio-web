---
title: Cookies
description: Which cookies and storage the Trasio website and app use.
validFrom: "12 November 2026"
draft: false
---

## This website (gotrasio.cz)

This website **uses no cookies** and no analytics. Fonts are on our own
server; nothing loads from third parties.

## The app (app.gotrasio.cz)

The app uses only storage that is technically necessary:

| Name | Type | Purpose | Duration |
|---|---|---|---|
| Sign-in service (Zitadel): `__Host-zitadel.useragent`, `fingerprintId` | cookie on auth.gotrasio.cz | Recognise the browser at sign-in, protect the account | 1 year |
| Sign-in state (`oidc.…`) | browser storage (localStorage) | Finish the sign-in | deleted after sign-in |
| Sign-in (`oidc.user…`) | session storage (sessionStorage) | Keep you signed in | until sign-out or until you close the tab |
| Map settings (`trasio.map`) | browser storage (localStorage) | Last view, layers, filter | kept in the browser |
| Language (`i18nextLng`) | browser storage (localStorage) | App language | kept in the browser |
| Plan draft, trip selection | session storage (sessionStorage) | Unsaved plan changes, selection in the trip list | until you close the tab |

Necessary storage needs no consent. We use no advertising or tracking
cookies.
