function search_soccer() {
        
    const List = document.getElementById("list");
    
    while (List.firstChild) {
        List.removeChild(List.firstChild);
    }

    var paths = [];

    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();

    if(input === '') {
        data.map(e => {
            paths.push(e.path);
        })
    }
    else {
        data.map(e => {
                e.tags.forEach(tag => {
                    if(tag.indexOf(input) >= 0)
                    {
                        paths.push(e.path);
                    }
                })
            })
    }
    
    paths.forEach(path => {
        var img = document.createElement('IMG');
        img.src = path;
        img.className = "img";
        document.getElementById('list').appendChild(img);
    })

}