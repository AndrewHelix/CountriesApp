export const selectCountiesInfo = (state) => ({
  state: state.counties.status,
  error: state.countries.error,
  qty: state.counties.list.length,
})

export const selectAllCountries = (state) => state.countries.list