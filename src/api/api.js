export const loadProducts = () => {
    return fetch('http://www.mocky.io/v2/5e9ebdaa2d00007800cb7697').then(res => res.json());
};