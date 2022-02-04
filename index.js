function myEach(collection, iteratee) {
    const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

    for (let idx = 0; idx < newCollection.length; idx++)
      iteratee(newCollection[idx])
    
    return collection 
  }