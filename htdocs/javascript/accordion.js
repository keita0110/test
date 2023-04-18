(() => {

    // クラス
    class Accordion {

        constructor(obj) {

            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }
        clickHandler = (e) => {
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            if ($content.style.display === 'block') {
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        };
    }
    // インスタンス生成
    const okAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a'
    });

    const yesAccordion = new Accordion({
        hookName: '#js-ok',
        tagName: 'a'
    });

    const noAccordion = new Accordion({
        hookName: '#js-no',
        tagName: 'dt'
    });
})();