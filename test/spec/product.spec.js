'use strict';

var path = require('path'),
	product = require('../../lib/product'),
	expect = require('chai').expect;

describe('#product', function () {
	describe('array input', function () {
		it('should return a nested empty array when arguments are empty', function () {
			expect(product([])).to.deep.equal([[]]);
		});

		it('should throw TypeError when not given an array', function () {
			expect(function () {
				product(false);
			}).to.throw(TypeError);
		});

		it('should return the correct product', function () {
			var result = product([
				[1, 2],
				[3, 4],
			]);
			expect(result).to.have.length(4);
			expect(result).to.deep.have.members([
				[1, 3],
				[1, 4],
				[2, 3],
				[2, 4],
			]);
		});
	});

	describe('object input', function () {
		it('should return an empty object in an array when arguments are empty', function () {
			expect(product({})).to.deep.equal([{}]);
		});

		it('should return the correct product', function () {
			var result = product({
				color: ['black', 'white'],
				pattern: ['spots', 'stripes'],
			});
			expect(result).to.have.length(4);
			expect(result).to.deep.have.members([
				{ color: 'black', pattern: 'spots' },
				{ color: 'black', pattern: 'stripes' },
				{ color: 'white', pattern: 'spots' },
				{ color: 'white', pattern: 'stripes' },
			]);
		});
	});
});
