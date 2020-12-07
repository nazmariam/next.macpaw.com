# next.macpaw.com

## Both pages

- should support localizations and language switching based on `translations` JSON files
- should support loading localizations by chunks
- should support JS code splitting
- as a plus to support CSS code splitting

## [Products Page](products)

- render products.html based on one of two JSON data files: 50% page views should query `products-a`.json and other 50% are based on `products-b.json`
- async loading one of two banner components - 40% or 90% based on 50/50 A/B client-side AB test (`Math.random`)

## [Store Page](store)

- render store.html with a dynamic `Add 1 more` and Remove from cart buttons (images are random)
- offers word from `You have 5 special offers` should be pluralized (on all languages) on the client side (1=offer, >1=offers, 0=no offers)
- offers list should be preserved during navigation
- as a plus: offers list scroll position is preserved during navigation

