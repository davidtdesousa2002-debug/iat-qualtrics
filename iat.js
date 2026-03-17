define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();

	return iatExtension({ attribute1 : {
    name : 'Positivo',
    title : {
        media : {word : 'Positivo'},
        css : {color:'#0000FF','font-size':'1.8em'},
        height : 4
    },
    stimulusMedia : [
        {word : 'Alegria'},
        {word : 'Amor'},
        {word : 'Feliz'},
        {word : 'Bom'}
    ]
},

attribute2 : {
    name : 'Negativo',
    title : {
        media : {word : 'Negativo'},
        css : {color:'#FF0000','font-size':'1.8em'},
        height : 4
    },
    stimulusMedia : [
        {word : 'Dor'},
        {word : 'Ódio'},
        {word : 'Triste'},
        {word : 'Ruim'}
    ]
},
		practiceCategory1 : 
			{
				name : 'Mamíferos',
				title : {
					media : {word : 'Mamíferos'},
					css : {color:'#31b404','font-size':'1.8em'},
					height : 4,
					startStimulus : { 
						media : {word : 'Cachorros, Cavalos, Vacas, Leões'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [
					{word : 'Xicaras'}, 
					{word : 'Ratos'}, 
					{word : 'Leões'}, 
					{word : 'Vacas'}
				], 
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},	
			practiceCategory2 : 
			{
				name : 'Aves', 
				title : {
					media : {word : 'Aves'}, 
					css : {color:'#31b404','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Pombos, Cisnes, Corvos, Gralhas'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [
					{word : 'Pombos'}, 
					{word : 'Cisnes'}, 
					{word : 'Corvos'}, 
					{word : 'Gralhas'}
				], 
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			categories : [
				{
					name : 'Pessoas Negras',
					title : {
						media : {word : 'Pessoas Negras'},
						css : {color:'#31b404','font-size':'1.8em'},
						height : 4,
						startStimulus : { 
							media : {image : 'blacks.jpg'}, 
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [
						{image : 'black1.jpg'}, 
						{image : 'black2.jpg'}, 
						{image : 'black3.jpg'}, 
						{image : 'black4.jpg'}, 
						{image : 'black5.jpg'}, 
						{image : 'black6.jpg'}
					], 
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},	
				{
					name : 'Pessoas Brancas', 
					title : {
						media : {word : 'Pessoas Brancas'}, 
						css : {color:'#31b404','font-size':'1.8em'}, 
						height : 4,
						startStimulus : {
							media : {image : 'whites.jpg'},  
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [
						{image : 'yf1.jpg'}, 
						{image : 'yf4.jpg'}, 
						{image : 'yf5.jpg'}, 
						{image : 'ym2.jpg'}, 
						{image : 'ym3.jpg'}, 
						{image : 'ym5.jpg'}
					], 
					stimulusCss : {color:'#31b404','font-size':'2em'}
				}
			],
			base_url : {
				image : 'https://baranan.github.io/minno-tasks/images/'
			},
			taskName: 'BIAT_Racismo_PT'
	});
});
