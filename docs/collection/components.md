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

2. Lisa loodud alamkausta asukoht failis [_/src/components/paths.js_](/src/components/paths.js) asuvasse järjendisse. Selle põhjal genereeritakse hiljem korraga kõik komponendid.

```
[

  . . .

  "/src/components/minu-komponent"
]
```

3.  Lisa vastloodud kausta 3 samanimelist faili, mis erinevad vaid [laienduste](https://www.howtogeek.com/356448/what-is-a-file-extension/) poolest:

```
minu-komponent
│
├── minu-komponent.html
│
├── minu-komponent.css
│
└── minu-komponent.js
```

> See, et kasutame pidevalt sama nime on tarvilik komponendi korralikuks tööks.

4. Sisuta loodud HTML, CSS ja JS failid.

> Kuna antud failid kuuluvad ühe komponendi juurde, pole nende omavahelised viited tarvilikud.

<br>

## **Komponendi kasutamine**

<br>

Iseloodud komponendid on sisuliselt sisseehitatud komponentidega võrdväärsed, seetõttu on ka nende kasutamine analoogiline. Eelpool loodud komponenti kasutaksime järgmiselt:

    <minu-komponent></minu-komponent>

<br>

## **JS**

<br>

Kogu komponendispetsiifilist koodi tuleb kirjutada funktsioonis <code>default</code>:

    export default function (el) {}

Argument <code>el</code> on siin meie komponendi element.

> Kogu kood, mis kirjutatakse funktsioonist väljaspool, laetakse vaid **_üks kord_** sõltumata sellest mitu komponendi [instantsit](https://www.computerhope.com/jargon/i/instance.htm) loodud on.

<br>

## **CSS**

<br>

Vältimaks konflikte tasub stiilide lisamisel täpsustada elemendi komponendi nime:

    minu-komponent p#minu-paragrahv {
      color: green;
    }

