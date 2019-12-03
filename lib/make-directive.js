import Validation from 'js-validation-serjik'
import './../style.css'
import VueHtmlValidation from './vue-html-validation'

export default class MakeDirective {
    constructor(el, bind, options, vnode) {
        this.el = el;
        this.bind = bind;
        this.options = options;
        this.vnode = vnode;
        this.vuelidate = null;
        this.rules = [];
    }

    update(el, bind, vnode) {
        this.el = el;
        this.bind = bind;
        this.vnode = vnode;
    }

    make() {
        let $this = this;
        this.label = this.vnode.data.attrs['validate-label'];

        if (this.bind.arg)
            this.rules.push(...Validation.fetchRulesOfString(this.bind.arg));

        Object.keys(this.bind.modifiers).map(key => {
            this.rules.push(key);
        });

        document.addEventListener('DOMContentLoaded', function () {
            $this.vuelidate = new VueHtmlValidation($this.el);

            // $this.vnode.context.$watch($this.bind.expression, (val) => {
            //     $this.checkValid(val);
            // });
        });
    }

    checkValid() {
        let checked_rules = this.checkRules(this.rules);
        let result = Validation.validate(this.bind.value, checked_rules, this.label, true);
        this.vuelidate.checkError(result);
    }

    checkRules(rules) {
        let $this = this;
        return rules.map(rule => {
            let regex_result = rule.match(/^confirm:\(([A-Za-z0-9.,]+)\)/);
            if (!regex_result)
                return rule;

            let confirm_param = regex_result[1];

            confirm_param = confirm_param.split(',')

            let find_data = $this.vnode.context._data;

            for (let param_key of confirm_param) {
                find_data = find_data[param_key];
            }

            rule = 'confirm:' + find_data;

            return rule;
        });
    }
}