---
title: AI asistent (MCP)
description: Jak připojit Trasio do Clauda, ChatGPT a dalších AI asistentů.
order: 8
---

Trasio má **MCP konektor** (Model Context Protocol). Přes něj připojíš Trasio
do AI asistenta, třeba do Clauda nebo ChatGPT. Asistent se přihlásí tvým
účtem a pracuje s tvými výlety, tvým profilem a s veřejnými místy.

## Co asistent umí

| Úkol | Příklad dotazu |
|---|---|
| Naplánovat nový výlet | „Naplánuj mi dvoudenní výlet z Blanska přes Macochu do Sloupu.“ |
| Najít spojení | „Jak se dostanu z chaty do Blanska v sobotu ráno?“ |
| Prohledat tvoje plány a výlety | „Jaké nové plány mám se štítkem hory?“ |
| Najít, kde jsi ještě nebyl | „Najdi mi výlet u Brna, kde jsem ještě nebyl.“ |
| Přidat a opravit místa | „Doplň aquaparky na jižní Moravě s cenou vstupného.“ |

- **Nový plán** asistent uloží jako soukromý. Trasu mezi body spočítá Trasio
  samo.
- **Existující plán** asistent změní, jen když s tím souhlasíš. Nejdřív ti
  ukáže, co se změní, a uloží to až po tvém potvrzení.
- Plán nebo výlet umí asistent **odložit do archivu**. Smazat ho ani začít
  výlet nemůže, to uděláš sám v aplikaci.
- **Místa** asistent nepřidává rovnou. Pošle návrh a ten zkontroluje správce.
  U návrhu musí uvést zdroj údajů.
- Spojení hledá s tvým nastavením z profilu: rychlost chůze, okruh hledání
  zastávek a rezerva na přestup. Jako začátek nebo cíl umí použít tvoje
  **Moje místa**.

## Připojení

Adresa konektoru:

```
https://app.gotrasio.cz/mcp
```

Při prvním použití tě asistent pošle na přihlášení do Trasia. Přihlas se
stejným účtem jako na webu. Žádné ID klienta ani klíč nezadáváš.

**Claude (web a Claude Desktop)** — Settings › Connectors › Add custom
connector. Vlož adresu konektoru a klikni na Connect.

**ChatGPT** — přidej konektor (aplikaci) s adresou konektoru.

**Claude Code**:

```bash
claude mcp add --transport http trasio https://app.gotrasio.cz/mcp
```

Pak v Claude Code spusť `/mcp` a zvol přihlášení (Authenticate).

**Gemini CLI** — do souboru `~/.gemini/settings.json` přidej:

```json
{
  "mcpServers": {
    "trasio": { "httpUrl": "https://app.gotrasio.cz/mcp" }
  }
}
```

Pak spusť `/mcp auth trasio`.

## Soukromí

- Asistent vidí jen **tvoje** výlety, plány a profil. Výlety ostatních
  nevidí.
- Údaje z Trasia, které asistent načte, zpracovává poskytovatel asistenta
  (třeba Anthropic nebo OpenAI) podle svých podmínek. Konektor připojuješ ty,
  na svůj pokyn.
- Konektor kdykoli odpojíš v nastavení svého asistenta.
