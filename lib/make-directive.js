import Validation from 'js-validation-serjik'
import './../style.css'
import VueHtmlValidation from './vue-html-validation'

export default class MakeDirective {
    constructor(el, bind, options, vnode) {
        this.el = el;
        this.bind = bind;
        this.options = options;
        this.vnode = vnode;
    }

    make() {
        let rules = [], _this = this, result;
        let label = this.vnode.data.attrs['validate-label'];

        if (this.bind.arg)
            rules.push(...Validation.fetchRulesOfString(this.bind.arg));

        Object.keys(this.bind.modifiers).map(key => {
            rules.push(key);
        });

        document.addEventListener('DOMContentLoaded', function () {
            let vuelidate = new VueHtmlValidation(_this.el);

            _this.vnode.context.$watch(_this.bind.expression, (val) => {
                let checked_rules = _this.checkRules(rules);
                result = Validation.validate(val, checked_rules, label, true);
                vuelidate.checkError(result);
            });
        });
    }

    checkRules(rules) {
        let _this = this;
        return rules.map(rule => {
            let regex_result = rule.match(/^confirm:\(([A-Za-z0-9.,]+)\)/);
            if (!regex_result)
                return rule;

            let confirm_param = regex_result[1];

            confirm_param = confirm_param.split(',')

            let find_data = _this.vnode.context._data;

            for (let param_key of confirm_param) {
                find_data = find_data[param_key];
            }

            rule = 'confirm:' + find_data;

            return rule;
        });
    }
}