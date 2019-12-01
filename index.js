import Validation from 'js-validation-serjik'
import './style.css'
import VueHtmlValidation from './vue-html-validation'

const vueValidation = {
    install(Vue, Options) {

        /**
         * make validate directive
         */
        Vue.directive('validate', {
            bind(el, bind) {
                console.log(el, bind);
                let rules = [];
                if (bind.arg)
                    rules.push(...Validation.fetchRulesOfString(bind.arg));

                Object.keys(bind.modifiers).map(key => {
                    rules.push(key);
                });

                document.addEventListener('DOMContentLoaded',function () {
                    let label = bind.value || false;
                    let vuelidate = new VueHtmlValidation(el);
                    let result;
                    el.onkeyup = function () {
                        result = Validation.validate(this.value, rules, label, true);

                        vuelidate.checkError(result);
                    };
                });




                // let result =
                // let result_validate = Validation.validate();
                // ValidationHtmlHelper.createMessageElement();
                // console.log(bind);
                // console.log(el, bind, 'v-validate :)');
                // console.log(bind.expression);
                // console.log(el.);
            }
        });

    },
};

export default vueValidation;