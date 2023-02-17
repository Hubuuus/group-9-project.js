function namesGenres(ids, map) {
    let result = [];
    // (ids || []).forEach(id => {
    (ids).forEach(id => {
      let genre = map.find(item => item.id === id).name;
      console.log('find:', genre);
      if (genre !== undefined) {
        result.push(genre);
      }
    });
    console.log('result:', result)
    return result;
  }
  
  export {namesGenres};