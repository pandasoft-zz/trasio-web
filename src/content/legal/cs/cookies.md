---
title: Cookies
description: Jaké cookies a úložiště používá web a aplikace Trasio.
validFrom: "12. 11. 2026"
draft: false
---

## Tento web (gotrasio.cz)

Tento prezentační web **nepoužívá cookies** ani analytiku. Písma jsou
uložena přímo na našem serveru, nenačítají se od třetích stran.

## Aplikace (app.gotrasio.cz)

Aplikace používá jen technicky nutná úložiště:

| Název | Typ | Účel | Doba |
|---|---|---|---|
| Přihlašovací služba (Zitadel): `__Host-zitadel.useragent`, `fingerprintId` | cookie na auth.gotrasio.cz | Rozpoznání prohlížeče při přihlášení, ochrana účtu | 1 rok |
| Stav přihlašování (`oidc.…`) | úložiště prohlížeče (localStorage) | Dokončení přihlášení | smaže se po přihlášení |
| Přihlášení (`oidc.user…`) | úložiště relace (sessionStorage) | Udržení přihlášení | do odhlášení nebo zavření karty |
| Nastavení mapy (`trasio.map`) | úložiště prohlížeče (localStorage) | Poslední výřez, vrstvy, filtr | trvale v prohlížeči |
| Jazyk (`i18nextLng`) | úložiště prohlížeče (localStorage) | Jazyk aplikace | trvale v prohlížeči |
| Rozpracovaný plán, výběr výletů | úložiště relace (sessionStorage) | Neuložené změny plánu, výběr v seznamu výletů | do zavření karty |

Nutná úložiště nevyžadují souhlas. Reklamní ani sledovací cookies
nepoužíváme.
