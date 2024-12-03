import React from 'react'


const Home = () => {
  const produtos = () => [
    {
       id: 1, 
       name: 'Calça Moletom Slim Mescla',
       preco: "R$ 169,90", 
       image: 'https://trackfield.vtexassets.com/arquivos/ids/249681/calca-masculina-slim-mescla-medio-para-o-dia-a-dia-frente.jpg?v=637993125158400000'
    },
    {
       id: 2, 
       nome: 'Camisa Casual Manga curta',
       preco: "R$ 199,90",
       image: 'https://cdn.leonardo.ai/users/b768c6e6-ace4-4d0e-b7a7-48496f0ea4ac/generations/dd40bfc6-0120-467d-b070-fe9584fbce44/Leonardo_Phoenix_A_young_adult_male_approximately_23_years_old_3.jpg?w=512'
      },
      {
       id: 3, 
       name: 'Sapato de couro masculino',
       preco: "R$ 299,90",
       image: 'https://davyjones.com.br/wp-content/uploads/2024/09/2602-regata-cavada-branco-davy-jones-1.jpg'
      },
      {
        id: 4, 
        name: 'Calça Jeans Slim',
        preco: "R$ 199,90",
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTwQ0q6odKtXWTGF1gvHZBES7qjWhAHyCfRltRw-yAvHFIAciUVRhnreJX-UMzT2nlMb545zpNi6y3QXCvuiN6-6CGmSY81Phk4FqZ2PNwC&usqp=CAE'
        }
    ];

    return (
        <div className="home">
          <header className="navbar">
            <h1>Luxury</h1>
            <nav>
              <a href="#categorias">Categorias</a>
              <a href="#cadastro">Cadastro</a>
              <a href="#carrinho">Carrinho</a>
            </nav>
          </header>
    
          <section className="produtos">
            {produtos.map((produto) => (
              <div className="produto" key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p>{produto.preco}</p>
                <button>Comprar</button>
              </div>
            ))}
          </section>
        </div>
      );
    };
export default Home;