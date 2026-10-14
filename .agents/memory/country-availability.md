---
name: Country availability
description: Durable policy for removing countries from account registration and selection
---

When a country should disappear from signup or the public country selector, deactivate its catalog entry rather than deleting it outright.

**Why:** Country codes can remain attached to accounts and historical activity. Deletion destroys catalog context, while deactivation is reversible. Before hiding a country from login selection, check whether existing non-admin accounts use it; otherwise those users may no longer be able to select the country required for login.

**How to apply:** Check account counts and the login path before a country change. Preserve inactive entries for history, and ensure new registration accepts only active countries.

For this app, the Democratic Republic of the Congo (CD, +243) is the only active country. The site displays all monetary amounts in CDF without recalculating stored amounts. Inactive country choices may remain available on login only for countries still associated with existing accounts.

**Why:** The user requested a single-country experience and CDF display, while keeping historical amounts unchanged and avoiding lockout of existing accounts.

**How to apply:** Enforce the active-country policy in the country catalog and public pickers; keep provider-specific payment payloads separate from display currency.

Public pickers may use the seeded country list only when `/api/countries` fails; a successful empty response must stay empty. Server-side active-country validation remains authoritative, so a display fallback does not make registration or payments available during an API outage.

**Why:** A Plesk API 500 hid every country option even though the client bundle and seeded country data were valid.

**How to apply:** Use the fallback only for failed requests, label it as temporary, and keep inactive-country enforcement on the server.