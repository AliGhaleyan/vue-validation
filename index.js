import VueValidation from './lib/vue-validation'

let directives = [], key;
const vueValidation = {
    install(Vue, options) {
        Vue.directive('validate', {
            bind(el, bind, vnode) {
                let directive = VueValidation.makeDirective(el, bind, options, vnode);
                directive.make();
                directives.push(directive);
            },
        });
    },
};


export function checkAllValidations() {
    let fails = false, result;
    directives.map(directive => {
        result = directive.checkValid();
        if (result.fails == true)
            fails = true;
    });

    return fails;
};

export default vueValidation;