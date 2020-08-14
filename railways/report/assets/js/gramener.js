(function (
	$map,
	$select,
	$data,
	$notes,
	$invert,
	$heading,
	$save,
	$url,
	$err,
	$lo,
	$md,
	$hi
) {
	/*
Usage: gradient(0.4, ((-1, '#ff0000'), (0, '#ffffff'), (1, '#00ff00')))
interpolates 0.4 between -1, 0, +1 and returns an in-between color
as rgb()
*/
	function _colornum(color) {
		var l = color.length;
		return [
			parseInt(color.slice(l - 6, l - 4), 16),
			parseInt(color.slice(l - 4, l - 2), 16),
			parseInt(color.slice(l - 2, l - 0), 16),
		];
	}
	function gradient(x, ranges) {
		if (x <= ranges[0][0]) {
			return ranges[0][1];
		}
		if (x >= ranges[ranges.length - 1][0]) {
			return ranges[ranges.length - 1][1];
		}
		for (var i = 0, range; (range = ranges[i]); i++) {
			var start = range[0],
				color = range[1];
			if (x < start) {
				break;
			}
		}
		var p = (x - ranges[i - 1][0]) / (ranges[i][0] - ranges[i - 1][0]);
		var a = _colornum(ranges[i - 1][1]);
		var b = _colornum(ranges[i][1]);
		return (
			"rgb(" +
			Math.round(a[0] * (1.0 - p) + b[0] * p) +
			"," +
			Math.round(a[1] * (1.0 - p) + b[1] * p) +
			"," +
			Math.round(a[2] * (1.0 - p) + b[2] * p) +
			")"
		);
	}

	var GRADIENTS = {
		increasing: [
			[0, "#ff4142"],
			[0.5, "#ffd026"],
			[1, "#aae817"],
		],
		decreasing: [
			[0, "#aae817"],
			[0.5, "#ffd026"],
			[1, "#ff4142"],
		],
	};
	var GRADIENT = GRADIENTS.increasing;
	var SEP = "\t";

	/* loadmap loads a URL into the $map iframe, and calls back with a dictionary
   of titles and elements */
	function loadmap(url, callback) {
		$map.attr("src", url).load(function () {
			var paths = {};
			$(this)
				.contents()
				.find("g")
				.each(function () {
					var folder = $(this).attr("title") || "";
					$(this)
						.find("path")
						.each(function () {
							var $this = $(this),
								file = $(this).attr("title") || "",
								key = folder + SEP + file;
							// There may be more than one element with the same key.
							// For example, Puducherry is non-contiguous.
							paths[key] =
								key in paths
									? paths[key].append(this)
									: $(this);
						});
				});
			$map.data("paths", paths);
			callback(paths);
		});
	}

	/*  Parse columns separated by sep in text into a key-value dictionary.
    The key is everything up to the last column. The value is the last column
*/
	function parse(text, sep) {
		var rows = text.split("\n");
		for (var data = {}, i = 0, l = rows.length; i < l; i++) {
			var row = rows[i].split(sep);
			value = row.pop().replace(/[^\+\-\.\d+]/g, "");
			data[row.join(sep)] = value ? +value : null;
		}
		return data;
	}

	/* Draw a key-value dictionary */
	function draw(data) {
		var paths = $map.data("paths"),
			values = $.map(data, function (v) {
				return v;
			}),
			max = Math.max.apply(Math, values),
			min = Math.min.apply(Math, values),
			gap = max - min || 1;
		for (var title in paths) {
			paths[title].attr(
				"fill",
				title in data && data[title] !== null
					? gradient((data[title] - min) / gap, GRADIENT)
					: "#ccc"
			);
		}
		$md.text((min + max) / 2);
		if (!$invert.is(":checked")) {
			$lo.text(min);
			$hi.text(max);
		} else {
			$lo.text(max);
			$hi.text(min);
		}
	}

	/* Initially fill textarea with random percentages */
	function fill_random_data(paths) {
		var data = {},
			text = [];
		for (var path in paths) {
			var value = Math.round(100 * Math.random());
			data[path] = value;
			text.push(path + SEP + value);
		}
		text.sort();
		$data.val(text.join("\n"));
		return data;
	}

	var last_text;
	var timer;
	function redraw() {
		var text = $data.val();
		if (text !== last_text) {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(function () {
				draw(parse(text, SEP));
			}, 200);
		}
	}

	// When the map changes, load it and fill some random data
	$select.change(function () {
		loadmap($select.val(), function (paths) {
			fill_random_data(paths);
			redraw();
		});
	});

	// When the text or options change, redraw
	$data.on("keyup", redraw);
	$invert.on("change", function () {
		GRADIENT = $invert.is(":checked")
			? GRADIENTS.decreasing
			: GRADIENTS.increasing;
		redraw();
	});

	// Initialise maps
	$select.trigger("change");
})(
	$("#map"),
	$("select"),
	$("#data"),
	$("#notes"),
	$("#invert"),
	$("#heading"),
	$("#save"),
	$("#url"),
	$("#err"),
	$("#lo"),
	$("#md"),
	$("#hi")
);
