# TEST - Astro to include 2 React App with each own Redux store

## Conclusion: Possible

### Web app route:

- Home
  - C-alculator Page
    - home (that have simple add/subtract function)
    - about (simple lorem ipsum)
  - K-alkulator Page
    - home (that have simple add/subtract function)
    - tentang (simple lorem ipsum)

### Feature:

- each react app have their redux provider and store
- each react app have their client side route (using react-router hash router)
- each react app have 2 page (home (stateful) and about)
- When switching from C-alculator page to K-alkulator page, the redux will reset to initial state

### Why make this ?

1. To test the possibilites of having static website (good for SEO) that can host multiple react apps with each own store.

2. I think this is really great for website like itch.io or portofolio website to showcase web app demos.

3. With static website, i don't have to rent and tinkering with VPS or serverless bullshit.
