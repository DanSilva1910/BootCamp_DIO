class CardNews extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }   

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const link = document.createElement("a");
        const titulo = document.createElement("h2");
        titulo.textContent = this.getAttribute("titulo");
        link.href = this.getAttribute("link-url")
        link.appendChild(titulo);

        const texto = document.createElement("p");
        texto.textContent = this.getAttribute("conteudo")

        const rodape = document.createElement("span");
        rodape.textContent = this.getAttribute("rodape");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(texto);
        cardLeft.appendChild(rodape);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight");

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot

    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        :host {
            --background-image: url(${this.getAttribute("link-image") || "assets/imagem-defaut.png"});
        }
        .card{
            width: 40rem;
            height: 10rem;
           
        }
        .card{
            display: flex;
            justify-content: space-between;
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        }
        
        .cardLeft{
            padding: 0;
        
        }
        .cardLeft > h2{
            padding: 0;
        }
        .cardLeft > p{
            margin-bottom: .25rem;
        }
        .cardLeft > a {]
            padding = 0;
            text-decoration: none;
            color: black;
        }
        
        .cardRight{
            width: 15rem;
            height: 10rem;
            background-image: var(--background-image);
            background-size: cover;
            background-position: right;
            background-repeat: no-repeat;
        }
        
        
        ` 
        return style;
    }

}
customElements.define("card-news", CardNews)