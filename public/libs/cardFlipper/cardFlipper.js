export default class CardFlipper {

    constructor(object) {
        this.object = object;
        this.maxTilt = 30;
        this.selector = '.card_flipper';

        if (this.object.maxTilt) {
            this.maxTilt = this.object.maxTilt;
        }

        if (this.object.selector) {
            this.selector = this.object.selector;
        }

        this.setCardListeners();
    }

    setCardListeners() {

        let environments = this.environmentSetUp();
        for (const environment of environments) {
            let elem = environment.elem;
            let wrapper = environment.wrapper;

            elem.addEventListener('mousemove', evt => {
                let bounding = this.mouseOverBoundingElem(evt);

                let posX = bounding.width / 2 - bounding.x;
                let posY = bounding.height / 2 - bounding.y;
                let hypotenuseCursor = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
                let hypotenuseMax = Math.sqrt(Math.pow(bounding.width / 2, 2) + Math.pow(bounding.height / 2, 2));
                let ratio = hypotenuseCursor / hypotenuseMax;

                wrapper.setAttribute("style", `
                    transform: rotate3d(${posY / hypotenuseCursor}, ${-posX / hypotenuseCursor}, 0, ${ratio * this.maxTilt}deg);
                    filter: brightness(${1.6 - bounding.y / bounding.height});
                    z-index: 12;
                `);
                // $(".gloss", this).css({
                //     transform: `translateX(${posX * ratio * 0.75}px) translateY(${posY * ratio}px)` // 0.75 = offset
                // });
            });
            elem.addEventListener('mousemove', evt => {
                let bounding = this.mouseOverBoundingElem(evt);

                let posX = bounding.width / 2 - bounding.x;
                let posY = bounding.height / 2 - bounding.y;
                let hypotenuseCursor = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
                let hypotenuseMax = Math.sqrt(Math.pow(bounding.width / 2, 2) + Math.pow(bounding.height / 2, 2));
                let ratio = hypotenuseCursor / hypotenuseMax;

                wrapper.setAttribute("style", `
                    transform: rotate3d(${posY / hypotenuseCursor}, ${-posX / hypotenuseCursor}, 0, ${ratio * this.maxTilt}deg);
                    filter: brightness(${1.6 - bounding.y / bounding.height});
                    z-index: 12;
                `);
                // $(".gloss", this).css({
                //     transform: `translateX(${posX * ratio * 0.75}px) translateY(${posY * ratio}px)` // 0.75 = offset
                // });
            })
            elem.addEventListener('mouseleave', evt => {
                let css = `transform: none; filter: none; z-index: 0;`
                wrapper.setAttribute("style", css);
            });
        }
    }

    environmentSetUp() {
        let elem_list = document.querySelectorAll(this.selector);
        let blocks_list = [];
        for (const elem of elem_list) {
            let block = {};
            elem.classList.add("card_flipper-item");
            elem.setAttribute('style', `
                    perspective: 1000px;
                    transition: transform 0.35s;
                `);
            let wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'card_flipper__cover');
            wrapper.setAttribute('style', `
                    perspective-origin: 50% 50%;
                    transform-style: preserve-3d;
                    transform-origin: center;
                    will-change: transform;
                `);

            elem.parentNode.insertBefore(wrapper, elem);
            wrapper.appendChild(elem);

            block.elem = elem;
            block.wrapper = wrapper;
            blocks_list.push(block);
        }

        return blocks_list;
    }

    mouseOverBoundingElem(evt) {
        let bounding = evt.target.getBoundingClientRect();
        let x = evt.clientX - Math.round(bounding.left);
        let y = evt.clientY - Math.round(bounding.top);

        return {
            x: Math.max(0, x),
            y: Math.max(0, y),
            width: Math.round(bounding.width),
            height: Math.round(bounding.height)
        };
    }


}