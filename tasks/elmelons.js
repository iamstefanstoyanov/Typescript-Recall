var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, sort) {
        this.weight = weight;
        this.sort = sort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, sort) {
        return _super.call(this, weight, sort) || this;
    }
    Object.defineProperty(Watermelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.sort.length;
        },
        enumerable: false,
        configurable: true
    });
    Watermelon.prototype.toString = function () {
        console.log('Element: Water');
        console.log('Sort: ' + this.sort);
        console.log('Element Index: ' + this.elementIndex);
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, sort) {
        return _super.call(this, weight, sort) || this;
    }
    Object.defineProperty(Firemelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.sort.length;
        },
        enumerable: false,
        configurable: true
    });
    Firemelon.prototype.toString = function () {
        console.log('Element: Fire');
        console.log('Sort: ' + this.sort);
        console.log('Element Index: ' + this.elementIndex);
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, sort) {
        return _super.call(this, weight, sort) || this;
    }
    Object.defineProperty(Earthmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.sort.length;
        },
        enumerable: false,
        configurable: true
    });
    Earthmelon.prototype.toString = function () {
        console.log('Element: Earth');
        console.log('Sort: ' + this.sort);
        console.log('Element Index: ' + this.elementIndex);
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, sort) {
        return _super.call(this, weight, sort) || this;
    }
    Object.defineProperty(Airmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.sort.length;
        },
        enumerable: false,
        configurable: true
    });
    Airmelon.prototype.toString = function () {
        console.log('Element: Air');
        console.log('Sort: ' + this.sort);
        console.log('Element Index: ' + this.elementIndex);
    };
    return Airmelon;
}(Melon));
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
var firemelon = new Firemelon(4, "Small");
console.log(firemelon.toString());
var earthmelon = new Earthmelon(15, "XL");
console.log(earthmelon.toString());
var airmelon = new Airmelon(20, "XLLLL");
console.log(airmelon.toString());
