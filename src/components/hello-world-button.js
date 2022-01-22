import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button';    //这个 class 属性的写法主流浏览器并不兼容，需要用babel来编译成主流浏览器兼容的写法

    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Hello world';
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default HelloWorldButton;