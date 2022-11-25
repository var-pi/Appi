### [⇦](../main.md)

# **Üldine**

Väldi suhtelisi faili asukoha teid.

    ./css/minu-stiilid.css

Nende asemel eelista absoluutseid.

    /src/css/minu-stiilid.css

See on tarvis, kuna faile tihti laetakse mitte otse vaid läbi <code>index.html</code>.

---

Kasutamaks lehekülgede (_pages_) _JS_ faile on tarvis koodi js failis ümbritseda _default_ funktsiooniga:

```
export default function () {
  ...
}
```

