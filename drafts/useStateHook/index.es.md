---
id: 1
date: '2018-02-24'
title: 'Entendiendo useState Hook'
category: 'React'
tags: ['react', 'hook']
banner: '/images/bg/understand-useState-hook.jpg'
lang: 'es'
---

# useState

## ¿Qué es y para qué sirve ?

Un Hook es la forma en la que podemos "conectar" un componente funcional a las características o funcionalidades de React, particularmente `useState` Hook nos permite conectar un componente funcional al estado de React.

## ¿Cómo se utiliza?

Para utilizar cualquier Hook se deben seguir dos reglas:

1 - Sólo deben llamarse en el inicio o parte superior de la función y no dentro de loops, funciones o condiciones anidadas.

2- Incluirlos únicamente en componentes funcionales de React y no dentro de funciones regulares de JavaScript. También pueden incluirse en hooks personalizados.

Teniendo en cuenta estas reglas podemos utilizarlo de la siguiente forma:

```
import React, { useState } from 'react';

function ReactFunction(props) {
    const [state, setState] = useState(initialState);

    ...
}
```

## ¿Cómo funciona?

La llamada a `useSate` retorna un par de valores, el estado actual y una función que lo actualiza.

### ¿Qué recibe como argumento?

El único argumento es el `initialState`, este es utilizado durante el renderizado inicial y en los siguientes será ignorado. En caso que el cálculo del `initialState` sea costoso se debe pasar una función, la cual será llamada únicamente en el renderizado inicial para calcular el estado.

```
    const [count, setCount] = useState(0);
    // or
    const [state, setState] = useState(() => {
        const initialState = someExpensiveComputation(props);
        return initialState;
    });
```

### ¿Qué retorna?

La variable `state`, que representa el estado actual es denominada **variable de estado** y es especial porque es la forma en la que React "preserva" los valores entre las distintas llamadas a la función. Normalmente las variables "desaparecen" cuando se sale de la función, pero las variables de estados son preservadas por React.

La función de actualización `setState` acepta un nuevo valor de estado y coloca en espera una nueva renderización del componente. Además si el nuevo valor del estado es calculado a partir del estado anterior, se debe pasar una función que recibe como parámetro el valor anterior del estado y retornar un nuevo estado

```
// Set a value
setState(newStateValue)
// Set a calculated value
setState(prevState =>  prevState + 1)}
// Set a new object state - On this case it is recommended useReducer Hook.
setState(prevState => {
  return {...prevState, ...updatedValues};
});
```

```
    Es importante tener en cuenta que React mantiene la identidad de esta función estable, es decir que no cammbiará en los siguientes renderizados. Es por eso que es seguro omitir dicha función de la lista de dependencias de useEffect o useCallback.
```

### Referencias

- Documentacion oficial de React. [Link](https://es.reactjs.org/docs/hooks-overview.html)
