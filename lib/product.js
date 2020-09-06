'use strict';

function objectValues(object) {
	return Object.keys(object).map(function transformer(key) {
		return object[key];
	});
}

function productOfObject(elements) {
	var keys = Object.keys(elements);
	var values = objectValues(elements);

	// eslint-disable-next-line no-use-before-define
	return product(values).map(function transformer(values) {
		return values.reduce(function reducer(state, value, index) {
			state[keys[index]] = value;
			return state;
		}, {});
	});
}

function product(elements) {
	if (!Array.isArray(elements)) {
		if (typeof elements === 'object') {
			return productOfObject(elements);
		} else {
			throw new TypeError();
		}
	}

	var end = elements.length - 1,
		result = [];

	function addTo(curr, start) {
		var first = elements[start],
			last = start === end;

		for (var i = 0; i < first.length; ++i) {
			var copy = curr.slice();
			copy.push(first[i]);

			if (last) {
				result.push(copy);
			} else {
				addTo(copy, start + 1);
			}
		}
	}

	if (elements.length) {
		addTo([], 0);
	} else {
		result.push([]);
	}
	return result;
}

module.exports = product;
