# Sito demo Jekyll — base di partenza

Sito dimostrativo con barra di navigazione laterale, 3 pagine (Home, Chi siamo, Servizi), immagini e link, pronto per essere pubblicato su GitHub Pages.

## Come pubblicarlo su GitHub Pages

1. **Crea un nuovo repository** su GitHub (es. `il-mio-sito`).
2. **Carica il contenuto di questa cartella** nel repository (non la cartella stessa, il suo *contenuto*):
   - via web: trascina tutti i file nella pagina "Add file → Upload files" di GitHub;
   - oppure via Git:
     ```bash
     cd jekyll-demo-site
     git init
     git add .
     git commit -m "Sito demo iniziale"
     git branch -M main
     git remote add origin https://github.com/<tuo-utente>/<nome-repo>.git
     git push -u origin main
     ```
3. **Imposta `baseurl` in `_config.yml`**:
   - se il repository si chiama `<tuo-utente>.github.io` → lascia `baseurl: ""`;
   - se il repository ha un altro nome (es. `il-mio-sito`) → imposta `baseurl: "/il-mio-sito"`.
4. Su GitHub vai in **Settings → Pages**, imposta come sorgente il branch `main` (cartella `/root`) e salva.
5. Dopo un paio di minuti il sito sarà online su:
   - `https://<tuo-utente>.github.io/` (se il repo è `<tuo-utente>.github.io`), oppure
   - `https://<tuo-utente>.github.io/<nome-repo>/`.

## Come provarlo in locale (opzionale ma consigliato)

Richiede [Ruby](https://www.ruby-lang.org/) installato.

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Poi apri `http://localhost:4000` nel browser. Ogni modifica ai file viene ricaricata automaticamente.

## Struttura del progetto

```
.
├── _config.yml          # Titolo, descrizione, voci del menu laterale
├── _includes/
│   └── sidebar.html      # Barra di navigazione laterale
├── _layouts/
│   └── default.html      # Layout comune a tutte le pagine
├── assets/
│   ├── css/style.css     # Stili (sidebar, card, responsive)
│   ├── js/main.js        # Toggle del menu su mobile
│   └── images/           # Immagini SVG di esempio
├── index.md              # Home
├── chi-siamo.md          # Pagina "Chi siamo"
└── servizi.md             # Pagina "Servizi"
```

## Personalizzarlo

- **Aggiungere una pagina**: crea un nuovo file `.md` nella root con un front matter come:
  ```yaml
  ---
  layout: default
  title: Nome pagina
  permalink: /nome-pagina/
  ---
  ```
  poi aggiungi la voce corrispondente in `nav_items` dentro `_config.yml` per farla comparire nella barra laterale.
- **Cambiare i colori**: modifica le variabili CSS in cima a `assets/css/style.css` (sezione `:root`).
- **Sostituire le immagini**: le immagini di esempio sono SVG generati (`assets/images/*.svg`); puoi sostituirle con foto reali (jpg/png) aggiornando i riferimenti nei file `.md`.
