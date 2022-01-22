import './hello-world-button.css';

class HelloWorldButton {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world';
        button.classList.add('hello-world-button');     // 这个button用到了css 
        const body = document.querySelector('body');
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            p.classList.add('hello-world-text');    //这个p标签用到了css
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;