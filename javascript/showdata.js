
async function getData(url) {

    let res = await fetch(url)

    let data = await res.json()

    // console.log(data.meals, 'fsdfsd')

    return data.meals;
};




function append(data, container) {
    // console.log(data)


    data.forEach(({ strMeal, strMealThumb }) => {

        let div = document.createElement("div")

        let p = document.createElement("h1")
        p.innerText = strMeal;

        let img = document.createElement("img")
        img.src = strMealThumb

        div.append(img, p);

        container.append(div);

    });
}

export { getData, append }