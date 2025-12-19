# Novacrust Assessment

## Setup instructions

Requirements

- Node.js >= 18
- npm, yarn, or pnpm

Install dependencies

```bash
npm install
```

Run in development

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Run tests (if present)

```bash
npm run test
```

## Assumptions and trade-offs

- Phone input accepts digits and hyphens on entry. Hyphens are removed internally so stored values are digits only.
- Validation uses Zod with preprocessors to normalize input before validation. This centralizes validation but transforms the raw entry.
- UI and accessibility are intentionally minimal for the assessment. A full i18n is out of scope.
