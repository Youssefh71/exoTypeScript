"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, code) {
        this.name = name;
        this.code = code;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (input) {
        return this.code === input;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
