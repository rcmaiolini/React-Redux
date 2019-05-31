const INITIAL_STATE = {
  description: "Ler livro",
  list: [
    {
      _id: 1,
      description: "Fazer compras",
      done: false,
      createdAt: new Date()
    },
    {
      _id: 2,
      description: "Beber 2 litros de agua",
      done: true,
      createdAt: new Date()
    },
    {
      _id: 3,
      description: "Tentar nao comer macarrao no jantar",
      done: false,
      createdAt: new Date()
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.payload }
    case "TODO_SEARCHED":
      return  { ...state, list: action.payload.data }
    default:
      return state
  }
}