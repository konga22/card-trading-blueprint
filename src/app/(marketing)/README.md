# Marketing Routes

`src/app/(marketing)/` owns the public-facing routes of the project.

## What lives here

- Route entry files such as `page.tsx`
- Shared marketing layout
- Thin route wrappers that delegate to components in `src/components/home/`

## Rules

- Keep route files small.
- Put route-specific composition in `src/components/home/`.
- Reuse `layout.tsx` for shared navigation and footer structure.
- Avoid putting shared UI primitives directly in this folder.
