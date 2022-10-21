# Komponendid

<br>

## Tingimused

- Kõik komponentide <code>_script_</code> 'id peavad omama tüüpi <code> _module_</code>. Näiteks:

```
<script src="../components/library/img/img.js" type="module"></script>
```

<br>

## Uue komponendi loomine

> Kogu kandilistes sulgudes olev tekst peab olema asendatud.

```
import CustomElement from "/src/components/customElement.js";

class [SinuKlassiNimi] extends CustomElement {
  constructor() {
    super(["komponendi/asukoht/kausta/components/suhtes"], ["komponendiNimi"]);
  }
}

customElements.define("library-img", [SinuKlassiNimi]);
```

