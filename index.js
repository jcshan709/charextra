"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var chalk = require("chalk");
var charextra = /** @class */ (function () {
    function charextra() {
        this.sqrt = '√';
        this.check = chalk(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{green ", "}"], ["{green ", "}"])), this.sqrt);
        this.X = chalk(templateObject_2 || (templateObject_2 = __makeTemplateObject(["{red X}"], ["{red X}"])));
        this.failed = this.X;
        this.invaild = this.X;
        this.happy = ':-)';
        this.sad = ':-(';
        this.laugh = ':-D';
        this.fatal = chalk(templateObject_3 || (templateObject_3 = __makeTemplateObject(["{red {bold FATAL}}"], ["{red {bold FATAL}}"])));
        this.error = chalk(templateObject_4 || (templateObject_4 = __makeTemplateObject(["{red ERROR}"], ["{red ERROR}"])));
        this.warn = chalk(templateObject_5 || (templateObject_5 = __makeTemplateObject(["{yellow WARN}"], ["{yellow WARN}"])));
        this.info = chalk(templateObject_6 || (templateObject_6 = __makeTemplateObject(["{green INFO}"], ["{green INFO}"])));
        this.copyright = '©';
        this.registry = '®';
        this.block = '█';
        this.square = '■';
        this.square_without_filling = '□';
        this.swf = this.square_without_filling;
        this.TM = '™';
        this.sum = '∑';
        this.delta = '∆';
        this.le = '≤';
        this.ge = '≥';
        this.infinity = '∞';
        this.alpha = 'α';
        this.beta = 'β';
        this.gamma = 'γ';
    }
    return charextra;
}());
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
module.exports = new charextra();
