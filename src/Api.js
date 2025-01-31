import axios from 'axios';

// Methods of this class are used to simulate calls to server.

class Api {
  sampleProducts=[];

  getDataProductAction(){
    
      axios({
        url: 'https://shoponline-5fa44.firebaseio.com/Product.json',
        method: 'GET'
      }).then(result => { 
        this.sampleProducts = [];
        result.data.map((item)=>{
          this.sampleProducts.push(item);
        });
      }).catch(erorr => {
        console.log(erorr.data);
      })
    return;
  }
  
  // 

  getItemUsingID(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let res = this.sampleProducts.filter(x => x.id === parseInt(id, 10));
        resolve(res.length === 0 ? null : res[0]);
      }, 500);
    });
  }

  _sortData(data, sortval) {
    if (!sortval) return data;

    let items = JSON.parse(JSON.stringify(data));
    if(items!== null){
      if (sortval === "lh") {
        items.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
      } else if (sortval === "hl") {
        items.sort((a, b) =>
          a.price < b.price ? 1 : b.price < a.price ? -1 : 0
        );
      }
    }
    else{
      console.log("error");
      
    }
    return items;
  }

  searchItems({
    category,
    term,
    sortValue,
    itemsPerPage,
    popular,
    usePriceFilter,
    minPrice,
    maxPrice,
    page
  }) {
    return new Promise((resolve, reject) => {
      minPrice = parseInt(minPrice, 0);
      maxPrice = parseInt(maxPrice, 0);

      setTimeout(() => {
        let data = this.sampleProducts.filter(item => {
          if (
            usePriceFilter &&
            (item.price < minPrice || item.price > maxPrice)
          ) {
            return false;
          }

          if (category === "popular") {
            return item.popular;
          }

          if (category !== "All categories" && category !== item.category)
            return false;

          if (term && !item.name.toLowerCase().includes(term.toLowerCase()))
            return false;

          return true;
        });

        let totalLength = data.length;

        // Sort data if needed
        data = this._sortData(data, sortValue);

        // Get data from the requested page.
        page = parseInt(page, 0);
        data = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

        resolve({ data, totalLength });
      }, 500);
    });
  }
}

export default new Api();
