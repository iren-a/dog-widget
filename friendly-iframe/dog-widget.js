(() => {
  class Widget {
    constructor({ container }) {
      this.shadowRoot = container.attachShadow(
        { mode: 'open' }
      );
      this.innerContainer = document.createElement('div');
      this.innerContainer.classList.add('dog-widget');
      this.shadowRoot.appendChild(this.innerContainer);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'dog-widget.css';
      this.shadowRoot.appendChild(link);

      this._renderImg();
      this._renderBtn();

      this.updateDog();
    }

    _renderImg() {
      this.img = document.createElement('img');
      this.img.classList.add('dog-widget__img');
      this.img.alt = 'doggy';
      this.innerContainer.appendChild(this.img);
    }

    _renderBtn() {
      this.btn = document.createElement('button');
      this.btn.classList.add('dog-widget__btn');
      this.btn.addEventListener('click', () => this.updateDog());
      this.innerContainer.appendChild(this.btn);
      this.btn.innerText = 'New dog!';
    }

    updateDog() {
      const { width, height } = this.innerContainer.getBoundingClientRect();
      const src = `https://placedog.net/${Math.ceil(width - 10)}/${Math.ceil(height - 10)}?random=${Math.random()}`;
      this.img.src = src;
    }

    destroy() {
      this.shadowRoot.innerHTML = '';
    }
  }


  window.DogWidget = {
    init(config) {
      return new Widget(config);
    }
  }
})();
