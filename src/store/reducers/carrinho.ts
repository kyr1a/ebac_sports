// src/store/reducers/carrinho.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      if (!state.itens.find((item) => item.id === action.payload.id)) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
