// import React, { useContext } from 'react';

// import { render } from '@testing-library/react';
// import Favorites from './Favorites.page';
// import FavoritesProvider from '../../providers/Favorites';
// import FavoritesReducer from '../../providers/Favorites/Favorites.reducer';

// jest.mock(
//   '../../providers/Favorites/Favorites.reducer',
//   (state, action = { type: 'LOAD_FROM_STORAGE' }) => {
//     switch (action.type) {
//       case 'LOAD_FROM_STORAGE': {
//         return {
//           ...state,
//           favorites: [],
//         };
//       }
//       case 'CLEAR_FAVORITES': {
//         return {
//           ...state,
//           favorites: [],
//         };
//       }
//       default:
//         return state;
//     }
//   }
// );

// describe('render the favorites page', () => {
//   beforeEach(() => {
//     const spy = jest.spyOn(useContext);
//     spy.mockReturnValue({
//       state: {
//         favorites: [],
//       },
//       dispatch: FavoritesReducer(),
//     });
//   });

//   it('renders the page', () => {
//     const { container } = render(
//       <FavoritesProvider.Provider value={{ favorites: [] }}>
//         <Favorites />
//       </FavoritesProvider.Provider>
//     );
//     expect(container).toBe();
//   });
// });
