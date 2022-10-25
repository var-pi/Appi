### [⇦](../main.md)

# **Komponendid**

[Milleks komponendid?](http://componentsprogramming.com/components-programming/) \
[Implementatsiooni kohta](https://javascript.info/custom-elements)

<br>

## **Uue komponendi loomine**

<br>

Loomaks uut komponenti on tarvis täita mitut sammu:

1.  Loo komponendinimeline kaust asukohas [_/src/components_](/src/components) või selle alamkaustas. Näiteks:

```
/src/components/minu-komponent
```

2.  Lisa vastloodud kausta 4 samanimelist faili, mis erinevad vaid [laienduste](https://www.howtogeek.com/356448/what-is-a-file-extension/) poolest:

```
minu-komponent
│
├── minu-komponent.class.js
│
├── minu-komponent.html
│
├── minu-komponent.css
│
└── minu-komponent.js
```

> See, et kasutame pidevalt sama nime on tarvilik komponendi korralikuks tööks.

3. Loo laiendusega <code>.class.js</code> lõppevas failis klassi <code>CustomElement</code> alamklass, anna [ülemklassi](https://javascript.info/class-inheritance) konstruktorile hiljuti loodud kausta asukoht ja [defineeri](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) uus komponent. Meie komponendi puhul näeb see fail välja järmiselt:

```
import CustomElement from "/src/components/customElement.js";

class MinuKomponent extends CustomElement {
  constructor() {
    super("/src/components/minu-komponent");
  }
}

customElements.define("minu-komponent", MinuKomponent);
```

<div style="opacity: 0.5">Ülemklassi CustomElement laiendamine automaatselt lisab eelloodud HTML, CSS ja JS failid meie komponendi külge.</div>

4. Ekspordi hiljuti loodud <code>.class.js</code> fail. Seda on tarvis teha failis [_/src/components/linker.js_](/src/components/linker.js). Meie komponendi puhul:

```
export * from "/src/components/minu-komponent/minu-komponent.class.js";
```

<div style="opacity: 0.5">Antud samm on tarvilik võimaldamaks komponendi kasutamist igal pool projektis. Saavutatud on see tänu faili linker.js faili index.html importimisele.</div>

5. Sisuta loodud HTML, CSS ja JS failid.

> Kuna antud failid kuuluvad ühe komponendi juurde, pole nende omavahelised viited tarvilikud.

<br>

## **Komponendi kasutamine**

<br>

Iseloodud komponendid on sisuliselt sisseehitatud komponentidega võrdväärsed, seetõttu on ka nende kasutamine analoogiline. Eelpool loodud komponenti kasutaksime järgmiselt:

    <minu-komponent></minu-komponent>

