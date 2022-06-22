var container = document.createElement('div')
container.className = 'container'
document.body.appendChild(container)

var title = document.createElement('h1')
title.className = 'display-1 text-center my-5'
title.textContent = 'Pokemons'
container.appendChild(title)

var row = document.createElement('div')
row.className = 'row flex-wrap justify-content-center block'
container.appendChild(row)

function pokemon(){
    for(let i=0; i<pokemons.length; i++){
        let card = document.createElement('div')
        card.className = 'col-md-3 p-3 card'
        row.appendChild(card)

        let card_block = document.createElement('div')
        card_block.className = 'card_img'
        card.appendChild(card_block)

        let img = document.createElement('img')
        img.setAttribute('src', pokemons[i].img)
        img.setAttribute('alt', pokemons[i].name)
        card_block.appendChild(img)

        let name = document.createElement('h3')
        name.className = 'title'
        name.textContent = pokemons[i].name
        card.appendChild(name)

        let id = document.createElement('p')
        id.className = 'description_id'
        id.innerHTML = `Id: ${pokemons[i].id}`;
        card.appendChild(id)

        let number = document.createElement('p')
        number.className = 'decription'
        number.innerHTML = `<span>Number: </span> ${pokemons[i].num}`
        card.appendChild(number)

        let type = document.createElement('p')
        type.className = 'decription'
        type.innerHTML = `<span>Type: </span> ${pokemons[i].type}`
        card.appendChild(type)

        let height = document.createElement('p')
        height.className = 'decription'
        height.innerHTML = `<span>Height: </span> ${pokemons[i].height}`
        card.appendChild(height)

        let weight = document.createElement('p')
        weight.className = 'decription'
        weight.innerHTML = `<span>Weight: </span> ${pokemons[i].weight}`
        card.appendChild(weight)

        let candy = document.createElement('p')
        candy.className = 'decription'
        candy.innerHTML = `<span>Candy: </span> ${pokemons[i].candy}`
        card.appendChild(candy)

        let candy_count = document.createElement('p')
        candy_count.className = 'decription'
        candy_count.innerHTML = `<span>Candy_count: </span> ${pokemons[i].candy_count}`
        card.appendChild(candy_count)

        let egg = document.createElement('p')
        egg.className = 'decription'
        egg.innerHTML = `<span>Egg: </span> ${pokemons[i].egg}`
        card.appendChild(egg)

        let spawn_chance = document.createElement('p')
        spawn_chance.className = 'decription'
        spawn_chance.innerHTML = `<span>Spawn_chance: </span> ${pokemons[i].spawn_chance}`
        card.appendChild(spawn_chance)

        let avg_spawns = document.createElement('p')
        avg_spawns.className = 'decription'
        avg_spawns.innerHTML = `<span>Avg_spawns: </span> ${pokemons[i].avg_spawns}`
        card.appendChild(avg_spawns)

        let spawn_time = document.createElement('p')
        spawn_time.className = 'decription'
        spawn_time.innerHTML = `<span>Spawn_time: </span> ${pokemons[i].spawn_time}`
        card.appendChild(spawn_time)

        let multipliers = document.createElement('p')
        multipliers.className = 'decription'
        multipliers.innerHTML = `<span>Multipliers: </span> ${pokemons[i].multipliers}`
        card.appendChild(multipliers)

        let weaknesses = document.createElement('p')
        weaknesses.className = 'decription weaknesses'
        weaknesses.innerHTML = `<span>Weaknesses: </span> ${pokemons[i].weaknesses}`
        card.appendChild(weaknesses)

        let accordion = document.createElement('div')
        accordion.className = 'accordion-item'
        card.appendChild(accordion)

        let accordion_header = document.createElement('h2')
        accordion_header.className = 'accordion-header'
        accordion_header.id = 'headingOne'
        accordion.appendChild(accordion_header)

        let btn = document.createElement('button')
        btn.className = 'accordion-button accordion collapsed'
        btn.setAttribute('type', 'button')
        btn.setAttribute('data-bs-toggle', 'collapse')
        btn.setAttribute('data-bs-target', `#collapseOne_${pokemons[i].id}`)
        btn.setAttribute('aria-expanded', 'false')
        btn.setAttribute('aria-controls', `collapseOne_${pokemons[i].id}`)
        btn.textContent = 'Next Evolution:'
        accordion_header.appendChild(btn)
        
        let collapseAcc = document.createElement('div')
        collapseAcc.className = 'accordion-collapse collapse'
        collapseAcc.id = `collapseOne_${pokemons[i].id}`
        collapseAcc.setAttribute('aria-labelledby', 'headingOne')
        collapseAcc.setAttribute('data-bs-parent', '#accordionExample')
        accordion.appendChild(collapseAcc)

        let accordion_body = document.createElement('div')
        accordion_body.className = 'accordion-body'
        collapseAcc.appendChild(accordion_body)

        let nextNum = document.createElement('p')
        nextNum.className = 'nextnum'
        nextNum.innerHTML = `<span>Next Number: </span>${pokemons[i].next_evolution[0].num}`
        accordion_body.appendChild(nextNum)

        let nextName = document.createElement('p')
        nextName.innerHTML = `<span>Next Name: </span>${pokemons[i].next_evolution[0].name}`
        accordion_body.appendChild(nextName)

        let nextNum2 = document.createElement('p')
        nextNum2.className = 'nextnum'
        nextNum2.innerHTML = `<span>Prev Number: </span>${pokemons[i].next_evolution[1].num}`
        accordion_body.appendChild(nextNum2)

        let nextName2 = document.createElement('p')
        nextName2.innerHTML = `<span>Prev Name: </span>${pokemons[i].next_evolution[1].name}`
        accordion_body.appendChild(nextName2)
    }
}


pokemon()

{/* <div class="col-md-3 p-3 card">
                
                <div class="card_img">
                    <img src="http://www.serebii.net/pokemongo/pokemon/001.png" alt="">
                </div>

                <p class="decription">'Fire', 'Ice', 'Flying', 'Psychic'</p>

                <div class="accordion-item">

                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button accordion" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        next_evolution:
                      </button>
                    </h2>

                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        num: '002',
				        name: 'Ivysaur',
                        num: '002',
				        name: 'Ivysaur',
                      </div>
                    </div>

                  </div>
            </div> */}