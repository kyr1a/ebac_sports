import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useGetProdutosQuery } from '../services/produtoApi'
import { adicionar } from '../store/reducers/carrinho'
import { toggleFavorito } from '../store/reducers/favoritos'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useAppDispatch()
  const favoritos = useAppSelector((state) => state.favoritos)
  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produtoId: number) => {
    return favoritos.some((p) => p.id === produtoId)
  }

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
          favoritar={() => dispatch(toggleFavorito(produto))}
          aoComprar={() => dispatch(adicionar(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
