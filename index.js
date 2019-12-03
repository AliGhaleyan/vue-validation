import VueValidation from './lib/vue-validation'

let directives = [], key;
const vueValidation = {
    install(Vue, options) {

        /**
         * make validate directive
         */
        Vue.directive('validate', {
            bind(el, bind, vnode) {
                let directive = VueValidation.makeDirective(el, bind, options, vnode);
                directive.make();
                directives.push(directive);
            },
            update(el, bind, vnode) {
                let directive = directives.find(item => item.el == el);
                if (! directive)
                    return ;

                directive.update(el, bind, vnode);

                directive.checkValid();
            }
        });

    },
};

export function checkAll() {
    directives.map(directive => {
        directive.checkValid();
    });
};

export default vueValidation;