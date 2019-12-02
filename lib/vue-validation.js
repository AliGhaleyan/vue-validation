import MakeDirective from './make-directive'

export default class VueValidation {
    static makeDirective(el, bind, options, vnode) {
        return new MakeDirective(el, bind, options, vnode);
    }
}