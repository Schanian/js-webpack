import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import print from './print';
function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack','is', 'good', 'really','good'],' ');
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);
    const btn = document.createElement('button');
    btn.innerHTML = 'Click Me';
    btn.onclick = print;
    element.appendChild(btn);
    return element; 
}
document.body.appendChild(component());