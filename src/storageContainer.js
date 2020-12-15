class StorageContainer {
  key = "favorites";

  getFavorites() {
    const data = localStorage.getItem(this.key);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

  isFavorite(id) {
    const JSONed = this.getFavorites();
    console.log("lookibg", id);
    console.log("all", JSONed);
    const movie = JSONed.filter((mv) => String(mv.id) === String(id))?.[0];
    console.log("fff", movie);
    return movie && movie.id ? true : false;
  }

  setFavorites(data) {
    const JSONed = JSON.stringify(data);
    localStorage.setItem(this.key, JSONed);
  }

  addToFavorites(item) {
    const JSONed = this.getFavorites();
    let added = false;
    if (JSONed?.length) {
      let found = false;
      const resp = JSONed.filter((mv) => {
        if (mv.id !== item.id) {
          return true;
        }
        found = true;
        return false;
      });

      if (!found) {
        added = true;
        resp.push(item);
      }
      this.setFavorites(resp);
    } else {
      added = true;
      this.setFavorites([item]);
    }
    return added;
  }
}

const storageContainer = new StorageContainer();
export default storageContainer;
