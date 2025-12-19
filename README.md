# Novacrust Assessment

## Setup instructions

Requirements

- Node.js >= 18
- npm, yarn, or pnpm

Install dependencies

```bash
cd /Users/asaniyanayomidepaul/Documents/work/interview-tasks/novacrust-assessment
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

- Phone input accepts digits and hyphens on entry; hyphens are removed internally so stored values are digits-only (see `src/lib/schema.ts`).
- Validation uses Zod with preprocessors to normalize input before validation; this centralizes validation but transforms the raw entry.
- React Hook Form error values may be strings or objects; UI components normalize errors to avoid TypeScript mismatches.
- UI and accessibility are intentionally minimal for the assessment — full i18n, formatting variants, and exhaustive edge-case handling are out of scope.
