omnibus: sources/*.reascale
	python3 convert.py --omnibus-js=omnibus.js --omnibus-json=omnibus.json $^
