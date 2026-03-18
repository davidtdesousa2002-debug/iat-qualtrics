define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){

return iatExtension({

    category1 : {
        name : 'Bom',
        title : { media : { word : 'Bom' } },
        stimulusMedia : [
            {word: 'Alegria'},
            {word: 'Amor'},
            {word: 'Paz'},
            {word: 'Prazer'}
        ]
    },

    category2 : {
        name : 'Ruim',
        title : { media : { word : 'Ruim' } },
        stimulusMedia : [
            {word: 'Ódio'},
            {word: 'Dor'},
            {word: 'Tristeza'},
            {word: 'Raiva'}
        ]
    },

    attribute1 : {
        name : 'Preto',
        title : { media : { word : 'Preto' } },
        stimulusMedia : [
            {word: 'Negro'},
            {word: 'Escuro'}
        ]
    },

    attribute2 : {
        name : 'Branco',
        title : { media : { word : 'Branco' } },
        stimulusMedia : [
            {word: 'Claro'},
            {word: 'Pálido'}
        ]
    },

    base_url : {
        image : ''
    }

});
});
