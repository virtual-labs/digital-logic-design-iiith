// this file is to be executed in the end, because the functions and variables used are declared in the library simcir files

// This D-FF-custom is made by me which has additional preset and clear feature required to make the ring counter
simcir.registerDevice('D-FF-custom',
{
	"width":520,
	"height":500,
	"devices":[
	{"type":"In","id":"dev0","x":16,"y":72,"label":"D"},
	{"type":"NAND","numInputs":3,"id":"dev1","x":80,"y":40,"label":"NAND"},
	{"type":"In","id":"dev2","x":160,"y":8,"label":"PR"},
	{"type":"NAND","numInputs":3,"id":"dev3","x":144,"y":48,"label":"NAND"},
	{"type":"NOT","id":"dev4","x":24,"y":168,"label":"NOT"},
	{"type":"NAND","numInputs":3,"id":"dev5","x":80,"y":168,"label":"NAND"},
	{"type":"NOT","id":"dev6","x":104,"y":112,"label":"NOT"},
	{"type":"NAND","numInputs":3,"id":"dev7","x":160,"y":176,"label":"NAND"},
	{"type":"NAND","id":"dev8","x":224,"y":176,"label":"NAND"},
	{"type":"NAND","id":"dev9","x":224,"y":48,"label":"NAND"},
	{"type":"NAND","numInputs":3,"id":"dev10","x":296,"y":176,"label":"NAND"},
	{"type":"Out","id":"dev11","x":344,"y":136,"label":"Out"},
	{"type":"Out","id":"dev12","x":336,"y":80,"label":"Out"},
	{"type":"NAND","numInputs":3,"id":"dev13","x":288,"y":56,"label":"NAND"},
	{"type":"In","id":"dev14","x":120,"y":208,"label":"CLR"},
	{"type":"In","id":"dev15","x":16,"y":120,"label":"Clk"}
	],
	"connectors":[
	{"from":"dev1.in0","to":"dev14.out0"},
	{"from":"dev1.in1","to":"dev0.out0"},
	{"from":"dev1.in2","to":"dev15.out0"},
	{"from":"dev3.in0","to":"dev2.out0"},
	{"from":"dev3.in1","to":"dev1.out0"},
	{"from":"dev3.in2","to":"dev7.out0"},
	{"from":"dev4.in0","to":"dev0.out0"},
	{"from":"dev5.in0","to":"dev15.out0"},
	{"from":"dev5.in1","to":"dev4.out0"},
	{"from":"dev5.in2","to":"dev2.out0"},
	{"from":"dev6.in0","to":"dev15.out0"},
	{"from":"dev7.in0","to":"dev3.out0"},
	{"from":"dev7.in1","to":"dev5.out0"},
	{"from":"dev7.in2","to":"dev14.out0"},
	{"from":"dev8.in0","to":"dev6.out0"},
	{"from":"dev8.in1","to":"dev7.out0"},
	{"from":"dev9.in0","to":"dev3.out0"},
	{"from":"dev9.in1","to":"dev6.out0"},
	{"from":"dev10.in0","to":"dev13.out0"},
	{"from":"dev10.in1","to":"dev8.out0"},
	{"from":"dev10.in2","to":"dev14.out0"},
	{"from":"dev11.in0","to":"dev10.out0"},
	{"from":"dev12.in0","to":"dev13.out0"},
	{"from":"dev13.in0","to":"dev2.out0"},
	{"from":"dev13.in1","to":"dev9.out0"},
	{"from":"dev13.in2","to":"dev10.out0"}
	]
}
);


// the 8bit ring counter made by me
simcir.registerDevice('8BitRingCounter',
{
	"width":520,
	"height":600,
	"devices":[
    {"type":"In","id":"dev10","x":136,"y":16,"label":"ORI"},
    {"type":"In","id":"dev12","x":96,"y":72,"label":"1 only"},
    {"type":"In","id":"dev14","x":48,"y":88,"label":"Clk"},
    {"type":"D-FF-custom","id":"dev0","x":216,"y":8,"label":"D-FF-custom"},
    {"type":"D-FF-custom","id":"dev1","x":216,"y":88,"label":"D-FF-custom"},
    {"type":"D-FF-custom","id":"dev2","x":216,"y":168,"label":"D-FF-custom"},
    {"type":"D-FF-custom","id":"dev3","x":216,"y":248,"label":"D-FF-custom"},
    {"type":"D-FF-custom","id":"dev16","x":208,"y":416,"label":"D-FF-custom"},
    {"type":"D-FF-custom","id":"dev17","x":216,"y":328,"label":"D-FF-custom"},
    {"type":"D-FF-custom","id":"dev18","x":128,"y":416,"label":"D-FF-custom"},
    {"type":"D-FF-custom","id":"dev19","x":48,"y":416,"label":"D-FF-custom"},    
    {"type":"Out","id":"dev9","x":296,"y":24,"label":"D0"},
    {"type":"Out","id":"dev8","x":296,"y":104,"label":"D1"},
    {"type":"Out","id":"dev4","x":296,"y":184,"label":"D2"},
    {"type":"Out","id":"dev7","x":296,"y":264,"label":"D3"},
    {"type":"Out","id":"dev6","x":296,"y":352,"label":"D4"},
    {"type":"Out","id":"dev5","x":296,"y":408,"label":"D5"},
    {"type":"Out","id":"dev21","x":296,"y":472,"label":"D6"},
    {"type":"Out","id":"dev20","x":296,"y":528,"label":"D7"},
    {"type":"Toggle","id":"dev11","x":80,"y":16,"label":"Toggle","state":{"on":true}},
    {"type":"DC","id":"dev13","x":16,"y":24,"label":"DC"},
    {"type":"OSC","id":"dev15","x":0,"y":88,"label":"OSC"}
    ],
    "connectors":[
    {"from":"dev0.in0","to":"dev19.out0"},
    {"from":"dev0.in1","to":"dev14.out0"},
    {"from":"dev0.in2","to":"dev12.out0"},
    {"from":"dev0.in3","to":"dev10.out0"},
    {"from":"dev1.in0","to":"dev0.out0"},
    {"from":"dev1.in1","to":"dev14.out0"},
    {"from":"dev1.in2","to":"dev10.out0"},
    {"from":"dev1.in3","to":"dev12.out0"},
    {"from":"dev2.in0","to":"dev1.out0"},
    {"from":"dev2.in1","to":"dev14.out0"},
    {"from":"dev2.in2","to":"dev10.out0"},
    {"from":"dev2.in3","to":"dev12.out0"},
    {"from":"dev3.in0","to":"dev2.out0"},
    {"from":"dev3.in1","to":"dev14.out0"},
    {"from":"dev3.in2","to":"dev10.out0"},
    {"from":"dev3.in3","to":"dev12.out0"},
    {"from":"dev4.in0","to":"dev2.out0"},
    {"from":"dev5.in0","to":"dev16.out0"},
    {"from":"dev6.in0","to":"dev17.out0"},
    {"from":"dev7.in0","to":"dev3.out0"},
    {"from":"dev8.in0","to":"dev1.out0"},
    {"from":"dev9.in0","to":"dev0.out0"},
    {"from":"dev10.in0","to":"dev11.out0"},
    {"from":"dev11.in0","to":"dev13.out0"},
    {"from":"dev12.in0","to":"dev13.out0"},
    {"from":"dev14.in0","to":"dev15.out0"},
    {"from":"dev16.in0","to":"dev17.out0"},
    {"from":"dev16.in1","to":"dev14.out0"},
    {"from":"dev16.in2","to":"dev10.out0"},
    {"from":"dev16.in3","to":"dev12.out0"},
    {"from":"dev17.in0","to":"dev3.out0"},
    {"from":"dev17.in1","to":"dev14.out0"},
    {"from":"dev17.in2","to":"dev10.out0"},
    {"from":"dev17.in3","to":"dev12.out0"},
    {"from":"dev18.in0","to":"dev16.out0"},
    {"from":"dev18.in1","to":"dev14.out0"},
    {"from":"dev18.in2","to":"dev10.out0"},
    {"from":"dev18.in3","to":"dev12.out0"},
    {"from":"dev19.in0","to":"dev18.out0"},
    {"from":"dev19.in1","to":"dev14.out0"},
    {"from":"dev19.in2","to":"dev10.out0"},
    {"from":"dev19.in3","to":"dev12.out0"},
    {"from":"dev20.in0","to":"dev19.out0"},
    {"from":"dev21.in0","to":"dev18.out0"}
    ]
}
);

