define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/qiat6.js'], function(APIConstructor, iatExtension){

var API = new APIConstructor();

return iatExtension({

    practiceCategory1 : {
        name : 'Pessoas Negras',
        title : {
            media : {word : 'Pessoas Negras'},
            css : {color:'#31b404','font-size':'1.8em'},
            height : 4
        },
        stimulusMedia : [
            {word : 'Exemplo 1'},
            {word : 'Exemplo 2'}
        ],
        stimulusCss : {color:'#31b404','font-size':'2em'}
    },

    practiceCategory2 : {
        name : 'Pessoas Brancas',
        title : {
            media : {word : 'Pessoas Brancas'},
            css : {color:'#31b404','font-size':'1.8em'},
            height : 4
        },
        stimulusMedia : [
            {word : 'Exemplo 3'},
            {word : 'Exemplo 4'}
        ],
        stimulusCss : {color:'#31b404','font-size':'2em'}
    },

    categories : [
        {
            name : 'Pessoas Negras',
            title : {
                media : {word : 'Pessoas Negras'},
                css : {color:'#31b404','font-size':'1.8em'},
                height : 4
            },
            stimulusMedia : [
                {word : 'Exemplo 1'},
                {word : 'Exemplo 2'}
            ],
            stimulusCss : {color:'#31b404','font-size':'2em'}
        },
        {
            name : 'Pessoas Brancas',
            title : {
                media : {word : 'Pessoas Brancas'},
                css : {color:'#31b404','font-size':'1.8em'},
                height : 4
            },
            stimulusMedia : [
                {word : 'Exemplo 3'},
                {word : 'Exemplo 4'}
            ],
            stimulusCss : {color:'#31b404','font-size':'2em'}
        }
    ],

    attribute1 : {
        name : 'Agradável',
        title : {
            media : {word : 'Agradável'},
            css : {color:'#0000FF','font-size':'1.8em'},
            height : 4
        },
        stimulusMedia : [
            {word : 'Alegria'},
            {word : 'Amor'},
            {word : 'Feliz'},
            {word : 'Prazer'},
            {word : 'Bom'}
        ],
        stimulusCss : {color:'#0000FF','font-size':'2em'}
    },

    attribute2 : {
        name : 'Desagradável',
        title : {
            media : {word : 'Desagradável'},
            css : {color:'#0000FF','font-size':'1.8em'},
            height : 4
        },
        stimulusMedia : [
            {word : 'Ódio'},
            {word : 'Dor'},
            {word : 'Triste'},
            {word : 'Ruim'},
            {word : 'Terrível'}
        ],
        stimulusCss : {color:'#0000FF','font-size':'2em'}
    },

    base_url : {
        image : ''
    }

});
});
