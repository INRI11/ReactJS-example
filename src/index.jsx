import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector("#app");

let arr = [
    { name: 'Darth', color: 'red' },
    { name: 'Leia', color: 'white' },
    { name: 'Luke', color: 'green' },
    { name: 'Chewbakka', color: 'brown' }
];

const arrObj = arr.map(el => <div class="character">
    <p><b>{ el.name }</b> <span>{ el.color }</span></p>
</div>)

const content = <h2>Hello ReactWars</h2>

function onButtonClick() {
    function handleClick(e) {
      e.preventDefault();
      arr.push({ name: 'Dart Weider', color: 'red' });

      console.log(arr);
    }
  
    return (
        <button onClick={handleClick}>Добавить "Dart Weider" в массив</button>
    );
}

const button = onButtonClick();

ReactDom.render(
    <div>
        { content }
        { arrObj }
        { button }
    </div>
    , container)