Components
==========

This directory contains our project's React components.

Files in a typical component
----------------------------

1. `src/Component.ts[x]`
   The implementation of the component. It may reference other `.tsx` files in
   order to separate business logic from presentation logic. Otherwise, it will
   typically be very simple and contain mostly HTML code.
2. `spec/Component.ts`
   The tests for this component.
3. `spec/Component.mdx`
   The main documentation of the component. This is what people will use to
   understand how to consume the component.
4. `spec/Component.stories.tsx`
   The 'stories' / scenarios which a referenced by the documentation and can be
   used in visual regression testing.
