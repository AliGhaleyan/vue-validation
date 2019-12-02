import VueValidation from './lib/vue-validation'

const vueValidation = {
    install(Vue, options) {

        /**
         * make validate directive
         */
        Vue.directive('validate', {
            bind(el, bind, vnode) {
                let directive = VueValidation.makeDirective(el, bind, options, vnode);
                directive.make();
            }
        });

    },
};

export default vueValidation;