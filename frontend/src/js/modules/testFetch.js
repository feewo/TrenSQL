    // fetch('https://gateway.marvel.com:443/v1/public/characters/123?apikey=0ac65f258569241dac3b1e98005fb6e5')
    //     // в начале приходит объект с данными в формате .json. 

    //     // response - это ответ, который мы получили от сервера
    //     .then(response => {
    //         // формат .json выглядит вот так
    //         // {
    //         //     "squadName": "Super hero squad",
    //         //     "homeTown": "Metro City",
    //         //     "formed": 2016,
    //         //     "secretBase": "Super tower",
    //         //     "active": true,
    //         // }

    //         // метод .json() преобразует данные из формата .json в обычный js-объект
    //         // то, что мы получаем
    //         // {
    //         //     squadName: "Super hero squad",
    //         //     homeTown: "Metro City",
    //         //     formed: 2016,
    //         //     secretBase: "Super tower",
    //         //     active: true,
    //         // }
    //         return response.json();
    //     })
    //     // после этого обрабатываем эти данные
    //     .then(result => console.log(result));