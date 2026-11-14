---
title: AI assistant (MCP)
description: How to connect Trasio to Claude, ChatGPT and other AI assistants.
order: 8
---

Trasio has an **MCP connector** (Model Context Protocol). With it you connect
Trasio to an AI assistant, for example Claude or ChatGPT. The assistant signs
in with your account and works with your trips, your profile and the public
places.

## What the assistant can do

| Task | Example question |
|---|---|
| Plan a new trip | "Plan me a two-day trip from Blansko through Macocha to Sloup." |
| Find journeys | "How do I get from my cottage to Blansko on Saturday morning?" |
| Search your plans and trips | "Which new plans do I have with the tag mountains?" |
| Find where you have not been | "Find me a trip near Brno where I have not been yet." |
| Add and fix places | "Add the aquaparks of South Moravia with their entry prices." |

- The assistant saves a **new plan** as private. Trasio routes the way
  between the points itself.
- The assistant changes an **existing plan** only when you agree. First it
  shows you what changes, and it saves only after you confirm.
- The assistant can **archive** a plan or a trip. It cannot delete one or
  start a trip; you do that in the app.
- The assistant does not add **places** directly. It sends a suggestion that
  an admin checks. The suggestion must name the source of the facts.
- It searches journeys with the settings from your profile: walking speed,
  stop search radius and transfer time. It can use **Moje místa** (My
  places) as the start or the end.

## Connect

The connector address:

```
https://app.gotrasio.cz/mcp
```

The first time, the assistant sends you to the Trasio sign-in. Sign in with
the same account as on the web. You do not type any client id or key.

**Claude (web and Claude Desktop)** — Settings › Connectors › Add custom
connector. Paste the connector address and click Connect.

**ChatGPT** — add a connector (app) with the connector address.

**Claude Code**:

```bash
claude mcp add --transport http trasio https://app.gotrasio.cz/mcp
```

Then run `/mcp` in Claude Code and choose Authenticate.

**Gemini CLI** — add to `~/.gemini/settings.json`:

```json
{
  "mcpServers": {
    "trasio": { "httpUrl": "https://app.gotrasio.cz/mcp" }
  }
}
```

Then run `/mcp auth trasio`.

## Privacy

- The assistant sees only **your** trips, plans and profile. It does not see
  other people's trips.
- The Trasio data that the assistant reads are processed by the assistant's
  provider (for example Anthropic or OpenAI) under its own terms. You connect
  the connector yourself, on your own instruction.
- You can disconnect the connector at any time in the settings of your
  assistant.
