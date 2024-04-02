import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  value: 0,
  users: []
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // пример с данными
    setValue: (state, action) => {
      state.value = action.payload;
    },
    addUser: (state, action) => {
        state.users = action.payload;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { increment, decrement, setValue,addUser} = counterSlice.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default counterSlice.reducer;