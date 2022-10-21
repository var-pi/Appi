# Router

<br>

## Tingimused

Kasutamaks routerit on vaja kindlaks teha järgmist: <br>

1.  Kaustas [_/src/pages/_](../../src/pages/) leitava vajaliku lehe nimi on sisestatud failis [_/src/router/list.js_](../../src/router/list.js) asuvasse järjendisse.
2.  Faili, kus soovitakse routerit kasutada, on lisatud _script_, mis viitab failile [/src/router/router.js](../../src/router/router.js).<br>
    Viide peaks olema kujul <code>\<script type="module" src="sinu/tee/routerini"></script></code>.

<br>

## Kasutamine

<br>

### Uuri lühiviiteid

```
router.routes
```

Tagastab:

- **_object_** - objekti, mille võtmeteks on lühiviited ja väärtusteks täisviited.

<br>

### Lae uus leht

```
router.push(route) => void
```

Argumendid:

- **_route_** - lühiviide mõnele lehele. Algab märgiga "/", millele jägneb lehe nimi.

Tagastab:

- **_void_** - mitte midagi.

