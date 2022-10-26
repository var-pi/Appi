### [⇦](../main.md)

# **Ruuter**

[Mis on ruuter?](https://web.dev/urlpattern/)

<br>

## **_NB!_**

<br>

> Kõigi kaustas [_/src/pages/_](../../src/pages/) asuvate lehekülgede nimed peavad olema sisestatud failis [_/src/pages/names.js_](../../src/pages/names.js) asuvasse järjendisse.

<div style="opacity: 0.5"> Selle järjendi põhjal genereeritakse igale lehküljele vastav URL ja faili asukohaviit.</div>

<br>

## **Kasutamine**

<br>

### **URL**

<br>

Vahetamaks lehekülge piisab muutmast URL-i.

URL-i struktuur on järgmine:

    http://[host]/#/[lehe-nimi]

Ehk juhul leheküljega <code>/src/pages/home.html</code> ning lokaalse jooksutamisega võib URL välja näha järgmiselt:

    http://localhost:5500/#/home

<br>

### **Link**

<br>

Loomaks HTML elementi, mille vajutades suunataks kasutajat soovitavale leheküljele, võib kasutada näiteks viidet:

    <a href="..." >...</a>

[Loe viidete kohta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) \
[Loe # kohta](https://stackoverflow.com/questions/21850093/usage-of-hash-in-url)

Atribuudi href väärtuseks peaks olema URL-i lühend kujul <code>/#/[lehe-nimi]</code>.

Kindlasti lisa ka mingit teksti, mis kirjeldaks seda linki.

Ehk lehekülje <code>/src/pages/home.html</code> puhul:

    <a href="/#/home">Koju</a>

