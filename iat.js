define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();

 return iatExtension({

    practiceCategory1 : {
        name : 'Mamíferos',
        title : {
            media : {word : 'Mamíferos'},
            css : {color:'#31b404','font-size':'1.8em'},
            height : 4,
            startStimulus : {
                media : {word : 'Cachorro, Cavalo, Leão, Vaca'},
                css : {color:'#31b404','font-size':'1em'},
                height : 2
            }
        },
        stimulusMedia : [
            {word : 'Cachorro'},
            {word : 'Cavalo'},
            {word : 'Leão'},
            {word : 'Vaca'}
        ],
        stimulusCss : {color:'#31b404','font-size':'2em'}
    },

    practiceCategory2 : {
        name : 'Aves',
        title : {
            media : {word : 'Aves'},
            css : {color:'#31b404','font-size':'1.8em'},
            height : 4,
            startStimulus : {
                media : {word : 'Pombo, Cisne, Corvo, Águia'},
                css : {color:'#31b404','font-size':'1em'},
                height : 2
            }
        },
        stimulusMedia : [
            {word : 'Pombo'},
            {word : 'Cisne'},
            {word : 'Corvo'},
            {word : 'Águia'}
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
                {image : 'black1.jpg'},
                {image : 'black2.jpg'},
                {image : 'black3.jpg'}
            ],
            stimulusCss : {height:'150px'}
        },
        {
            name : 'Pessoas Brancas',
            title : {
                media : {word : 'Pessoas Brancas'},
                css : {color:'#31b404','font-size':'1.8em'},
                height : 4
            },
            stimulusMedia : [
                {image : 'white1.jpg'},
                {image : 'white2.jpg'},
                {image : 'white3.jpg'}
            ],
            stimulusCss : {height:'150px'}
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
            {word : 'Paz'}
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
            {word : 'Tristeza'}
        ],
        stimulusCss : {color:'#0000FF','font-size':'2em'}
    },

    base_url : {
        image : 'https://baranan.github.io/minno-tasks/images/'
    }

 });
});
