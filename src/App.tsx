import { GlobalStyle } from './styles'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { useAppSelector } from './store/hooks'
import { useGetProdutosQuery } from './services/produtoApi'

function App() {
  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  const favoritos = useAppSelector((state) => state.favoritos)
  const carrinho = useAppSelector((state) => state.carrinho)

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  if (error || !produtos) {
    return <p>Erro ao carregar produtos.</p>
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho.itens} />
        <Produtos />
      </div>
    </>
  )
}

export default App
